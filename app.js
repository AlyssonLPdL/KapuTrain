// app.js
let DATA = null;
let session = null; // treino em andamento

const ROTACAO = ['pernas', 'isoA', 'peito', 'isoB', 'costas', 'isoC'];
const RANGES_REPS = ['4-6', '6-8', '8-10', '10-12'];
const RANGES_SEG  = ['15-20s', '20-25s', '25-30s', '30-40s'];

function getRanges(ex) {
  return ex.unidade === 'seg' ? RANGES_SEG : RANGES_REPS;
}

const screens = {
  home: document.getElementById('screen-home'),
  workout: document.getElementById('screen-workout'),
  history: document.getElementById('screen-history')
};

// ===== NAVEGAÇÃO =====
function showScreen(name) {
  Object.values(screens).forEach(s => s.classList.remove('active'));
  screens[name].classList.add('active');
  document.body.classList.toggle('workout-active', name === 'workout');
  document.getElementById('bottom-nav').style.display = name === 'workout' ? 'none' : 'flex';

  document.querySelectorAll('.nav-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.screen === name);
  });

  window.scrollTo(0, 0);
}

document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.screen;
    showScreen(target);
    if (target === 'history') renderHistory();
    if (target === 'home') renderHome();
  });
});

// ===== INIT =====
async function init() {
  DATA = await loadData();
  renderHome();
  renderHistory();

  document.getElementById('btn-voltar').addEventListener('click', voltarDoTreino);
  document.getElementById('btn-editar').addEventListener('click', abrirModalEditar);
  document.getElementById('btn-finalizar').addEventListener('click', finalizarTreino);

  document.getElementById('modal-edit-close').addEventListener('click', () => fecharModal('modal-edit'));
  document.getElementById('btn-add-ex').addEventListener('click', adicionarExercicioNoModal);
  document.getElementById('btn-save-edit').addEventListener('click', salvarEdicao);
  document.getElementById('modal-history-close').addEventListener('click', () => fecharModal('modal-history'));
  document.getElementById('modal-info-close').addEventListener('click', () => fecharModal('modal-info'));

  // fechar modais ao clicar no overlay
  document.querySelectorAll('.modal-overlay').forEach(ov => {
    ov.addEventListener('click', e => {
      if (e.target === ov) ov.classList.remove('active');
    });
  });

  // data do header
  const hoje = new Date();
  const opts = { weekday: 'long', day: 'numeric', month: 'long' };
  document.getElementById('hoje-text').textContent =
    hoje.toLocaleDateString('pt-BR', opts);
}

// ===== HOME =====
function proximoSugerido() {
  if (!DATA.historico.length) return 'pernas';
  const ultimo = DATA.historico[0].treinoId;
  const idx = ROTACAO.indexOf(ultimo);
  if (idx === -1) return 'pernas';
  return ROTACAO[(idx + 1) % ROTACAO.length];
}

function renderHome() {
  const proxId = proximoSugerido();
  const prox = DATA.treinos[proxId];

  const hero = document.getElementById('hero-card');
  document.getElementById('hero-nome').textContent = prox.nome;
  document.getElementById('hero-info').textContent =
    `${prox.exercicios.length} exercícios`;
  hero.onclick = () => iniciarTreino(proxId);

  const musc = ['pernas', 'peito', 'costas'];
  const iso = ['isoA', 'isoB', 'isoC'];

  renderGrid('grid-musc', musc);
  renderGrid('grid-iso', iso);
}

function renderGrid(elId, ids) {
  const grid = document.getElementById(elId);
  grid.innerHTML = '';
  ids.forEach(id => {
    const t = DATA.treinos[id];
    if (!t) return;
    const isIso = id.startsWith('iso');
    const card = document.createElement('button');
    card.className = 'treino-card';
    card.innerHTML = `
      <span class="treino-tag ${isIso ? 'iso' : 'musc'}">${isIso ? 'ISO' : 'MUSC'}</span>
      <h3>${t.nome}</h3>
      <p>${t.exercicios.length} exercícios</p>
    `;
    card.onclick = () => iniciarTreino(id);
    grid.appendChild(card);
  });
}

// ===== INICIAR TREINO =====
function iniciarTreino(treinoId) {
  const t = DATA.treinos[treinoId];
  session = {
    treinoId,
    treinoNome: t.nome,
    exercicios: t.exercicios.map(ex => {
      const ranges = getRanges(ex);
      const defaultRange = ranges[2];
      return {
        nome: ex.nome,
        unidade: ex.unidade || 'reps',
        nota: ex.nota,
        descricao: ex.descricao || '',
        imagem: ex.imagem || '',
        pesoSugerido: ex.pesoSugerido,
        series: Array.from({ length: ex.series }, () => ({
          range: defaultRange,
          peso: ex.pesoSugerido ?? 0,
          feito: false
        }))
      };
    })
  };
  showScreen('workout');
  renderWorkout();
}

// ===== WORKOUT SCREEN =====
function renderWorkout() {
  document.getElementById('workout-title').textContent = session.treinoNome;
  updateProgress();

  const carousel = document.getElementById('carousel');
  carousel.innerHTML = '';
  session.exercicios.forEach((ex, i) => {
    carousel.appendChild(createExerciseCard(ex, i));
  });

  setupCarouselObserver();
  setupSeriesCarouselObserver();
  renderDots();
}

function createExerciseCard(ex, i) {
  const card = document.createElement('div');
  card.className = 'exercise-card';
  card.dataset.ex = i;

  const ranges = getRanges(ex);
  const isIso = ex.unidade === 'seg';

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
      <button class="info-btn" data-ex="${i}" aria-label="Informações do exercício">ⓘ</button>
    </div>

    <h2 class="ex-name">${escape(ex.nome)}</h2>

    <div class="series-carousel" data-ex="${i}">
      ${ex.series.map((s, si) => `
        <div class="serie-slide" data-serie="${si}">
          <div class="serie-header">
            <span class="serie-title">Série ${si + 1}</span>
            <button class="check-btn ${s.feito ? 'checked' : ''}"
                    data-ex="${i}" data-serie="${si}" aria-label="Concluir série">✓</button>
          </div>
          <div class="rep-pills">
            ${ranges.map(r => `
              <button class="rep-pill ${s.range === r ? 'active' : ''}"
                      data-ex="${i}" data-serie="${si}" data-range="${r}">${r}</button>
            `).join('')}
          </div>
          ${isIso ? '' : `
            <div class="weight-stepper">
              <button class="weight-btn" data-ex="${i}" data-serie="${si}" data-action="dec" aria-label="Diminuir peso">−</button>
              <span class="weight-value">${s.peso != null ? s.peso : 0} kg</span>
              <button class="weight-btn" data-ex="${i}" data-serie="${si}" data-action="inc" aria-label="Aumentar peso">+</button>
            </div>
          `}
        </div>
      `).join('')}
    </div>

    <div class="series-dots" data-ex="${i}">
      ${ex.series.map((_, si) => `<span class="series-dot ${si === 0 ? 'active' : ''}"></span>`).join('')}
    </div>
  `;

  return card;
}

function escape(s) {
  return String(s).replace(/[&<>"']/g, c => ({
    '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
  }[c]));
}

function setupCarouselEvents() {
  const carousel = document.getElementById('carousel');

  carousel.addEventListener('click', e => {
    // 1) Info do exercício
    const infoBtn = e.target.closest('.info-btn');
    if (infoBtn) {
      abrirInfoExercicio(+infoBtn.dataset.ex);
      return;
    }

    // 2) Check
    const check = e.target.closest('.check-btn');
    if (check) {
      const exIdx = +check.dataset.ex;
      const serieIdx = +check.dataset.serie;
      const s = session.exercicios[exIdx].series[serieIdx];
      s.feito = !s.feito;
      check.classList.toggle('checked', s.feito);
      updateProgress();
      return;
    }

    // 3) Rep range pill
    const pill = e.target.closest('.rep-pill');
    if (pill) {
      const exIdx = +pill.dataset.ex;
      const serieIdx = +pill.dataset.serie;
      session.exercicios[exIdx].series[serieIdx].range = pill.dataset.range;
      pill.parentElement.querySelectorAll('.rep-pill').forEach(p => {
        p.classList.toggle('active', p === pill);
      });
      return;
    }

    // 4) Weight stepper
    const wBtn = e.target.closest('.weight-btn');
    if (wBtn) {
      const exIdx = +wBtn.dataset.ex;
      const serieIdx = +wBtn.dataset.serie;
      const s = session.exercicios[exIdx].series[serieIdx];
      const cur = s.peso ?? 0;
      const delta = wBtn.dataset.action === 'inc' ? 1 : -1;
      s.peso = Math.max(0, cur + delta);
      wBtn.parentElement.querySelector('.weight-value').textContent = s.peso + ' kg';
      return;
    }

    // 5) +/- séries
    const seriesBtn = e.target.closest('.btn-series');
    if (seriesBtn) {
      const card = seriesBtn.closest('.exercise-card');
      const exIdx = +card.dataset.ex;
      const delta = seriesBtn.dataset.action === 'inc' ? 1 : -1;
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
      ex.series.push({
        range: defaultRange,
        peso: ex.pesoSugerido ?? 0,
        feito: false
      });
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
  const done = session.exercicios.filter(ex => ex.series.some(s => s.feito)).length;
  document.getElementById('workout-progress').textContent = `${done} de ${total} feitos`;
}

function renderDots() {
  const dots = document.getElementById('dots');
  dots.innerHTML = session.exercicios.map((_, i) =>
    `<span class="dot ${i === 0 ? 'active' : ''}"></span>`
  ).join('');
}

let carouselObserver = null;
function setupCarouselObserver() {
  const carousel = document.getElementById('carousel');

  if (carouselObserver) carouselObserver.disconnect();
  carouselObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && entry.intersectionRatio > 0.6) {
        const idx = +entry.target.dataset.ex;
        document.querySelectorAll('.dot').forEach((d, i) => {
          d.classList.toggle('active', i === idx);
        });
      }
    });
  }, { root: carousel, threshold: 0.6 });

  carousel.querySelectorAll('.exercise-card').forEach(c => carouselObserver.observe(c));
}

function setupSeriesCarouselObserver() {
  document.querySelectorAll('.series-carousel').forEach(carousel => {
    const exIdx = +carousel.dataset.ex;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.6) {
          const si = +entry.target.dataset.serie;
          const dots = document.querySelectorAll(`.series-dots[data-ex="${exIdx}"] .series-dot`);
          dots.forEach((d, i) => d.classList.toggle('active', i === si));
        }
      });
    }, { root: carousel, threshold: 0.6 });

    carousel.querySelectorAll('.serie-slide').forEach(s => observer.observe(s));
  });
}

// ===== FINALIZAR =====
async function finalizarTreino() {
  const algumPreenchido = session.exercicios.some(ex =>
    ex.series.some(s => s.feito)
  );
  if (!algumPreenchido) {
    alert('Marque ou preencha pelo menos uma série antes de finalizar.');
    return;
  }

  if (!confirm('Finalizar este treino e salvar no histórico?')) return;

  const registro = {
    data: new Date().toISOString(),
    treinoId: session.treinoId,
    treinoNome: session.treinoNome,
    exercicios: session.exercicios,
    concluido: true
  };

  DATA = await appendHistorico(registro);
  session = null;

  renderHome();
  renderHistory();
  showScreen('home');
}

function voltarDoTreino() {
  const algoMarcado = session.exercicios.some(ex =>
    ex.series.some(s => s.feito || s.reps !== null)
  );
  if (algoMarcado && !confirm('Sair sem finalizar? As marcações serão perdidas.')) return;

  session = null;
  showScreen('home');
}

// ===== HISTÓRICO =====
function renderHistory() {
  const list = document.getElementById('history-list');
  const sub = document.getElementById('history-sub');
  list.innerHTML = '';

  const total = DATA.historico.length;
  sub.textContent = total === 0 ? 'Nenhum treino ainda'
    : `${total} treino${total > 1 ? 's' : ''} registrado${total > 1 ? 's' : ''}`;

  if (total === 0) {
    list.innerHTML = '<p class="empty">Seus treinos finalizados aparecerão aqui.</p>';
    return;
  }

  DATA.historico.forEach((reg, idx) => {
    const d = new Date(reg.data);
    const dataFmt = d.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' }) +
      ' · ' + d.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

    const feitos = reg.exercicios.filter(ex => ex.series.some(s => s.feito)).length;

    const card = document.createElement('button');
    card.className = 'hist-card';
    card.innerHTML = `
      <div class="hist-top">
        <span class="hist-treino">${escape(reg.treinoNome)}</span>
        <span class="hist-date">${dataFmt}</span>
      </div>
      <p class="hist-summary">${feitos} de ${reg.exercicios.length} exercícios concluídos</p>
    `;
    card.onclick = () => abrirDetalheHistorico(idx);
    list.appendChild(card);
  });
}

function abrirInfoExercicio(exIdx) {
  const ex = session.exercicios[exIdx];
  if (!ex) return;

  document.getElementById('modal-info-title').textContent = ex.nome;

  const body = document.getElementById('modal-info-body');
  body.innerHTML = `
    ${ex.imagem ? `<img src="${escape(ex.imagem)}" alt="${escape(ex.nome)}"
                        style="width:100%;border-radius:12px;margin-bottom:14px;display:block;">` : ''}
    ${ex.descricao ? `
      <p style="font-size:.92rem;line-height:1.55;margin:0 0 14px;color:var(--text);white-space:pre-wrap;">
        ${escape(ex.descricao)}
      </p>
    ` : ''}
    ${ex.nota ? `
      <div style="background:var(--surface-2);border-radius:10px;padding:12px 14px;font-size:.85rem;color:var(--text-muted);line-height:1.45;">
        <strong style="color:var(--text);display:block;margin-bottom:4px;font-size:.8rem;text-transform:uppercase;letter-spacing:.06em;">Nota</strong>
        ${escape(ex.nota)}
      </div>
    ` : ''}
    ${!ex.imagem && !ex.descricao && !ex.nota
      ? '<p style="color:var(--text-muted);text-align:center;padding:24px 0;">Nenhuma descrição cadastrada ainda.<br>Use o ✏️ no topo pra adicionar.</p>'
      : ''}
  `;

  document.getElementById('modal-info').classList.add('active');
}

function abrirDetalheHistorico(idx) {
  const reg = DATA.historico[idx];
  const d = new Date(reg.data);
  document.getElementById('modal-history-title').textContent = reg.treinoNome;

  const body = document.getElementById('modal-history-body');
  body.innerHTML = `
    <p style="color:var(--text-muted);font-size:.85rem;margin:0 0 12px;">
      ${d.toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' })}
      às ${d.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
    </p>
    ${reg.exercicios.map(ex => {
      const feitas = ex.series.filter(s => s.feito);
      if (feitas.length === 0) return '';
      const isIso = ex.unidade === 'seg';
      return `
        <div class="hist-detail-ex">
          <strong>${escape(ex.nome)}</strong>
          ${feitas.map((s, i) => {
            const range = s.range || (s.reps != null ? `${s.reps}` : '-');
            const peso = (!isIso && s.peso != null) ? ` · ${s.peso}kg` : '';
            return `<div class="serie-line">Série ${i + 1}: ${range}${peso}</div>`;
          }).join('')}
        </div>
      `;
    }).join('')}
  `;

  document.getElementById('modal-history').classList.add('active');
}

// ===== MODAL EDITAR =====
let editDraft = null;

function abrirModalEditar() {
  editDraft = JSON.parse(JSON.stringify(
    DATA.treinos[session.treinoId].exercicios.map(ex => ({
      nome: ex.nome,
      series: ex.series,
      pesoSugerido: ex.pesoSugerido ?? null,
      unidade: ex.unidade || 'reps',
      nota: ex.nota || '',
      descricao: ex.descricao || '',
      imagem: ex.imagem || ''
    }))
  ));

  document.getElementById('modal-edit-title').textContent =
    'Editar: ' + DATA.treinos[session.treinoId].nome;
  renderEditBody();
  document.getElementById('modal-edit').classList.add('active');
}

function renderEditBody() {
  const body = document.getElementById('modal-edit-body');
  body.innerHTML = editDraft.map((ex, i) => `
    <div class="edit-ex" data-idx="${i}">
      <input type="text" class="edit-nome" value="${escape(ex.nome)}" placeholder="Nome do exercício">
      <button class="btn-remove" data-idx="${i}" aria-label="Remover">×</button>
      <div class="row-2">
        <input type="number" class="edit-series" min="1" value="${ex.series}" placeholder="Séries">
        <input type="number" class="edit-peso" step="0.5" min="0"
               value="${ex.pesoSugerido ?? ''}" placeholder="Peso kg">
      </div>
      <input type="text" class="edit-imagem" value="${escape(ex.imagem)}"
             placeholder="URL da imagem (opcional)">
      <textarea class="edit-descricao" placeholder="Descrição do exercício (opcional)">${escape(ex.descricao)}</textarea>
    </div>
  `).join('');

  body.querySelectorAll('.btn-remove').forEach(b => {
    b.onclick = () => {
      editDraft.splice(+b.dataset.idx, 1);
      renderEditBody();
    };
  });

  body.querySelectorAll('.edit-ex').forEach(row => {
    const idx = +row.dataset.idx;
    row.querySelector('.edit-nome').oninput = e => editDraft[idx].nome = e.target.value;
    row.querySelector('.edit-series').oninput = e =>
      editDraft[idx].series = Math.max(1, +e.target.value || 1);
    row.querySelector('.edit-peso').oninput = e =>
      editDraft[idx].pesoSugerido = e.target.value === '' ? null : Number(e.target.value);
    row.querySelector('.edit-imagem').oninput = e =>
      editDraft[idx].imagem = e.target.value.trim();
    row.querySelector('.edit-descricao').oninput = e =>
      editDraft[idx].descricao = e.target.value;
  });
}

function adicionarExercicioNoModal() {
  editDraft.push({ nome: '', series: 3, pesoSugerido: null, unidade: 'reps', nota: '' });
  renderEditBody();
  const inputs = document.querySelectorAll('#modal-edit-body .edit-nome');
  inputs[inputs.length - 1]?.focus();
}

async function salvarEdicao() {
  editDraft = editDraft.filter(ex => ex.nome.trim() !== '');
  if (editDraft.length === 0) {
    alert('Adicione pelo menos um exercício.');
    return;
  }

  const treino = DATA.treinos[session.treinoId];
  treino.exercicios = editDraft.map(ex => ({
    nome: ex.nome.trim(),
    series: Math.max(1, ex.series),
    pesoSugerido: ex.pesoSugerido,
    unidade: ex.unidade,
    nota: ex.nota || undefined,
    descricao: ex.descricao || undefined,
    imagem: ex.imagem || undefined
  }));

  await saveData(DATA);
  fecharModal('modal-edit');

  const idAtual = session.treinoId;
  session = null;
  iniciarTreino(idAtual);
}

function fecharModal(id) {
  document.getElementById(id).classList.remove('active');
}

// ===== BOOT =====
document.addEventListener('DOMContentLoaded', () => {
  init();
  setupCarouselEvents();
});
