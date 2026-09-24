// ========================================
// configuração
// ========================================

const LIMITE_PERGUNTAS = 15;


// ========================================
// arrays de perguntas
// ========================================

const hieroglifos = [
  {
    pergunta: "Onde surgiram os hieróglifos?",
    alternativas: ["Egito Antigo", "Mesopotâmia", "Grécia", "Roma"],
    resposta: 0
  },
  {
    pergunta: "Onde os hieróglifos eram usados principalmente?",
    alternativas: [
      "Em cartas pessoais",
      "Em templos, túmulos e monumentos",
      "Em jornais",
      "Em contratos comerciais apenas"
    ],
    resposta: 1
  },
  {
    pergunta: "O que os símbolos hieroglíficos podiam representar?",
    alternativas: [
      "Apenas números",
      "Apenas desenhos decorativos",
      "Sons, palavras ou ideias",
      "Apenas nomes de reis"
    ],
    resposta: 2
  },
  {
    pergunta: "Para que os hieróglifos eram usados nos monumentos?",
    alternativas: [
      "Apenas decoração",
      "Registrar acontecimentos, histórias e assuntos religiosos",
      "Marcar preços de mercadorias",
      "Fazer mapas de navegação"
    ],
    resposta: 1
  },
  {
    pergunta: "Os hieróglifos eram formados principalmente por quê?",
    alternativas: [
      "Números romanos",
      "Desenhos e símbolos",
      "Letras do alfabeto latino",
      "Traços abstratos sem significado"
    ],
    resposta: 1
  }
];

const cuneiforme = [
  {
    pergunta: "Qual povo criou a escrita cuneiforme?",
    alternativas: ["Egípcios", "Sumérios", "Gregos", "Maias"],
    resposta: 1
  },
  {
    pergunta: "Em que material a escrita cuneiforme era registrada?",
    alternativas: ["Papel", "Placas de argila", "Pergaminho", "Tecido"],
    resposta: 1
  },
  {
    pergunta: "Qual ferramenta era usada para escrever em cuneiforme?",
    alternativas: ["Uma cunha", "Um pincel", "Uma pena", "Um lápis"],
    resposta: 0
  },
  {
    pergunta: "Onde surgiu a escrita cuneiforme?",
    alternativas: ["Mesopotâmia", "América", "Oceania", "Europa"],
    resposta: 0
  },
  {
    pergunta: "Para que a escrita cuneiforme era usada?",
    alternativas: [
      "Apenas para desenhos artísticos",
      "Registrar comércio, leis, histórias e textos religiosos",
      "Somente para cálculos matemáticos",
      "Somente para cartas pessoais"
    ],
    resposta: 1
  }
];

const fenicio = [
  {
    pergunta: "Quem desenvolveu o alfabeto fenício?",
    alternativas: ["Os fenícios", "Os romanos", "Os persas", "Os maias"],
    resposta: 0
  },
  {
    pergunta: "O que caracterizava o alfabeto fenício?",
    alternativas: [
      "Milhares de símbolos complexos",
      "Poucas letras representando sons",
      "Apenas desenhos de animais",
      "Símbolos apenas religiosos"
    ],
    resposta: 1
  },
  {
    pergunta: "Quais alfabetos sofreram influência do fenício?",
    alternativas: [
      "Grego e latino",
      "Cuneiforme e hieroglífico",
      "Maia e avéstico",
      "Nenhum outro"
    ],
    resposta: 0
  },
  {
    pergunta: "Em relação a outros sistemas, como era a escrita fenícia?",
    alternativas: [
      "Mais complexa que o cuneiforme",
      "Mais simples, com poucas letras",
      "Idêntica aos hieróglifos",
      "Baseada apenas em números"
    ],
    resposta: 1
  },
  {
    pergunta: "Qual foi a principal importância do alfabeto fenício?",
    alternativas: [
      "Criar o sistema numérico decimal",
      "Influenciar o surgimento dos alfabetos grego e latino",
      "Inventar o papel",
      "Criar o calendário solar"
    ],
    resposta: 1
  }
];

const grego = [
  {
    pergunta: "De qual alfabeto os gregos se inspiraram?",
    alternativas: ["Latino", "Fenício", "Maia", "Avéstico"],
    resposta: 1
  },
  {
    pergunta: "Qual foi uma das principais novidades do alfabeto grego?",
    alternativas: [
      "Uso de números romanos",
      "Letras representando vogais",
      "Escrita em placas de argila",
      "Uso exclusivo em templos"
    ],
    resposta: 1
  },
  {
    pergunta: "O alfabeto grego ajudou a preservar obras de quais áreas?",
    alternativas: [
      "Apenas culinária",
      "Filosofia, literatura, matemática e ciência",
      "Apenas comércio",
      "Apenas religião"
    ],
    resposta: 1
  },
  {
    pergunta: "O que os gregos fizeram com o alfabeto fenício?",
    alternativas: [
      "Ignoraram completamente",
      "Adaptaram para sua própria língua",
      "Proibiram seu uso",
      "Copiaram sem alterações"
    ],
    resposta: 1
  },
  {
    pergunta: "Por que a inclusão das vogais foi importante no alfabeto grego?",
    alternativas: [
      "Não teve nenhuma importância",
      "Tornou a escrita mais precisa para a língua grega",
      "Serviu apenas para decoração",
      "Foi usada só em textos religiosos"
    ],
    resposta: 1
  }
];

const latim = [
  {
    pergunta: "Onde surgiu o alfabeto latino?",
    alternativas: ["Península Itálica", "Grécia", "Egito", "Pérsia"],
    resposta: 0
  },
  {
    pergunta: "Quais alfabetos influenciaram o latino?",
    alternativas: [
      "Cuneiforme e maia",
      "Grego e etrusco",
      "Hieroglífico e avéstico",
      "Fenício e chinês"
    ],
    resposta: 1
  },
  {
    pergunta: "O alfabeto latino é base de quais línguas atuais?",
    alternativas: [
      "Chinês e japonês",
      "Árabe e hebraico",
      "Português, espanhol, francês e inglês",
      "Grego e russo"
    ],
    resposta: 2
  },
  {
    pergunta: "Como o alfabeto latino se espalhou pela Europa?",
    alternativas: [
      "Através do comércio marítimo fenício",
      "Com a expansão de Roma",
      "Pela conquista dos gregos",
      "Pela influência egípcia"
    ],
    resposta: 1
  },
  {
    pergunta: "O alfabeto latino é utilizado atualmente em quê?",
    alternativas: [
      "Apenas em textos religiosos",
      "Diversas línguas ao redor do mundo",
      "Somente em documentos históricos",
      "Apenas na Itália"
    ],
    resposta: 1
  }
];

const maias = [
  {
    pergunta: "Onde os povos maias desenvolveram sua escrita?",
    alternativas: ["Mesoamérica", "Mesopotâmia", "Europa", "Ásia"],
    resposta: 0
  },
  {
    pergunta: "O que os glifos maias podiam representar?",
    alternativas: [
      "Apenas números",
      "Palavras, sons ou ideias",
      "Apenas desenhos religiosos",
      "Nada, eram só decoração"
    ],
    resposta: 1
  },
  {
    pergunta: "A escrita maia estava relacionada a quais conhecimentos?",
    alternativas: [
      "Culinária e agricultura",
      "Astronomia e calendário",
      "Navegação marítima",
      "Metalurgia"
    ],
    resposta: 1
  },
  {
    pergunta: "O que os maias registravam com sua escrita?",
    alternativas: [
      "Apenas listas de compras",
      "Acontecimentos históricos, nomes de governantes e datas",
      "Somente desenhos de animais",
      "Nada de relevante"
    ],
    resposta: 1
  },
  {
    pergunta: "Como era formado o sistema de escrita maia?",
    alternativas: [
      "Por letras do alfabeto latino",
      "Por diversos glifos",
      "Apenas por números",
      "Por símbolos cuneiformes"
    ],
    resposta: 1
  }
];

const avestico = [
  {
    pergunta: "Para que a escrita avéstica era utilizada?",
    alternativas: [
      "Registrar textos religiosos do zoroastrismo",
      "Registrar leis comerciais",
      "Escrever cartas pessoais",
      "Fazer mapas"
    ],
    resposta: 0
  },
  {
    pergunta: "Onde a escrita avéstica foi utilizada?",
    alternativas: ["Antiga Pérsia", "Antigo Egito", "Grécia Antiga", "Roma Antiga"],
    resposta: 0
  },
  {
    pergunta: "Qual era o principal objetivo da escrita avéstica?",
    alternativas: [
      "Registrar batalhas",
      "Preservar ensinamentos e orações do Avesta",
      "Documentar o comércio",
      "Fazer previsões do tempo"
    ],
    resposta: 1
  },
  {
    pergunta: "A escrita avéstica está associada a qual religião?",
    alternativas: ["Zoroastrismo", "Cristianismo", "Politeísmo grego", "Religião maia"],
    resposta: 0
  },
  {
    pergunta: "Qual foi a contribuição da escrita avéstica ao longo do tempo?",
    alternativas: [
      "Nenhuma contribuição relevante",
      "Ajudou a transmitir conhecimentos religiosos entre gerações",
      "Serviu apenas para fins comerciais",
      "Foi usada só para arte decorativa"
    ],
    resposta: 1
  }
];

const atualidade = [
  {
    pergunta: "Onde a escrita está presente atualmente?",
    alternativas: [
      "Apenas em livros",
      "Praticamente em todos os aspectos da vida cotidiana",
      "Apenas em templos",
      "Apenas em documentos oficiais"
    ],
    resposta: 1
  },
  {
    pergunta: "O que a tecnologia criou como novas formas de comunicação escrita?",
    alternativas: [
      "Apenas cartas formais",
      "Mensagens instantâneas, abreviações e emojis",
      "Apenas hieróglifos digitais",
      "Nenhuma novidade"
    ],
    resposta: 1
  },
  {
    pergunta: "Em quais meios a escrita atual é utilizada?",
    alternativas: [
      "Livros, escolas, computadores e celulares",
      "Apenas em pedras",
      "Apenas em placas de argila",
      "Apenas em papiros"
    ],
    resposta: 0
  },
  {
    pergunta: "O que são os emojis, no contexto da escrita atual?",
    alternativas: [
      "Um alfabeto antigo",
      "Uma nova forma de comunicação visual digital",
      "Um sistema de escrita cuneiforme",
      "Um idioma oficial"
    ],
    resposta: 1
  },
  {
    pergunta: "Como as redes sociais influenciaram a escrita atual?",
    alternativas: [
      "Eliminaram a escrita por completo",
      "Trouxeram abreviações, gírias e novas formas de expressão",
      "Fizeram a escrita voltar a ser feita em argila",
      "Não tiveram nenhuma influência"
    ],
    resposta: 1
  }
];


// ========================================
// categorias
// ========================================

const categorias = {
  hieroglifos: {
    nome: "Hieróglifos",
    perguntas: hieroglifos
  },
  cuneiforme: {
    nome: "Cuneiforme",
    perguntas: cuneiforme
  },
  fenicio: {
    nome: "Fenício",
    perguntas: fenicio
  },
  grego: {
    nome: "Grego",
    perguntas: grego
  },
  latim: {
    nome: "Latim",
    perguntas: latim
  },
  maias: {
    nome: "Glifos Maias",
    perguntas: maias
  },
  avestico: {
    nome: "Avéstico",
    perguntas: avestico
  },
  atualidade: {
    nome: "Atualidade",
    perguntas: atualidade
  }
};


// ========================================
// pegar categorias selecionadas
// ========================================

const categoriasSalvas =
  localStorage.getItem("categoriasSelecionadas");

console.log("valor lido do localStorage:", categoriasSalvas);

if (!categoriasSalvas) {

  console.log("não achou nada — por isso ia redirecionar pro index");
  // window.location.href = "index.html"; // comentado só pra debug

} else {

  iniciarQuiz(JSON.parse(categoriasSalvas));

}


// ========================================
// função principal do quiz
// ========================================

function iniciarQuiz(categoriasSelecionadas) {

  // ========================================
  // criar lista de perguntas
  // ========================================

  let perguntasDisponiveis = [];

  categoriasSelecionadas.forEach((categoria) => {

    if (categorias[categoria]) {

      categorias[categoria].perguntas.forEach((pergunta) => {

        perguntasDisponiveis.push({
          pergunta: pergunta.pergunta,
          alternativas: pergunta.alternativas,
          resposta: pergunta.resposta,
          categoria: categorias[categoria].nome,
          categoriaChave: categoria
        });

      });

    }

  });


  // ========================================
  // embaralhar perguntas
  // ========================================

  perguntasDisponiveis.sort(() => Math.random() - 0.5);

  // pegar no máximo o limite definido

  perguntasDisponiveis =
    perguntasDisponiveis.slice(0, LIMITE_PERGUNTAS);


  // ========================================
  // elementos do html
  // ========================================

  const numeroPergunta =
    document.getElementById("numeroPergunta");

  const categoriaPergunta =
    document.getElementById("categoriaPergunta");

  const pergunta =
    document.getElementById("pergunta");

  const botoes =
    document.querySelectorAll(".alternativa");

  const mensagem =
    document.getElementById("mensagem");


  // ========================================
  // controle
  // ========================================

  let numeroAtual = 0;

  let perguntaAtual;

  let acertos = 0;

  // contagem de acertos e total de perguntas por categoria
  // (só das categorias que realmente caíram no quiz)

  let acertosPorCategoria = {};

  perguntasDisponiveis.forEach((p) => {

    if (!acertosPorCategoria[p.categoriaChave]) {

      acertosPorCategoria[p.categoriaChave] = {
        nome: p.categoria,
        acertos: 0,
        total: 0
      };

    }

    acertosPorCategoria[p.categoriaChave].total++;

  });


  // ========================================
  // mostrar pergunta
  // ========================================

  function mostrarPergunta() {

    perguntaAtual =
      perguntasDisponiveis[numeroAtual];

    if (!perguntaAtual) {
      finalizarQuiz();
      return;
    }

    numeroPergunta.textContent =
      numeroAtual + 1;

    categoriaPergunta.textContent =
      perguntaAtual.categoria;

    pergunta.textContent =
      perguntaAtual.pergunta;

    botoes.forEach((botao, index) => {

      botao.textContent =
        perguntaAtual.alternativas[index];

      botao.dataset.resposta =
        index;

      botao.disabled = false;

      botao.style.display = "block";

    });

    mensagem.textContent = "";

  }


  // ========================================
  // botões de resposta
  // ========================================

  botoes.forEach((botao) => {

    botao.addEventListener("click", () => {

      const resposta =
        Number(botao.dataset.resposta);

      if (resposta === perguntaAtual.resposta) {

        mensagem.textContent =
          "✓ Você acertou!";

        acertos++;

        acertosPorCategoria[perguntaAtual.categoriaChave].acertos++;

      } else {

        mensagem.textContent =
          "✗ Você errou!";

      }

      botoes.forEach((botao) => {
        botao.disabled = true;
      });

      numeroAtual++;

      setTimeout(() => {

        if (numeroAtual >= perguntasDisponiveis.length) {

          finalizarQuiz();

        } else {

          mostrarPergunta();

        }

      }, 700);

    });

  });


  // ========================================
  // finalizar
  // ========================================

  function finalizarQuiz() {

    const total = perguntasDisponiveis.length;

    const porcentagem =
      total > 0
        ? Math.round((acertos / total) * 100)
        : 0;

    // monta a lista de resultados por categoria, já com a porcentagem calculada

    const porCategoria = Object.keys(acertosPorCategoria).map((chave) => {

      const dados = acertosPorCategoria[chave];

      return {
        chave: chave,
        nome: dados.nome,
        acertos: dados.acertos,
        total: dados.total,
        porcentagem:
          dados.total > 0
            ? Math.round((dados.acertos / dados.total) * 100)
            : 0
      };

    });

    const resultado = {
      acertos: acertos,
      total: total,
      porcentagem: porcentagem,
      categorias: categoriasSelecionadas,
      porCategoria: porCategoria
    };

    localStorage.setItem(
      "resultadoQuiz",
      JSON.stringify(resultado)
    );

    window.location.href = "resultado.html";

  }


  // ========================================
  // iniciar
  // ========================================

  mostrarPergunta();

}