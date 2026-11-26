// app.js
let DATA = null;
let session = null;

const RANGES_REPS = ["4-6", "6-8", "8-10", "10-12"];
const RANGES_SEG = ["15-20s", "20-25s", "25-30s", "30-40s"];

const screens = {
  home: document.getElementById("screen-home"),
  workout: document.getElementById("screen-workout"),
  history: document.getElementById("screen-history"),
};

// ===== HELPERS =====
function escape(s) {
  return String(s ?? "").replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]
  );
}
function getLibExercise(libId) {
  return EXERCISE_LIBRARY.find((e) => e.id === libId) || null;
}
function getRanges(ex) {
  return ex.unidade === "seg" ? RANGES_SEG : RANGES_REPS;
}
function fecharModal(id) {
  document.getElementById(id).classList.remove("active");
}

// ===== NAVEGAÇÃO =====
function showScreen(name) {
  Object.values(screens).forEach((s) => s.classList.remove("active"));
  screens[name].classList.add("active");
  document.body.classList.toggle("workout-active", name === "workout");
  document.getElementById("bottom-nav").style.display =
    name === "workout" ? "none" : "flex";
  document.querySelectorAll(".nav-btn").forEach((b) => {
    b.classList.toggle("active", b.dataset.screen === name);
  });
  if (name === "history") { try { renderHistory(); } catch (e) { console.error(e); } }
  window.scrollTo(0, 0);
}

// ===== INIT =====
async function init() {
  DATA = await loadData();
  renderHome();
  renderHistory();

  const hoje = new Date();
  document.getElementById("hoje-text").textContent = hoje.toLocaleDateString(
    "pt-BR", { weekday: "long", day: "numeric", month: "long" }
  );

  // Nav
  document.querySelectorAll(".nav-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.dataset.screen;
      showScreen(target);
      if (target === "history") renderHistory();
      if (target === "home") renderHome();
    });
  });

  // Home
  document.getElementById("btn-novo-treino").addEventListener("click", () => abrirModalTreino(null));

  // Workout
  document.getElementById("btn-voltar").addEventListener("click", voltarDoTreino);
  document.getElementById("btn-editar").addEventListener("click", () => {
    if (session) abrirModalTreino(session.treinoId);
  });
  document.getElementById("btn-finalizar").addEventListener("click", finalizarTreino);
  setupCarouselEvents();

  // Edit modal
  document.getElementById("modal-edit-close").addEventListener("click", () => fecharModal("modal-edit"));
  document.getElementById("btn-add-ex-lib").addEventListener("click", abrirPicker);
  document.getElementById("btn-save-edit").addEventListener("click", salvarTreino);

  // Picker
  document.getElementById("modal-picker-close").addEventListener("click", () => { pickerState = null; fecharModal("modal-picker"); });
  document.getElementById("btn-picker-confirm").addEventListener("click", confirmarPicker);

  // History info
  document.getElementById("modal-history-close").addEventListener("click", () => fecharModal("modal-history"));
  document.getElementById("modal-info-close").addEventListener("click", () => fecharModal("modal-info"));

  // Timer
  document.getElementById("timer-cancel").addEventListener("click", cancelTimer);
  document.getElementById("timer-skip-options").addEventListener("click", skipToFinish);
  document.getElementById("timer-skip-rest").addEventListener("click", skipToFinish);
  document.querySelectorAll(".timer-option").forEach((btn) => {
    btn.addEventListener("click", () => chooseRestTime(+btn.dataset.sec));
  });
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden && activeTimer) tickTimer();
  });

  // Overlay click-outside
  document.querySelectorAll(".modal-overlay").forEach((ov) => {
    ov.addEventListener("click", (e) => {
      if (e.target === ov) ov.classList.remove("active");
    });
  });
}

// ===== HOME =====
function renderHome() {
  const main = document.getElementById("home-list");
  const novoBtn = document.getElementById("btn-novo-treino");
  main.querySelectorAll(".treino-card").forEach((c) => c.remove());
  main.querySelectorAll(".empty").forEach((c) => c.remove());

  const ids = Object.keys(DATA.treinos);
  if (ids.length === 0) {
    const p = document.createElement("p");
    p.className = "empty";
    p.textContent = "Nenhum treino ainda. Crie o primeiro!";
    main.insertBefore(p, novoBtn);
    return;
  }

  ids.forEach((id) => {
    const t = DATA.treinos[id];
    const card = document.createElement("div");
    card.className = "treino-card";
    card.innerHTML = `
      <div class="treino-card-head">
        <h3>${escape(t.nome)}</h3>
        <button class="treino-card-edit" data-treino-id="${id}" aria-label="Editar">✏️</button>
      </div>
      <p>${t.exercicios.length} exercício${t.exercicios.length === 1 ? "" : "s"}</p>
      <span class="treino-card-start">Iniciar →</span>
    `;
    card.querySelector(".treino-card-start").addEventListener("click", (e) => {
      e.stopPropagation();
      iniciarTreino(id);
    });
    card.querySelector(".treino-card-edit").addEventListener("click", (e) => {
      e.stopPropagation();
      abrirModalTreino(id);
    });
    main.insertBefore(card, novoBtn);
  });
}

// ===== INICIAR TREINO =====
function iniciarTreino(treinoId) {
  const t = DATA.treinos[treinoId];
  if (!t) return;
  session = {
    treinoId,
    treinoNome: t.nome,
    exercicios: t.exercicios.map((ex) => {
      const lib = getLibExercise(ex.libId);
      const ranges = getRanges(ex);
      return {
        libId: ex.libId,
        nome: lib?.nome || ex.nome || "Exercício",
        grupo: lib?.grupo || null,
        subgrupo: lib?.subgrupo || null,
        explicacao: lib?.explicacao || "",
        imagem: lib?.imagem || "",
        unidade: ex.unidade || "reps",
        pesoSugerido: ex.pesoSugerido,
        series: Array.from({ length: Math.max(1, ex.series || 3) }, () => ({
          range: ranges[2],
          peso: ex.pesoSugerido ?? 0,
          feito: false,
        })),
      };
    }),
  };
  showScreen("workout");
  renderWorkout();
}

// ===== WORKOUT SCREEN =====
function renderWorkout() {
  document.getElementById("workout-title").textContent = session.treinoNome;
  updateProgress();

  const carousel = document.getElementById("carousel");
  carousel.innerHTML = "";
  session.exercicios.forEach((ex, i) => {
    carousel.appendChild(createExerciseCard(ex, i));
  });

  setupCarouselObserver();
  setupSeriesCarouselObserver();
  renderDots();
}

function createExerciseCard(ex, i) {
  const card = document.createElement("div");
  card.className = "exercise-card";
  card.dataset.ex = i;

  const ranges = getRanges(ex);
  const isIso = ex.unidade === "seg";
  const grupoLabel = ex.grupo ? (GRUPOS[ex.grupo] || "") : "";
  const equipLabel = ex.subgrupo || "";

  const imgInner = ex.imagem
    ? `<img src="${escape(ex.imagem)}" alt="${escape(ex.nome)}" class="ex-image" loading="lazy">`
    : `<div class="ex-image-placeholder">💪</div>`;

  card.innerHTML = `
    <div class="card-top">
      <span class="ex-counter">${i + 1} / ${session.exercicios.length}</span>
      <div class="series-control">
        <button class="btn-series" data-action="dec" aria-label="Menos séries">−</button>
        <span class="series-label">${ex.series.length}x</span>
        <button class="btn-series" data-action="inc" aria-label="Mais séries">+</button>
      </div>
    </div>

    <div class="ex-image-wrap">
      ${imgInner}
      <button class="info-btn" data-ex="${i}" aria-label="Info">ⓘ</button>
    </div>

    <h2 class="ex-name">${escape(ex.nome)}</h2>
    <div class="ex-tags">
      ${grupoLabel ? `<span class="ex-tag">${escape(grupoLabel)}</span>` : ""}
      ${equipLabel ? `<span class="ex-tag equip">${escape(equipLabel)}</span>` : ""}
    </div>

    <div class="series-carousel" data-ex="${i}">
      ${ex.series.map((s, si) => `
        <div class="serie-slide" data-serie="${si}">
          <div class="serie-header">
            <span class="serie-title">Série ${si + 1}</span>
            <button class="check-btn ${s.feito ? "checked" : ""}"
                    data-ex="${i}" data-serie="${si}" aria-label="Concluir série">✓</button>
          </div>
          <div class="rep-pills">
            ${ranges.map((r) => `
              <button class="rep-pill ${s.range === r ? "active" : ""}"
                      data-ex="${i}" data-serie="${si}" data-range="${r}">${r}</button>
            `).join("")}
          </div>
          ${isIso ? "" : `
            <div class="weight-stepper">
              <button class="weight-btn" data-ex="${i}" data-serie="${si}" data-action="dec">−</button>
              <span class="weight-value">${s.peso != null ? s.peso : 0} kg</span>
              <button class="weight-btn" data-ex="${i}" data-serie="${si}" data-action="inc">+</button>
            </div>
          `}
        </div>
      `).join("")}
    </div>

    <div class="series-dots" data-ex="${i}">
      ${ex.series.map((_, si) => `<span class="series-dot ${si === 0 ? "active" : ""}"></span>`).join("")}
    </div>
  `;

  return card;
}

function setupCarouselEvents() {
  const carousel = document.getElementById("carousel");
  carousel.addEventListener("click", (e) => {
    const infoBtn = e.target.closest(".info-btn");
    if (infoBtn) { abrirInfoExercicio(+infoBtn.dataset.ex); return; }

    const check = e.target.closest(".check-btn");
    if (check) {
      const exIdx = +check.dataset.ex;
      const serieIdx = +check.dataset.serie;
      const s = session.exercicios[exIdx].series[serieIdx];
      if (s.feito) {
        s.feito = false;
        check.classList.remove("checked");
        updateProgress();
      } else if (!activeTimer) {
        startSeriesFlow(exIdx, serieIdx);
      }
      return;
    }

    const pill = e.target.closest(".rep-pill");
    if (pill) {
      const exIdx = +pill.dataset.ex;
      const serieIdx = +pill.dataset.serie;
      session.exercicios[exIdx].series[serieIdx].range = pill.dataset.range;
      pill.parentElement.querySelectorAll(".rep-pill").forEach((p) => p.classList.toggle("active", p === pill));
      return;
    }

    const wBtn = e.target.closest(".weight-btn");
    if (wBtn) {
      const exIdx = +wBtn.dataset.ex;
      const serieIdx = +wBtn.dataset.serie;
      const s = session.exercicios[exIdx].series[serieIdx];
      const cur = s.peso ?? 0;
      const delta = wBtn.dataset.action === "inc" ? 1 : -1;
      s.peso = Math.max(0, cur + delta);
      wBtn.parentElement.querySelector(".weight-value").textContent = s.peso + " kg";
      return;
    }

    const seriesBtn = e.target.closest(".btn-series");
    if (seriesBtn) {
      const card = seriesBtn.closest(".exercise-card");
      const exIdx = +card.dataset.ex;
      const delta = seriesBtn.dataset.action === "inc" ? 1 : -1;
      changeSeriesCount(exIdx, delta, card);
    }
  });
}

function changeSeriesCount(exIdx, delta, cardEl) {
  const ex = session.exercicios[exIdx];
  const newLen = Math.max(1, ex.series.length + delta);
  if (newLen === ex.series.length) return;

  const ranges = getRanges(ex);
  const defaultRange = ranges[2];

  if (newLen > ex.series.length) {
    while (ex.series.length < newLen) {
      ex.series.push({ range: defaultRange, peso: ex.pesoSugerido ?? 0, feito: false });
    }
  } else {
    ex.series.length = newLen;
  }

  cardEl.replaceWith(createExerciseCard(ex, exIdx));
  setupCarouselObserver();
  setupSeriesCarouselObserver();
  updateProgress();
}

function updateProgress() {
  const total = session.exercicios.length;
  const done = session.exercicios.filter((ex) => ex.series.some((s) => s.feito)).length;
  document.getElementById("workout-progress").textContent = `${done} de ${total} feitos`;
}

function renderDots() {
  const dots = document.getElementById("dots");
  dots.innerHTML = session.exercicios.map((_, i) => `<span class="dot ${i === 0 ? "active" : ""}"></span>`).join("");
}

let carouselObserver = null;
function setupCarouselObserver() {
  const carousel = document.getElementById("carousel");
  if (carouselObserver) carouselObserver.disconnect();
  carouselObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && entry.intersectionRatio > 0.6) {
        const idx = +entry.target.dataset.ex;
        document.querySelectorAll(".dot").forEach((d, i) => d.classList.toggle("active", i === idx));
      }
    });
  }, { root: carousel, threshold: 0.6 });
  carousel.querySelectorAll(".exercise-card").forEach((c) => carouselObserver.observe(c));
}

function setupSeriesCarouselObserver() {
  document.querySelectorAll(".series-carousel").forEach((carousel) => {
    const exIdx = +carousel.dataset.ex;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.6) {
          const si = +entry.target.dataset.serie;
          document.querySelectorAll(`.series-dots[data-ex="${exIdx}"] .series-dot`)
            .forEach((d, i) => d.classList.toggle("active", i === si));
        }
      });
    }, { root: carousel, threshold: 0.6 });
    carousel.querySelectorAll(".serie-slide").forEach((s) => observer.observe(s));
  });
}

// ===== FINALIZAR =====
async function finalizarTreino() {
  abortTimer();
  const algum = session.exercicios.some((ex) => ex.series.some((s) => s.feito));
  if (!algum) { alert("Marque pelo menos uma série antes de finalizar."); return; }
  if (!confirm("Finalizar este treino e salvar no histórico?")) return;

  const registro = {
    data: new Date().toISOString(),
    treinoId: session.treinoId,
    treinoNome: session.treinoNome,
    exercicios: session.exercicios,
    concluido: true,
  };
  DATA = await appendHistorico(registro);
  session = null;
  renderHome();
  renderHistory();
  showScreen("home");
}

function voltarDoTreino() {
  const algo = session.exercicios.some((ex) => ex.series.some((s) => s.feito));
  if (algo && !confirm("Sair sem finalizar? As marcações serão perdidas.")) return;
  abortTimer();
  session = null;
  showScreen("home");
}

// ===== HISTÓRICO =====
function renderHistory() {
  if (!DATA) { setTimeout(renderHistory, 100); return; }
  const list = document.getElementById("history-list");
  const sub = document.getElementById("history-sub");
  if (!list || !sub) { setTimeout(renderHistory, 100); return; }

  list.innerHTML = "";
  const hist = Array.isArray(DATA.historico) ? DATA.historico : [];
  const total = hist.length;
  sub.textContent = total === 0 ? "Nenhum treino ainda" : `${total} treino${total > 1 ? "s" : ""} registrado${total > 1 ? "s" : ""}`;

  if (total === 0) {
    list.innerHTML = '<p class="empty">Seus treinos finalizados aparecerão aqui.</p>';
    return;
  }

  hist.forEach((reg, idx) => {
    const d = new Date(reg.data);
    const dataFmt = d.toLocaleDateString("pt-BR", { day: "2-digit", month: "short" }) + " · " +
      d.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
    const exs = Array.isArray(reg.exercicios) ? reg.exercicios : [];
    const feitos = exs.filter((ex) => Array.isArray(ex.series) && ex.series.some((s) => s.feito)).length;

    const card = document.createElement("button");
    card.className = "hist-card";
    card.innerHTML = `
      <div class="hist-top">
        <span class="hist-treino">${escape(reg.treinoNome || "Treino")}</span>
        <span class="hist-date">${dataFmt}</span>
      </div>
      <p class="hist-summary">${feitos} de ${exs.length} exercícios concluídos</p>
    `;
    card.onclick = () => abrirDetalheHistorico(idx);
    list.appendChild(card);
  });
}

function abrirDetalheHistorico(idx) {
  const reg = (DATA.historico || [])[idx];
  if (!reg) return;
  const d = new Date(reg.data);
  document.getElementById("modal-history-title").textContent = reg.treinoNome || "Treino";
  const exs = Array.isArray(reg.exercicios) ? reg.exercicios : [];
  document.getElementById("modal-history-body").innerHTML = `
    <p style="color:var(--text-muted);font-size:.85rem;margin:0 0 12px;">
      ${d.toLocaleDateString("pt-BR", { weekday: "long", day: "numeric", month: "long" })} às
      ${d.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })}
    </p>
    ${exs.map((ex) => {
      const series = Array.isArray(ex.series) ? ex.series : [];
      const feitas = series.filter((s) => s.feito);
      if (feitas.length === 0) return "";
      const isIso = ex.unidade === "seg";
      return `
        <div class="hist-detail-ex">
          <strong>${escape(ex.nome || "Exercício")}</strong>
          ${feitas.map((s, i) => {
            const range = s.range || (s.reps != null ? `${s.reps}` : "-");
            const peso = !isIso && s.peso != null ? ` · ${s.peso}kg` : "";
            return `<div class="serie-line">Série ${i + 1}: ${range}${peso}</div>`;
          }).join("")}
        </div>
      `;
    }).join("")}
  `;
  document.getElementById("modal-history").classList.add("active");
}

// ===== INFO EXERCÍCIO =====
function mostrarInfo(ex) {
  document.getElementById("modal-info-title").textContent = ex.nome;
  const grupoLabel = ex.grupo ? (GRUPOS[ex.grupo] || "") : "";
  const equip = ex.subgrupo || "";
  document.getElementById("modal-info-body").innerHTML = `
    ${ex.imagem ? `<img src="${escape(ex.imagem)}" alt="${escape(ex.nome)}" style="width:100%;border-radius:12px;margin-bottom:14px;display:block;">` : ""}
    <div class="info-tags">
      ${grupoLabel ? `<span class="tag">${escape(grupoLabel)}</span>` : ""}
      ${equip ? `<span class="tag equip">${escape(equip)}</span>` : ""}
    </div>
    ${ex.explicacao ? `<p class="info-desc">${escape(ex.explicacao)}</p>` : '<p class="empty-mini">Sem descrição na biblioteca.</p>'}
  `;
  document.getElementById("modal-info").classList.add("active");
}
function abrirInfoExercicio(exIdx) {
  const ex = session.exercicios[exIdx];
  if (ex) mostrarInfo(ex);
}
function abrirInfoLib(libId) {
  const lib = getLibExercise(libId);
  if (lib) mostrarInfo(lib);
}

// ===== MODAL EDITAR/CRIAR TREINO =====
let editTreinoDraft = null;

function abrirModalTreino(treinoId) {
  const isNovo = !treinoId;
  const t = isNovo ? null : DATA.treinos[treinoId];
  editTreinoDraft = {
    id: treinoId || null,
    nome: t ? t.nome : "",
    exercicios: t ? JSON.parse(JSON.stringify(t.exercicios)) : [],
  };
  document.getElementById("modal-edit-title").textContent = isNovo ? "Novo treino" : "Editar treino";
  renderTreinoBody();
  document.getElementById("modal-edit").classList.add("active");
}

function renderTreinoBody() {
  const body = document.getElementById("modal-edit-body");

  const header = `
    <div class="edit-name-wrap">
      <label>Nome do treino</label>
      <input type="text" id="edit-treino-nome" value="${escape(editTreinoDraft.nome)}" placeholder="Ex: Treino de Peito">
    </div>
  `;

  if (editTreinoDraft.exercicios.length === 0) {
    body.innerHTML = header + `<p class="empty-mini">Nenhum exercício ainda.<br>Toque em "+ Adicionar exercício" pra escolher da biblioteca.</p>`;
  } else {
    body.innerHTML = header + `
      <div class="edit-ex-list" id="edit-ex-list">
        ${editTreinoDraft.exercicios.map((ex, i) => renderEditExRow(ex, i)).join("")}
      </div>
    `;

    enableDragReorder(document.getElementById("edit-ex-list"), () => {
      const rows = [...document.querySelectorAll("#edit-ex-list [data-idx]")];
      editTreinoDraft.exercicios = rows.map((r) => editTreinoDraft.exercicios[+r.dataset.idx]);
      renderTreinoBody();
    });

    // inputs
    document.querySelectorAll("#edit-ex-list .edit-ex-row").forEach((row) => {
      const idx = +row.dataset.idx;
      row.querySelector(".ex-series").oninput = (e) => {
        editTreinoDraft.exercicios[idx].series = Math.max(1, +e.target.value || 1);
      };
      row.querySelector(".ex-peso").oninput = (e) => {
        editTreinoDraft.exercicios[idx].pesoSugerido = e.target.value === "" ? null : Number(e.target.value);
      };
      row.querySelector(".btn-remove").onclick = () => {
        editTreinoDraft.exercicios.splice(idx, 1);
        renderTreinoBody();
      };
    });
  }

  document.getElementById("edit-treino-nome").oninput = (e) => (editTreinoDraft.nome = e.target.value);
}

function renderEditExRow(ex, i) {
  const lib = getLibExercise(ex.libId);
  const nome = lib?.nome || ex.nome || "(exercício removido)";
  const grupoLabel = lib ? (GRUPOS[lib.grupo] || "") : "";
  const equip = lib?.subgrupo || "";
  return `
    <div class="edit-ex-row" data-idx="${i}">
      <button class="drag-handle" aria-label="Arrastar">⠿</button>
      <div class="edit-ex-main">
        <strong>${escape(nome)}</strong>
        <span class="edit-ex-meta">${escape(grupoLabel)}${equip ? " · " + escape(equip) : ""}</span>
        <div class="edit-ex-fields">
          <label>Séries <input type="number" min="1" class="ex-series" value="${ex.series}"></label>
          <label>Peso (kg) <input type="number" step="0.5" min="0" class="ex-peso" value="${ex.pesoSugerido ?? ""}" placeholder="—"></label>
        </div>
      </div>
      <button class="btn-remove" aria-label="Remover">×</button>
    </div>
  `;
}

// Drag reorder com Pointer Events — o item segue o dedo, os outros deslizam
function enableDragReorder(listEl, onEnd) {
  let dragEl = null;
  let pointerId = null;
  let startY = 0;
  let dy = 0;
  let initialOrder = [];
  let initialTops = [];
  let dragHeight = 0;
  let gap = 0;
  let dragOriginalIdx = -1;
  let targetIdx = -1;

  const getRows = () => [...listEl.querySelectorAll("[data-idx]")];

  const onDown = (e) => {
    if (dragEl) return;
    const handle = e.target.closest(".drag-handle");
    if (!handle || !listEl.contains(handle)) return;
    const row = handle.closest("[data-idx]");
    if (!row) return;

    dragEl = row;
    pointerId = e.pointerId;
    startY = e.clientY;
    dy = 0;

    initialOrder = getRows();
    const rects = initialOrder.map((r) => r.getBoundingClientRect());
    initialTops = rects.map((r) => r.top);
    dragOriginalIdx = initialOrder.indexOf(dragEl);
    dragHeight = rects[dragOriginalIdx].height;
    gap =
      rects.length > 1
        ? Math.max(0, rects[1].top - rects[0].top - rects[0].height)
        : 0;
    targetIdx = dragOriginalIdx;

    // O elemento arrastado: sem transição (precisa seguir o dedo 1:1)
    dragEl.style.transition = "none";
    dragEl.style.zIndex = "10";
    dragEl.style.position = "relative";
    dragEl.style.willChange = "transform";
    dragEl.classList.add("dragging");

    // Os outros: transição pra deslizar quando mudam de posição
    initialOrder.forEach((r) => {
      if (r === dragEl) return;
      r.style.transition = "transform 220ms cubic-bezier(.2,.7,.2,1)";
      r.style.willChange = "transform";
    });

    try {
      listEl.setPointerCapture(e.pointerId);
    } catch {}
    e.preventDefault();
  };

  const onMove = (e) => {
    if (!dragEl || e.pointerId !== pointerId) return;
    e.preventDefault();

    dy = e.clientY - startY;
    dragEl.style.transform = `translateY(${dy}px) scale(1.02)`;

    // Onde o centro do item arrastado está agora (visualmente)?
    const dragCenter = initialTops[dragOriginalIdx] + dragHeight / 2 + dy;

    // Em que posição ele seria inserido (entre os "outros")?
    let newTarget = 0;
    for (let i = 0; i < initialOrder.length; i++) {
      if (initialOrder[i] === dragEl) continue;
      const slotCenter = initialTops[i] + dragHeight / 2;
      if (dragCenter < slotCenter) break;
      newTarget++;
    }

    if (newTarget === targetIdx) return;
    targetIdx = newTarget;

    // Empurra os outros pra abrir/fechar o "buraco"
    const shift = dragHeight + gap;
    initialOrder.forEach((row, idx) => {
      if (row === dragEl) return;
      const otherIdx = idx < dragOriginalIdx ? idx : idx - 1;
      const finalIdx = otherIdx >= targetIdx ? otherIdx + 1 : otherIdx;
      const delta = (finalIdx - idx) * shift;
      row.style.transform = delta === 0 ? "" : `translateY(${delta}px)`;
    });
  };

  const finishDrag = () => {
    if (!dragEl) return;

    // Reconstrói a ordem final
    const others = initialOrder.filter((r) => r !== dragEl);
    const finalOrder = [
      ...others.slice(0, targetIdx),
      dragEl,
      ...others.slice(targetIdx),
    ];

    // Limpa estilos inline
    initialOrder.forEach((r) => {
      r.style.transition = "";
      r.style.transform = "";
      r.style.willChange = "";
    });
    dragEl.style.transform = "";
    dragEl.style.zIndex = "";
    dragEl.style.position = "";
    dragEl.style.willChange = "";
    dragEl.classList.remove("dragging");

    // Reordena o DOM (o onEnd re-renderiza logo em seguida)
    finalOrder.forEach((r) => listEl.appendChild(r));

    dragEl = null;
    pointerId = null;
    targetIdx = -1;
    dragOriginalIdx = -1;

    onEnd && onEnd();
  };

  listEl.addEventListener("pointerdown", onDown);
  listEl.addEventListener("pointermove", onMove);
  listEl.addEventListener("pointerup", finishDrag);
  listEl.addEventListener("pointercancel", finishDrag);
}

// ===== PICKER (biblioteca) =====
let pickerState = null;

function abrirPicker() {
  if (!editTreinoDraft) return;
  const base = editTreinoDraft.exercicios.map((e) => e.libId);
  pickerState = { grupoAtivo: "todos", busca: "", selecionados: [...base] };

  const s = document.getElementById("picker-search");
  s.value = "";
  s.oninput = () => { pickerState.busca = s.value; renderPickerList(); };

  renderPickerTabs();
  renderPickerList();
  document.getElementById("modal-picker").classList.add("active");
}

function renderPickerTabs() {
  const tabs = document.getElementById("picker-tabs");
  const groups = [["todos", "Todos"], ...Object.entries(GRUPOS)];
  tabs.innerHTML = groups.map(([id, label]) => `
    <button class="picker-tab ${pickerState.grupoAtivo === id ? "active" : ""}" data-grupo="${id}">${escape(label)}</button>
  `).join("");
  tabs.querySelectorAll(".picker-tab").forEach((b) => {
    b.onclick = () => {
      pickerState.grupoAtivo = b.dataset.grupo;
      renderPickerTabs();
      renderPickerList();
    };
  });
}

function renderPickerList() {
  const list = document.getElementById("picker-list");
  const busca = pickerState.busca.trim().toLowerCase();
  const items = EXERCISE_LIBRARY.filter((e) => {
    if (pickerState.grupoAtivo !== "todos" && e.grupo !== pickerState.grupoAtivo) return false;
    if (busca && !e.nome.toLowerCase().includes(busca)) return false;
    return true;
  });

  if (items.length === 0) {
    list.innerHTML = '<p class="empty-mini">Nada encontrado.</p>';
    updatePickerCount();
    return;
  }

  list.innerHTML = items.map((e) => {
    const sel = pickerState.selecionados.includes(e.id);
    return `
      <div class="pick-row ${sel ? "selected" : ""}" data-lib="${e.id}">
        <button class="pick-main" data-lib="${e.id}">
          <span class="pick-check">${sel ? "✓" : ""}</span>
          <span class="pick-info">
            <span class="pick-nome">${escape(e.nome)}</span>
            <span class="pick-meta">${escape(GRUPOS[e.grupo] || "")} · ${escape(e.subgrupo || "")}</span>
          </span>
        </button>
        <button class="pick-info-btn" data-info="${e.id}" aria-label="Info">ⓘ</button>
      </div>
    `;
  }).join("");

  list.querySelectorAll(".pick-main").forEach((btn) => {
    btn.onclick = () => {
      const id = btn.dataset.lib;
      const row = btn.closest(".pick-row");
      const idx = pickerState.selecionados.indexOf(id);
      if (idx >= 0) {
        pickerState.selecionados.splice(idx, 1);
        row.classList.remove("selected");
        row.querySelector(".pick-check").textContent = "";
      } else {
        pickerState.selecionados.push(id);
        row.classList.add("selected");
        row.querySelector(".pick-check").textContent = "✓";
      }
      updatePickerCount();
    };
  });
  list.querySelectorAll(".pick-info-btn").forEach((btn) => {
    btn.onclick = (e) => { e.stopPropagation(); abrirInfoLib(btn.dataset.info); };
  });

  updatePickerCount();
}

function updatePickerCount() {
  const el = document.getElementById("picker-count");
  if (el && pickerState) el.textContent = `${pickerState.selecionados.length} selecionado(s)`;
}

function confirmarPicker() {
  if (!pickerState || !editTreinoDraft) return;
  const sel = pickerState.selecionados;
  const existing = editTreinoDraft.exercicios;
  const newList = [];
  const added = new Set();

  // mantém os já existentes que ainda estão selecionados, na ordem atual
  existing.forEach((ex) => {
    if (sel.includes(ex.libId) && !added.has(ex.libId)) {
      newList.push(ex);
      added.add(ex.libId);
    }
  });

  // adiciona os novos na ordem em que foram marcados
  sel.forEach((libId) => {
    if (!added.has(libId)) {
      const lib = getLibExercise(libId);
      newList.push({
        libId,
        nome: lib?.nome || "",
        series: 3,
        pesoSugerido: null,
        unidade: "reps",
      });
      added.add(libId);
    }
  });

  editTreinoDraft.exercicios = newList;
  pickerState = null;
  fecharModal("modal-picker");
  renderTreinoBody();
}

// ===== SALVAR TREINO =====
async function salvarTreino() {
  const nome = (editTreinoDraft.nome || "").trim();
  if (!nome) { alert("Dê um nome ao treino."); return; }
  if (editTreinoDraft.exercicios.length === 0) { alert("Adicione pelo menos um exercício."); return; }

  const exercicios = editTreinoDraft.exercicios.map((ex) => {
    const lib = getLibExercise(ex.libId);
    return {
      libId: ex.libId,
      nome: lib?.nome || ex.nome || "",
      series: Math.max(1, +ex.series || 3),
      pesoSugerido: ex.pesoSugerido ?? null,
      unidade: ex.unidade || "reps",
    };
  });

  let idFinal = editTreinoDraft.id;
  const isEditingCurrent = session && session.treinoId === idFinal;

  if (idFinal) {
    DATA.treinos[idFinal] = { nome, exercicios };
  } else {
    idFinal = genId("treino");
    DATA.treinos[idFinal] = { nome, exercicios };
  }

  await saveData(DATA);
  fecharModal("modal-edit");
  editTreinoDraft = null;

  if (isEditingCurrent) iniciarTreino(idFinal);
  renderHome();
}

// ===== TIMER (série + descanso) =====
let activeTimer = null;

function startSeriesFlow(exIdx, serieIdx) {
  if (activeTimer || !session) return;
  activeTimer = {
    exIdx, serieIdx, stage: "prep",
    endAt: Date.now() + 10000,
    interval: null,
  };
  document.getElementById("timer-overlay").classList.add("active");
  renderTimerStage();
  activeTimer.interval = setInterval(tickTimer, 250);
}

function tickTimer() {
  if (!activeTimer) return;
  const remaining = Math.max(0, activeTimer.endAt - Date.now());
  if (activeTimer.stage === "prep") {
    const el = document.getElementById("timer-prep-num");
    if (el) el.textContent = Math.ceil(remaining / 1000);
    if (remaining <= 0) { activeTimer.stage = "options"; renderTimerStage(); }
  } else if (activeTimer.stage === "rest") {
    const el = document.getElementById("timer-rest-num");
    if (el) el.textContent = formatTimer(Math.ceil(remaining / 1000));
    if (remaining <= 0) finishSeriesFlow(true);
  }
}

function renderTimerStage() {
  if (!activeTimer) return;
  const prep = document.getElementById("timer-stage-prep");
  const options = document.getElementById("timer-stage-options");
  const rest = document.getElementById("timer-stage-rest");
  prep.style.display = options.style.display = rest.style.display = "none";

  if (activeTimer.stage === "prep") {
    prep.style.display = "";
    document.getElementById("timer-prep-num").textContent =
      Math.ceil(Math.max(0, activeTimer.endAt - Date.now()) / 1000);
  } else if (activeTimer.stage === "options") {
    options.style.display = "";
  } else if (activeTimer.stage === "rest") {
    rest.style.display = "";
    document.getElementById("timer-rest-num").textContent =
      formatTimer(Math.ceil(Math.max(0, activeTimer.endAt - Date.now()) / 1000));
  }
}

function chooseRestTime(sec) {
  if (!activeTimer) return;
  activeTimer.stage = "rest";
  activeTimer.endAt = Date.now() + sec * 1000;
  renderTimerStage();
}

function skipToFinish() { if (activeTimer) finishSeriesFlow(true); }
function cancelTimer() { finishSeriesFlow(false); }

function abortTimer() {
  if (!activeTimer) return;
  clearInterval(activeTimer.interval);
  activeTimer = null;
  document.getElementById("timer-overlay").classList.remove("active");
}

function finishSeriesFlow(validate) {
  if (!activeTimer) return;
  clearInterval(activeTimer.interval);
  const { exIdx, serieIdx } = activeTimer;
  activeTimer = null;
  document.getElementById("timer-overlay").classList.remove("active");
  if (!validate || !session) return;

  const s = session.exercicios[exIdx]?.series[serieIdx];
  if (!s) return;
  s.feito = true;
  const check = document.querySelector(`.check-btn[data-ex="${exIdx}"][data-serie="${serieIdx}"]`);
  if (check) check.classList.add("checked");
  updateProgress();

  // Auto-avança pra próxima série
  const ex = session.exercicios[exIdx];
  if (ex && serieIdx + 1 < ex.series.length) {
    setTimeout(() => {
      const slide = document.querySelector(`.series-carousel[data-ex="${exIdx}"] [data-serie="${serieIdx + 1}"]`);
      if (slide) slide.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }, 150);
  }
}

function formatTimer(sec) {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${m}:${String(s).padStart(2, "0")}`;
}

// ===== BOOT =====
document.addEventListener("DOMContentLoaded", init);