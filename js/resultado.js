const nomesCategorias = {
  hieroglifos: "Hieróglifos",
  cuneiforme: "Cuneiforme",
  fenicio: "Fenício",
  grego: "Grego",
  latim: "Latim",
  maias: "Glifos Maias",
  avestico: "Avéstico",
  atualidade: "Atualidade"
};

const resultadoSalvo = localStorage.getItem("resultadoQuiz");

if (!resultadoSalvo) {
  window.location.href = "index.html";
} else {
  const resultado = JSON.parse(resultadoSalvo);
  mostrarResultado(resultado);
}

function mostrarResultado(resultado) {
  const assuntosEscolhidos = document.getElementById("assuntosEscolhidos");
  const detalheAcertos = document.getElementById("detalheAcertos");
  const mensagemNivel = document.getElementById("mensagemNivel");

  let nomesEscolhidos = [];
  let i = 0;

  while (i < resultado.categorias.length) {
    const chave = resultado.categorias[i];

    if (nomesCategorias[chave]) {
      nomesEscolhidos.push(nomesCategorias[chave]);
    } else {
      nomesEscolhidos.push(chave);
    }

    i++;
  }

  assuntosEscolhidos.textContent = "Assuntos: " + nomesEscolhidos.join(", ");

  animarCirculoPorcentagem(resultado.porcentagem);

  detalheAcertos.textContent =
    "Você acertou " + resultado.acertos + " de " + resultado.total + " perguntas.";

  mensagemNivel.textContent = obterMensagemNivel(resultado.porcentagem);

  mostrarPorCategoria(resultado.porCategoria);
}

function animarCirculoPorcentagem(porcentagemFinal) {
  const circulo = document.querySelector(".circulo-porcentagem");
  const texto = document.getElementById("porcentagemTexto");

  let valorAtual = 0;

  const processo = setInterval(() => {
    valorAtual++;

    texto.textContent = valorAtual + "%";

    circulo.style.background =
      "conic-gradient(#841919 " +
      valorAtual * 3.6 +
      "deg, rgb(203, 185, 161) 0deg)";

    if (valorAtual >= porcentagemFinal) {
      clearInterval(processo);
    }
  }, 80);
}

function mostrarPorCategoria(porCategoria) {
  const listaCategorias = document.getElementById("listaCategorias");

  if (!porCategoria || porCategoria.length === 0) {
    return;
  }

  listaCategorias.innerHTML = "";

  let i = 0;

  while (i < porCategoria.length) {
    const item = porCategoria[i];

    const linha = document.createElement("div");
    linha.className = "item-categoria";

    const nome = document.createElement("span");
    nome.className = "nome-categoria";
    nome.textContent = item.nome;

    const barraFundo = document.createElement("div");
    barraFundo.className = "barra-fundo";

    const barraPreenchida = document.createElement("div");
    barraPreenchida.className = "barra-preenchida";
    barraPreenchida.style.width = "0%";

    barraFundo.appendChild(barraPreenchida);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        barraPreenchida.style.width = item.porcentagem + "%";
      });
    });

    const valor = document.createElement("span");
    valor.className = "valor-categoria";
    valor.textContent = item.porcentagem + "%";

    linha.appendChild(nome);
    linha.appendChild(barraFundo);
    linha.appendChild(valor);

    listaCategorias.appendChild(linha);

    i++;
  }
}

function obterMensagemNivel(porcentagem) {
  if (porcentagem >= 80) {
    return "Você já manja bastante sobre esses assuntos! Vamos aprofundar ainda mais.";
  } else if (porcentagem >= 50) {
    return "Você já tem uma boa base. Vamos reforçar alguns pontos.";
  } else {
    return "Você está começando do zero, e tudo bem! Vamos construir esse conhecimento juntos.";
  }
}

const botaoRefazer = document.getElementById("refazerQuiz");

botaoRefazer.addEventListener("click", () => {
  localStorage.removeItem("resultadoQuiz");
  window.location.href = "roteiro.html";
});