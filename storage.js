// storage.js — v2
const KEY = 'treinoAppData_v2';

async function loadData() {
  const raw = localStorage.getItem(KEY);
  if (!raw) {
    const d = defaultData();
    await saveData(d);
    return d;
  }
  let parsed;
  try { parsed = JSON.parse(raw); } catch {
    const d = defaultData(); await saveData(d); return d;
  }
  return migrate(parsed);
}

async function saveData(data) {
  localStorage.setItem(KEY, JSON.stringify(data));
}

async function appendHistorico(registro) {
  const data = await loadData();
  data.historico.unshift(registro);
  await saveData(data);
  return data;
}

function migrate(data) {
  let changed = false;
  if (!data || typeof data !== 'object') { data = defaultData(); changed = true; }
  if (!data.treinos || typeof data.treinos !== 'object') { data.treinos = {}; changed = true; }
  if (!Array.isArray(data.historico)) { data.historico = []; changed = true; }
  Object.values(data.treinos).forEach(t => {
    if (!Array.isArray(t.exercicios)) { t.exercicios = []; changed = true; }
    t.exercicios.forEach(ex => {
      if (typeof ex.series !== 'number') ex.series = 3;
    });
  });
  if (changed) saveData(data);
  return data;
}

function genId(prefix = 't') {
  return prefix + '_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
}

function defaultData() {
  return {
    treinos: {
      exemplo_peito: {
        nome: "Peito & Tríceps",
        exercicios: [
          { libId: "supino_reto_barra", nome: "Supino reto com barra", series: 4, pesoSugerido: 20, unidade: "reps" },
          { libId: "supino_inclinado_halteres", nome: "Supino inclinado com halteres", series: 3, pesoSugerido: 16, unidade: "reps" },
          { libId: "crucifixo_halteres", nome: "Crucifixo reto com halteres", series: 3, pesoSugerido: 10, unidade: "reps" },
          { libId: "crossover_polia_alta", nome: "Crossover na polia alta", series: 3, unidade: "reps" },
          { libId: "triceps_pulley", nome: "Tríceps pulley na polia", series: 3, unidade: "reps" },
        ],
      },
      exemplo_costas: {
        nome: "Costas & Bíceps",
        exercicios: [
          { libId: "puxada_frontal", nome: "Puxada frontal na polia alta", series: 4, pesoSugerido: 40, unidade: "reps" },
          { libId: "remada_curvada_barra", nome: "Remada curvada com barra", series: 3, pesoSugerido: 20, unidade: "reps" },
          { libId: "remada_baixa_polia", nome: "Remada baixa na polia", series: 3, pesoSugerido: 30, unidade: "reps" },
          { libId: "rosca_direta_barra", nome: "Rosca direta com barra", series: 3, pesoSugerido: 10, unidade: "reps" },
          { libId: "rosca_martelo", nome: "Rosca martelo", series: 3, pesoSugerido: 8, unidade: "reps" },
        ],
      },
      exemplo_pernas: {
        nome: "Pernas completo",
        exercicios: [
          { libId: "agachamento_livre", nome: "Agachamento livre", series: 4, pesoSugerido: 30, unidade: "reps" },
          { libId: "leg_press_45", nome: "Leg press 45°", series: 3, pesoSugerido: 80, unidade: "reps" },
          { libId: "cadeira_extensora", nome: "Cadeira extensora", series: 3, pesoSugerido: 25, unidade: "reps" },
          { libId: "mesa_flexora", nome: "Mesa flexora", series: 3, pesoSugerido: 25, unidade: "reps" },
          { libId: "stiff_barra", nome: "Stiff com barra", series: 3, pesoSugerido: 20, unidade: "reps" },
          { libId: "panturrilha_pe_maquina", nome: "Panturrilha em pé na máquina", series: 4, pesoSugerido: 40, unidade: "reps" },
        ],
      },
    },
    historico: [],
  };
}