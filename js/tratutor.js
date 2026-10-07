const mapaHieroglifos = {
    A: "𓄿",
    B: "𓃀",
    C: "𓎡",
    D: "𓂧",
    E: "𓇌",
    F: "𓆑",
    G: "𓎼",
    H: "𓉔",
    I: "𓇋",
    J: "𓆓",
    K: "𓎡",
    L: "𓃭",
    M: "𓅓",
    N: "𓈖",
    O: "𓍯",
    P: "𓊪",
    Q: "𓏘",
    R: "𓂋",
    S: "𓋴",
    T: "𓏏",
    U: "𓅱",
    V: "𓆑",
    W: "𓅱",
    X: "𓐍",
    Y: "𓇋",
    Z: "𓊃"
};

let frase = "";

const fraseDigitada = document.getElementById("fraseDigitada");
const resultado = document.getElementById("resultadoHieroglifo");


// =========================
// ATUALIZAR A TELA
// =========================

function atualizarTela() {

    // Mostra a frase digitada
    if (frase === "") {

        fraseDigitada.textContent = "Comece a digitar...";
        fraseDigitada.classList.add("inicial");

        resultado.textContent = "𓂀";

        return;
    }

    fraseDigitada.textContent = frase;
    fraseDigitada.classList.remove("inicial");


    // Converte para hieróglifos
    let traducao = "";

    for (let letra of frase) {

        if (letra === " ") {

            traducao += "   ";

        } else if (mapaHieroglifos[letra]) {

            traducao += mapaHieroglifos[letra];

        } else {

            traducao += letra;

        }
    }

    resultado.textContent = traducao;
}


// =========================
// TECLADO DO COMPUTADOR
// =========================

document.addEventListener("keydown", function(event) {

    // Letras
    if (/^[a-zA-Z]$/.test(event.key)) {

        const letra = event.key.toUpperCase();

        frase += letra;

        animarTecla(letra);

        atualizarTela();

        return;
    }


    // Espaço
    if (event.code === "Space") {

        event.preventDefault();

        frase += " ";

        atualizarTela();

        return;
    }


    // Backspace
    if (event.key === "Backspace") {

        frase = frase.slice(0, -1);

        atualizarTela();

        return;
    }


    // Escape limpa tudo
    if (event.key === "Escape") {

        frase = "";

        atualizarTela();

        return;
    }
});


// =========================
// TECLAS NA TELA
// =========================

const teclas = document.querySelectorAll(".tecla");

teclas.forEach(function(tecla) {

    tecla.addEventListener("click", function() {

        const letra = tecla.dataset.letra;

        if (letra) {

            frase += letra;

            atualizarTela();

        }

    });

});


// =========================
// ESPAÇO
// =========================

const botaoEspaco = document.getElementById("espaco");

if (botaoEspaco) {

    botaoEspaco.addEventListener("click", function() {

        frase += " ";

        atualizarTela();

    });
}


// =========================
// APAGAR
// =========================

const botaoApagar = document.getElementById("apagar");

if (botaoApagar) {

    botaoApagar.addEventListener("click", function() {

        frase = frase.slice(0, -1);

        atualizarTela();

    });
}


// =========================
// LIMPAR
// =========================

const botaoLimpar = document.getElementById("limpar");

if (botaoLimpar) {

    botaoLimpar.addEventListener("click", function() {

        frase = "";

        atualizarTela();

    });
}


// =========================
// ANIMAÇÃO DAS TECLAS
// =========================

function animarTecla(letra) {

    const tecla = document.querySelector(
        `.tecla[data-letra="${letra}"]`
    );

    if (!tecla) return;

    tecla.classList.add("pressionada");

    setTimeout(function() {

        tecla.classList.remove("pressionada");

    }, 120);
}


// =========================
// INICIAR
// =========================

atualizarTela();