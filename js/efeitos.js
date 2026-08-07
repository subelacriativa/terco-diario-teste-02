/* ============================================================
   SANTO TERÇO — VERSÃO 1.0
   ARQUIVO: js/efeitos.js

   Efeitos visuais:
   - Partículas douradas
   - Fundo dinâmico
   - Vela virtual
   - Confetes
============================================================ */


/* ============================================================
   VARIÁVEIS
============================================================ */

let particulasAtivas = false;

let intervaloParticulas = null;

let velaInicializada = false;


/* ============================================================
   INICIA EFEITOS
============================================================ */

function inicializarEfeitos() {

    aplicarFundoMistério();

    iniciarParticulas();

    inicializarVela();

}


/* ============================================================
   APLICA FUNDO DO MISTÉRIO
============================================================ */

function aplicarFundoMistério(dados = null) {

    const fundo =
        document.getElementById(
            "backgroundOverlay"
        );


    if (!fundo) {

        return;

    }


    const dadosDia =
        dados ||
        obterDadosDoDia();


    if (!dadosDia) {

        return;

    }


    if (!dadosDia.fundo) {

        fundo.style.backgroundImage =
            "none";

        return;

    }


    fundo.style.backgroundImage =
        `url("${dadosDia.fundo}")`;

}


/* ============================================================
   CRIA UMA PARTÍCULA
============================================================ */

function criarParticula() {

    const area =
        document.getElementById(
            "particles"
        );


    if (!area) {

        return;

    }


    const particula =
        document.createElement("div");


    particula.className =
        "particula";


    const tamanho =
        3 + Math.random() * 5;


    const posicaoHorizontal =
        Math.random() * 100;


    const duracao =
        8 + Math.random() * 8;


    const atraso =
        Math.random() * 2;


    particula.style.width =
        `${tamanho}px`;


    particula.style.height =
        `${tamanho}px`;


    particula.style.left =
        `${posicaoHorizontal}%`;


    particula.style.animationDuration =
        `${duracao}s`;


    particula.style.animationDelay =
        `${atraso}s`;


    particula.style.opacity =
        String(
            0.3 + Math.random() * 0.7
        );


    area.appendChild(
        particula
    );


    const tempoRemocao =
        (duracao + atraso + 1) * 1000;


    window.setTimeout(
        () => {

            if (
                particula &&
                particula.parentNode
            ) {

                particula.remove();

            }

        },
        tempoRemocao
    );

}


/* ============================================================
   INICIA PARTÍCULAS
============================================================ */

function iniciarParticulas() {

    if (particulasAtivas) {

        return;

    }


    const area =
        document.getElementById(
            "particles"
        );


    if (!area) {

        return;

    }


    particulasAtivas =
        true;


    /*
       Cria algumas partículas
       imediatamente para evitar
       que a área fique vazia.
    */

    for (
        let i = 0;
        i < 12;
        i++
    ) {

        criarParticula();

    }


    intervaloParticulas =
        window.setInterval(
            criarParticula,
            500
        );

}


/* ============================================================
   PARA PARTÍCULAS
============================================================ */

function pararParticulas() {

    if (
        intervaloParticulas !== null
    ) {

        window.clearInterval(
            intervaloParticulas
        );

        intervaloParticulas =
            null;

    }


    particulasAtivas =
        false;

}


/* ============================================================
   REMOVE TODAS AS PARTÍCULAS
============================================================ */

function limparParticulas() {

    const area =
        document.getElementById(
            "particles"
        );


    if (!area) {

        return;

    }


    area.innerHTML = "";

}


/* ============================================================
   EFEITO DE BRILHO
============================================================ */

function criarBrilho() {

    const brilho =
        document.createElement(
            "div"
        );


    brilho.className =
        "efeitoBrilho";


    document.body.appendChild(
        brilho
    );


    window.setTimeout(
        () => {

            brilho.remove();

        },
        1200
    );

}


/* ============================================================
   INICIALIZA VELA
============================================================ */

function inicializarVela() {

    if (velaInicializada) {

        return;

    }


    const botao =
        document.getElementById(
            "btnVela"
        );


    const mensagem =
        document.getElementById(
            "velaMensagem"
        );


    if (!botao) {

        return;

    }


    velaInicializada =
        true;


    atualizarEstadoVela(
        botao,
        mensagem
    );


    botao.addEventListener(
        "click",
        acenderVela
    );

}


/* ============================================================
   ATUALIZA ESTADO DA VELA
============================================================ */

function atualizarEstadoVela(
    botao,
    mensagem
) {

    if (
        velaEstaAcesa()
    ) {

        botao.innerHTML =
            "🕯️ Vela Acesa";


        botao.disabled =
            true;


        if (mensagem) {

            mensagem.textContent =
                "🙏 Sua intenção permanece em oração.";

        }


        return;

    }


    botao.innerHTML =
        "🕯️ Acender uma vela";


    botao.disabled =
        false;


    if (mensagem) {

        mensagem.textContent =
            "";

    }

}


/* ============================================================
   ACENDE A VELA
============================================================ */

function acenderVela() {

    const botao =
        document.getElementById(
            "btnVela"
        );


    const mensagem =
        document.getElementById(
            "velaMensagem"
        );


    if (!botao) {

        return;

    }


    salvarVela();


    botao.innerHTML =
        "🕯️ Vela Acesa";


    botao.disabled =
        true;


    if (mensagem) {

        mensagem.textContent =
            obterMensagemVela();

    }


    criarChamaVela();

    criarBrilho();

}


/* ============================================================
   CRIA CHAMA VISUAL DA VELA
============================================================ */

function criarChamaVela() {

    const area =
        document.querySelector(
            ".velaArea"
        );


    if (!area) {

        return;

    }


    let chama =
        document.getElementById(
            "chamaVela"
        );


    if (chama) {

        return;

    }


    chama =
        document.createElement(
            "div"
        );


    chama.id =
        "chamaVela";


    chama.className =
        "chamaVela";


    chama.innerHTML =
        "🔥";


    area.insertBefore(
        chama,
        area.firstChild
    );

}


/* ============================================================
   CONFETES
============================================================ */

function iniciarConfetes() {

    /*
       Utiliza canvas-confetti quando a biblioteca
       estiver disponível.

       Caso a biblioteca não esteja carregada,
       a função simplesmente não executa nada.
    */

    if (
        typeof confetti !==
        "function"
    ) {

        console.info(
            "Biblioteca de confetes não encontrada."
        );

        return;

    }


    const duracao =
        2500;


    const final =
        Date.now() + duracao;


    const configuracao =
        {

            particleCount: 4,

            spread: 70,

            startVelocity: 30,

            ticks: 80,

            origin: {
                x: 0.5,
                y: 0.65
            }

        };


    function executar() {

        confetti(
            configuracao
        );


        if (
            Date.now() < final
        ) {

            window.requestAnimationFrame(
                executar
            );

        }

    }


    executar();

}


/* ============================================================
   CONFETES INTENSOS
============================================================ */

function celebrarConclusao() {

    if (
        typeof confetti !==
        "function"
    ) {

        return;

    }


    confetti({

        particleCount: 100,

        spread: 100,

        startVelocity: 35,

        origin: {
            x: 0.5,
            y: 0.6
        }

    });


    window.setTimeout(
        () => {

            confetti({

                particleCount: 70,

                spread: 120,

                startVelocity: 25,

                origin: {
                    x: 0.2,
                    y: 0.7
                }

            });


            confetti({

                particleCount: 70,

                spread: 120,

                startVelocity: 25,

                origin: {
                    x: 0.8,
                    y: 0.7
                }

            });

        },
        250
    );

}


/* ============================================================
   TRANSIÇÃO DE TEMA
============================================================ */

function animarTrocaTema() {

    const fundo =
        document.getElementById(
            "backgroundOverlay"
        );


    if (!fundo) {

        return;

    }


    fundo.classList.add(
        "mudandoTema"
    );


    window.setTimeout(
        () => {

            fundo.classList.remove(
                "mudandoTema"
            );

        },
        1500
    );

}


/* ============================================================
   ATUALIZA TEMA VISUAL
============================================================ */

function aplicarTemaVisual(
    dados = null
) {

    const dadosDia =
        dados ||
        obterDadosDoDia();


    if (!dadosDia) {

        return;

    }


    const body =
        document.body;


    if (!body) {

        return;

    }


    body.classList.remove(

        "tema-gozosos",

        "tema-dolorosos",

        "tema-gloriosos",

        "tema-luminosos"

    );


    body.classList.add(

        `tema-${dadosDia.chave}`

    );


    if (
        dadosDia.cor
    ) {

        body.style.setProperty(
            "--cor-tema",
            dadosDia.cor
        );

    }


    animarTrocaTema();

}


/* ============================================================
   INICIALIZAÇÃO AUTOMÁTICA
============================================================ */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        inicializarEfeitos();

        aplicarTemaVisual();

    }
);
