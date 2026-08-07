/* ============================================================
   SANTO TERÇO — VERSÃO 1.0
   ARQUIVO: js/app.js

   Controlador principal da aplicação.
============================================================ */


/* ============================================================
   VARIÁVEIS
============================================================ */

let dadosDoDia = null;

let misterioAtual = 0;

let aplicacaoInicializada = false;


/* ============================================================
   INICIALIZAÇÃO
============================================================ */

document.addEventListener(
    "DOMContentLoaded",
    iniciarAplicacao
);


/* ============================================================
   INICIA A APLICAÇÃO
============================================================ */

function iniciarAplicacao() {

    if (aplicacaoInicializada) {

        return;

    }


    aplicacaoInicializada =
        true;


    dadosDoDia =
        obterDadosDoDia();


    configurarData();

    configurarSaudacao();

    configurarMisterioDoDia();

    configurarVersiculo();

    configurarFrase();

    configurarIntencao();

    configurarSanto();

    configurarEvangelho();

    configurarContadorOracoes();

    configurarCompartilhamento();

    configurarFavorito();

    configurarLembrete();

    configurarBotoesMisterios();

    configurarNavegacao();

    configurarConclusaoAudio();

    configurarHomenagem();

    iniciarRelogio();

    atualizarMensagemPeriodo();


    /*
       O player e os efeitos possuem seus próprios
       inicializadores.
    */

}


/* ============================================================
   DATA
============================================================ */

function configurarData() {

    const elemento =
        document.getElementById(
            "dataAtual"
        );


    if (!elemento) {

        return;

    }


    elemento.textContent =
        obterDataPorExtenso();

}


/* ============================================================
   SAUDAÇÃO
============================================================ */

function configurarSaudacao() {

    const elemento =
        document.getElementById(
            "saudacao"
        );


    if (!elemento) {

        return;

    }


    elemento.textContent =
        obterSaudacao();

}


/* ============================================================
   RELÓGIO
============================================================ */

function iniciarRelogio() {

    atualizarRelogio();


    window.setInterval(
        atualizarRelogio,
        1000
    );

}


/* ============================================================
   ATUALIZA RELÓGIO
============================================================ */

function atualizarRelogio() {

    const elemento =
        document.getElementById(
            "relogio"
        );


    if (!elemento) {

        return;

    }


    elemento.textContent =
        formatarHorario();

}


/* ============================================================
   MENSAGEM DO PERÍODO
============================================================ */

function atualizarMensagemPeriodo() {

    const elemento =
        document.getElementById(
            "mensagemPeriodo"
        );


    if (!elemento) {

        return;

    }


    elemento.textContent =
        obterMensagemPeriodo();

}


/* ============================================================
   MISTÉRIO DO DIA
============================================================ */

function configurarMisterioDoDia() {

    if (!dadosDoDia) {

        return;

    }


    const dia =
        document.getElementById(
            "diaSemana"
        );


    const titulo =
        document.getElementById(
            "tituloMisterio"
        );


    const descricao =
        document.getElementById(
            "descricaoMisterio"
        );


    const imagem =
        document.getElementById(
            "imagemMisterio"
        );


    if (dia) {

        dia.textContent =
            dadosDoDia.dia;

    }


    if (titulo) {

        titulo.textContent =
            dadosDoDia.titulo;

    }


    if (descricao) {

        descricao.textContent =
            dadosDoDia.descricao;

    }


    if (imagem) {

        definirImagem(

            imagem,

            dadosDoDia.imagem,

            dadosDoDia.titulo

        );

    }


    aplicarTemaVisual(
        dadosDoDia
    );


    aplicarFundoMistério(
        dadosDoDia
    );


    carregarAudioDoDia();

}


/* ============================================================
   CARREGA ÁUDIO DO DIA
============================================================ */

function carregarAudioDoDia() {

    if (!dadosDoDia) {

        return;

    }


    const audio =
        document.getElementById(
            "audio"
        );


    if (!audio) {

        return;

    }


    carregarAudio(
        dadosDoDia.audio
    );

}


/* ============================================================
   LISTA DE MISTÉRIOS
============================================================ */

function configurarBotoesMisterios() {

    const container =
        document.getElementById(
            "listaMisterios"
        );


    if (!container || !dadosDoDia) {

        return;

    }


    container.innerHTML =
        "";


    dadosDoDia.mistérios.forEach(
        (misterio, indice) => {

            const item =
                document.createElement(
                    "button"
                );


            item.type =
                "button";


            item.className =
                "itemMisterio";


            item.dataset.indice =
                indice;


            item.innerHTML = `

                <span class="numeroMisterio">
                    ${misterio.numero}
                </span>

                <span class="conteudoMisterio">

                    <strong>
                        ${misterio.titulo}
                    </strong>

                    <small>
                        ${misterio.descricao}
                    </small>

                    <em>
                        ${misterio.referencia}
                    </em>

                </span>

            `;


            item.addEventListener(
                "click",
                () => {

                    selecionarMisterio(
                        indice
                    );

                }
            );


            container.appendChild(
                item
            );

        }
    );


    selecionarMisterio(0);

}


/* ============================================================
   SELECIONA MISTÉRIO
============================================================ */

function selecionarMisterio(indice) {

    if (!dadosDoDia) {

        return;

    }


    if (
        indice < 0 ||
        indice >= dadosDoDia.mistérios.length
    ) {

        return;

    }


    misterioAtual =
        indice;


    const itens =
        document.querySelectorAll(
            ".itemMisterio"
        );


    itens.forEach(
        (item, i) => {

            item.classList.toggle(
                "ativo",
                i === indice
            );

        }
    );


    const misterio =
        dadosDoDia.mistérios[indice];


    const titulo =
        document.getElementById(
            "misterioSelecionado"
        );


    const descricao =
        document.getElementById(
            "descricaoSelecionado"
        );


    const referencia =
        document.getElementById(
            "referenciaSelecionada"
        );


    if (titulo) {

        titulo.textContent =
            misterio.titulo;

    }


    if (descricao) {

        descricao.textContent =
            misterio.descricao;

    }


    if (referencia) {

        referencia.textContent =
            misterio.referencia;

    }


    const contador =
        document.getElementById(
            "contadorMisterio"
        );


    if (contador) {

        contador.textContent =

            `${indice + 1} de ` +
            `${dadosDoDia.mistérios.length}`;

    }

}


/* ============================================================
   VERSÍCULO
============================================================ */

function configurarVersiculo() {

    const versiculo =
        obterVersiculoAleatorio();


    if (!versiculo) {

        return;

    }


    const texto =
        document.getElementById(
            "versiculoTexto"
        );


    const referencia =
        document.getElementById(
            "versiculoReferencia"
        );


    if (texto) {

        texto.textContent =
            `“${versiculo.texto}”`;

    }


    if (referencia) {

        referencia.textContent =
            versiculo.referencia;

    }

}


/* ============================================================
   FRASE
============================================================ */

function configurarFrase() {

    const elemento =
        document.getElementById(
            "fraseDoDia"
        );


    if (!elemento) {

        return;

    }


    elemento.textContent =
        obterFraseAleatoria();

}


/* ============================================================
   INTENÇÃO
============================================================ */

function configurarIntencao() {

    const elemento =
        document.getElementById(
            "intencaoDoDia"
        );


    if (!elemento) {

        return;

    }


    elemento.textContent =
        obterIntencaoAleatoria();

}


/* ============================================================
   SANTO DO DIA
============================================================ */

function configurarSanto() {

    const santo =
        obterSantoAleatorio();


    if (!santo) {

        return;

    }


    const nome =
        document.getElementById(
            "santoNome"
        );


    const frase =
        document.getElementById(
            "santoFrase"
        );


    const referencia =
        document.getElementById(
            "santoReferencia"
        );


    if (nome) {

        nome.textContent =
            santo.nome;

    }


    if (frase) {

        frase.textContent =
            `“${santo.frase}”`;

    }


    if (referencia) {

        referencia.textContent =
            santo.referencia;

    }

}


/* ============================================================
   EVANGELHO
============================================================ */

function configurarEvangelho() {

    const evangelho =
        obterEvangelhoAleatorio();


    if (!evangelho) {

        return;

    }


    const titulo =
        document.getElementById(
            "evangelhoTitulo"
        );


    const texto =
        document.getElementById(
            "evangelhoTexto"
        );


    const referencia =
        document.getElementById(
            "evangelhoReferencia"
        );


    if (titulo) {

        titulo.textContent =
            evangelho.titulo;

    }


    if (texto) {

        texto.textContent =
            `“${evangelho.texto}”`;

    }


    if (referencia) {

        referencia.textContent =
            evangelho.referencia;

    }

}


/* ============================================================
   CONTADOR DE ORAÇÕES
============================================================ */

function configurarContadorOracoes() {

    atualizarContadorOracoes();

}


/* ============================================================
   ATUALIZA CONTADOR
============================================================ */

function atualizarContadorOracoes() {

    const elemento =
        document.getElementById(
            "totalOracoes"
        );


    if (!elemento) {

        return;

    }


    elemento.textContent =
        obterTotalOracoes();

}


/* ============================================================
   CONCLUSÃO DA ORAÇÃO
============================================================ */

function concluirOracao() {

    const total =
        registrarOracao();


    atualizarContadorOracoes();


    const mensagem =
        document.getElementById(
            "mensagemConclusao"
        );


    if (mensagem) {

        mensagem.textContent =

            `🙏 Oração concluída. ` +
            `Esta foi sua oração nº ${total}.`;

    }


    celebrarConclusao();


    mostrarConclusao();

}


/* ============================================================
   MOSTRA CONCLUSÃO
============================================================ */

function mostrarConclusao() {

    const elemento =
        document.getElementById(
            "conclusao"
        );


    if (!elemento) {

        return;

    }


    elemento.hidden =
        false;


    rolarPara(
        elemento
    );

}


/* ============================================================
   OCULTA CONCLUSÃO
============================================================ */

function ocultarConclusao() {

    const elemento =
        document.getElementById(
            "conclusao"
        );


    if (!elemento) {

        return;

    }


    elemento.hidden =
        true;

}


/* ============================================================
   ESCUTA TÉRMINO DO ÁUDIO
============================================================ */

function configurarConclusaoAudio() {

    document.addEventListener(
        "terco:audioFinalizado",
        () => {

            concluirOracao();

        }
    );

}


/* ============================================================
   COMPARTILHAMENTO
============================================================ */

function configurarCompartilhamento() {

    const botao =
        document.getElementById(
            "btnCompartilhar"
        );


    if (!botao) {

        return;

    }


    botao.addEventListener(
        "click",
        compartilharPagina
    );

}


/* ============================================================
   COMPARTILHA PÁGINA
============================================================ */

async function compartilharPagina() {

    const texto =
        "Estou rezando o Santo Terço. 🙏";


    const dados = {

        title:
            "Santo Terço",

        text:
            texto,

        url:
            obterUrlAtual()

    };


    if (podeCompartilhar()) {

        try {

            await navigator.share(
                dados
            );

            return;

        } catch (erro) {

            /*
               O usuário pode simplesmente
               ter cancelado o compartilhamento.
            */

            if (
                erro &&
                erro.name ===
                "AbortError"
            ) {

                return;

            }

        }

    }


    const textoCompleto =
        `${texto}\n${obterUrlAtual()}`;


    const copiado =
        await copiarTexto(
            textoCompleto
        );


    const mensagem =
        document.getElementById(
            "mensagemCompartilhar"
        );


    if (mensagem) {

        mensagem.textContent =
            copiado
                ? "✓ Link copiado!"
                : "Não foi possível compartilhar.";

        window.setTimeout(
            () => {

                mensagem.textContent =
                    "";

            },
            2500
        );

    }

}


/* ============================================================
   FAVORITO
============================================================ */

function configurarFavorito() {

    const botao =
        document.getElementById(
            "btnFavorito"
        );


    if (!botao) {

        return;

    }


    atualizarBotaoFavorito(
        botao
    );


    botao.addEventListener(
        "click",
        alternarFavorito
    );

}


/* ============================================================
   ALTERNA FAVORITO
============================================================ */

function alternarFavorito() {

    const novoEstado =
        !estaFavoritado();


    salvarFavorito(
        novoEstado
    );


    const botao =
        document.getElementById(
            "btnFavorito"
        );


    atualizarBotaoFavorito(
        botao
    );

}


/* ============================================================
   ATUALIZA BOTÃO FAVORITO
============================================================ */

function atualizarBotaoFavorito(
    botao
) {

    if (!botao) {

        return;

    }


    if (estaFavoritado()) {

        botao.innerHTML =
            "❤️ Favorito";


        botao.classList.add(
            "favoritado"
        );


    } else {

        botao.innerHTML =
            "♡ Favoritar";


        botao.classList.remove(
            "favoritado"
        );

    }

}


/* ============================================================
   LEMBRETE
============================================================ */

function configurarLembrete() {

    const botao =
        document.getElementById(
            "btnLembrete"
        );


    if (!botao) {

        return;

    }


    botao.addEventListener(
        "click",
        criarLembrete
    );

}


/* ============================================================
   CRIA LEMBRETE
============================================================ */

function criarLembrete() {

    const amanha =
        obterProximoDia();


    const data =
        formatarData(
            amanha
        );


    salvarLembrete(
        data
    );


    const mensagem =
        document.getElementById(
            "mensagemLembrete"
        );


    if (mensagem) {

        mensagem.textContent =

            `🙏 Lembrete registrado para ${data}.`;

    }


    window.setTimeout(
        () => {

            if (mensagem) {

                mensagem.textContent =
                    "";

            }

        },
        3000
    );

}


/* ============================================================
   NAVEGAÇÃO
============================================================ */

function configurarNavegacao() {

    const botoes =
        document.querySelectorAll(
            "[data-scroll]"
        );


    botoes.forEach(
        botao => {

            botao.addEventListener(
                "click",
                () => {

                    const id =
                        botao.dataset.scroll;


                    const elemento =
                        document.getElementById(
                            id
                        );


                    rolarPara(
                        elemento
                    );

                }
            );

        }
    );

}


/* ============================================================
   BOTÃO DE HOMENAGEM
============================================================ */

function configurarHomenagem() {

    const botao =
        document.getElementById(
            "btnHomenagem"
        );


    if (!botao) {

        return;

    }


    botao.addEventListener(
        "click",
        abrirHomenagem
    );

}


/* ============================================================
   ABRE HOMENAGEM
============================================================ */

function abrirHomenagem() {

    window.location.href =
        HOMENAGEM.destino;

}


/* ============================================================
   BOTÃO DE CONCLUSÃO MANUAL
============================================================ */

function configurarBotaoConclusao() {

    const botao =
        document.getElementById(
            "btnConcluirOracao"
        );


    if (!botao) {

        return;

    }


    botao.addEventListener(
        "click",
        concluirOracao
    );

}


/* ============================================================
   ATUALIZA MENSAGEM DE MISTÉRIO
============================================================ */

function atualizarMisterioSelecionado() {

    if (!dadosDoDia) {

        return;

    }


    selecionarMisterio(
        misterioAtual
    );

}


/* ============================================================
   BOTÕES ANTERIOR / PRÓXIMO MISTÉRIO
============================================================ */

function configurarNavegacaoMisterios() {

    const anterior =
        document.getElementById(
            "btnMisterioAnterior"
        );


    const proximo =
        document.getElementById(
            "btnMisterioProximo"
        );


    if (anterior) {

        anterior.addEventListener(
            "click",
            () => {

                let novoIndice =
                    misterioAtual - 1;


                if (
                    novoIndice < 0
                ) {

                    novoIndice =
                        dadosDoDia.mistérios.length - 1;

                }


                selecionarMisterio(
                    novoIndice
                );

            }
        );

    }


    if (proximo) {

        proximo.addEventListener(
            "click",
            () => {

                let novoIndice =
                    misterioAtual + 1;


                if (
                    novoIndice >=
                    dadosDoDia.mistérios.length
                ) {

                    novoIndice = 0;

                }


                selecionarMisterio(
                    novoIndice
                );

            }
        );

    }

}


/* ============================================================
   CONFIGURAÇÕES FINAIS
============================================================ */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        configurarBotaoConclusao();

        configurarNavegacaoMisterios();

    }
);
