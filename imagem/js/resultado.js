// ========================================
// nomes das categorias (para exibir bonito)
// ========================================

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


// ========================================
// pegar resultado salvo
// ========================================

const resultadoSalvo = localStorage.getItem("resultadoQuiz");

if (!resultadoSalvo) {

  // se a pessoa cair aqui sem ter feito o quiz, manda pra seleção
  window.location.href = "index.html";

} else {

  const resultado = JSON.parse(resultadoSalvo);

  mostrarResultado(resultado);

}


// ========================================
// mostrar resultado na tela
// ========================================

function mostrarResultado(resultado) {

  const assuntosEscolhidos =
    document.getElementById("assuntosEscolhidos");

  const detalheAcertos =
    document.getElementById("detalheAcertos");

  const mensagemNivel =
    document.getElementById("mensagemNivel");


  // lista de assuntos escolhidos, em texto

  const nomesEscolhidos =
    resultado.categorias.map(
      (categoria) => nomesCategorias[categoria] || categoria
    );

  assuntosEscolhidos.textContent =
    "Assuntos: " + nomesEscolhidos.join(", ");


  // círculo de porcentagem animado

  animarCirculoPorcentagem(resultado.porcentagem);


  // detalhe de acertos

  detalheAcertos.textContent =
    "Você acertou " +
    resultado.acertos +
    " de " +
    resultado.total +
    " perguntas.";


  // mensagem de acordo com o nível

  mensagemNivel.textContent =
    obterMensagemNivel(resultado.porcentagem);


  // porcentagem por categoria

  mostrarPorCategoria(resultado.porCategoria);

}


// ========================================
// animar o círculo de porcentagem (donut)
// ========================================

function animarCirculoPorcentagem(porcentagemFinal) {

  const circulo =
    document.querySelector(".circulo-porcentagem");

  const texto =
    document.getElementById("porcentagemTexto");

  let valorAtual = 0;

  const processo = setInterval(() => {

    valorAtual++;

    texto.textContent = `${valorAtual}%`;

    circulo.style.background =
      `conic-gradient(#841919 ${valorAtual * 3.6}deg, rgb(203, 185, 161) 0deg)`;

    if (valorAtual >= porcentagemFinal) {
      clearInterval(processo);
    }

  }, 80);

}


// ========================================
// mostrar porcentagem de cada categoria
// ========================================

function mostrarPorCategoria(porCategoria) {

  const listaCategorias =
    document.getElementById("listaCategorias");

  if (!porCategoria || porCategoria.length === 0) {
    return;
  }

  listaCategorias.innerHTML = "";

  porCategoria.forEach((item) => {

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

    // espera o elemento existir no DOM antes de animar até o valor real
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

  });

}


// ========================================
// mensagem de acordo com a porcentagem
// ========================================

function obterMensagemNivel(porcentagem) {

  if (porcentagem >= 80) {

    return "Você já manja bastante sobre esses assuntos! Vamos aprofundar ainda mais.";

  } else if (porcentagem >= 50) {

    return "Você já tem uma boa base. Vamos reforçar alguns pontos.";

  } else {

    return "Você está começando do zero, e tudo bem! Vamos construir esse conhecimento juntos.";

  }

}


// ========================================
// botão refazer quiz
// ========================================

const botaoRefazer =
  document.getElementById("refazerQuiz");

botaoRefazer.addEventListener("click", () => {

  localStorage.removeItem("resultadoQuiz");

  window.location.href = "index.html";

});