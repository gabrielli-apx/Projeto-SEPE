const botoesCategorias = document.querySelectorAll(".botao-categoria");
const botaoComecar = document.getElementById("comecarQuiz");

let categoriasSelecionadas = [];

botoesCategorias.forEach((botao) => {
  botao.addEventListener("click", () => {
    const categoria = botao.dataset.categoria;
    const card = botao.closest("div");

    if (categoriasSelecionadas.includes(categoria)) {
      categoriasSelecionadas = categoriasSelecionadas.filter(
        (item) => item !== categoria
      );

      botao.classList.remove("selecionado");
      card.classList.remove("card-selecionado");
    } else {
      categoriasSelecionadas.push(categoria);

      botao.classList.add("selecionado");
      card.classList.add("card-selecionado");
    }
  });
});

if (botaoComecar) {
  botaoComecar.addEventListener("click", () => {
    if (categoriasSelecionadas.length === 0) {
      alert("Selecione pelo menos um assunto!");
      return;
    }

    localStorage.setItem(
      "categoriasSelecionadas",
      JSON.stringify(categoriasSelecionadas)
    );

    window.location.href = "quiz.html";
  });
}