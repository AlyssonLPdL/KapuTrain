// storage.js
// Toda persistência passa por aqui. Pra migrar pro Supabase no futuro,
// basta reescrever estas 3 funções mantendo a mesma assinatura.
// Nada em app.js precisa mudar.

const KEY = 'treinoAppData_v1';

async function loadData() {
  const raw = localStorage.getItem(KEY);
  if (!raw) {
    const d = defaultData();
    await saveData(d);
    return d;
  }
  return JSON.parse(raw);
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

function defaultData() {
  return {
    treinos: {
      pernas: {
        nome: 'A — Pernas',
        exercicios: [
          { nome: 'Agachamento livre', series: 3, pesoSugerido: 10 },
          { nome: 'Leg 45', series: 3, pesoSugerido: 30 },
          { nome: 'Cadeira extensora', series: 3, pesoSugerido: 23 },
          { nome: 'Mesa flexora', series: 3, pesoSugerido: 27, nota: 'V: 1ª e 3ª | A: 2ª e 3ª' },
          { nome: 'Stiff', series: 3, pesoSugerido: 12.5 },
          { nome: 'Abdutor', series: 3, pesoSugerido: 41 },
          { nome: 'Panturrilha em pé máquina', series: 3 }
        ]
      },
      peito: {
        nome: 'B — Peito / Ombro / Tríceps',
        exercicios: [
          { nome: 'Flexão tradicional', series: 3 },
          { nome: 'Supino inclinado máquina', series: 3, pesoSugerido: 30 },
          { nome: 'Fly', series: 2 },
          { nome: 'Crossover', series: 2 },
          { nome: 'Flexão pike', series: 3 },
          { nome: 'Elevação lateral polia', series: 3, pesoSugerido: 1.1 },
          { nome: 'Flexão diamante', series: 3 },
          { nome: 'Tríceps testa barra W', series: 3 }
        ]
      },
      costas: {
        nome: 'C — Costas / Bíceps / Antebraço',
        exercicios: [
          { nome: 'Barra fixa assistida', series: 3, nota: '32 kg de assistência' },
          { nome: 'Remada baixa', series: 3, pesoSugerido: 17 },
          { nome: 'Pullover', series: 3 },
          { nome: 'Crucifixo inverso', series: 3, pesoSugerido: 11 },
          { nome: 'Rosca martelo cruzada', series: 3, pesoSugerido: 7 },
          { nome: 'Rosca 45°', series: 3 },
          { nome: 'Sustentação na barra (Hang)', series: 2, unidade: 'seg', nota: '15–30 s' }
        ]
      },
      isoA: {
        nome: 'ISO-A — Full Body A',
        exercicios: [
          { nome: 'Flexão isométrica', series: 2, unidade: 'seg', nota: '15–25 s' },
          { nome: 'Remada com resistência própria', series: 2, unidade: 'seg', nota: '20 s por lado' },
          { nome: 'Rosca bíceps isométrica', series: 2, unidade: 'seg', nota: '15–20 s por braço' },
          { nome: 'Panturrilha isométrica', series: 2, unidade: 'seg', nota: '25 s' },
          { nome: 'Agachamento dividido isométrico', series: 2, unidade: 'seg', nota: '15 s por perna' },
          { nome: 'Prancha abdominal', series: 2, unidade: 'seg', nota: '25–30 s' }
        ]
      },
      isoB: {
        nome: 'ISO-B — Full Body B',
        exercicios: [
          { nome: 'Cadeira na parede', series: 2, unidade: 'seg', nota: '25–30 s' },
          { nome: 'Flexão isométrica de joelho', series: 2, unidade: 'seg', nota: '20 s por perna' },
          { nome: 'Panturrilha com joelho flexionado', series: 2, unidade: 'seg', nota: '25 s' },
          { nome: 'Ponte de glúteos', series: 2, unidade: 'seg', nota: '25 s' },
          { nome: 'Rotação externa do ombro contra a parede', series: 2, unidade: 'seg', nota: '15–20 s por braço' },
          { nome: 'Equilíbrio em uma perna', series: 2, unidade: 'seg', nota: '20 s por perna' }
        ]
      },
      isoC: {
        nome: 'ISO-C — Full Body C',
        exercicios: [
          { nome: 'Prancha com protração escapular', series: 2, unidade: 'seg', nota: '20 s' },
          { nome: 'Pressão de palmas', series: 2, unidade: 'seg', nota: '20 s' },
          { nome: 'Puxada isométrica acima da cabeça', series: 2, unidade: 'seg', nota: '15 s por lado' },
          { nome: 'Abdução de quadril contra a parede', series: 2, unidade: 'seg', nota: '20 s por lado' },
          { nome: 'Dead bug isométrico', series: 2, unidade: 'seg', nota: '15–20 s por lado' },
          { nome: 'Panturrilha unilateral', series: 2, unidade: 'seg', nota: '15–20 s por perna' }
        ]
      }
    },
    historico: []
  };
}