/* ============================================================
   SANTO TERÇO — VERSÃO 1.0
   ARQUIVO: js/util.js

   Funções auxiliares da aplicação.
============================================================ */


/* ============================================================
   OBTÉM O DIA ATUAL
============================================================ */

function obterNumeroDia() {

    const hoje = new Date();

    return hoje.getDay();

}


/* ============================================================
   OBTÉM O NOME DO DIA ATUAL
============================================================ */

function obterDiaAtual() {

    const numero = obterNumeroDia();

    return DIAS_SEMANA[numero];

}


/* ============================================================
   OBTÉM OS DADOS DO MISTÉRIO DO DIA
============================================================ */

function obterDadosDoDia() {

    const numero = obterNumeroDia();

    const chaves = [

        "domingo",
        "segunda",
        "terça",
        "quarta",
        "quinta",
        "sexta",
        "sábado"

    ];

    return MISTERIOS[chaves[numero]];

}


/* ============================================================
   OBTÉM A DATA ATUAL FORMATADA
============================================================ */

function obterDataFormatada() {

    const hoje = new Date();

    const dia =
        String(hoje.getDate()).padStart(2, "0");

    const mes =
        String(hoje.getMonth() + 1).padStart(2, "0");

    const ano =
        hoje.getFullYear();

    return `${dia}/${mes}/${ano}`;

}


/* ============================================================
   OBTÉM A DATA POR EXTENSO
============================================================ */

function obterDataPorExtenso() {

    const hoje = new Date();

    const dia =
        hoje.getDate();

    const mes =
        MESES[hoje.getMonth()];

    const ano =
        hoje.getFullYear();

    return `${dia} de ${mes} de ${ano}`;

}


/* ============================================================
   FORMATA HORÁRIO
============================================================ */

function formatarHorario(data = new Date()) {

    const horas =
        String(data.getHours()).padStart(2, "0");

    const minutos =
        String(data.getMinutes()).padStart(2, "0");

    const segundos =
        String(data.getSeconds()).padStart(2, "0");

    return `${horas}:${minutos}:${segundos}`;

}


/* ============================================================
   OBTÉM A SAUDAÇÃO
============================================================ */

function obterSaudacao() {

    const hora =
        new Date().getHours();

    if (hora < 12) {

        return "☀️ Bom dia";

    }

    if (hora < 18) {

        return "🌤️ Boa tarde";

    }

    return "🌙 Boa noite";

}


/* ============================================================
   ESCOLHE UM ITEM ALEATÓRIO
============================================================ */

function escolherAleatorio(lista) {

    if (!Array.isArray(lista) || lista.length === 0) {

        return null;

    }

    const indice =
        Math.floor(
            Math.random() * lista.length
        );

    return lista[indice];

}


/* ============================================================
   VERSÍCULO ALEATÓRIO
============================================================ */

function obterVersiculoAleatorio() {

    return escolherAleatorio(VERSICULOS);

}


/* ============================================================
   FRASE ALEATÓRIA
============================================================ */

function obterFraseAleatoria() {

    return escolherAleatorio(FRASES);

}


/* ============================================================
   INTENÇÃO ALEATÓRIA
============================================================ */

function obterIntencaoAleatoria() {

    return escolherAleatorio(INTENCOES);

}


/* ============================================================
   SANTO ALEATÓRIO
============================================================ */

function obterSantoAleatorio() {

    return escolherAleatorio(SANTOS);

}


/* ============================================================
   EVANGELHO ALEATÓRIO
============================================================ */

function obterEvangelhoAleatorio() {

    return escolherAleatorio(EVANGELHOS);

}


/* ============================================================
   MENSAGEM ALEATÓRIA DA VELA
============================================================ */

function obterMensagemVela() {

    return escolherAleatorio(MENSAGENS_VELA);

}


/* ============================================================
   FORMATA TEMPO DO PLAYER
============================================================ */

function formatarTempo(segundos) {

    if (
        typeof segundos !== "number" ||
        isNaN(segundos) ||
        !isFinite(segundos)
    ) {

        return "00:00";

    }

    segundos =
        Math.max(0, Math.floor(segundos));

    const minutos =
        Math.floor(segundos / 60);

    const segundosRestantes =
        segundos % 60;

    return (

        String(minutos).padStart(2, "0")

        +

        ":"

        +

        String(segundosRestantes)
            .padStart(2, "0")

    );

}


/* ============================================================
   SALVAR NO LOCALSTORAGE
============================================================ */

function salvarLocal(chave, valor) {

    try {

        localStorage.setItem(
            chave,
            JSON.stringify(valor)
        );

        return true;

    } catch (erro) {

        console.error(
            "Não foi possível salvar os dados:",
            erro
        );

        return false;

    }

}


/* ============================================================
   LER DO LOCALSTORAGE
============================================================ */

function lerLocal(chave, valorPadrao = null) {

    try {

        const valor =
            localStorage.getItem(chave);

        if (valor === null) {

            return valorPadrao;

        }

        return JSON.parse(valor);

    } catch (erro) {

        console.error(
            "Não foi possível ler os dados:",
            erro
        );

        return valorPadrao;

    }

}


/* ============================================================
   REMOVER ITEM DO LOCALSTORAGE
============================================================ */

function removerLocal(chave) {

    try {

        localStorage.removeItem(chave);

        return true;

    } catch (erro) {

        console.error(
            "Não foi possível remover os dados:",
            erro
        );

        return false;

    }

}


/* ============================================================
   VERIFICA SE EXISTE UM ITEM SALVO
============================================================ */

function existeLocal(chave) {

    try {

        return localStorage.getItem(chave) !== null;

    } catch (erro) {

        return false;

    }

}


/* ============================================================
   REGISTRA UMA ORAÇÃO CONCLUÍDA
============================================================ */

function registrarOracao() {

    let total =
        Number(
            lerLocal(
                CONFIG.chaveOracoes,
                0
            )
        );

    if (!Number.isFinite(total)) {

        total = 0;

    }

    total++;

    salvarLocal(
        CONFIG.chaveOracoes,
        total
    );

    return total;

}


/* ============================================================
   OBTÉM TOTAL DE ORAÇÕES
============================================================ */

function obterTotalOracoes() {

    const total =
        Number(
            lerLocal(
                CONFIG.chaveOracoes,
                0
            )
        );

    if (!Number.isFinite(total)) {

        return 0;

    }

    return total;

}


/* ============================================================
   SALVA O ESTADO DA VELA
============================================================ */

function salvarVela() {

    salvarLocal(

        CONFIG.chaveVela,

        {

            acesa: true,

            data:
                new Date().toISOString()

        }

    );

}


/* ============================================================
   VERIFICA SE A VELA ESTÁ ACESA
============================================================ */

function velaEstaAcesa() {

    const dados =
        lerLocal(
            CONFIG.chaveVela,
            null
        );

    if (!dados || !dados.acesa) {

        return false;

    }

    return true;

}


/* ============================================================
   SALVA FAVORITO
============================================================ */

function salvarFavorito(valor) {

    salvarLocal(

        CONFIG.chaveFavorito,

        Boolean(valor)

    );

}


/* ============================================================
   VERIFICA FAVORITO
============================================================ */

function estaFavoritado() {

    return Boolean(

        lerLocal(
            CONFIG.chaveFavorito,
            false
        )

    );

}


/* ============================================================
   SALVA LEMBRETE
============================================================ */

function salvarLembrete(data) {

    salvarLocal(

        CONFIG.chaveLembrete,

        {

            ativo: true,

            data: data

        }

    );

}


/* ============================================================
   OBTÉM LEMBRETE
============================================================ */

function obterLembrete() {

    return lerLocal(

        CONFIG.chaveLembrete,

        null

    );

}


/* ============================================================
   LIMPA LEMBRETE
============================================================ */

function limparLembrete() {

    removerLocal(
        CONFIG.chaveLembrete
    );

}


/* ============================================================
   VERIFICA SE O NAVEGADOR PERMITE COMPARTILHAMENTO
============================================================ */

function podeCompartilhar() {

    return (

        typeof navigator !== "undefined" &&

        typeof navigator.share === "function"

    );

}


/* ============================================================
   COPIA TEXTO PARA A ÁREA DE TRANSFERÊNCIA
============================================================ */

async function copiarTexto(texto) {

    if (
        !navigator.clipboard ||
        typeof navigator.clipboard.writeText !== "function"
    ) {

        return false;

    }

    try {

        await navigator.clipboard.writeText(texto);

        return true;

    } catch (erro) {

        console.error(
            "Não foi possível copiar o texto:",
            erro
        );

        return false;

    }

}


/* ============================================================
   OBTÉM A URL ATUAL
============================================================ */

function obterUrlAtual() {

    return window.location.href;

}


/* ============================================================
   ROLAGEM SUAVE ATÉ UM ELEMENTO
============================================================ */

function rolarPara(elemento) {

    if (!elemento) {

        return;

    }

    elemento.scrollIntoView({

        behavior: "smooth",

        block: "center"

    });

}


/* ============================================================
   MOSTRA ELEMENTO
============================================================ */

function mostrarElemento(elemento) {

    if (!elemento) {

        return;

    }

    elemento.hidden = false;

}


/* ============================================================
   ESCONDE ELEMENTO
============================================================ */

function esconderElemento(elemento) {

    if (!elemento) {

        return;

    }

    elemento.hidden = true;

}


/* ============================================================
   DEFINE TEXTO COM SEGURANÇA
============================================================ */

function definirTexto(elemento, texto) {

    if (!elemento) {

        return;

    }

    elemento.textContent =
        texto ?? "";

}


/* ============================================================
   DEFINE IMAGEM
============================================================ */

function definirImagem(
    elemento,
    caminho,
    textoAlternativo = ""
) {

    if (!elemento) {

        return;

    }

    elemento.src =
        caminho || "";

    elemento.alt =
        textoAlternativo || "";

}


/* ============================================================
   OBTÉM HORÁRIO DO DIA
============================================================ */

function obterPeriodoDoDia() {

    const hora =
        new Date().getHours();

    if (hora < 6) {

        return "madrugada";

    }

    if (hora < 12) {

        return "manhã";

    }

    if (hora < 18) {

        return "tarde";

    }

    return "noite";

}


/* ============================================================
   MENSAGEM DE ACORDO COM O PERÍODO
============================================================ */

function obterMensagemPeriodo() {

    const periodo =
        obterPeriodoDoDia();

    const mensagens = {

        madrugada:
            "Que a paz de Deus acompanhe seu descanso.",

        manhã:
            "Que Deus abençoe o início do seu dia.",

        tarde:
            "Que Deus renove suas forças nesta tarde.",

        noite:
            "Que a paz de Deus esteja em seu coração nesta noite."

    };

    return mensagens[periodo];

}


/* ============================================================
   OBTÉM O PRÓXIMO DIA
============================================================ */

function obterProximoDia() {

    const hoje =
        new Date();

    const amanha =
        new Date(hoje);

    amanha.setDate(
        hoje.getDate() + 1
    );

    return amanha;

}


/* ============================================================
   FORMATA UMA DATA
============================================================ */

function formatarData(data) {

    if (!(data instanceof Date)) {

        data =
            new Date(data);

    }

    if (isNaN(data.getTime())) {

        return "";

    }

    const dia =
        String(data.getDate()).padStart(2, "0");

    const mes =
        String(data.getMonth() + 1).padStart(2, "0");

    const ano =
        data.getFullYear();

    return `${dia}/${mes}/${ano}`;

}


/* ============================================================
   VERIFICA SE É DISPOSITIVO MÓVEL
============================================================ */

function dispositivoMovel() {

    return /Android|iPhone|iPad|iPod/i.test(
        navigator.userAgent
    );

}


/* ============================================================
   EVITA ERRO AO TENTAR REPRODUZIR ÁUDIO
============================================================ */

async function reproduzirAudio(audio) {

    if (!audio) {

        return false;

    }

    try {

        await audio.play();

        return true;

    } catch (erro) {

        /*
           Navegadores podem bloquear reprodução
           automática de áudio.
        */

        console.info(
            "A reprodução automática foi bloqueada pelo navegador."
        );

        return false;

    }

}


/* ============================================================
   PAUSA SEGURA DO ÁUDIO
============================================================ */

function pausarAudio(audio) {

    if (!audio) {

        return;

    }

    try {

        audio.pause();

    } catch (erro) {

        console.error(
            "Erro ao pausar áudio:",
            erro
        );

    }

}


/* ============================================================
   EXPORTAÇÃO DE DADOS PARA DEBUG
============================================================ */

function obterInformacoesAplicacao() {

    return {

        nome:
            CONFIG.nomeAplicacao,

        data:
            obterDataFormatada(),

        dia:
            obterDiaAtual(),

        horario:
            formatarHorario(),

        periodo:
            obterPeriodoDoDia(),

        oracoes:
            obterTotalOracoes(),

        vela:
            velaEstaAcesa(),

        favorito:
            estaFavoritado()

    };

}
