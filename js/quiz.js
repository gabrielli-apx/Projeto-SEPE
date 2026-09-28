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
  },
  {
    pergunta: "Quem foi o responsável por decifrar os hieróglifos egípcios?",
    alternativas: [
      "Jean-François Champollion",
      "Howard Carter",
      "Heinrich Schliemann",
      "Flinders Petrie"
    ],
    resposta: 0
  },
  {
    pergunta: "Qual achado arqueológico foi fundamental para decifrar os hieróglifos?",
    alternativas: [
      "A Pedra de Roseta",
      "O Papiro de Ebers",
      "A Máscara de Tutancâmon",
      "O Obelisco de Luxor"
    ],
    resposta: 0
  },
  {
    pergunta: "A Pedra de Roseta trazia o mesmo texto em quantos sistemas de escrita?",
    alternativas: ["Um", "Dois", "Três", "Quatro"],
    resposta: 2
  },
  {
    pergunta: "Como eram chamados os profissionais responsáveis por escrever hieróglifos no Egito?",
    alternativas: ["Sacerdotes apenas", "Escribas", "Faraós", "Mercadores"],
    resposta: 1
  },
  {
    pergunta: "Em que material os egípcios costumavam escrever no dia a dia?",
    alternativas: ["Papiro", "Placas de argila", "Pergaminho", "Tecido"],
    resposta: 0
  },
  {
    pergunta: "Os hieróglifos podiam ser escritos em quais direções?",
    alternativas: [
      "Apenas da esquerda para a direita",
      "Apenas de cima para baixo",
      "Em várias direções, dependendo da composição",
      "Apenas em círculo"
    ],
    resposta: 2
  },
  {
    pergunta: "O que significa a palavra \"hieróglifo\" em sua origem grega?",
    alternativas: [
      "Escrita sagrada",
      "Escrita secreta",
      "Escrita dos deuses",
      "Escrita do povo"
    ],
    resposta: 0
  },
  {
    pergunta: "Além dos hieróglifos formais, que escrita simplificada os egípcios usavam no cotidiano?",
    alternativas: ["Demótica", "Hierática", "Cuneiforme", "Fenícia"],
    resposta: 1
  },
  {
    pergunta: "Os nomes de faraós eram frequentemente destacados dentro de qual elemento?",
    alternativas: ["Um cartucho oval", "Um triângulo", "Uma coroa desenhada", "Um círculo vazado"],
    resposta: 0
  },
  {
    pergunta: "Por quanto tempo, aproximadamente, os hieróglifos foram utilizados no Egito?",
    alternativas: [
      "Algumas décadas",
      "Cerca de 100 anos",
      "Milhares de anos",
      "Apenas durante uma dinastia"
    ],
    resposta: 2
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
  },
  {
    pergunta: "O que significa literalmente a palavra \"cuneiforme\"?",
    alternativas: [
      "Em forma de cunha",
      "Em forma de círculo",
      "Escrita dos reis",
      "Escrita secreta"
    ],
    resposta: 0
  },
  {
    pergunta: "Além dos sumérios, quais outros povos usaram a escrita cuneiforme?",
    alternativas: [
      "Maias e astecas",
      "Acádios, babilônios e assírios",
      "Gregos e romanos",
      "Fenícios e hebreus"
    ],
    resposta: 1
  },
  {
    pergunta: "Qual é considerado um dos primeiros grandes textos literários da humanidade, escrito em cuneiforme?",
    alternativas: [
      "A Ilíada",
      "O Livro dos Mortos",
      "A Epopeia de Gilgamesh",
      "O Popol Vuh"
    ],
    resposta: 2
  },
  {
    pergunta: "Como as placas de argila com cuneiforme eram preservadas?",
    alternativas: [
      "Pintadas com tinta especial",
      "Secas ao sol ou cozidas em forno",
      "Envolvidas em papiro",
      "Cobertas com cera"
    ],
    resposta: 1
  },
  {
    pergunta: "A escrita cuneiforme evoluiu a partir de qual sistema mais antigo?",
    alternativas: ["Pictogramas", "Alfabeto fenício", "Hieróglifos", "Ideogramas chineses"],
    resposta: 0
  },
  {
    pergunta: "Os sinais cuneiformes podiam representar sons de que tipo?",
    alternativas: ["Apenas vogais isoladas", "Sílabas", "Apenas números", "Apenas nomes próprios"],
    resposta: 1
  },
  {
    pergunta: "Onde ficavam armazenadas grandes coleções de tábuas cuneiformes na Antiguidade?",
    alternativas: [
      "Em templos apenas",
      "Em bibliotecas e arquivos reais",
      "Em túmulos",
      "Em mercados"
    ],
    resposta: 1
  },
  {
    pergunta: "O Código de Hamurábi, um dos primeiros grandes conjuntos de leis escritas, foi registrado em qual sistema?",
    alternativas: ["Cuneiforme", "Hieroglífico", "Fenício", "Grego"],
    resposta: 0
  },
  {
    pergunta: "Por aproximadamente quanto tempo a escrita cuneiforme foi utilizada?",
    alternativas: [
      "Algumas décadas",
      "Cerca de 300 anos",
      "Cerca de 3.000 anos",
      "Menos de 100 anos"
    ],
    resposta: 2
  },
  {
    pergunta: "O que levou ao desuso gradual da escrita cuneiforme?",
    alternativas: [
      "A proibição por um imperador",
      "A substituição por alfabetos mais simples, como o aramaico",
      "A destruição de todas as placas",
      "A falta de argila na região"
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
  },
  {
    pergunta: "Os fenícios eram conhecidos principalmente por qual atividade?",
    alternativas: ["Agricultura", "Comércio marítimo", "Mineração", "Guerra terrestre"],
    resposta: 1
  },
  {
    pergunta: "Aproximadamente quantas letras tinha o alfabeto fenício?",
    alternativas: ["10", "22", "40", "60"],
    resposta: 1
  },
  {
    pergunta: "O alfabeto fenício representava principalmente sons de quê?",
    alternativas: ["Consoantes", "Vogais", "Números", "Ideias abstratas"],
    resposta: 0
  },
  {
    pergunta: "Em que direção o alfabeto fenício costumava ser escrito?",
    alternativas: [
      "Da esquerda para a direita",
      "Da direita para a esquerda",
      "De cima para baixo",
      "Em espiral"
    ],
    resposta: 1
  },
  {
    pergunta: "Como os fenícios ajudaram a espalhar seu alfabeto pelo Mediterrâneo?",
    alternativas: [
      "Através de conquistas militares",
      "Através do comércio marítimo",
      "Através de missões religiosas",
      "Através de casamentos reais"
    ],
    resposta: 1
  },
  {
    pergunta: "Além do grego, o alfabeto fenício também deu origem, indiretamente, a quais outros alfabetos usados até hoje?",
    alternativas: [
      "Hebraico e árabe",
      "Cirílico e coreano",
      "Chinês e japonês",
      "Maia e asteca"
    ],
    resposta: 0
  },
  {
    pergunta: "Por que o alfabeto fenício era considerado revolucionário para a época?",
    alternativas: [
      "Porque tinha milhares de símbolos",
      "Porque era simples e fácil de aprender",
      "Porque só podia ser usado por sacerdotes",
      "Porque era escrito em pedra"
    ],
    resposta: 1
  },
  {
    pergunta: "Quais eram algumas das principais cidades fenícias ligadas ao comércio?",
    alternativas: [
      "Biblos, Tiro e Sidon",
      "Atenas e Esparta",
      "Roma e Cartago",
      "Babilônia e Nínive"
    ],
    resposta: 0
  },
  {
    pergunta: "Em que materiais os fenícios costumavam registrar informações comerciais?",
    alternativas: [
      "Placas de argila apenas",
      "Papiro e cerâmica",
      "Folhas de metal apenas",
      "Tecido apenas"
    ],
    resposta: 1
  },
  {
    pergunta: "Por que o alfabeto fenício é considerado a base dos alfabetos ocidentais modernos?",
    alternativas: [
      "Porque foi usado sem alterações até hoje",
      "Porque deu origem ao alfabeto grego, que depois originou o latino",
      "Porque era idêntico ao alfabeto latino",
      "Porque foi criado pelos romanos"
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
  },
  {
    pergunta: "Quantas letras tem o alfabeto grego moderno?",
    alternativas: ["20", "22", "24", "30"],
    resposta: 2
  },
  {
    pergunta: "O alfabeto grego é usado até hoje para escrever qual língua?",
    alternativas: ["Grego moderno", "Turco", "Búlgaro", "Armênio"],
    resposta: 0
  },
  {
    pergunta: "Além da escrita do idioma, em que outra área letras gregas são usadas até hoje?",
    alternativas: [
      "Culinária",
      "Matemática e ciência",
      "Moda",
      "Arquitetura apenas"
    ],
    resposta: 1
  },
  {
    pergunta: "Quais são obras literárias gregas antigas famosas, escritas com esse alfabeto?",
    alternativas: [
      "Ilíada e Odisseia",
      "Epopeia de Gilgamesh",
      "Popol Vuh",
      "Livro dos Mortos"
    ],
    resposta: 0
  },
  {
    pergunta: "Em que direção o alfabeto grego é escrito atualmente?",
    alternativas: [
      "Da direita para a esquerda",
      "Da esquerda para a direita",
      "De baixo para cima",
      "Em espiral"
    ],
    resposta: 1
  },
  {
    pergunta: "Como era chamado o estilo antigo de escrita grega que alternava a direção a cada linha?",
    alternativas: ["Bustrofédon", "Hierático", "Demótico", "Cuneiforme"],
    resposta: 0
  },
  {
    pergunta: "As letras gregas alfa e beta deram origem a quais letras do alfabeto latino?",
    alternativas: ["A e B", "C e D", "X e Y", "M e N"],
    resposta: 0
  },
  {
    pergunta: "Além do latino, o alfabeto grego influenciou diretamente qual outro alfabeto usado hoje?",
    alternativas: ["Cirílico", "Árabe", "Hebraico", "Coreano"],
    resposta: 0
  },
  {
    pergunta: "Quais filósofos famosos da Antiguidade escreveram em grego?",
    alternativas: [
      "Sócrates, Platão e Aristóteles",
      "Confúcio e Lao Tsé",
      "Cícero e Sêneca",
      "Zaratustra e Buda"
    ],
    resposta: 0
  },
  {
    pergunta: "A distinção entre letras maiúsculas e minúsculas no alfabeto grego se consolidou em qual período?",
    alternativas: [
      "Na Grécia Clássica",
      "Na Idade Média/período bizantino",
      "No século XX",
      "Na Pré-História"
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
  },
  {
    pergunta: "Quantas letras tinha originalmente o alfabeto latino clássico?",
    alternativas: ["21", "23", "26", "30"],
    resposta: 1
  },
  {
    pergunta: "O latim era a língua oficial de qual grande império da Antiguidade?",
    alternativas: ["Império Persa", "Império Romano", "Império Egípcio", "Império Grego"],
    resposta: 1
  },
  {
    pergunta: "Quais línguas atuais são chamadas de línguas românicas por derivarem do latim?",
    alternativas: [
      "Português, espanhol, francês, italiano e romeno",
      "Inglês, alemão e holandês",
      "Russo, polonês e tcheco",
      "Árabe, hebraico e persa"
    ],
    resposta: 0
  },
  {
    pergunta: "O alfabeto latino clássico não distinguia originalmente entre quais pares de letras?",
    alternativas: [
      "I/J e U/V",
      "A/E e O/U",
      "B/D e P/Q",
      "F/S e C/G"
    ],
    resposta: 0
  },
  {
    pergunta: "Como era chamada a escrita formal usada em inscrições romanas oficiais?",
    alternativas: [
      "Capital romana (letras maiúsculas)",
      "Cursiva medieval",
      "Escrita gótica",
      "Escrita carolíngia"
    ],
    resposta: 0
  },
  {
    pergunta: "Em que período foram incorporadas ao alfabeto latino as letras J, U e W?",
    alternativas: [
      "Na Roma Antiga",
      "Na Idade Média e período moderno",
      "No século XX",
      "Antes do latim existir"
    ],
    resposta: 1
  },
  {
    pergunta: "Em qual escala o alfabeto latino é hoje o sistema de escrita mais usado?",
    alternativas: ["Apenas na Europa", "Apenas na América", "No mundo", "Apenas em ex-colônias romanas"],
    resposta: 2
  },
  {
    pergunta: "Em que materiais os romanos costumavam escrever documentos oficiais?",
    alternativas: [
      "Pergaminho, papiro e tábuas de cera",
      "Placas de argila apenas",
      "Folhas de bananeira",
      "Tecido apenas"
    ],
    resposta: 0
  },
  {
    pergunta: "Mesmo após deixar de ser falado no cotidiano, em que contextos o latim continuou sendo usado?",
    alternativas: [
      "Igreja, ciência e direito",
      "Apenas em jogos",
      "Apenas em culinária",
      "Não continuou sendo usado em nenhum contexto"
    ],
    resposta: 0
  },
  {
    pergunta: "Como é chamada a variante popular do latim, falada pelo povo comum, que deu origem às línguas românicas?",
    alternativas: ["Latim clássico", "Latim vulgar", "Latim eclesiástico", "Latim arcaico"],
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
  },
  {
    pergunta: "O sistema de escrita maia combinava quais tipos de sinais?",
    alternativas: [
      "Logogramas e sinais silábicos",
      "Apenas letras isoladas",
      "Apenas ideogramas chineses",
      "Apenas números romanos"
    ],
    resposta: 0
  },
  {
    pergunta: "Além de códices, onde a escrita maia era frequentemente registrada?",
    alternativas: [
      "Estelas de pedra e monumentos",
      "Placas de metal apenas",
      "Tecidos apenas",
      "Folhas de papiro"
    ],
    resposta: 0
  },
  {
    pergunta: "Aproximadamente quantos códices maias sobreviveram até hoje?",
    alternativas: ["Apenas quatro", "Cerca de cem", "Mais de mil", "Nenhum"],
    resposta: 0
  },
  {
    pergunta: "Por que muitos códices maias foram destruídos?",
    alternativas: [
      "Foram queimados por colonizadores espanhóis",
      "Foram perdidos no mar",
      "Foram roubados por outros povos maias",
      "Se desintegraram naturalmente em poucos anos"
    ],
    resposta: 0
  },
  {
    pergunta: "Quem ajudou a decifrar boa parte da escrita maia no século XX?",
    alternativas: [
      "Jean-François Champollion",
      "Yuri Knórozov e outros linguistas",
      "Heinrich Schliemann",
      "Howard Carter"
    ],
    resposta: 1
  },
  {
    pergunta: "Como eram chamados os blocos que organizavam a escrita maia?",
    alternativas: ["Cartuchos", "Glifos", "Cunhas", "Silabários"],
    resposta: 1
  },
  {
    pergunta: "A escrita maia era usada para registrar rituais relacionados a quê?",
    alternativas: [
      "Religião e astronomia",
      "Apenas comércio",
      "Apenas guerra",
      "Apenas culinária"
    ],
    resposta: 0
  },
  {
    pergunta: "Em que material os maias costumavam escrever seus códices?",
    alternativas: [
      "Papel feito de casca de árvore (amate)",
      "Placas de argila",
      "Pergaminho de couro",
      "Folhas metálicas"
    ],
    resposta: 0
  },
  {
    pergunta: "A escrita maia é considerada, na América pré-colombiana, um dos poucos sistemas com qual característica?",
    alternativas: [
      "Escrita plenamente desenvolvida antes da chegada europeia",
      "Uso exclusivo de números",
      "Ausência total de registros históricos",
      "Escrita idêntica à egípcia"
    ],
    resposta: 0
  },
  {
    pergunta: "Além de textos históricos, o que mais os glifos maias podiam registrar sobre governantes?",
    alternativas: [
      "Apenas o nome do reino vizinho",
      "Nomes, títulos e feitos de governantes",
      "Somente listas de impostos",
      "Somente receitas culinárias"
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
  },
  {
    pergunta: "O alfabeto avéstico foi criado com base em qual outro sistema de escrita?",
    alternativas: ["Alfabeto pahlavi", "Alfabeto grego", "Alfabeto latino", "Hieróglifos egípcios"],
    resposta: 0
  },
  {
    pergunta: "O Avesta é o livro sagrado associado a qual figura religiosa?",
    alternativas: ["Zoroastro", "Buda", "Confúcio", "Maomé"],
    resposta: 0
  },
  {
    pergunta: "Uma das características do alfabeto avéstico é que ele conseguia representar com precisão o quê?",
    alternativas: [
      "Apenas números",
      "Um grande número de sons e nuances fonéticas",
      "Apenas símbolos religiosos",
      "Apenas nomes próprios"
    ],
    resposta: 1
  },
  {
    pergunta: "Em que região histórica a escrita avéstica foi desenvolvida?",
    alternativas: ["Pérsia / Ásia Central", "Península Itálica", "Mesoamérica", "Ilhas Gregas"],
    resposta: 0
  },
  {
    pergunta: "Em que direção o alfabeto avéstico costuma ser escrito?",
    alternativas: [
      "Da esquerda para a direita",
      "Da direita para a esquerda",
      "De cima para baixo",
      "Em espiral"
    ],
    resposta: 1
  },
  {
    pergunta: "Por que a escrita avéstica foi criada especificamente com tanta precisão fonética?",
    alternativas: [
      "Para registrar com exatidão os textos sagrados que antes eram só orais",
      "Para facilitar o comércio",
      "Para uso exclusivo em mapas",
      "Para substituir o cuneiforme"
    ],
    resposta: 0
  },
  {
    pergunta: "O zoroastrismo é apontado por estudiosos como uma influência para conceitos presentes em quais religiões posteriores?",
    alternativas: [
      "Judaísmo, cristianismo e islamismo",
      "Budismo e hinduísmo apenas",
      "Religião maia e asteca",
      "Nenhuma religião posterior"
    ],
    resposta: 0
  },
  {
    pergunta: "Antes da criação da escrita avéstica, como os textos religiosos zoroastristas eram transmitidos?",
    alternativas: ["Oralmente", "Em placas de argila", "Em papiro", "Em pergaminho"],
    resposta: 0
  },
  {
    pergunta: "A escrita avéstica é amplamente usada no dia a dia atualmente?",
    alternativas: [
      "Sim, é uma das mais usadas no mundo",
      "Não, é praticamente uma escrita histórica e litúrgica",
      "Sim, mas só em jornais",
      "Sim, substituiu o alfabeto latino em vários países"
    ],
    resposta: 1
  },
  {
    pergunta: "Além de orações, que outros tipos de textos o Avesta reúne?",
    alternativas: [
      "Hinos, leis e textos cosmológicos",
      "Apenas receitas culinárias",
      "Apenas registros comerciais",
      "Apenas mapas geográficos"
    ],
    resposta: 0
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
  },
  {
    pergunta: "O que são memes, no contexto da comunicação escrita atual?",
    alternativas: [
      "Documentos oficiais do governo",
      "Imagens ou textos humorísticos compartilhados online",
      "Um tipo de alfabeto antigo",
      "Um sistema de escrita cuneiforme moderno"
    ],
    resposta: 1
  },
  {
    pergunta: "Como os aplicativos de mensagens mudaram a forma de escrever no dia a dia?",
    alternativas: [
      "Tornaram a escrita mais lenta e formal",
      "Tornaram a escrita mais rápida e informal",
      "Eliminaram totalmente o uso de texto",
      "Voltaram a exigir escrita em placas de argila"
    ],
    resposta: 1
  },
  {
    pergunta: "Qual é a função de um corretor automático (autocorretor)?",
    alternativas: [
      "Traduzir textos para outros idiomas",
      "Corrigir erros de digitação e ortografia",
      "Criar novos emojis",
      "Bloquear mensagens indevidas"
    ],
    resposta: 1
  },
  {
    pergunta: "O que são hashtags?",
    alternativas: [
      "Palavras-chave usadas para categorizar conteúdo em redes sociais",
      "Um tipo de emoji",
      "Um sistema de escrita antigo",
      "Um aplicativo de mensagens"
    ],
    resposta: 0
  },
  {
    pergunta: "Como a inteligência artificial tem influenciado a escrita atual?",
    alternativas: [
      "Não tem nenhuma relação com escrita",
      "Ajudando a gerar, corrigir e revisar textos",
      "Substituindo totalmente a necessidade de ler",
      "Apenas criando desenhos, sem relação com texto"
    ],
    resposta: 1
  },
  {
    pergunta: "O que caracteriza a linguagem usada em muitas mensagens de texto do dia a dia?",
    alternativas: [
      "Formalidade extrema",
      "Abreviações e informalidade",
      "Uso exclusivo de latim",
      "Uso obrigatório de hieróglifos"
    ],
    resposta: 1
  },
  {
    pergunta: "Como a escrita digital tem afetado a ortografia tradicional?",
    alternativas: [
      "Não trouxe nenhuma mudança",
      "Trouxe simplificações e novas formas de escrever",
      "Tornou a ortografia mais rígida do que antes",
      "Eliminou completamente as regras gramaticais oficiais"
    ],
    resposta: 1
  },
  {
    pergunta: "O que é considerado \"internetês\"?",
    alternativas: [
      "Um idioma oficial reconhecido pela ONU",
      "Uma forma de escrita informal usada na internet",
      "Um sistema de escrita da Antiguidade",
      "Um tipo de teclado"
    ],
    resposta: 1
  },
  {
    pergunta: "Além de textos, que outros formatos a comunicação escrita digital costuma incorporar?",
    alternativas: [
      "Áudios, vídeos e gifs",
      "Apenas desenhos em pedra",
      "Apenas placas de argila digitalizadas",
      "Nenhum outro formato"
    ],
    resposta: 0
  },
  {
    pergunta: "Por que a escrita continua importante mesmo com o avanço de áudios e vídeos?",
    alternativas: [
      "Porque permite registro, precisão e acessibilidade",
      "Porque é a única forma de comunicação que existe",
      "Porque substitui totalmente a fala",
      "Porque não pode ser usada em meios digitais"
    ],
    resposta: 0
  }
];
 
 
// ========================================
// categorias
// ========================================
 
const categorias = {
  hieroglifos: { nome: "Hieróglifos", perguntas: hieroglifos },
  cuneiforme: { nome: "Cuneiforme", perguntas: cuneiforme },
  fenicio: { nome: "Fenício", perguntas: fenicio },
  grego: { nome: "Grego", perguntas: grego },
  latim: { nome: "Latim", perguntas: latim },
  maias: { nome: "Glifos Maias", perguntas: maias },
  avestico: { nome: "Avéstico", perguntas: avestico },
  atualidade: { nome: "Atualidade", perguntas: atualidade }
};
 
 
// ========================================
// pegar categorias selecionadas
// ========================================
 
const categoriasSalvas = localStorage.getItem("categoriasSelecionadas");
 
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
  // criar lista de perguntas (com while)
  // apenas com as escritas que foram selecionadas
  // ========================================
 
  let perguntasDisponiveis = [];
 
  let i = 0;
  while (i < categoriasSelecionadas.length) {
 
    const chaveCategoria = categoriasSelecionadas[i];
 
    if (categorias[chaveCategoria]) {
 
      const listaDaCategoria = categorias[chaveCategoria].perguntas;
      const nomeDaCategoria = categorias[chaveCategoria].nome;
 
      let j = 0;
      while (j < listaDaCategoria.length) {
 
        const p = listaDaCategoria[j];
 
        perguntasDisponiveis.push({
          pergunta: p.pergunta,
          alternativas: p.alternativas,
          resposta: p.resposta,
          categoria: nomeDaCategoria,
          categoriaChave: chaveCategoria
        });
 
        j++;
      }
    }
 
    i++;
  }
 
 
  // ========================================
  // embaralhar perguntas (fisher-yates, com while)
  // ========================================
 
  let k = perguntasDisponiveis.length - 1;
  while (k > 0) {
 
    const sorteado = Math.floor(Math.random() * (k + 1));
 
    const temp = perguntasDisponiveis[k];
    perguntasDisponiveis[k] = perguntasDisponiveis[sorteado];
    perguntasDisponiveis[sorteado] = temp;
 
    k--;
  }
 
  // pegar no máximo o limite definido
 
  if (perguntasDisponiveis.length > LIMITE_PERGUNTAS) {
    perguntasDisponiveis = perguntasDisponiveis.slice(0, LIMITE_PERGUNTAS);
  }
 
 
  // ========================================
  // elementos do html
  // ========================================
 
  const numeroPergunta = document.getElementById("numeroPergunta");
  const categoriaPergunta = document.getElementById("categoriaPergunta");
  const pergunta = document.getElementById("pergunta");
  const botoes = document.querySelectorAll(".alternativa");
  const mensagem = document.getElementById("mensagem");
 
 
  // ========================================
  // controle
  // ========================================
 
  let numeroAtual = 0;
  let perguntaAtual;
  let acertos = 0;
 
  // lista (array) de acertos por categoria — só das categorias que caíram no quiz
 
  let listaCategorias = [];
 
  function buscarCategoriaNaLista(chave) {
 
    let n = 0;
    while (n < listaCategorias.length) {
 
      if (listaCategorias[n].chave === chave) {
        return listaCategorias[n];
      }
 
      n++;
    }
 
    return null;
  }
 
  let m = 0;
  while (m < perguntasDisponiveis.length) {
 
    const p = perguntasDisponiveis[m];
 
    let item = buscarCategoriaNaLista(p.categoriaChave);
 
    if (!item) {
 
      item = {
        chave: p.categoriaChave,
        nome: p.categoria,
        acertos: 0,
        total: 0
      };
 
      listaCategorias.push(item);
    }
 
    item.total++;
 
    m++;
  }
 
 
  // ========================================
  // mostrar pergunta
  // ========================================
 
  function mostrarPergunta() {
 
    perguntaAtual = perguntasDisponiveis[numeroAtual];
 
    if (!perguntaAtual) {
      finalizarQuiz();
      return;
    }
 
    numeroPergunta.textContent = numeroAtual + 1;
    categoriaPergunta.textContent = perguntaAtual.categoria;
    pergunta.textContent = perguntaAtual.pergunta;
 
    let b = 0;
    while (b < botoes.length) {
 
      const botao = botoes[b];
 
      botao.textContent = perguntaAtual.alternativas[b];
      botao.dataset.resposta = b;
      botao.disabled = false;
      botao.style.display = "block";
 
      b++;
    }
 
    mensagem.textContent = "";
  }
 
 
  // ========================================
  // botões de resposta
  // ========================================
 
  function desabilitarBotoes() {
 
    let b = 0;
    while (b < botoes.length) {
      botoes[b].disabled = true;
      b++;
    }
  }
 
  function responder(botaoClicado) {
 
    const resposta = Number(botaoClicado.dataset.resposta);
 
    if (resposta === perguntaAtual.resposta) {
 
      mensagem.textContent = "✓ Você acertou!";
      acertos++;
 
      const categoriaDaPergunta = buscarCategoriaNaLista(perguntaAtual.categoriaChave);
      categoriaDaPergunta.acertos++;
 
    } else {
 
      mensagem.textContent = "✗ Você errou!";
    }
 
    desabilitarBotoes();
 
    numeroAtual++;
 
    setTimeout(() => {
 
      if (numeroAtual >= perguntasDisponiveis.length) {
        finalizarQuiz();
      } else {
        mostrarPergunta();
      }
 
    }, 700);
  }
 
  let c = 0;
  while (c < botoes.length) {
 
    botoes[c].addEventListener("click", function () {
      responder(this);
    });
 
    c++;
  }
 
 
  // ========================================
  // finalizar
  // ========================================
 
  function finalizarQuiz() {
 
    const total = perguntasDisponiveis.length;
 
    let porcentagem = 0;
    if (total > 0) {
      porcentagem = Math.round((acertos / total) * 100);
    }
 
    // monta a lista de resultados por categoria, já com a porcentagem calculada
 
    let porCategoria = [];
 
    let d = 0;
    while (d < listaCategorias.length) {
 
      const item = listaCategorias[d];
 
      let percCategoria = 0;
      if (item.total > 0) {
        percCategoria = Math.round((item.acertos / item.total) * 100);
      }
 
      porCategoria.push({
        chave: item.chave,
        nome: item.nome,
        acertos: item.acertos,
        total: item.total,
        porcentagem: percCategoria
      });
 
      d++;
    }
 
    const resultado = {
      acertos: acertos,
      total: total,
      porcentagem: porcentagem,
      categorias: categoriasSelecionadas,
      porCategoria: porCategoria
    };
 
    localStorage.setItem("resultadoQuiz", JSON.stringify(resultado));
 
    window.location.href = "resultado.html";
  }
 
 
  // ========================================
  // iniciar
  // ========================================
 
  mostrarPergunta();
}
 