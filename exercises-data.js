// exercises-data.js
// Biblioteca pré-definida. Cada item:
// { id, nome, grupo, subgrupo, explicacao, imagem }
// "imagem" é livre — cole URL de imagem/gif. Vazio mostra placeholder.
// subgrupo: Peso corporal | Barra | Halteres | Máquina | Polia | Guiado | Elástico | Kettlebell

const GRUPOS = {
  peito: "Peito",
  costas: "Costas",
  ombros: "Ombros",
  biceps: "Bíceps",
  triceps: "Tríceps",
  antebraco: "Antebraço",
  abdomen: "Abdômen",
  gluteos: "Glúteos",
  quadriceps: "Quadríceps",
  posterior_coxa: "Posterior de coxa",
  panturrilha: "Panturrilha",
  trapezio: "Trapézio",
};

const EXERCISE_LIBRARY = [
  // ===== PEITO =====
  {
    id: "supino_reto_barra",
    nome: "Supino reto com barra",
    grupo: "peito",
    subgrupo: "Barra",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/pectorals/barbell-bench-press.gif",
    explicacao:
      "Deitado no banco reto, desça a barra até o peito e empurre até estender os cotovelos. Foco no peitoral maior.",
  },
  {
    id: "supino_inclinado_barra",
    nome: "Supino inclinado com barra",
    grupo: "peito",
    subgrupo: "Barra",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/pectorals/barbell-incline-bench-press.gif",
    explicacao:
      "Banco inclinado a ~30-45°. Ênfase na porção superior do peitoral.",
  },
  {
    id: "supino_declinado_barra",
    nome: "Supino declinado com barra",
    grupo: "peito",
    subgrupo: "Barra",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/pectorals/barbell-decline-bench-press.gif",
    explicacao:
      "Banco declinado, foco na porção inferior do peitoral. Cuidado com a segurança ao sair da posição.",
  },
  {
    id: "supino_reto_halteres",
    nome: "Supino reto com halteres",
    grupo: "peito",
    subgrupo: "Halteres",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/pectorals/dumbbell-bench-press.gif",
    explicacao:
      "Maior amplitude que a barra e trabalho unilateral mais equilibrado.",
  },
  {
    id: "supino_inclinado_halteres",
    nome: "Supino inclinado com halteres",
    grupo: "peito",
    subgrupo: "Halteres",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/pectorals/dumbbell-incline-bench-press.gif",
    explicacao:
      "Banco inclinado com halteres; ótima ativação da parte superior do peito.",
  },
  {
    id: "supino_maquina",
    nome: "Supino máquina",
    grupo: "peito",
    subgrupo: "Máquina",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/pectorals/lever-chest-press.gif",
    explicacao: "Trajetória guiada, bom pra iniciantes e pra falha segura.",
  },
  {
    id: "crucifixo_halteres",
    nome: "Crucifixo reto com halteres",
    grupo: "peito",
    subgrupo: "Halteres",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/pectorals/dumbbell-fly.gif",
    explicacao:
      "Braços semiflexionados fixos, abra e feche como um arco. Alonga o peitoral.",
  },
  {
    id: "crucifixo_inclinado",
    nome: "Crucifixo inclinado com halteres",
    grupo: "peito",
    subgrupo: "Halteres",
    imagem: "",
    explicacao:
      "Mesmo movimento do crucifixo, com banco inclinado. Foco na parte superior.",
  },
  {
    id: "crossover_polia_alta",
    nome: "Crossover na polia alta",
    grupo: "peito",
    subgrupo: "Polia",
    imagem: "",
    explicacao:
      "Puxe as alças de cima pra baixo na frente do corpo. Tensão contínua e boa contração.",
  },
  {
    id: "crossover_polia_baixa",
    nome: "Crossover na polia baixa",
    grupo: "peito",
    subgrupo: "Polia",
    imagem: "",
    explicacao: "De baixo pra cima; enfatiza a porção superior do peitoral.",
  },
  {
    id: "peck_deck",
    nome: "Peck deck (voador)",
    grupo: "peito",
    subgrupo: "Máquina",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/pectorals/lever-seated-fly.gif",
    explicacao:
      "Braços fixos, junta as almofadas na frente. Excelente isolamento.",
  },
  {
    id: "flexao_braco",
    nome: "Flexão de braço",
    grupo: "peito",
    subgrupo: "Peso corporal",
    imagem: "",
    explicacao:
      "Mãos na largura dos ombros, corpo reto. Peito desce rente ao chão.",
  },
  {
    id: "flexao_inclinada",
    nome: "Flexão inclinada",
    grupo: "peito",
    subgrupo: "Peso corporal",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/pectorals/incline-push-up.gif",
    explicacao:
      "Mãos num apoio elevado (banco/step). Versão mais fácil da flexão.",
  },
  {
    id: "flexao_declinada",
    nome: "Flexão declinada",
    grupo: "peito",
    subgrupo: "Peso corporal",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/pectorals/decline-push-up.gif",
    explicacao:
      "Pés elevados, maior ativação da porção superior do peitoral e ombros.",
  },
  {
    id: "pullover_halter",
    nome: "Pullover com halter",
    grupo: "peito",
    subgrupo: "Halteres",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/pectorals/dumbbell-pullover.gif",
    explicacao:
      "Deitado, leve o halter atrás da cabeça com braços semiflexionados. Trabalha peito e serrátil.",
  },

  // ===== COSTAS =====
  {
    id: "barra_fixa_pronada",
    nome: "Barra fixa pronada",
    grupo: "costas",
    subgrupo: "Peso corporal",
    imagem: "",
    explicacao:
      "Pegada aberta, puxa o peito até a barra. Grande dorsal em destaque.",
  },
  {
    id: "barra_fixa_supinada",
    nome: "Barra fixa supinada",
    grupo: "costas",
    subgrupo: "Peso corporal",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/lats/chin-up.gif",
    explicacao:
      "Pegada fechada supinada; recruta mais bíceps junto com as costas.",
  },
  {
    id: "barra_fixa_assistida",
    nome: "Barra fixa assistida",
    grupo: "costas",
    subgrupo: "Máquina",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/lats/assisted-pull-up.gif",
    explicacao:
      "Máquina compensa parte do peso corporal; ótima pra progressão.",
  },
  {
    id: "puxada_frontal",
    nome: "Puxada frontal na polia alta",
    grupo: "costas",
    subgrupo: "Polia",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/lats/cable-lat-pulldown-full-range-of-motion.gif",
    explicacao: "Puxe a barra até o peito, cotovelos pra baixo e pra trás.",
  },
  {
    id: "puxada_supinada",
    nome: "Puxada supinada na polia",
    grupo: "costas",
    subgrupo: "Polia",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/lats/reverse-grip-machine-lat-pulldown.gif",
    explicacao:
      "Pegada supinada na barra da puxada, recrutamento maior de bíceps.",
  },
  {
    id: "remada_curvada_barra",
    nome: "Remada curvada com barra",
    grupo: "costas",
    subgrupo: "Barra",
    imagem: "",
    explicacao:
      "Tronco inclinado ~45°, puxe a barra até o abdômen mantendo a coluna neutra.",
  },
  {
    id: "remada_curvada_halteres",
    nome: "Remada curvada com halteres",
    grupo: "costas",
    subgrupo: "Halteres",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/upper-back/dumbbell-bent-over-row.gif",
    explicacao: "Mesma mecânica da remada com barra, pegada neutra.",
  },
  {
    id: "remada_unilateral_halter",
    nome: "Remada unilateral com halter",
    grupo: "costas",
    subgrupo: "Halteres",
    imagem: "",
    explicacao:
      "Apoio no banco, puxe o halter em direção ao quadril. Trabalha um lado por vez.",
  },
  {
    id: "remada_baixa_polia",
    nome: "Remada baixa na polia",
    grupo: "costas",
    subgrupo: "Polia",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/upper-back/cable-low-seated-row.gif",
    explicacao:
      "Sentado, puxe o triângulo até o abdômen. Foco na parte média das costas.",
  },
  {
    id: "remada_cavalinho",
    nome: "Remada cavalinho (T-bar)",
    grupo: "costas",
    subgrupo: "Barra",
    imagem: "",
    explicacao:
      "Barra presa no chão, puxa até o peito com tronco inclinado. Volume alto de costas.",
  },
  {
    id: "remada_maquina",
    nome: "Remada máquina",
    grupo: "costas",
    subgrupo: "Máquina",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/upper-back/lever-seated-row.gif",
    explicacao:
      "Trajetória guiada; bom pra isolar a musculatura das costas com segurança.",
  },
  {
    id: "puxada_articulada",
    nome: "Puxada articulada",
    grupo: "costas",
    subgrupo: "Máquina",
    imagem: "",
    explicacao:
      "Máquina com braços independentes; permite amplitude controlada.",
  },
  {
    id: "pullover_polia",
    nome: "Pullover na polia alta",
    grupo: "costas",
    subgrupo: "Polia",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/lats/cable-straight-arm-pulldown.gif",
    explicacao:
      "Braços estendidos, puxe a barra em arco até as coxas. Alonga o dorsal.",
  },
  {
    id: "remada_serrote",
    nome: "Remada serrote",
    grupo: "costas",
    subgrupo: "Halteres",
    imagem: "",
    explicacao: "Tronco apoiado, movimento mais vertical da remada unilateral.",
  },
  {
    id: "levantamento_terra",
    nome: "Levantamento terra",
    grupo: "costas",
    subgrupo: "Barra",
    imagem: "",
    explicacao:
      "Exercício composto que recruta cadeia posterior inteira. Atenção à técnica.",
  },
  {
    id: "hiperextensao",
    nome: "Hiperextensão lombar",
    grupo: "costas",
    subgrupo: "Peso corporal",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/spine/hyperextension-on-bench.gif",
    explicacao: "No banco romano ou GHD, extensão do tronco. Lombar e glúteos.",
  },

  // ===== OMBROS =====
  {
    id: "desenvolvimento_barra_pe",
    nome: "Desenvolvimento com barra em pé",
    grupo: "ombros",
    subgrupo: "Barra",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/delts/barbell-standing-wide-military-press.gif",
    explicacao:
      "Em pé, empurre a barra acima da cabeça até estender os cotovelos.",
  },
  {
    id: "desenvolvimento_halteres_sentado",
    nome: "Desenvolvimento com halteres sentado",
    grupo: "ombros",
    subgrupo: "Halteres",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/delts/dumbbell-seated-shoulder-press.gif",
    explicacao:
      "Sentado com encosto, halteres sobem até quase se tocarem acima da cabeça.",
  },
  {
    id: "desenvolvimento_arnold",
    nome: "Desenvolvimento Arnold",
    grupo: "ombros",
    subgrupo: "Halteres",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/delts/dumbbell-arnold-press.gif",
    explicacao:
      "Comece com as palmas pra você, gire enquanto empurra pra cima.",
  },
  {
    id: "desenvolvimento_maquina",
    nome: "Desenvolvimento máquina",
    grupo: "ombros",
    subgrupo: "Máquina",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/delts/lever-shoulder-press.gif",
    explicacao: "Trajetória fixa, ótimo pra iniciantes e pra falha segura.",
  },
  {
    id: "elevacao_lateral_halteres",
    nome: "Elevação lateral com halteres",
    grupo: "ombros",
    subgrupo: "Halteres",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/delts/dumbbell-lateral-raise.gif",
    explicacao:
      "Braços quase estendidos, eleva até a linha dos ombros. Foco no deltoide medial.",
  },
  {
    id: "elevacao_lateral_polia",
    nome: "Elevação lateral na polia",
    grupo: "ombros",
    subgrupo: "Polia",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/delts/cable-lateral-raise.gif",
    explicacao: "Tensão contínua do começo ao fim; excelente pra finalizar.",
  },
  {
    id: "elevacao_lateral_maquina",
    nome: "Elevação lateral máquina",
    grupo: "ombros",
    subgrupo: "Máquina",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/delts/lever-lateral-raise.gif",
    explicacao: "Almofadas laterais; trajetória guiada e segura.",
  },
  {
    id: "elevacao_frontal_halteres",
    nome: "Elevação frontal com halteres",
    grupo: "ombros",
    subgrupo: "Halteres",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/delts/dumbbell-front-raise.gif",
    explicacao: "Eleva os halteres na frente do corpo até a linha dos ombros.",
  },
  {
    id: "elevacao_frontal_barra",
    nome: "Elevação frontal com barra",
    grupo: "ombros",
    subgrupo: "Barra",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/delts/barbell-front-raise.gif",
    explicacao: "Mesma mecânica com barra; cuidado pra não usar impulso.",
  },
  {
    id: "crucifixo_inverso_halteres",
    nome: "Crucifixo inverso com halteres",
    grupo: "ombros",
    subgrupo: "Halteres",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/delts/dumbbell-reverse-fly.gif",
    explicacao:
      "Tronco inclinado, abra os braços lateralmente. Foco no deltoide posterior.",
  },
  {
    id: "crucifixo_inverso_polia",
    nome: "Crucifixo inverso na polia",
    grupo: "ombros",
    subgrupo: "Polia",
    imagem: "",
    explicacao: "Polias cruzadas na altura do peito; puxe abrindo os braços.",
  },
  {
    id: "face_pull",
    nome: "Face pull",
    grupo: "ombros",
    subgrupo: "Polia",
    imagem: "",
    explicacao:
      "Corda na polia alta puxada em direção ao rosto. Posterior de ombro e trapézio.",
  },
  {
    id: "desenvolvimento_militar",
    nome: "Desenvolvimento militar",
    grupo: "ombros",
    subgrupo: "Barra",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/delts/barbell-standing-wide-military-press.gif",
    explicacao:
      "Em pé, barra acima da cabeça com core firme. Composto pesado de ombros.",
  },
  {
    id: "remada_alta_barra",
    nome: "Remada alta com barra",
    grupo: "ombros",
    subgrupo: "Barra",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/delts/barbell-upright-row.gif",
    explicacao:
      "Puxe a barra rente ao corpo até a altura do peito, cotovelos lideram.",
  },
  {
    id: "elevacao_lateral_inclinada",
    nome: "Elevação lateral inclinada",
    grupo: "ombros",
    subgrupo: "Halteres",
    imagem: "",
    explicacao:
      "Tronco levemente inclinado à frente; aumenta amplitude do deltoide medial.",
  },

  // ===== BÍCEPS =====
  {
    id: "rosca_direta_barra",
    nome: "Rosca direta com barra",
    grupo: "biceps",
    subgrupo: "Barra",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/biceps/barbell-curl.gif",
    explicacao:
      "Em pé, flexione os cotovelos levando a barra até o peito. Sem balançar o tronco.",
  },
  {
    id: "rosca_direta_barra_w",
    nome: "Rosca direta com barra W",
    grupo: "biceps",
    subgrupo: "Barra",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/biceps/ez-barbell-curl.gif",
    explicacao: "Mesma mecânica com barra W; alivia um pouco o punho.",
  },
  {
    id: "rosca_alternada_halteres",
    nome: "Rosca alternada com halteres",
    grupo: "biceps",
    subgrupo: "Halteres",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/biceps/dumbbell-alternate-biceps-curl.gif",
    explicacao:
      "Um braço por vez, girando o punho na subida. Trabalha concentração e coordenação.",
  },
  {
    id: "rosca_martelo",
    nome: "Rosca martelo",
    grupo: "biceps",
    subgrupo: "Halteres",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/biceps/dumbbell-hammer-curl.gif",
    explicacao:
      "Pegada neutra (palmas frente a frente). Enfatiza braquial e braquiorradial.",
  },
  {
    id: "rosca_concentrada",
    nome: "Rosca concentrada",
    grupo: "biceps",
    subgrupo: "Halteres",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/biceps/dumbbell-concentration-curl.gif",
    explicacao: "Sentado com o cotovelo apoiado na coxa; isola o bíceps.",
  },
  {
    id: "rosca_scott_barra_w",
    nome: "Rosca Scott com barra W",
    grupo: "biceps",
    subgrupo: "Barra",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/biceps/barbell-preacher-curl.gif",
    explicacao:
      "Banco Scott com braços apoiados; ótimo isolamento e alongamento.",
  },
  {
    id: "rosca_scott_maquina",
    nome: "Rosca Scott máquina",
    grupo: "biceps",
    subgrupo: "Máquina",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/biceps/lever-preacher-curl.gif",
    explicacao: "Trajetória guiada pra focar 100% no bíceps.",
  },
  {
    id: "rosca_45",
    nome: "Rosca 45° (inclinada)",
    grupo: "biceps",
    subgrupo: "Halteres",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/biceps/dumbbell-incline-curl.gif",
    explicacao:
      "Banco inclinado, braços atrás do corpo. Alonga mais o bíceps na parte baixa.",
  },
  {
    id: "rosca_polia_baixa",
    nome: "Rosca na polia baixa",
    grupo: "biceps",
    subgrupo: "Polia",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/biceps/cable-curl.gif",
    explicacao: "Tensão constante. Ótimo pra finalizar sem perder a contração.",
  },
  {
    id: "rosca_spider",
    nome: "Rosca spider",
    grupo: "biceps",
    subgrupo: "Barra",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/biceps/ez-barbell-spider-curl.gif",
    explicacao:
      "Deitado de barriga pra baixo no banco inclinado, puxa a barra. Pico de contração alto.",
  },
  {
    id: "rosca_inversa",
    nome: "Rosca inversa (pegada pronada)",
    grupo: "biceps",
    subgrupo: "Barra",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/biceps/barbell-standing-reverse-grip-curl.gif",
    explicacao:
      "Pegada pronada com barra; pega braquiorradial e antebraço também.",
  },
  {
    id: "rosca_corda_polia",
    nome: "Rosca corda na polia",
    grupo: "biceps",
    subgrupo: "Polia",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/biceps/cable-hammer-curl-with-rope.gif",
    explicacao: "Corda na polia baixa; trabalha bíceps com pegada neutra.",
  },
  {
    id: "rosca_isometrica_toalha",
    nome: "Rosca isométrica com toalha",
    grupo: "biceps",
    subgrupo: "Peso corporal",
    imagem: "",
    explicacao:
      "Puxe uma toalha contra a outra mão; série isométrica, sem equipamento.",
  },
  {
    id: "rosca_banco_inclinado",
    nome: "Rosca no banco inclinado",
    grupo: "biceps",
    subgrupo: "Halteres",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/biceps/dumbbell-incline-curl.gif",
    explicacao:
      "Deitado no banco inclinado, faça rosca com os braços atrás. Alongamento ampliado.",
  },
  {
    id: "rosca_21",
    nome: "Rosca 21",
    grupo: "biceps",
    subgrupo: "Barra",
    imagem: "",
    explicacao:
      "7 reps parciais embaixo + 7 parciais em cima + 7 completas. Queimação alta.",
  },

  // ===== TRÍCEPS =====
  {
    id: "triceps_testa_w",
    nome: "Tríceps testa com barra W",
    grupo: "triceps",
    subgrupo: "Barra",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/triceps/barbell-lying-triceps-extension-skull-crusher.gif",
    explicacao: "Deitado, desça a barra até a testa flexionando só o cotovelo.",
  },
  {
    id: "triceps_testa_halteres",
    nome: "Tríceps testa com halteres",
    grupo: "triceps",
    subgrupo: "Halteres",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/triceps/dumbbell-lying-triceps-extension.gif",
    explicacao:
      "Mesma mecânica com halteres; pegada neutra, foco na cabeça medial.",
  },
  {
    id: "triceps_pulley",
    nome: "Tríceps pulley na polia",
    grupo: "triceps",
    subgrupo: "Polia",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/triceps/cable-pushdown.gif",
    explicacao:
      "Cotovelos fixos ao lado do corpo; empurre a barra pra baixo até estender.",
  },
  {
    id: "triceps_corda",
    nome: "Tríceps corda na polia",
    grupo: "triceps",
    subgrupo: "Polia",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/triceps/cable-pushdown-with-rope-attachment.gif",
    explicacao: "Abra a corda no fim do movimento; contração forte.",
  },
  {
    id: "triceps_frances_halter",
    nome: "Tríceps francês com halter",
    grupo: "triceps",
    subgrupo: "Halteres",
    imagem: "",
    explicacao:
      "Halter atrás da cabeça, estenda o cotovelo. Alonga a cabeça longa do tríceps.",
  },
  {
    id: "triceps_frances_polia",
    nome: "Tríceps francês na polia",
    grupo: "triceps",
    subgrupo: "Polia",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/triceps/cable-overhead-triceps-extension-rope-attachment.gif",
    explicacao: "Corda na polia atrás da cabeça; tensão contínua.",
  },
  {
    id: "triceps_coice_halter",
    nome: "Tríceps coice",
    grupo: "triceps",
    subgrupo: "Halteres",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/triceps/dumbbell-kickback.gif",
    explicacao:
      "Tronco inclinado, braço paralelo ao chão, estenda o cotovelo pra trás.",
  },
  {
    id: "triceps_coice_polia",
    nome: "Tríceps coice na polia",
    grupo: "triceps",
    subgrupo: "Polia",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/triceps/cable-kickback.gif",
    explicacao: "Mesma mecânica na polia; ótimo pra isolar.",
  },
  {
    id: "triceps_banco",
    nome: "Tríceps banco",
    grupo: "triceps",
    subgrupo: "Peso corporal",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/triceps/triceps-dip-between-benches.gif",
    explicacao:
      "Mãos no banco atrás do corpo, desça o quadril e suba estendendo os cotovelos.",
  },
  {
    id: "triceps_paralelas",
    nome: "Tríceps paralelas",
    grupo: "triceps",
    subgrupo: "Peso corporal",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/triceps/triceps-dip.gif",
    explicacao: "Nas paralelas, mantenha o tronco vertical pra focar tríceps.",
  },
  {
    id: "supino_fechado",
    nome: "Supino fechado",
    grupo: "triceps",
    subgrupo: "Barra",
    imagem: "",
    explicacao:
      "Supino reto com pegada estreita; foco no tríceps e peitoral medial.",
  },
  {
    id: "triceps_testa_maquina",
    nome: "Tríceps testa na máquina",
    grupo: "triceps",
    subgrupo: "Máquina",
    imagem: "",
    explicacao: "Trajetória guiada; isolamento seguro do tríceps.",
  },
  {
    id: "fundo_entre_bancos",
    nome: "Fundo entre bancos",
    grupo: "triceps",
    subgrupo: "Peso corporal",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/triceps/triceps-dip-between-benches.gif",
    explicacao:
      "Dois bancos, um embaixo das mãos e outro dos pés; desça e suba controlado.",
  },
  {
    id: "triceps_unilateral_polia",
    nome: "Extensão de tríceps unilateral na polia",
    grupo: "triceps",
    subgrupo: "Polia",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/triceps/cable-one-arm-tricep-pushdown.gif",
    explicacao: "Um braço por vez na polia; corrige assimetrias.",
  },
  {
    id: "triceps_isometrico_parede",
    nome: "Tríceps isométrico na parede",
    grupo: "triceps",
    subgrupo: "Peso corporal",
    imagem: "",
    explicacao:
      "Empurre a parede com o cotovelo estendido; contração isométrica.",
  },

  // ===== ANTEBRAÇO =====
  {
    id: "rosca_punho_barra",
    nome: "Rosca de punho com barra",
    grupo: "antebraco",
    subgrupo: "Barra",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/forearms/barbell-wrist-curl.gif",
    explicacao: "Sentado, antebraços apoiados, flexione os punhos pra cima.",
  },
  {
    id: "rosca_punho_inversa",
    nome: "Rosca de punho inversa",
    grupo: "antebraco",
    subgrupo: "Barra",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/forearms/barbell-reverse-wrist-curl.gif",
    explicacao:
      "Pegada pronada; estenda os punhos pra cima trabalhando a parte de trás.",
  },
  {
    id: "rosca_punho_halteres",
    nome: "Rosca de punho com halteres",
    grupo: "antebraco",
    subgrupo: "Halteres",
    imagem: "",
    explicacao:
      "Um halter por vez, apoio no banco. Trabalha flexores do punho.",
  },
  {
    id: "extensao_punho_barra",
    nome: "Extensão de punho com barra",
    grupo: "antebraco",
    subgrupo: "Barra",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/forearms/barbell-reverse-wrist-curl.gif",
    explicacao:
      "Pegada pronada, estenda os punhos pra cima. Foco nos extensores.",
  },
  {
    id: "rosca_punho_polia",
    nome: "Rosca de punho na polia",
    grupo: "antebraco",
    subgrupo: "Polia",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/forearms/cable-wrist-curl.gif",
    explicacao: "Tensão contínua; bom pra finalizar antebraço.",
  },
  {
    id: "farmer_walk",
    nome: "Farmer walk",
    grupo: "antebraco",
    subgrupo: "Halteres",
    imagem: "",
    explicacao:
      "Caminhe segurando halteres pesados. Pega antebraço, trapézio e core.",
  },
  {
    id: "hand_grip",
    nome: "Hand grip squeeze",
    grupo: "antebraco",
    subgrupo: "Halteres",
    imagem: "",
    explicacao:
      "Aperte um objeto pesado (hand grip ou anilha) e segure. Força de preensão.",
  },
  {
    id: "rotacao_punho_marreta",
    nome: "Rotação de punho com marreta",
    grupo: "antebraco",
    subgrupo: "Halteres",
    imagem: "",
    explicacao:
      "Marreta ou barra apoiada; gire o punho pra um lado e pro outro.",
  },
  {
    id: "flexao_punho_unilateral",
    nome: "Flexão de punho unilateral",
    grupo: "antebraco",
    subgrupo: "Halteres",
    imagem: "",
    explicacao: "Um braço por vez, apoio no banco, foco em amplitude.",
  },
  {
    id: "extensao_dedos_elastico",
    nome: "Extensão de dedos com elástico",
    grupo: "antebraco",
    subgrupo: "Elástico",
    imagem: "",
    explicacao: "Elástico nos dedos, abra a mão contra a resistência.",
  },
  {
    id: "rosca_inversa_w",
    nome: "Rosca inversa com barra W",
    grupo: "antebraco",
    subgrupo: "Barra",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/biceps/ez-barbell-reverse-grip-curl.gif",
    explicacao:
      "Pegada pronada na barra W; trabalha braquiorradial e extensores.",
  },
  {
    id: "prancha_punho",
    nome: "Prancha de punho isométrica",
    grupo: "antebraco",
    subgrupo: "Peso corporal",
    imagem: "",
    explicacao:
      "Apoie o dorso da mão no chão e empurre levemente; contração isométrica.",
  },

  // ===== ABDÔMEN =====
  {
    id: "prancha_frontal",
    nome: "Prancha frontal",
    grupo: "abdomen",
    subgrupo: "Peso corporal",
    imagem: "",
    explicacao:
      "Apoio nos antebraços e pontas dos pés, corpo reto. Isométrico clássico.",
  },
  {
    id: "prancha_lateral",
    nome: "Prancha lateral",
    grupo: "abdomen",
    subgrupo: "Peso corporal",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/abs/side-bridge-v-2.gif",
    explicacao: "Apoio em um antebraço, corpo lateralizado. Foco nos oblíquos.",
  },
  {
    id: "crunch",
    nome: "Crunch tradicional",
    grupo: "abdomen",
    subgrupo: "Peso corporal",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/abs/crunch-floor.gif",
    explicacao: "Deitado, eleve levemente o tronco arredondando a coluna.",
  },
  {
    id: "crunch_polia",
    nome: "Crunch na polia",
    grupo: "abdomen",
    subgrupo: "Polia",
    imagem: "",
    explicacao: "Ajoelhado, puxe a corda pra baixo arredondando o tronco.",
  },
  {
    id: "crunch_maquina",
    nome: "Crunch máquina",
    grupo: "abdomen",
    subgrupo: "Máquina",
    imagem: "",
    explicacao: "Trajetória guiada; permite adicionar carga com segurança.",
  },
  {
    id: "elevacao_pernas_suspenso",
    nome: "Elevação de pernas suspenso",
    grupo: "abdomen",
    subgrupo: "Peso corporal",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/abs/hanging-leg-raise.gif",
    explicacao: "Pendurado na barra, eleve as pernas estendidas ou joelhos.",
  },
  {
    id: "elevacao_pernas_banco",
    nome: "Elevação de pernas no banco",
    grupo: "abdomen",
    subgrupo: "Peso corporal",
    imagem: "",
    explicacao: "Deitado no banco, eleve as pernas retas até 90°.",
  },
  {
    id: "russian_twist",
    nome: "Russian twist",
    grupo: "abdomen",
    subgrupo: "Peso corporal",
    imagem: "",
    explicacao:
      "Sentado com tronco inclinado, gire o tronco de um lado pro outro.",
  },
  {
    id: "abdominal_bicicleta",
    nome: "Abdominal bicicleta",
    grupo: "abdomen",
    subgrupo: "Peso corporal",
    imagem: "",
    explicacao: "Alterne cotovelo com joelho oposto, como se pedalasse.",
  },
  {
    id: "abdominal_infra_declinado",
    nome: "Abdominal infra no banco declinado",
    grupo: "abdomen",
    subgrupo: "Peso corporal",
    imagem: "",
    explicacao:
      "Deitado no banco declinado, eleve o quadril na direção do peito.",
  },
  {
    id: "dead_bug",
    nome: "Dead bug",
    grupo: "abdomen",
    subgrupo: "Peso corporal",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/abs/dead-bug.gif",
    explicacao:
      "Deitado, estenda braço e perna opostos mantendo a lombar no chão.",
  },
  {
    id: "hollow_hold",
    nome: "Hollow hold",
    grupo: "abdomen",
    subgrupo: "Peso corporal",
    imagem: "",
    explicacao:
      "Deitado, eleve ombros e pernas formando um 'banana'. Isométrico.",
  },
  {
    id: "mountain_climber",
    nome: "Mountain climber",
    grupo: "abdomen",
    subgrupo: "Peso corporal",
    imagem: "",
    explicacao:
      "Em prancha, traga um joelho por vez em direção ao peito rápido.",
  },
  {
    id: "rotacao_tronco_polia",
    nome: "Rotação de tronco na polia",
    grupo: "abdomen",
    subgrupo: "Polia",
    imagem: "",
    explicacao: "Em pé, gire o tronco contra a resistência da polia.",
  },
  {
    id: "side_bend_halter",
    nome: "Flexão lateral de tronco",
    grupo: "abdomen",
    subgrupo: "Halteres",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/abs/dumbbell-side-bend.gif",
    explicacao:
      "Halter em uma mão, incline o tronco pro lado e volte. Oblíquos.",
  },

  // ===== GLÚTEOS =====
  {
    id: "hip_thrust_barra",
    nome: "Hip thrust com barra",
    grupo: "gluteos",
    subgrupo: "Barra",
    imagem: "",
    explicacao:
      "Ombros no banco, barra no quadril; estenda o quadril até alinhar.",
  },
  {
    id: "hip_thrust_halteres",
    nome: "Hip thrust com halteres",
    grupo: "gluteos",
    subgrupo: "Halteres",
    imagem: "",
    explicacao: "Mesma mecânica com halteres apoiados no quadril.",
  },
  {
    id: "glute_bridge",
    nome: "Glute bridge",
    grupo: "gluteos",
    subgrupo: "Peso corporal",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/glutes/low-glute-bridge-on-floor.gif",
    explicacao: "Deitado, eleve o quadril contraindo o glúteo no topo.",
  },
  {
    id: "glute_bridge_unilateral",
    nome: "Glute bridge unilateral",
    grupo: "gluteos",
    subgrupo: "Peso corporal",
    imagem: "",
    explicacao:
      "Uma perna apoiada, a outra elevada. Aumenta a exigência unilateral.",
  },
  {
    id: "coice_polia",
    nome: "Coice na polia",
    grupo: "gluteos",
    subgrupo: "Polia",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/glutes/cable-standing-hip-extension.gif",
    explicacao:
      "Tornozeleira na polia; estenda a perna pra trás contraindo o glúteo.",
  },
  {
    id: "coice_cabo_cruzado",
    nome: "Coice no cabo cruzado",
    grupo: "gluteos",
    subgrupo: "Polia",
    imagem: "",
    explicacao:
      "Cabo cruzado na frente do corpo; puxe a perna pra trás e pra cima.",
  },
  {
    id: "abducao_maquina",
    nome: "Abdução de quadril na máquina",
    grupo: "gluteos",
    subgrupo: "Máquina",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/abductors/lever-seated-hip-abduction.gif",
    explicacao: "Sentado, abra as pernas contra a resistência. Glúteo médio.",
  },
  {
    id: "abducao_elastico",
    nome: "Abdução com elástico",
    grupo: "gluteos",
    subgrupo: "Elástico",
    imagem: "",
    explicacao: "Elástico acima dos joelhos, abra as pernas lateralmente.",
  },
  {
    id: "cadeira_abdutora",
    nome: "Cadeira abdutora",
    grupo: "gluteos",
    subgrupo: "Máquina",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/abductors/lever-seated-hip-abduction.gif",
    explicacao: "Sentado na cadeira, empurre as almofadas pra fora.",
  },
  {
    id: "agachamento_sumo_halter",
    nome: "Agachamento sumô com halter",
    grupo: "gluteos",
    subgrupo: "Halteres",
    imagem: "",
    explicacao:
      "Pés bem afastados, pontas pra fora; desça segurando um halter entre as pernas.",
  },
  {
    id: "passada_caminhando",
    nome: "Passada caminhando",
    grupo: "gluteos",
    subgrupo: "Halteres",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/glutes/walking-lunge.gif",
    explicacao: "Passos longos com halteres; glúteo e quadríceps.",
  },
  {
    id: "step_up",
    nome: "Step-up no banco",
    grupo: "gluteos",
    subgrupo: "Halteres",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/glutes/dumbbell-step-up.gif",
    explicacao:
      "Suba no banco com uma perna, controlando a descida. Glúteo e coxa.",
  },
  {
    id: "extensao_quadril_ghd",
    nome: "Extensão de quadril no GHD",
    grupo: "gluteos",
    subgrupo: "Peso corporal",
    imagem: "",
    explicacao: "No GHD, estenda o quadril mantendo o tronco firme.",
  },
  {
    id: "frog_pump",
    nome: "Frog pump",
    grupo: "gluteos",
    subgrupo: "Peso corporal",
    imagem: "",
    explicacao:
      "Deitado, solas dos pés unidas e joelhos abertos; eleve o quadril.",
  },
  {
    id: "clamshell",
    nome: "Abdução deitado (clamshell)",
    grupo: "gluteos",
    subgrupo: "Peso corporal",
    imagem: "",
    explicacao:
      "Deitado de lado, joelhos dobrados; abra o joelho de cima sem girar o tronco.",
  },

  // ===== QUADRÍCEPS =====
  {
    id: "agachamento_livre",
    nome: "Agachamento livre",
    grupo: "quadriceps",
    subgrupo: "Barra",
    imagem: "",
    explicacao:
      "Barra nas costas, desça até coxas paralelas ao chão, suba estendendo.",
  },
  {
    id: "agachamento_frontal",
    nome: "Agachamento frontal",
    grupo: "quadriceps",
    subgrupo: "Barra",
    imagem: "",
    explicacao:
      "Barra na frente dos ombros; tronco mais ereto, foco maior no quadríceps.",
  },
  {
    id: "agachamento_smith",
    nome: "Agachamento Smith (guiado)",
    grupo: "quadriceps",
    subgrupo: "Guiado",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/glutes/smith-squat.gif",
    explicacao:
      "Barra guiada no Smith; permite foco na execução sem se preocupar com equilíbrio.",
  },
  {
    id: "agachamento_goblet",
    nome: "Agachamento goblet",
    grupo: "quadriceps",
    subgrupo: "Halteres",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/quads/dumbbell-goblet-squat.gif",
    explicacao:
      "Halter no peito, desça e suba. Ótimo pra aprender o padrão do agachamento.",
  },
  {
    id: "agachamento_hack",
    nome: "Agachamento hack máquina",
    grupo: "quadriceps",
    subgrupo: "Máquina",
    imagem: "",
    explicacao: "Máquina inclinada; foco intenso no quadríceps.",
  },
  {
    id: "leg_press_45",
    nome: "Leg press 45°",
    grupo: "quadriceps",
    subgrupo: "Máquina",
    imagem: "",
    explicacao:
      "Empurre a plataforma com os pés na largura dos ombros. Quadríceps e glúteo.",
  },
  {
    id: "leg_press_horizontal",
    nome: "Leg press horizontal",
    grupo: "quadriceps",
    subgrupo: "Máquina",
    imagem: "",
    explicacao: "Versão sentada; trajetória horizontal.",
  },
  {
    id: "cadeira_extensora",
    nome: "Cadeira extensora",
    grupo: "quadriceps",
    subgrupo: "Máquina",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/quads/lever-leg-extension.gif",
    explicacao:
      "Sentado, estenda os joelhos contra a resistência. Isolamento do quadríceps.",
  },
  {
    id: "cadeira_extensora_unilateral",
    nome: "Cadeira extensora unilateral",
    grupo: "quadriceps",
    subgrupo: "Máquina",
    imagem: "",
    explicacao: "Um lado por vez; corrige assimetrias e aumenta foco.",
  },
  {
    id: "afundo_halteres",
    nome: "Afundo com halteres",
    grupo: "quadriceps",
    subgrupo: "Halteres",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/glutes/dumbbell-lunge.gif",
    explicacao: "Passo à frente, desça o joelho de trás quase ao chão.",
  },
  {
    id: "passada_barra",
    nome: "Passada com barra",
    grupo: "quadriceps",
    subgrupo: "Barra",
    imagem: "",
    explicacao: "Barra nas costas; passadas alternadas ou caminhando.",
  },
  {
    id: "agachamento_bulgaro",
    nome: "Agachamento búlgaro",
    grupo: "quadriceps",
    subgrupo: "Halteres",
    imagem: "",
    explicacao: "Pé de trás apoiado no banco; agacha com a perna da frente.",
  },
  {
    id: "agachamento_sissy",
    nome: "Agachamento sissy",
    grupo: "quadriceps",
    subgrupo: "Peso corporal",
    imagem: "",
    explicacao:
      "Joelhos à frente dos pés, tronco inclinado pra trás; alonga muito o quadríceps.",
  },
  {
    id: "agachamento_salto",
    nome: "Agachamento com salto",
    grupo: "quadriceps",
    subgrupo: "Peso corporal",
    imagem: "",
    explicacao: "Agache e salte o mais alto possível. Trabalho explosivo.",
  },
  {
    id: "cadeira_adutora",
    nome: "Cadeira adutora",
    grupo: "quadriceps",
    subgrupo: "Máquina",
    imagem: "",
    explicacao: "Sentado, aproxime as pernas contra a resistência. Adutores.",
  },

  // ===== POSTERIOR DE COXA =====
  {
    id: "stiff_barra",
    nome: "Stiff com barra",
    grupo: "posterior_coxa",
    subgrupo: "Barra",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/hamstrings/barbell-straight-leg-deadlift.gif",
    explicacao:
      "Joelhos levemente flexionados, desça a barra até sentir alongar o posterior.",
  },
  {
    id: "stiff_halteres",
    nome: "Stiff com halteres",
    grupo: "posterior_coxa",
    subgrupo: "Halteres",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/glutes/dumbbell-stiff-leg-deadlift.gif",
    explicacao: "Mesma mecânica com halteres; pegada neutra.",
  },
  {
    id: "stiff_unilateral",
    nome: "Stiff unilateral com halter",
    grupo: "posterior_coxa",
    subgrupo: "Halteres",
    imagem: "",
    explicacao:
      "Uma perna apoiada, incline o tronco levando o halter pro chão. Equilíbrio + posterior.",
  },
  {
    id: "mesa_flexora",
    nome: "Mesa flexora",
    grupo: "posterior_coxa",
    subgrupo: "Máquina",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/hamstrings/lever-lying-leg-curl.gif",
    explicacao:
      "Deitado de barriga pra baixo, flexione os joelhos contra a resistência.",
  },
  {
    id: "cadeira_flexora",
    nome: "Cadeira flexora",
    grupo: "posterior_coxa",
    subgrupo: "Máquina",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/hamstrings/lever-seated-leg-curl.gif",
    explicacao: "Sentado, puxe os calcanhares pra trás contra a resistência.",
  },
  {
    id: "flexora_unilateral",
    nome: "Flexora em pé unilateral",
    grupo: "posterior_coxa",
    subgrupo: "Máquina",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/hamstrings/standing-single-leg-curl.gif",
    explicacao: "Em pé, um lado por vez. Maior isolamento do bíceps femoral.",
  },
  {
    id: "nordic_curl",
    nome: "Nordic curl",
    grupo: "posterior_coxa",
    subgrupo: "Peso corporal",
    imagem: "",
    explicacao:
      "Ajoelhado com os pés fixos, desça o tronco devagar. Fortíssimo pro posterior.",
  },
  {
    id: "good_morning",
    nome: "Good morning",
    grupo: "posterior_coxa",
    subgrupo: "Barra",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/hamstrings/barbell-good-morning.gif",
    explicacao:
      "Barra nas costas, incline o tronco à frente e volte. Posterior + lombar.",
  },
  {
    id: "terra_romeno",
    nome: "Levantamento terra romeno",
    grupo: "posterior_coxa",
    subgrupo: "Barra",
    imagem: "",
    explicacao:
      "Joelhos semidobrados fixos, desça a barra pela frente da perna até sentir alongar.",
  },
  {
    id: "terra_sumo",
    nome: "Levantamento terra sumô",
    grupo: "posterior_coxa",
    subgrupo: "Barra",
    imagem: "",
    explicacao:
      "Base bem aberta, pontas dos pés pra fora. Glúteo e posterior bem recrutados.",
  },
  {
    id: "glute_ham_raise",
    nome: "Glute ham raise",
    grupo: "posterior_coxa",
    subgrupo: "Máquina",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/hamstrings/glute-ham-raise.gif",
    explicacao: "No aparelho GHR; flexão de joelho e quadril com controle.",
  },
  {
    id: "flexao_joelho_bola",
    nome: "Flexão de joelhos na bola suíça",
    grupo: "posterior_coxa",
    subgrupo: "Peso corporal",
    imagem: "",
    explicacao:
      "Deitado com os pés na bola, eleve o quadril e puxe a bola em direção ao glúteo.",
  },
  {
    id: "ponte_unilateral_iso",
    nome: "Ponte unilateral isométrica",
    grupo: "posterior_coxa",
    subgrupo: "Peso corporal",
    imagem: "",
    explicacao: "Uma perna apoiada, quadril elevado, sustente a posição.",
  },
  {
    id: "hiperextensao_45",
    nome: "Hiperextensão 45°",
    grupo: "posterior_coxa",
    subgrupo: "Máquina",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/spine/hyperextension-on-bench.gif",
    explicacao:
      "No banco a 45°, desça e suba o tronco. Posterior, glúteo e lombar.",
  },

  // ===== PANTURRILHA =====
  {
    id: "panturrilha_pe_maquina",
    nome: "Panturrilha em pé na máquina",
    grupo: "panturrilha",
    subgrupo: "Máquina",
    imagem: "",
    explicacao:
      "Em pé, eleve os calcanhares o máximo possível e desça alongando.",
  },
  {
    id: "panturrilha_sentado",
    nome: "Panturrilha sentado",
    grupo: "panturrilha",
    subgrupo: "Máquina",
    imagem: "",
    explicacao:
      "Sentado, apoios nos joelhos, eleve os calcanhares. Foco no sóleo.",
  },
  {
    id: "panturrilha_leg_press",
    nome: "Panturrilha no leg press",
    grupo: "panturrilha",
    subgrupo: "Máquina",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/calves/sled-lying-calf-press.gif",
    explicacao:
      "No leg press, empurre com as pontas dos pés sem estender totalmente o joelho.",
  },
  {
    id: "panturrilha_smith_pe",
    nome: "Panturrilha no Smith em pé",
    grupo: "panturrilha",
    subgrupo: "Guiado",
    imagem: "",
    explicacao: "Com a barra guiada nas costas, suba na ponta dos pés.",
  },
  {
    id: "panturrilha_barra_costas",
    nome: "Panturrilha com barra nas costas",
    grupo: "panturrilha",
    subgrupo: "Barra",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/calves/barbell-standing-calf-raise.gif",
    explicacao: "Barra nas costas, eleve os calcanhares num step.",
  },
  {
    id: "panturrilha_halteres_unilateral",
    nome: "Panturrilha unilateral com halter",
    grupo: "panturrilha",
    subgrupo: "Halteres",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/calves/dumbbell-single-leg-calf-raise.gif",
    explicacao:
      "Uma perna por vez, halter na mão do lado oposto, sobe na ponta do pé.",
  },
  {
    id: "panturrilha_step",
    nome: "Panturrilha no step",
    grupo: "panturrilha",
    subgrupo: "Peso corporal",
    imagem: "",
    explicacao:
      "Pontas dos pés no step, eleve os calcanhares e desça alongando.",
  },
  {
    id: "panturrilha_unilateral_pe",
    nome: "Panturrilha unilateral em pé",
    grupo: "panturrilha",
    subgrupo: "Peso corporal",
    imagem: "",
    explicacao: "Apoio em uma perna; trabalha equilíbrio e panturrilha.",
  },
  {
    id: "panturrilha_burrinho",
    nome: "Panturrilha no burrinho",
    grupo: "panturrilha",
    subgrupo: "Máquina",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/calves/lever-donkey-calf-raise.gif",
    explicacao: "Máquina específica; carga apoiada no quadril.",
  },
  {
    id: "panturrilha_salto",
    nome: "Panturrilha com salto",
    grupo: "panturrilha",
    subgrupo: "Peso corporal",
    imagem: "",
    explicacao:
      "Salte usando apenas a panturrilha; aterrisse na ponta dos pés.",
  },
  {
    id: "panturrilha_sentada_barra",
    nome: "Panturrilha sentada com barra",
    grupo: "panturrilha",
    subgrupo: "Barra",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/calves/barbell-seated-calf-raise.gif",
    explicacao: "Sentado, barra sobre os joelhos, eleve os calcanhares.",
  },
  {
    id: "panturrilha_elastico",
    nome: "Panturrilha com elástico",
    grupo: "panturrilha",
    subgrupo: "Elástico",
    imagem: "",
    explicacao:
      "Elástico sob as pontas dos pés, eleve os calcanhares contra a resistência.",
  },

  // ===== TRAPÉZIO =====
  {
    id: "encolhimento_barra",
    nome: "Encolhimento com barra",
    grupo: "trapezio",
    subgrupo: "Barra",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/traps/barbell-shrug.gif",
    explicacao:
      "Segure a barra à frente do corpo e eleve os ombros em direção às orelhas.",
  },
  {
    id: "encolhimento_halteres",
    nome: "Encolhimento com halteres",
    grupo: "trapezio",
    subgrupo: "Halteres",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/traps/dumbbell-shrug.gif",
    explicacao: "Mesma mecânica com halteres ao lado do corpo.",
  },
  {
    id: "encolhimento_smith",
    nome: "Encolhimento no Smith",
    grupo: "trapezio",
    subgrupo: "Guiado",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/traps/smith-shrug.gif",
    explicacao: "Barra guiada; útil pra segurar carga pesada com segurança.",
  },
  {
    id: "encolhimento_polia",
    nome: "Encolhimento na polia",
    grupo: "trapezio",
    subgrupo: "Polia",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/traps/cable-shrug.gif",
    explicacao: "Tensão contínua; excelente pra finalizar o trapézio.",
  },
  {
    id: "encolhimento_unilateral",
    nome: "Encolhimento unilateral",
    grupo: "trapezio",
    subgrupo: "Halteres",
    imagem: "",
    explicacao: "Um halter por vez; corrige assimetrias de trapézio.",
  },
  {
    id: "remada_alta_polia",
    nome: "Remada alta na polia",
    grupo: "trapezio",
    subgrupo: "Polia",
    imagem: "",
    explicacao:
      "Puxe a barra da polia baixa até a altura do peito, cotovelos altos.",
  },
  {
    id: "remada_alta_barra_trapezio",
    nome: "Remada alta com barra",
    grupo: "trapezio",
    subgrupo: "Barra",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/delts/barbell-upright-row.gif",
    explicacao: "Barra à frente, puxe até o peito. Trapézio + deltoide.",
  },
  {
    id: "face_pull_trapezio",
    nome: "Face pull para trapézio",
    grupo: "trapezio",
    subgrupo: "Polia",
    imagem: "",
    explicacao:
      "Corda alta puxada em direção ao rosto; foco em trapézio médio/inferior.",
  },
  {
    id: "encolhimento_trap_bar",
    nome: "Encolhimento com trap bar",
    grupo: "trapezio",
    subgrupo: "Barra",
    imagem: "",
    explicacao: "Barra hexagonal; pegada neutra e segura.",
  },

  // ===== EXERCÍCIOS ADICIONAIS =====
  {
    id: "supino_maquina_inclinado",
    nome: "Supino inclinado na máquina",
    grupo: "peito",
    subgrupo: "Máquina",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/pectorals/lever-incline-chest-press.gif",
    explicacao:
      "Ajuste o banco para que as alças fiquem na linha do peito e empurre sem perder o contato das costas com o encosto.",
  },
  {
    id: "chest_press_convergente",
    nome: "Chest press convergente",
    grupo: "peito",
    subgrupo: "Máquina",
    imagem: "",
    explicacao:
      "Empurre as alças independentes em direção ao centro, controlando a volta e mantendo os ombros apoiados.",
  },
  {
    id: "supino_hammer_strength",
    nome: "Supino na máquina articulada (Hammer Strength)",
    grupo: "peito",
    subgrupo: "Máquina",
    imagem: "",
    explicacao:
      "Empurre as alavancas articuladas à frente; a trajetória independente permite trabalhar cada lado com controle.",
  },
  {
    id: "supino_unilateral_polia",
    nome: "Supino unilateral na polia",
    grupo: "peito",
    subgrupo: "Polia",
    imagem: "",
    explicacao:
      "Com a polia atrás do corpo, empurre uma alça à frente sem girar o tronco; repita do outro lado.",
  },
  {
    id: "crucifixo_polia_media",
    nome: "Crucifixo na polia na altura do peito",
    grupo: "peito",
    subgrupo: "Polia",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/pectorals/cable-standing-fly.gif",
    explicacao:
      "Com os cabos na altura dos ombros, aproxime as mãos à frente em arco, mantendo os cotovelos levemente flexionados.",
  },
  {
    id: "crucifixo_polia_unilateral",
    nome: "Crucifixo unilateral na polia",
    grupo: "peito",
    subgrupo: "Polia",
    imagem: "",
    explicacao:
      "Faça o movimento de crucifixo com um braço por vez, estabilizando o tronco e evitando rotação.",
  },
  {
    id: "supino_squeeze_halteres",
    nome: "Supino squeeze com halteres",
    grupo: "peito",
    subgrupo: "Halteres",
    imagem: "",
    explicacao:
      "Mantenha os halteres pressionados um contra o outro durante a subida e a descida para exigir adução do peitoral.",
  },
  {
    id: "floor_press_barra",
    nome: "Floor press com barra",
    grupo: "peito",
    subgrupo: "Barra",
    imagem: "",
    explicacao:
      "Deitado no chão, desça até os tríceps tocarem suavemente o solo e empurre; a amplitude reduzida exige controle.",
  },
  {
    id: "floor_press_halteres",
    nome: "Floor press com halteres",
    grupo: "peito",
    subgrupo: "Halteres",
    imagem: "",
    explicacao:
      "Faça o supino no chão com halteres, pausando brevemente quando os braços encostarem no solo.",
  },
  {
    id: "spoto_press",
    nome: "Spoto press",
    grupo: "peito",
    subgrupo: "Barra",
    imagem: "",
    explicacao:
      "No supino, pare a barra poucos centímetros acima do peito, segure por um instante e empurre sem relaxar a tensão.",
  },
  {
    id: "supino_tempo",
    nome: "Supino com descida controlada",
    grupo: "peito",
    subgrupo: "Barra",
    imagem: "",
    explicacao:
      "Use carga moderada e faça a fase de descida lentamente, mantendo trajetória estável e sem quicar a barra.",
  },
  {
    id: "flexao_arqueiro",
    nome: "Flexão arqueiro",
    grupo: "peito",
    subgrupo: "Peso corporal",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/pectorals/archer-push-up.gif",
    explicacao:
      "Abra bastante as mãos e transfira o peso para um braço enquanto o outro fica mais estendido; exige força e estabilidade.",
  },
  {
    id: "flexao_argolas",
    nome: "Flexão nas argolas",
    grupo: "peito",
    subgrupo: "Peso corporal",
    imagem: "",
    explicacao:
      "Apoie as mãos em argolas suspensas e faça flexões controlando a instabilidade; comece com as argolas altas.",
  },
  {
    id: "flexao_explosiva",
    nome: "Flexão pliométrica",
    grupo: "peito",
    subgrupo: "Peso corporal",
    imagem: "",
    explicacao:
      "Empurre o chão de forma explosiva para tirar as mãos do solo; aterrisse com cotovelos flexionados e controle.",
  },
  {
    id: "flexao_deficit",
    nome: "Flexão com déficit",
    grupo: "peito",
    subgrupo: "Peso corporal",
    imagem: "",
    explicacao:
      "Apoie as mãos em barras ou suportes estáveis para aumentar a amplitude; não force o ombro no alongamento.",
  },
  {
    id: "remada_chest_supported",
    nome: "Remada com peito apoiado",
    grupo: "costas",
    subgrupo: "Máquina",
    imagem: "",
    explicacao:
      "Apoie o peito no encosto e puxe as alças em direção às costelas, evitando impulsionar o tronco.",
  },
  {
    id: "remada_banco_inclinado",
    nome: "Remada com halteres no banco inclinado",
    grupo: "costas",
    subgrupo: "Halteres",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/upper-back/dumbbell-incline-row.gif",
    explicacao:
      "De bruços em banco inclinado, reme os halteres ao lado do tronco sem tirar o peito do apoio.",
  },
  {
    id: "remada_seal",
    nome: "Seal row (remada seal)",
    grupo: "costas",
    subgrupo: "Barra",
    imagem: "",
    explicacao:
      "Deitado de bruços em banco alto, puxe a barra até o banco; use apoio firme e carga que permita amplitude.",
  },
  {
    id: "remada_pendlay",
    nome: "Remada Pendlay",
    grupo: "costas",
    subgrupo: "Barra",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/upper-back/barbell-pendlay-row.gif",
    explicacao:
      "Com tronco próximo da horizontal, puxe a barra do chão até o abdômen a cada repetição, mantendo a coluna neutra.",
  },
  {
    id: "remada_meadows",
    nome: "Remada Meadows",
    grupo: "costas",
    subgrupo: "Barra",
    imagem: "",
    explicacao:
      "Use uma barra presa em uma extremidade e reme com uma mão, levando o cotovelo em direção ao quadril.",
  },
  {
    id: "remada_gorila",
    nome: "Remada gorila",
    grupo: "costas",
    subgrupo: "Halteres",
    imagem: "",
    explicacao:
      "Em posição de dobradiça do quadril, reme um halter de cada vez alternando os lados e estabilizando o tronco.",
  },
  {
    id: "remada_unilateral_polia",
    nome: "Remada unilateral na polia",
    grupo: "costas",
    subgrupo: "Polia",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/upper-back/cable-one-arm-bent-over-row.gif",
    explicacao:
      "Puxe a alça em direção à cintura com um braço, mantendo o ombro longe da orelha e o tronco estável.",
  },
  {
    id: "remada_alta_peito_apoiado",
    nome: "Remada alta com peito apoiado",
    grupo: "costas",
    subgrupo: "Máquina",
    imagem: "",
    explicacao:
      "Com os cotovelos mais abertos, puxe as alças em direção à parte alta do peito para enfatizar costas superiores.",
  },
  {
    id: "puxada_neutra_fechada",
    nome: "Puxada frontal com pegada neutra fechada",
    grupo: "costas",
    subgrupo: "Polia",
    imagem: "",
    explicacao:
      "Use pegador paralelo e puxe em direção à parte superior do peito, sem inclinar excessivamente o tronco.",
  },
  {
    id: "puxada_unilateral_ajoelhada",
    nome: "Puxada unilateral ajoelhada",
    grupo: "costas",
    subgrupo: "Polia",
    imagem: "",
    explicacao:
      "Ajoelhado diante da polia alta, puxe o cotovelo em direção ao bolso, alongando o dorsal na volta.",
  },
  {
    id: "puxada_braco_reto_corda",
    nome: "Puxada de braços retos com corda",
    grupo: "costas",
    subgrupo: "Polia",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/lats/cable-straight-arm-pulldown-with-rope.gif",
    explicacao:
      "Com braços quase estendidos, leve a corda da altura do rosto até as coxas, sem transformar o movimento em tríceps.",
  },
  {
    id: "remada_invertida_barra",
    nome: "Remada invertida na barra",
    grupo: "costas",
    subgrupo: "Peso corporal",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/upper-back/inverted-row-v-2.gif",
    explicacao:
      "Suspenso sob uma barra baixa, mantenha o corpo alinhado e puxe o peito em direção à barra.",
  },
  {
    id: "remada_trx",
    nome: "Remada no TRX",
    grupo: "costas",
    subgrupo: "Peso corporal",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/upper-back/inverted-row-with-straps.gif",
    explicacao:
      "Segure as alças, incline o corpo e puxe o peito em direção às mãos; quanto mais horizontal, mais difícil.",
  },
  {
    id: "rack_pull",
    nome: "Rack pull",
    grupo: "costas",
    subgrupo: "Barra",
    imagem: "",
    explicacao:
      "Faça a parte superior do levantamento terra com a barra apoiada em suportes; use técnica rigorosa e carga progressiva.",
  },
  {
    id: "terra_deficit",
    nome: "Levantamento terra com déficit",
    grupo: "costas",
    subgrupo: "Barra",
    imagem: "",
    explicacao:
      "Suba em uma plataforma baixa e levante a barra do chão, ampliando a amplitude; requer domínio do terra convencional.",
  },
  {
    id: "terra_pegada_aberta",
    nome: "Levantamento terra com pegada aberta",
    grupo: "costas",
    subgrupo: "Barra",
    imagem: "",
    explicacao:
      "Use pegada mais ampla que a convencional e mantenha a barra próxima ao corpo; exige mobilidade e técnica.",
  },
  {
    id: "barra_fixa_neutra",
    nome: "Barra fixa com pegada neutra",
    grupo: "costas",
    subgrupo: "Peso corporal",
    imagem: "",
    explicacao:
      "Com as palmas voltadas uma para a outra, suba até o queixo ultrapassar as mãos e desça controlando.",
  },
  {
    id: "barra_fixa_com_peso",
    nome: "Barra fixa com carga",
    grupo: "costas",
    subgrupo: "Peso corporal",
    imagem: "",
    explicacao:
      "Depois de dominar repetições livres, adicione carga presa a um cinto e mantenha amplitude completa.",
  },
  {
    id: "muscle_up_barra",
    nome: "Muscle-up na barra",
    grupo: "costas",
    subgrupo: "Peso corporal",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/lats/muscle-up-on-vertical-bar.gif",
    explicacao:
      "Combine uma puxada explosiva com a transição dos punhos sobre a barra e um fundo; habilidade avançada, faça progressões.",
  },
  {
    id: "landmine_press",
    nome: "Desenvolvimento landmine",
    grupo: "ombros",
    subgrupo: "Barra",
    imagem: "",
    explicacao:
      "Empurre a extremidade da barra presa ao chão em diagonal, mantendo abdômen firme e evitando arquear a lombar.",
  },
  {
    id: "landmine_press_unilateral",
    nome: "Landmine press unilateral",
    grupo: "ombros",
    subgrupo: "Barra",
    imagem: "",
    explicacao:
      "Em base estável, empurre a barra em diagonal com um braço e controle a descida; evite rodar o tronco.",
  },
  {
    id: "z_press",
    nome: "Z press",
    grupo: "ombros",
    subgrupo: "Barra",
    imagem: "",
    explicacao:
      "Sentado no chão com pernas estendidas, empurre a barra acima da cabeça sem usar impulso das pernas.",
  },
  {
    id: "desenvolvimento_kettlebell",
    nome: "Desenvolvimento com kettlebell",
    grupo: "ombros",
    subgrupo: "Halteres",
    imagem: "",
    explicacao:
      "Segure o kettlebell na posição de rack e empurre acima da cabeça, mantendo punho alinhado e tronco firme.",
  },
  {
    id: "desenvolvimento_bottoms_up",
    nome: "Desenvolvimento bottoms-up com kettlebell",
    grupo: "ombros",
    subgrupo: "Halteres",
    imagem: "",
    explicacao:
      "Segure o kettlebell invertido e faça uma pressão leve acima da cabeça; priorize estabilidade e carga baixa.",
  },
  {
    id: "elevacao_y_banco",
    nome: "Elevação em Y no banco inclinado",
    grupo: "ombros",
    subgrupo: "Halteres",
    imagem: "",
    explicacao:
      "De bruços em banco inclinado, eleve os braços em formato de Y com polegares para cima e carga leve.",
  },
  {
    id: "elevacao_y_polia",
    nome: "Elevação em Y na polia",
    grupo: "ombros",
    subgrupo: "Polia",
    imagem: "",
    explicacao:
      "Cruze os cabos baixos e eleve as mãos em diagonal formando um Y, sem encolher os ombros.",
  },
  {
    id: "trap3_raise",
    nome: "Trap-3 raise",
    grupo: "ombros",
    subgrupo: "Halteres",
    imagem: "",
    explicacao:
      "De bruços em banco inclinado, eleve um braço em diagonal acima da cabeça com carga muito leve e controle escapular.",
  },
  {
    id: "rotacao_cubana",
    nome: "Rotação cubana",
    grupo: "ombros",
    subgrupo: "Halteres",
    imagem: "",
    explicacao:
      "Com braços elevados e cotovelos dobrados, gire os ombros para elevar os antebraços; use carga mínima e sem dor.",
  },
  {
    id: "scaption_halteres",
    nome: "Elevação no plano da escápula (scaption)",
    grupo: "ombros",
    subgrupo: "Halteres",
    imagem: "",
    explicacao:
      "Eleve os braços cerca de 30° à frente do plano lateral, com polegares para cima e carga moderada.",
  },
  {
    id: "pike_push_up",
    nome: "Flexão pike",
    grupo: "ombros",
    subgrupo: "Peso corporal",
    imagem: "",
    explicacao:
      "Com quadril elevado em formato de V invertido, flexione os cotovelos levando a cabeça em direção ao chão.",
  },
  {
    id: "handstand_pushup_parede",
    nome: "Flexão de parada de mãos na parede",
    grupo: "ombros",
    subgrupo: "Peso corporal",
    imagem: "",
    explicacao:
      "De frente para a parede ou de costas conforme a progressão, desça e empurre com controle; habilidade avançada que exige preparação.",
  },
  {
    id: "elevacao_lateral_parcial",
    nome: "Elevação lateral parcial no final da série",
    grupo: "ombros",
    subgrupo: "Halteres",
    imagem: "",
    explicacao:
      "Após repetições completas, faça parciais controladas em amplitude confortável; não use balanço nem dor como meta.",
  },
  {
    id: "rosca_bayesian",
    nome: "Rosca Bayesian na polia",
    grupo: "biceps",
    subgrupo: "Polia",
    imagem: "",
    explicacao:
      "Com a polia atrás do corpo, faça a rosca mantendo o braço discretamente atrás do tronco e cotovelo estável.",
  },
  {
    id: "rosca_drag",
    nome: "Rosca drag com barra",
    grupo: "biceps",
    subgrupo: "Barra",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/biceps/barbell-drag-curl.gif",
    explicacao:
      "Puxe a barra rente ao tronco levando os cotovelos discretamente para trás, sem elevar os ombros.",
  },
  {
    id: "rosca_cabo_alta",
    nome: "Rosca bíceps na polia alta",
    grupo: "biceps",
    subgrupo: "Polia",
    imagem: "",
    explicacao:
      "Com os braços abertos na altura dos ombros, flexione os cotovelos levando as mãos em direção à cabeça.",
  },
  {
    id: "rosca_aranha_halteres",
    nome: "Rosca aranha com halteres",
    grupo: "biceps",
    subgrupo: "Halteres",
    imagem: "",
    explicacao:
      "Apoie o peito em banco inclinado e faça a rosca com os braços pendentes, sem movimentar os ombros.",
  },
  {
    id: "rosca_aranha_polia",
    nome: "Rosca aranha na polia",
    grupo: "biceps",
    subgrupo: "Polia",
    imagem: "",
    explicacao:
      "Com o peito apoiado e cabo baixo, flexione os cotovelos mantendo tensão durante todo o movimento.",
  },
  {
    id: "rosca_zottman",
    nome: "Rosca Zottman",
    grupo: "biceps",
    subgrupo: "Halteres",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/biceps/dumbbell-zottman-curl.gif",
    explicacao:
      "Suba com pegada supinada, gire para pronada no topo e desça controlando; envolve bíceps e antebraço.",
  },
  {
    id: "rosca_martelo_cruzada",
    nome: "Rosca martelo cruzada",
    grupo: "biceps",
    subgrupo: "Halteres",
    imagem: "",
    explicacao:
      "Leve o halter em direção ao ombro oposto com pegada neutra, sem girar o tronco.",
  },
  {
    id: "rosca_unilateral_cabo",
    nome: "Rosca unilateral no cabo",
    grupo: "biceps",
    subgrupo: "Polia",
    imagem: "",
    explicacao:
      "Faça a flexão de cotovelo com uma alça, mantendo o braço junto ao corpo e a tensão constante.",
  },
  {
    id: "rosca_pronada_cabo",
    nome: "Rosca pronada na polia",
    grupo: "biceps",
    subgrupo: "Polia",
    imagem: "",
    explicacao:
      "Use barra reta com pegada pronada e flexione os cotovelos sem deixar os punhos dobrarem.",
  },
  {
    id: "rosca_excentrica",
    nome: "Rosca com ênfase excêntrica",
    grupo: "biceps",
    subgrupo: "Halteres",
    imagem: "",
    explicacao:
      "Suba com ajuda se necessário e faça a descida lenta por alguns segundos, usando carga que permita controle.",
  },
  {
    id: "rosca_chin_up",
    nome: "Barra fixa supinada para bíceps",
    grupo: "biceps",
    subgrupo: "Peso corporal",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/lats/chin-up.gif",
    explicacao:
      "Com pegada supinada e mãos na largura dos ombros, puxe o corpo até a barra e desça sem despencar.",
  },
  {
    id: "triceps_frances_corda",
    nome: "Extensão de tríceps acima da cabeça com corda",
    grupo: "triceps",
    subgrupo: "Polia",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/triceps/cable-overhead-triceps-extension-rope-attachment.gif",
    explicacao:
      "De costas para a polia, estenda os cotovelos acima da cabeça mantendo braços próximos às orelhas.",
  },
  {
    id: "triceps_unilateral_invertido",
    nome: "Tríceps unilateral com pegada invertida",
    grupo: "triceps",
    subgrupo: "Polia",
    imagem: "",
    explicacao:
      "Com palma voltada para cima, estenda um cotovelo por vez mantendo o braço junto ao tronco.",
  },
  {
    id: "triceps_cross_body",
    nome: "Extensão de tríceps cruzada no cabo",
    grupo: "triceps",
    subgrupo: "Polia",
    imagem: "",
    explicacao:
      "Com o cabo ao lado do corpo, estenda o antebraço cruzando levemente à frente, sem mover o ombro.",
  },
  {
    id: "jm_press",
    nome: "JM press",
    grupo: "triceps",
    subgrupo: "Barra",
    imagem: "",
    explicacao:
      "Movimento híbrido entre supino fechado e tríceps testa; use carga leve no início e mantenha punhos e cotovelos alinhados.",
  },
  {
    id: "rolling_triceps_extension",
    nome: "Extensão rolling com halteres",
    grupo: "triceps",
    subgrupo: "Halteres",
    imagem: "",
    explicacao:
      "Deitado, flexione os cotovelos levando os halteres perto da cabeça e permita pequena extensão do ombro antes de estender.",
  },
  {
    id: "tate_press",
    nome: "Tate press",
    grupo: "triceps",
    subgrupo: "Halteres",
    imagem: "",
    explicacao:
      "Deitado, mantenha os cotovelos abertos e desça os halteres em direção ao peito; estenda os cotovelos de volta.",
  },
  {
    id: "triceps_extensao_unilateral_acima",
    nome: "Extensão unilateral acima da cabeça",
    grupo: "triceps",
    subgrupo: "Halteres",
    imagem: "",
    explicacao:
      "Com um halter atrás da cabeça, estenda o cotovelo mantendo o braço estável e sem arquear a lombar.",
  },
  {
    id: "triceps_flexao_diamante",
    nome: "Flexão diamante",
    grupo: "triceps",
    subgrupo: "Peso corporal",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/triceps/diamond-push-up.gif",
    explicacao:
      "Aproxime as mãos sob o peito formando um losango e faça a flexão com cotovelos controlados.",
  },
  {
    id: "triceps_argolas",
    nome: "Extensão de tríceps nas argolas",
    grupo: "triceps",
    subgrupo: "Peso corporal",
    imagem: "",
    explicacao:
      "Segure argolas à frente, incline o corpo e flexione e estenda os cotovelos mantendo o tronco alinhado.",
  },
  {
    id: "triceps_paralela_com_peso",
    nome: "Paralelas com carga",
    grupo: "triceps",
    subgrupo: "Peso corporal",
    imagem: "",
    explicacao:
      "Adicione carga apenas após dominar o movimento livre; mantenha amplitude confortável e controle dos ombros.",
  },
  {
    id: "wrist_roller",
    nome: "Wrist roller (enrolador de punho)",
    grupo: "antebraco",
    subgrupo: "Acessório",
    imagem: "",
    explicacao:
      "Enrole e desenrole a corda presa a um peso girando o bastão com controle; não deixe os ombros compensarem.",
  },
  {
    id: "pronação_supinacao_halter",
    nome: "Pronação e supinação com halter",
    grupo: "antebraco",
    subgrupo: "Halteres",
    imagem: "",
    explicacao:
      "Segure um halter por uma extremidade e gire lentamente o antebraço para dentro e para fora.",
  },
  {
    id: "desvio_radial_ulnar",
    nome: "Desvio radial e ulnar do punho",
    grupo: "antebraco",
    subgrupo: "Halteres",
    imagem: "",
    explicacao:
      "Com antebraço apoiado e carga leve, mova o punho de um lado para o outro sem girar o braço.",
  },
  {
    id: "plate_pinch",
    nome: "Pinça de anilhas (plate pinch)",
    grupo: "antebraco",
    subgrupo: "Anilhas",
    imagem: "",
    explicacao:
      "Segure anilhas lisas comprimindo-as entre os dedos e o polegar pelo tempo planejado, sem deixar cair.",
  },
  {
    id: "farmer_walk_unilateral",
    nome: "Suitcase carry",
    grupo: "antebraco",
    subgrupo: "Halteres",
    imagem: "",
    explicacao:
      "Caminhe segurando um peso em apenas uma mão, sem inclinar o tronco; trabalha pegada e estabilidade lateral.",
  },
  {
    id: "dead_hang",
    nome: "Dead hang (sustentação na barra)",
    grupo: "antebraco",
    subgrupo: "Peso corporal",
    imagem: "",
    explicacao:
      "Fique pendurado em uma barra firme pelo tempo tolerado, mantendo ombros ativos se necessário.",
  },
  {
    id: "finger_curl_barra",
    nome: "Finger curl com barra",
    grupo: "antebraco",
    subgrupo: "Barra",
    imagem: "",
    explicacao:
      "Com antebraços apoiados, deixe a barra rolar até os dedos e feche a mão para trazê-la de volta.",
  },
  {
    id: "rice_bucket",
    nome: "Exercícios de mão no balde de arroz",
    grupo: "antebraco",
    subgrupo: "Acessório",
    imagem: "",
    explicacao:
      "Enterre as mãos em um balde com arroz e faça movimentos controlados de abrir, fechar e girar os punhos.",
  },
  {
    id: "ab_wheel",
    nome: "Ab wheel (roda abdominal)",
    grupo: "abdomen",
    subgrupo: "Acessório",
    imagem: "",
    explicacao:
      "Ajoelhado, role a roda à frente mantendo costelas encaixadas e lombar neutra; volte sem deixar o quadril cair.",
  },
  {
    id: "rollout_barra",
    nome: "Rollout com barra",
    grupo: "abdomen",
    subgrupo: "Barra",
    imagem: "",
    explicacao:
      "Ajoelhado, role a barra à frente e retorne contraindo o abdômen; reduza a amplitude se a lombar arquear.",
  },
  {
    id: "toes_to_bar",
    nome: "Toes to bar",
    grupo: "abdomen",
    subgrupo: "Peso corporal",
    imagem: "",
    explicacao:
      "Pendurado na barra, eleve os pés até tocar ou se aproximar da barra, evitando balanço excessivo.",
  },
  {
    id: "knees_to_elbows",
    nome: "Joelhos aos cotovelos suspenso",
    grupo: "abdomen",
    subgrupo: "Peso corporal",
    imagem: "",
    explicacao:
      "Pendurado, eleve os joelhos em direção aos cotovelos com controle e sem embalar o corpo.",
  },
  {
    id: "dragon_flag",
    nome: "Dragon flag",
    grupo: "abdomen",
    subgrupo: "Peso corporal",
    imagem: "",
    explicacao:
      "Deitado, segure um apoio atrás da cabeça e eleve o corpo alinhado, descendo lentamente; progressão avançada.",
  },
  {
    id: "windshield_wipers",
    nome: "Windshield wipers suspenso",
    grupo: "abdomen",
    subgrupo: "Peso corporal",
    imagem: "",
    explicacao:
      "Pendurado na barra, eleve as pernas e leve-as lateralmente com amplitude compatível com seu controle.",
  },
  {
    id: "pallof_press",
    nome: "Pallof press",
    grupo: "abdomen",
    subgrupo: "Polia",
    imagem: "",
    explicacao:
      "De lado para a polia, empurre a alça à frente resistindo à rotação do tronco e mantenha o quadril estável.",
  },
  {
    id: "suitcase_carry_core",
    nome: "Caminhada unilateral para core",
    grupo: "abdomen",
    subgrupo: "Halteres",
    imagem: "",
    explicacao:
      "Caminhe com um halter pesado em apenas uma mão, mantendo o tronco reto e evitando inclinação lateral.",
  },
  {
    id: "body_saw",
    nome: "Body saw",
    grupo: "abdomen",
    subgrupo: "Peso corporal",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/abs/roller-body-saw.gif",
    explicacao:
      "Em prancha nos antebraços, deslize o corpo para frente e para trás em pequena amplitude sem perder a posição.",
  },
  {
    id: "bird_dog",
    nome: "Bird dog",
    grupo: "abdomen",
    subgrupo: "Peso corporal",
    imagem: "",
    explicacao:
      "Em quatro apoios, estenda braço e perna opostos sem girar a pelve; pause e alterne os lados.",
  },
  {
    id: "prancha_com_toque_ombro",
    nome: "Prancha com toque no ombro",
    grupo: "abdomen",
    subgrupo: "Peso corporal",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/abs/shoulder-tap.gif",
    explicacao:
      "Em prancha alta, toque o ombro oposto alternando as mãos e evitando balançar o quadril.",
  },
  {
    id: "abdominal_v_up",
    nome: "Abdominal canivete (V-up)",
    grupo: "abdomen",
    subgrupo: "Peso corporal",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/abs/jackknife-sit-up.gif",
    explicacao:
      "Deitado, eleve simultaneamente pernas e tronco para aproximar mãos e pés, descendo com controle.",
  },
  {
    id: "glute_drive_maquina",
    nome: "Glute drive na máquina",
    grupo: "gluteos",
    subgrupo: "Máquina",
    imagem: "",
    explicacao:
      "Apoie as costas e posicione a almofada no quadril; estenda o quadril sem hiperestender a lombar.",
  },
  {
    id: "hip_thrust_smith",
    nome: "Hip thrust no Smith",
    grupo: "gluteos",
    subgrupo: "Guiado",
    imagem: "",
    explicacao:
      "Com a barra guiada sobre o quadril, eleve até alinhar tronco e coxas, mantendo o queixo recolhido.",
  },
  {
    id: "hip_thrust_unilateral",
    nome: "Hip thrust unilateral",
    grupo: "gluteos",
    subgrupo: "Peso corporal",
    imagem: "",
    explicacao:
      "Com uma perna apoiada, estenda o quadril sem deixar a pelve girar; adicione carga apenas quando dominar.",
  },
  {
    id: "pull_through_polia",
    nome: "Pull-through na polia",
    grupo: "gluteos",
    subgrupo: "Polia",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/glutes/cable-pull-through-with-rope.gif",
    explicacao:
      "De costas para a polia baixa, leve o quadril para trás e estenda-o contraindo glúteos, sem puxar com os braços.",
  },
  {
    id: "kickback_maquina",
    nome: "Coice de glúteo na máquina",
    grupo: "gluteos",
    subgrupo: "Máquina",
    imagem: "",
    explicacao:
      "Ajuste o apoio e empurre a plataforma para trás com o pé, evitando arquear a lombar.",
  },
  {
    id: "abducao_quadril_polia",
    nome: "Abdução de quadril na polia",
    grupo: "gluteos",
    subgrupo: "Polia",
    imagem: "",
    explicacao:
      "Com tornozeleira, afaste a perna lateralmente sem inclinar o tronco e retorne devagar.",
  },
  {
    id: "caminhada_lateral_elastico",
    nome: "Caminhada lateral com elástico",
    grupo: "gluteos",
    subgrupo: "Elástico",
    imagem: "",
    explicacao:
      "Com elástico nos joelhos ou tornozelos, dê passos laterais mantendo tensão e joelhos alinhados.",
  },
  {
    id: "monster_walk",
    nome: "Monster walk com elástico",
    grupo: "gluteos",
    subgrupo: "Elástico",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/glutes/monster-walk.gif",
    explicacao:
      "Com elástico nos tornozelos ou pés, caminhe em diagonal para frente e para trás mantendo a tensão.",
  },
  {
    id: "hip_airplane",
    nome: "Hip airplane",
    grupo: "gluteos",
    subgrupo: "Peso corporal",
    imagem: "",
    explicacao:
      "Em apoio unilateral e quadril inclinado, abra e feche a pelve lentamente sem perder o equilíbrio; exercício avançado.",
  },
  {
    id: "reverse_hyper",
    nome: "Hiperextensão reversa",
    grupo: "gluteos",
    subgrupo: "Máquina",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/glutes/lever-reverse-hyperextension.gif",
    explicacao:
      "Com o tronco apoiado, eleve as pernas pelo quadril sem embalar e sem exagerar na extensão lombar.",
  },
  {
    id: "step_up_alto",
    nome: "Step-up em caixa alta",
    grupo: "gluteos",
    subgrupo: "Peso corporal",
    imagem: "",
    explicacao:
      "Suba em uma caixa estável com uma perna, evitando impulsionar com a perna de baixo; controle a descida.",
  },
  {
    id: "belt_squat",
    nome: "Belt squat (agachamento com cinto)",
    grupo: "quadriceps",
    subgrupo: "Máquina",
    imagem: "",
    explicacao:
      "Use o cinto conectado à carga e agache mantendo o tronco estável; reduz a necessidade de apoiar peso nas costas.",
  },
  {
    id: "pendulum_squat",
    nome: "Agachamento pendular",
    grupo: "quadriceps",
    subgrupo: "Máquina",
    imagem: "",
    explicacao:
      "Ajuste os apoios da máquina pendular, desça de forma controlada e empurre a plataforma sem travar os joelhos.",
  },
  {
    id: "agachamento_espanhol",
    nome: "Agachamento espanhol",
    grupo: "quadriceps",
    subgrupo: "Elástico",
    imagem: "",
    explicacao:
      "Com uma faixa firme atrás dos joelhos, sente o quadril para trás e desça mantendo o tronco ereto.",
  },
  {
    id: "reverse_nordic",
    nome: "Reverse Nordic curl",
    grupo: "quadriceps",
    subgrupo: "Peso corporal",
    imagem: "",
    explicacao:
      "Ajoelhado e com quadril estendido, incline o corpo para trás mantendo linha entre joelhos e ombros; amplitude gradual.",
  },
  {
    id: "peterson_step_up",
    nome: "Peterson step-up",
    grupo: "quadriceps",
    subgrupo: "Peso corporal",
    imagem: "",
    explicacao:
      "Em um degrau baixo, flexione o joelho da perna de apoio e toque o calcanhar oposto no chão com controle.",
  },
  {
    id: "split_squat_pe_frente_elevado",
    nome: "Agachamento dividido com pé dianteiro elevado",
    grupo: "quadriceps",
    subgrupo: "Halteres",
    imagem: "",
    explicacao:
      "Eleve o pé da frente em uma plataforma baixa para ampliar a amplitude; mantenha o joelho alinhado.",
  },
  {
    id: "agachamento_calcanhar_elevado",
    nome: "Agachamento com calcanhares elevados",
    grupo: "quadriceps",
    subgrupo: "Halteres",
    imagem: "",
    explicacao:
      "Apoie os calcanhares em cunha ou anilhas firmes e agache com tronco mais ereto, sem perder o equilíbrio.",
  },
  {
    id: "agachamento_tempo",
    nome: "Agachamento com pausa",
    grupo: "quadriceps",
    subgrupo: "Barra",
    imagem: "",
    explicacao:
      "Pause brevemente no fundo mantendo tensão e coluna neutra, depois suba sem quicar.",
  },
  {
    id: "leg_press_unilateral",
    nome: "Leg press unilateral",
    grupo: "quadriceps",
    subgrupo: "Máquina",
    imagem: "",
    explicacao:
      "Execute uma perna por vez, mantendo quadril apoiado no encosto e sem deixar o joelho colapsar para dentro.",
  },
  {
    id: "extensora_isometrica",
    nome: "Cadeira extensora isométrica",
    grupo: "quadriceps",
    subgrupo: "Máquina",
    imagem: "",
    explicacao:
      "Estenda os joelhos até uma posição confortável e sustente a contração por alguns segundos sem balançar.",
  },
  {
    id: "agachamento_caixa",
    nome: "Agachamento até a caixa",
    grupo: "quadriceps",
    subgrupo: "Barra",
    imagem: "",
    explicacao:
      "Desça até tocar levemente uma caixa na altura adequada e suba sem relaxar ou despencar sobre o apoio.",
  },
  {
    id: "rdl_unilateral",
    nome: "Levantamento terra romeno unilateral",
    grupo: "posterior_coxa",
    subgrupo: "Halteres",
    imagem: "",
    explicacao:
      "Em uma perna, leve o quadril para trás enquanto o tronco inclina e a perna livre se estende; mantenha a pelve alinhada.",
  },
  {
    id: "rdl_b_stance",
    nome: "Levantamento terra romeno em B-stance",
    grupo: "posterior_coxa",
    subgrupo: "Halteres",
    imagem: "",
    explicacao:
      "Deixe a maior parte do peso na perna da frente e a outra como apoio; faça a dobradiça do quadril com controle.",
  },
  {
    id: "flexao_nordica_assistida",
    nome: "Nordic curl assistido",
    grupo: "posterior_coxa",
    subgrupo: "Peso corporal",
    imagem: "",
    explicacao:
      "Ajoelhado com os pés presos, use elástico ou apoio das mãos para controlar a descida e auxiliar a subida.",
  },
  {
    id: "mesa_flexora_unilateral",
    nome: "Mesa flexora unilateral",
    grupo: "posterior_coxa",
    subgrupo: "Máquina",
    imagem: "",
    explicacao:
      "Flexione uma perna por vez, mantendo o quadril apoiado e sem girar o corpo.",
  },
  {
    id: "flexora_sentada_unilateral",
    nome: "Cadeira flexora unilateral",
    grupo: "posterior_coxa",
    subgrupo: "Máquina",
    imagem: "",
    explicacao:
      "Trabalhe uma perna por vez na flexora sentada, controlando o retorno até a extensão confortável.",
  },
  {
    id: "good_morning_sentado",
    nome: "Good morning sentado",
    grupo: "posterior_coxa",
    subgrupo: "Peso corporal",
    imagem: "",
    explicacao:
      "Sentado na ponta do banco, incline o tronco a partir do quadril mantendo a coluna neutra e retorne.",
  },
  {
    id: "terra_kettlebell",
    nome: "Levantamento terra com kettlebell",
    grupo: "posterior_coxa",
    subgrupo: "Halteres",
    imagem: "",
    explicacao:
      "Com o kettlebell entre os pés, leve o quadril para trás, segure a alça e estenda o quadril para subir.",
  },
  {
    id: "hip_hinge_polia",
    nome: "Dobradiça de quadril na polia",
    grupo: "posterior_coxa",
    subgrupo: "Polia",
    imagem: "",
    explicacao:
      "Com a polia baixa atrás do corpo, recue o quadril e volte estendendo-o, mantendo braços apenas como ligação.",
  },
  {
    id: "flexao_joelho_deslizante",
    nome: "Flexão de joelhos com discos deslizantes",
    grupo: "posterior_coxa",
    subgrupo: "Peso corporal",
    imagem: "",
    explicacao:
      "Deitado com calcanhares sobre discos, eleve o quadril e deslize os pés para longe e para perto.",
  },
  {
    id: "ponte_isquiotibiais_calcanhar",
    nome: "Ponte com calcanhares elevados",
    grupo: "posterior_coxa",
    subgrupo: "Peso corporal",
    imagem: "",
    explicacao:
      "Apoie os calcanhares em um banco ou step, eleve o quadril e mantenha a contração dos posteriores.",
  },
  {
    id: "panturrilha_hack",
    nome: "Panturrilha no hack squat",
    grupo: "panturrilha",
    subgrupo: "Máquina",
    imagem: "",
    explicacao:
      "Com a parte da frente dos pés na plataforma, abaixe e eleve os calcanhares sem rebater no fim da amplitude.",
  },
  {
    id: "panturrilha_unilateral_sentado",
    nome: "Panturrilha sentada unilateral",
    grupo: "panturrilha",
    subgrupo: "Máquina",
    imagem: "",
    explicacao:
      "Faça a elevação de um calcanhar por vez na máquina sentada, mantendo pausa no topo e alongamento controlado.",
  },
  {
    id: "panturrilha_bent_knee",
    nome: "Panturrilha com joelhos flexionados",
    grupo: "panturrilha",
    subgrupo: "Halteres",
    imagem: "",
    explicacao:
      "Mantenha os joelhos dobrados e eleve os calcanhares em um degrau, enfatizando o sóleo.",
  },
  {
    id: "panturrilha_donkey",
    nome: "Donkey calf raise",
    grupo: "panturrilha",
    subgrupo: "Máquina",
    imagem:
      "https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/calves/lever-donkey-calf-raise.gif",
    explicacao:
      "Com o tronco inclinado e quadril apoiado, eleve e abaixe os calcanhares com amplitude confortável.",
  },
  {
    id: "tibialis_raise_parede",
    nome: "Tibialis raise na parede",
    grupo: "panturrilha",
    subgrupo: "Peso corporal",
    imagem: "",
    explicacao:
      "Com as costas na parede e calcanhares no chão, eleve a ponta dos pés em direção às canelas.",
  },
  {
    id: "tibialis_maquina",
    nome: "Elevação de tibial anterior na máquina",
    grupo: "panturrilha",
    subgrupo: "Máquina",
    imagem: "",
    explicacao:
      "Apoie os pés no equipamento e puxe as pontas dos pés em direção às canelas contra a resistência.",
  },
  {
    id: "pogo_jumps",
    nome: "Pogo jumps",
    grupo: "panturrilha",
    subgrupo: "Peso corporal",
    imagem: "",
    explicacao:
      "Faça pequenos saltos rápidos usando principalmente os tornozelos, com joelhos pouco flexionados e aterrissagem leve.",
  },
  {
    id: "panturrilha_isometrica",
    nome: "Panturrilha isométrica no topo",
    grupo: "panturrilha",
    subgrupo: "Peso corporal",
    imagem: "",
    explicacao:
      "Eleve os calcanhares e sustente a posição alta sem deixar o tornozelo ceder.",
  },
  {
    id: "kelso_shrug",
    nome: "Kelso shrug",
    grupo: "trapezio",
    subgrupo: "Halteres",
    imagem: "",
    explicacao:
      "Com peito apoiado em banco inclinado e braços estendidos, aproxime as escápulas sem dobrar os cotovelos.",
  },
  {
    id: "encolhimento_banco_inclinado",
    nome: "Encolhimento com peito apoiado",
    grupo: "trapezio",
    subgrupo: "Halteres",
    imagem: "",
    explicacao:
      "De bruços em banco inclinado, eleve os ombros em direção às orelhas sem balançar o tronco.",
  },
  {
    id: "encolhimento_acima_cabeca",
    nome: "Encolhimento acima da cabeça",
    grupo: "trapezio",
    subgrupo: "Barra",
    imagem: "",
    explicacao:
      "Com a barra estabilizada acima da cabeça, eleve e abaixe as escápulas com carga leve e controle.",
  },
  {
    id: "scapular_pull_up",
    nome: "Barra fixa escapular",
    grupo: "trapezio",
    subgrupo: "Peso corporal",
    imagem: "",
    explicacao:
      "Pendurado com cotovelos estendidos, abaixe e eleve as escápulas sem transformar o movimento em uma barra fixa.",
  },
  {
    id: "high_pull_barra",
    nome: "Puxada alta explosiva com barra",
    grupo: "trapezio",
    subgrupo: "Barra",
    imagem: "",
    explicacao:
      "A partir da extensão do quadril, conduza a barra para cima com explosão e técnica; movimento avançado, não é uma remada comum.",
  },
  {
    id: "face_pull_rotacao_externa",
    nome: "Face pull com rotação externa",
    grupo: "trapezio",
    subgrupo: "Polia",
    imagem: "",
    explicacao:
      "Puxe a corda em direção à testa e termine girando as mãos para trás, com carga leve e sem arquear a lombar.",
  },
  {
    id: "encolhimento_atras_corpo",
    nome: "Encolhimento com barra atrás do corpo",
    grupo: "trapezio",
    subgrupo: "Barra",
    imagem: "",
    explicacao:
      "Segure a barra atrás das coxas e eleve os ombros verticalmente; use amplitude confortável e carga moderada.",
  },
];
