/* ============================================================
   SANTO TERÇO — VERSÃO 1.0
   ARQUIVO: js/player.js

   Controle completo do player de áudio.
============================================================ */


/* ============================================================
   VARIÁVEIS DO PLAYER
============================================================ */

let playerInicializado = false;

let audioPlayer = null;

let btnPlay = null;

let btnRetroceder = null;

let btnAvancar = null;

let btnMute = null;

let barraCompleta = null;

let barraProgresso = null;

let tempoAtual = null;

let tempoFinal = null;

let controleVolume = null;

let controleVelocidade = null;


/* ============================================================
   INICIALIZA O PLAYER
============================================================ */

function inicializarPlayer() {

    if (playerInicializado) {

        return;

    }


    audioPlayer =
        document.getElementById("audio");


    btnPlay =
        document.getElementById("btnPlay");


    btnRetroceder =
        document.getElementById("btnRetroceder");


    btnAvancar =
        document.getElementById("btnAvancar");


    btnMute =
        document.getElementById("btnMute");


    barraCompleta =
        document.getElementById("barraCompleta");


    barraProgresso =
        document.getElementById("barraProgresso");


    tempoAtual =
        document.getElementById("tempoAtual");


    tempoFinal =
        document.getElementById("tempoFinal");


    controleVolume =
        document.getElementById("volume");


    controleVelocidade =
        document.getElementById("velocidade");


    if (!audioPlayer) {

        console.warn(
            "Elemento de áudio não encontrado."
        );

        return;

    }


    configurarPlayer();


    playerInicializado = true;

}


/* ============================================================
   CONFIGURA EVENTOS DO PLAYER
============================================================ */

function configurarPlayer() {


    /* --------------------------------------------------------
       PLAY / PAUSE
    -------------------------------------------------------- */

    if (btnPlay) {

        btnPlay.addEventListener(
            "click",
            alternarReproducao
        );

    }


    /* --------------------------------------------------------
       RETROCEDER
    -------------------------------------------------------- */

    if (btnRetroceder) {

        btnRetroceder.addEventListener(
            "click",
            retrocederAudio
        );

    }


    /* --------------------------------------------------------
       AVANÇAR
    -------------------------------------------------------- */

    if (btnAvancar) {

        btnAvancar.addEventListener(
            "click",
            avancarAudio
        );

    }


    /* --------------------------------------------------------
       MUDO
    -------------------------------------------------------- */

    if (btnMute) {

        btnMute.addEventListener(
            "click",
            alternarMudo
        );

    }


    /* --------------------------------------------------------
       VOLUME
    -------------------------------------------------------- */

    if (controleVolume) {

        controleVolume.addEventListener(
            "input",
            alterarVolume
        );

    }


    /* --------------------------------------------------------
       VELOCIDADE
    -------------------------------------------------------- */

    if (controleVelocidade) {

        controleVelocidade.addEventListener(
            "change",
            alterarVelocidade
        );

    }


    /* --------------------------------------------------------
       BARRA DE PROGRESSO
    -------------------------------------------------------- */

    if (barraCompleta) {

        barraCompleta.addEventListener(
            "click",
            alterarPosicaoAudio
        );

    }


    /* --------------------------------------------------------
       EVENTOS DO ÁUDIO
    -------------------------------------------------------- */

    audioPlayer.addEventListener(
        "play",
        atualizarBotaoPlay
    );


    audioPlayer.addEventListener(
        "pause",
        atualizarBotaoPause
    );


    audioPlayer.addEventListener(
        "timeupdate",
        atualizarProgresso
    );


    audioPlayer.addEventListener(
        "loadedmetadata",
        atualizarDuracao
    );


    audioPlayer.addEventListener(
        "volumechange",
        atualizarIconeVolume
    );


    audioPlayer.addEventListener(
        "ended",
        finalizarAudio
    );

}


/* ============================================================
   ALTERNA PLAY / PAUSE
============================================================ */

async function alternarReproducao() {

    if (!audioPlayer) {

        return;

    }


    if (audioPlayer.paused) {

        try {

            await audioPlayer.play();

        } catch (erro) {

            console.info(
                "Não foi possível iniciar automaticamente o áudio.",
                erro
            );

        }

    } else {

        audioPlayer.pause();

    }

}


/* ============================================================
   INICIA O ÁUDIO
============================================================ */

async function iniciarAudio() {

    if (!audioPlayer) {

        return false;

    }


    try {

        await audioPlayer.play();

        return true;

    } catch (erro) {

        return false;

    }

}


/* ============================================================
   PAUSA O ÁUDIO
============================================================ */

function pausarPlayer() {

    if (!audioPlayer) {

        return;

    }

    audioPlayer.pause();

}


/* ============================================================
   RETROCEDE O ÁUDIO
============================================================ */

function retrocederAudio() {

    if (!audioPlayer) {

        return;

    }


    const segundos =
        CONFIG.tempoRetroceder || 10;


    audioPlayer.currentTime =
        Math.max(
            0,
            audioPlayer.currentTime - segundos
        );

}


/* ============================================================
   AVANÇA O ÁUDIO
============================================================ */

function avancarAudio() {

    if (!audioPlayer) {

        return;

    }


    const segundos =
        CONFIG.tempoAvancar || 10;


    const novoTempo =
        audioPlayer.currentTime + segundos;


    audioPlayer.currentTime =
        Math.min(
            novoTempo,
            audioPlayer.duration || novoTempo
        );

}


/* ============================================================
   ALTERA VOLUME
============================================================ */

function alterarVolume(evento) {

    if (!audioPlayer) {

        return;

    }


    const valor =
        Number(evento.target.value);


    if (
        !Number.isFinite(valor)
    ) {

        return;

    }


    audioPlayer.volume =
        Math.min(
            1,
            Math.max(0, valor)
        );


    audioPlayer.muted = false;

}


/* ============================================================
   ALTERNA MUDO
============================================================ */

function alternarMudo() {

    if (!audioPlayer) {

        return;

    }


    audioPlayer.muted =
        !audioPlayer.muted;


    atualizarIconeVolume();

}


/* ============================================================
   ALTERA VELOCIDADE
============================================================ */

function alterarVelocidade(evento) {

    if (!audioPlayer) {

        return;

    }


    const velocidade =
        Number(evento.target.value);


    if (
        !Number.isFinite(velocidade) ||
        velocidade <= 0
    ) {

        return;

    }


    audioPlayer.playbackRate =
        velocidade;

}


/* ============================================================
   ALTERA POSIÇÃO CLICANDO NA BARRA
============================================================ */

function alterarPosicaoAudio(evento) {

    if (!audioPlayer || !barraCompleta) {

        return;

    }


    if (
        !Number.isFinite(audioPlayer.duration) ||
        audioPlayer.duration <= 0
    ) {

        return;

    }


    const retangulo =
        barraCompleta.getBoundingClientRect();


    const posicao =
        evento.clientX - retangulo.left;


    const porcentagem =
        posicao / retangulo.width;


    const porcentagemLimitada =
        Math.min(
            1,
            Math.max(0, porcentagem)
        );


    audioPlayer.currentTime =
        audioPlayer.duration *
        porcentagemLimitada;

}


/* ============================================================
   ATUALIZA BOTÃO PLAY
============================================================ */

function atualizarBotaoPlay() {

    if (!btnPlay) {

        return;

    }


    btnPlay.innerHTML = "❚❚";

    btnPlay.setAttribute(
        "aria-label",
        "Pausar áudio"
    );

}


/* ============================================================
   ATUALIZA BOTÃO PAUSE
============================================================ */

function atualizarBotaoPause() {

    if (!btnPlay) {

        return;

    }


    btnPlay.innerHTML = "▶";

    btnPlay.setAttribute(
        "aria-label",
        "Reproduzir áudio"
    );

}


/* ============================================================
   ATUALIZA PROGRESSO
============================================================ */

function atualizarProgresso() {

    if (!audioPlayer) {

        return;

    }


    const atual =
        audioPlayer.currentTime;


    const duracao =
        audioPlayer.duration;


    if (tempoAtual) {

        tempoAtual.textContent =
            formatarTempo(atual);

    }


    if (
        !Number.isFinite(duracao) ||
        duracao <= 0
    ) {

        return;

    }


    const porcentagem =
        (atual / duracao) * 100;


    if (barraProgresso) {

        barraProgresso.style.width =
            `${porcentagem}%`;

    }

}


/* ============================================================
   ATUALIZA DURAÇÃO
============================================================ */

function atualizarDuracao() {

    if (!audioPlayer) {

        return;

    }


    if (tempoFinal) {

        tempoFinal.textContent =
            formatarTempo(
                audioPlayer.duration
            );

    }


    if (tempoAtual) {

        tempoAtual.textContent =
            formatarTempo(
                audioPlayer.currentTime
            );

    }

}


/* ============================================================
   ATUALIZA ÍCONE DE VOLUME
============================================================ */

function atualizarIconeVolume() {

    if (!btnMute || !audioPlayer) {

        return;

    }


    if (
        audioPlayer.muted ||
        audioPlayer.volume === 0
    ) {

        btnMute.innerHTML = "🔇";

        btnMute.setAttribute(
            "aria-label",
            "Ativar som"
        );

        return;

    }


    if (audioPlayer.volume < 0.5) {

        btnMute.innerHTML = "🔉";

    } else {

        btnMute.innerHTML = "🔊";

    }


    btnMute.setAttribute(
        "aria-label",
        "Silenciar áudio"
    );

}


/* ============================================================
   FINALIZAÇÃO DO ÁUDIO
============================================================ */

function finalizarAudio() {

    if (!btnPlay) {

        return;

    }


    btnPlay.innerHTML = "▶";

    btnPlay.setAttribute(
        "aria-label",
        "Reproduzir áudio"
    );


    if (barraProgresso) {

        barraProgresso.style.width =
            "100%";

    }


    if (tempoAtual && audioPlayer) {

        tempoAtual.textContent =
            formatarTempo(
                audioPlayer.duration
            );

    }


    /*
       O evento personalizado permite que o app.js
       saiba que o áudio terminou sem colocar outras
       responsabilidades dentro deste arquivo.
    */

    document.dispatchEvent(
        new CustomEvent("terco:audioFinalizado")
    );

}


/* ============================================================
   CARREGA UM NOVO ÁUDIO
============================================================ */

function carregarAudio(caminho) {

    if (!audioPlayer || !caminho) {

        return;

    }


    pausarPlayer();


    audioPlayer.currentTime = 0;


    audioPlayer.src =
        caminho;


    audioPlayer.load();


    if (barraProgresso) {

        barraProgresso.style.width =
            "0%";

    }


    if (tempoAtual) {

        tempoAtual.textContent =
            "00:00";

    }


    if (tempoFinal) {

        tempoFinal.textContent =
            "00:00";

    }


    atualizarBotaoPause();

}


/* ============================================================
   CONFIGURA O PLAYER CONFORME CONFIG
============================================================ */

function configurarPreferenciasPlayer() {

    if (!audioPlayer) {

        return;

    }


    const volumePadrao =
        Number(
            CONFIG.volumePadrao
        );


    const velocidadePadrao =
        Number(
            CONFIG.velocidadePadrao
        );


    if (
        Number.isFinite(volumePadrao)
    ) {

        audioPlayer.volume =
            Math.min(
                1,
                Math.max(
                    0,
                    volumePadrao
                )
            );

    }


    if (
        Number.isFinite(velocidadePadrao) &&
        velocidadePadrao > 0
    ) {

        audioPlayer.playbackRate =
            velocidadePadrao;

    }


    if (controleVolume) {

        controleVolume.value =
            audioPlayer.volume;

    }


    if (controleVelocidade) {

        controleVelocidade.value =
            audioPlayer.playbackRate;

    }


    atualizarIconeVolume();

}


/* ============================================================
   REINICIA O PLAYER
============================================================ */

function reiniciarPlayer() {

    if (!audioPlayer) {

        return;

    }


    audioPlayer.currentTime =
        0;


    if (barraProgresso) {

        barraProgresso.style.width =
            "0%";

    }


    if (tempoAtual) {

        tempoAtual.textContent =
            "00:00";

    }

}


/* ============================================================
   OBTÉM ESTADO ATUAL DO PLAYER
============================================================ */

function obterEstadoPlayer() {

    if (!audioPlayer) {

        return null;

    }


    return {

        reproduzindo:
            !audioPlayer.paused,

        atual:
            audioPlayer.currentTime,

        duracao:
            audioPlayer.duration,

        volume:
            audioPlayer.volume,

        mudo:
            audioPlayer.muted,

        velocidade:
            audioPlayer.playbackRate

    };

}


/* ============================================================
   INICIALIZAÇÃO AUTOMÁTICA
============================================================ */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        inicializarPlayer();

        configurarPreferenciasPlayer();

    }
);
