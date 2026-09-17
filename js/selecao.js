const botoesCategorias =
  document.querySelectorAll(".botao-categoria");

const botaoComecar =
  document.getElementById("comecarQuiz");

let categoriasSelecionadas = [];


// Selecionar e desmarcar categorias

botoesCategorias.forEach((botao) => {

  botao.addEventListener("click", () => {

    const categoria =
      botao.dataset.categoria;


    if (categoriasSelecionadas.includes(categoria)) {

      // Remove

      categoriasSelecionadas =
        categoriasSelecionadas.filter(
          (item) => item !== categoria
        );

      botao.classList.remove("selecionado");

    } else {

      // Adiciona

      categoriasSelecionadas.push(categoria);

      botao.classList.add("selecionado");

    }

  });

});


// Começar quiz

botaoComecar.addEventListener("click", () => {

  if (categoriasSelecionadas.length === 0) {

    alert("Selecione pelo menos um assunto!");

    return;
  }


  // Salva as categorias escolhidas

  localStorage.setItem(
    "categoriasSelecionadas",
    JSON.stringify(categoriasSelecionadas)
  );


  // Vai para o quiz

  window.location.href = "quiz.html";

});