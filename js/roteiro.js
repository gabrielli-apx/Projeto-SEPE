// ========================================
// imagens por categoria
// ========================================

const IMAGENS_CATEGORIA = {
  hieroglifos: "imagem/hieroglifos-final.png",
  cuneiforme:  "imagem/cuneiforme-final.png",
  fenicio:     "imagem/fenicio-final.png",
  grego:       "imagem/grego-final.png",
  latim:       "imagem/latina-final.png",
  maias:       "imagem/maias-final.png",
  avestico:    "imagem/avestica-final.png",
  atualidade:  "imagem/atualidade-final.png"
};


// ========================================
// ícone genérico (usado em todos os cards)
// ========================================

const ICONE_GENERICO = `
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
    <line x1="9" y1="7" x2="15" y2="7"></line>
    <line x1="9" y1="11" x2="15" y2="11"></line>
  </svg>
`;


// ========================================
// texto de descrição de acordo com o desempenho
// ========================================

function obterDescricaoCategoria(porcentagem) {

  if (porcentagem >= 80) {

    return "Você já manja bastante desse assunto! Vale revisar e aprofundar ainda mais.";

  } else if (porcentagem >= 50) {

    return "Você já tem uma boa base aqui. Vamos reforçar alguns pontos.";

  } else {

    return "Esse é um bom ponto de partida — vamos construir esse conhecimento juntos.";

  }

}


// ========================================
// montar o roteiro na tela
// ========================================

function montarRoteiro(porCategoria) {

  const roteiroGrid =
    document.getElementById("roteiroGrid");

  if (!roteiroGrid || !porCategoria || porCategoria.length === 0) {
    return;
  }

  // ordena do menor para o maior desempenho
  // (quem a pessoa menos sabe vem primeiro)

  const categoriasOrdenadas =
    [...porCategoria].sort(
      (a, b) => a.porcentagem - b.porcentagem
    );

  roteiroGrid.innerHTML = "";

  categoriasOrdenadas.forEach((item, index) => {

    const numero = index + 1;
    const ehUltimo = index === categoriasOrdenadas.length - 1;

    const linha = document.createElement("div");
    linha.className =
      "roteiro-linha" + (ehUltimo ? " roteiro-linha-final" : "");


    // ---- coluna do ícone ----

    const iconeColuna = document.createElement("div");
    iconeColuna.className = "roteiro-icone-coluna";

    iconeColuna.innerHTML = `
      <span class="roteiro-numero">${numero}</span>
      <span class="roteiro-icone">${ICONE_GENERICO}</span>
      <span class="roteiro-legenda">${item.nome}</span>
    `;


    // ---- card ----

    const card = document.createElement("div");
    card.className = "roteiro-card";

    const miniatura = document.createElement("div");
    miniatura.className = "roteiro-miniatura";
    miniatura.setAttribute("aria-hidden", "true");

    const imagemUrl = IMAGENS_CATEGORIA[item.chave];
    if (imagemUrl) {
      miniatura.style.backgroundImage = `url("${imagemUrl}")`;
    }

    const info = document.createElement("div");
    info.className = "roteiro-info";

    info.innerHTML = `
      <div class="roteiro-cabecalho">
        <h3>${numero}. ${item.nome}</h3>
      </div>
      <p>${obterDescricaoCategoria(item.porcentagem)}</p>
      <a href="${item.chave}.html" class="roteiro-botao">
        Começar <span class="seta">→</span>
      </a>
    `;

    card.appendChild(miniatura);
    card.appendChild(info);


    // ---- monta a linha ----

    linha.appendChild(iconeColuna);
    linha.appendChild(card);

    roteiroGrid.appendChild(linha);

  });

}


// ========================================
// pegar resultado salvo e iniciar
// ========================================

const resultadoSalvoRoteiro = localStorage.getItem("resultadoQuiz");

if (!resultadoSalvoRoteiro) {

  // se a pessoa cair aqui sem ter feito o quiz, manda pra seleção
  window.location.href = "index.html";

} else {

  const resultado = JSON.parse(resultadoSalvoRoteiro);

  montarRoteiro(resultado.porCategoria);

}