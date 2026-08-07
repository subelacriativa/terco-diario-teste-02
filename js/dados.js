/* ============================================================
   SANTO TERÇO — VERSÃO 1.0
   ARQUIVO: dados.js

   Este arquivo contém somente os dados da aplicação.
   Não contém lógica de funcionamento.
============================================================ */


/* ============================================================
   MISTÉRIOS DO SANTO TERÇO
============================================================ */

const MISTERIOS = {

    domingo: {

        chave: "gloriosos",

        dia: "Domingo",

        titulo: "Mistérios Gloriosos",

        descricao:
            "Contemplamos a Ressurreição e a Glória de Cristo.",

        imagem: "img/gloriosos.png",

        fundo: "img/fundo_gloriosos.jpg",

        audio: "audios/misterios_gloriosos.mp3",

        cor: "#d18b00",

        mistérios: [

            {
                numero: 1,
                titulo: "A Ressurreição de Jesus",
                descricao:
                    "Contemplamos Jesus ressuscitado, vencedor da morte.",
                referencia: "Mateus 28, 1-10"
            },

            {
                numero: 2,
                titulo: "A Ascensão de Jesus",
                descricao:
                    "Contemplamos Jesus que sobe aos Céus.",
                referencia: "Atos 1, 6-11"
            },

            {
                numero: 3,
                titulo: "A Vinda do Espírito Santo",
                descricao:
                    "Contemplamos a descida do Espírito Santo sobre os Apóstolos.",
                referencia: "Atos 2, 1-4"
            },

            {
                numero: 4,
                titulo: "A Assunção de Nossa Senhora",
                descricao:
                    "Contemplamos Maria elevada ao Céu.",
                referencia: "Lucas 1, 46-49"
            },

            {
                numero: 5,
                titulo: "A Coroação de Nossa Senhora",
                descricao:
                    "Contemplamos Maria coroada Rainha do Céu e da Terra.",
                referencia: "Apocalipse 12, 1"
            }

        ],

        oracaoFinal:
            "Senhor Jesus, por meio dos Mistérios Gloriosos, " +
            "aumentai nossa fé na Ressurreição e ajudai-nos a " +
            "viver com esperança, confiando sempre em Vossa promessa. " +
            "Por intercessão de Maria Santíssima, conduzi-nos ao Vosso Reino. Amém."

    },


    segunda: {

        chave: "gozosos",

        dia: "Segunda-feira",

        titulo: "Mistérios Gozosos",

        descricao:
            "Contemplamos a Encarnação e a infância de Jesus.",

        imagem: "img/gozosos.png",

        fundo: "img/fundo_gozosos.jpg",

        audio: "audios/misterios_gozosos.mp3",

        cor: "#3479ea",

        mistérios: [

            {
                numero: 1,
                titulo: "A Anunciação do Anjo a Maria",
                descricao:
                    "Contemplamos Maria recebendo o anúncio do nascimento de Jesus.",
                referencia: "Lucas 1, 26-38"
            },

            {
                numero: 2,
                titulo: "A Visitação de Maria a Isabel",
                descricao:
                    "Contemplamos Maria visitando sua prima Isabel.",
                referencia: "Lucas 1, 39-45"
            },

            {
                numero: 3,
                titulo: "O Nascimento de Jesus",
                descricao:
                    "Contemplamos Jesus nascendo humildemente em Belém.",
                referencia: "Lucas 2, 1-20"
            },

            {
                numero: 4,
                titulo: "A Apresentação de Jesus no Templo",
                descricao:
                    "Contemplamos Maria e José apresentando Jesus no Templo.",
                referencia: "Lucas 2, 22-35"
            },

            {
                numero: 5,
                titulo: "O Encontro de Jesus no Templo",
                descricao:
                    "Contemplamos Jesus sendo encontrado entre os doutores.",
                referencia: "Lucas 2, 41-52"
            }

        ],

        oracaoFinal:
            "Senhor Jesus, ensinai-nos a acolher Vossa presença " +
            "com a mesma fé e humildade de Maria. Que os Mistérios " +
            "Gozosos nos ajudem a reconhecer Vosso amor em cada momento " +
            "de nossa vida. Amém."

    },


    terça: {

        chave: "dolorosos",

        dia: "Terça-feira",

        titulo: "Mistérios Dolorosos",

        descricao:
            "Contemplamos a Paixão e a Morte de Nosso Senhor Jesus Cristo.",

        imagem: "img/dolorosos.png",

        fundo: "img/fundo_dolorosos.jpg",

        audio: "audios/misterios_dolorosos.mp3",

        cor: "#b71c1c",

        mistérios: [

            {
                numero: 1,
                titulo: "A Agonia de Jesus no Horto",
                descricao:
                    "Contemplamos Jesus em oração no Jardim das Oliveiras.",
                referencia: "Mateus 26, 36-46"
            },

            {
                numero: 2,
                titulo: "A Flagelação de Jesus",
                descricao:
                    "Contemplamos Jesus sendo cruelmente flagelado.",
                referencia: "João 19, 1"
            },

            {
                numero: 3,
                titulo: "A Coroação de Espinhos",
                descricao:
                    "Contemplamos Jesus sendo coroado com uma coroa de espinhos.",
                referencia: "Mateus 27, 27-31"
            },

            {
                numero: 4,
                titulo: "Jesus Carrega a Cruz",
                descricao:
                    "Contemplamos Jesus caminhando para o Calvário carregando Sua Cruz.",
                referencia: "João 19, 16-17"
            },

            {
                numero: 5,
                titulo: "A Crucificação e Morte de Jesus",
                descricao:
                    "Contemplamos Jesus entregando Sua vida por nossa salvação.",
                referencia: "Lucas 23, 33-46"
            }

        ],

        oracaoFinal:
            "Senhor Jesus, contemplando Vossa Paixão, " +
            "ensinai-nos a carregar nossas cruzes com fé e perseverança. " +
            "Que nunca nos afastemos de Vós nos momentos de sofrimento " +
            "e que aprendamos a oferecer nossas dores com amor. Amém."

    },


    quarta: {

        chave: "gloriosos",

        dia: "Quarta-feira",

        titulo: "Mistérios Gloriosos",

        descricao:
            "Contemplamos a Ressurreição e a Glória de Cristo.",

        imagem: "img/gloriosos.png",

        fundo: "img/fundo_gloriosos.jpg",

        audio: "audios/misterios_gloriosos.mp3",

        cor: "#d18b00",

        mistérios: [

            {
                numero: 1,
                titulo: "A Ressurreição de Jesus",
                descricao:
                    "Contemplamos Jesus ressuscitado, vencedor da morte.",
                referencia: "Mateus 28, 1-10"
            },

            {
                numero: 2,
                titulo: "A Ascensão de Jesus",
                descricao:
                    "Contemplamos Jesus que sobe aos Céus.",
                referencia: "Atos 1, 6-11"
            },

            {
                numero: 3,
                titulo: "A Vinda do Espírito Santo",
                descricao:
                    "Contemplamos a descida do Espírito Santo.",
                referencia: "Atos 2, 1-4"
            },

            {
                numero: 4,
                titulo: "A Assunção de Nossa Senhora",
                descricao:
                    "Contemplamos Maria elevada ao Céu.",
                referencia: "Lucas 1, 46-49"
            },

            {
                numero: 5,
                titulo: "A Coroação de Nossa Senhora",
                descricao:
                    "Contemplamos Maria coroada Rainha.",
                referencia: "Apocalipse 12, 1"
            }

        ],

        oracaoFinal:
            "Senhor Jesus, fazei crescer em nós a esperança " +
            "na vida eterna e ajudai-nos a caminhar sempre em Vossa presença. " +
            "Que Maria Santíssima nos acompanhe em nossa caminhada de fé. Amém."

    },


    quinta: {

        chave: "luminosos",

        dia: "Quinta-feira",

        titulo: "Mistérios Luminosos",

        descricao:
            "Contemplamos a vida pública de Jesus.",

        imagem: "img/luminosos.png",

        fundo: "img/fundo_luminosos.jpg",

        audio: "audios/misterios_luminosos.mp3",

        cor: "#d29d00",

        mistérios: [

            {
                numero: 1,
                titulo: "O Batismo de Jesus no Jordão",
                descricao:
                    "Contemplamos Jesus sendo batizado por João Batista.",
                referencia: "Mateus 3, 13-17"
            },

            {
                numero: 2,
                titulo: "Jesus nas Bodas de Caná",
                descricao:
                    "Contemplamos o primeiro milagre de Jesus.",
                referencia: "João 2, 1-12"
            },

            {
                numero: 3,
                titulo: "O Anúncio do Reino de Deus",
                descricao:
                    "Contemplamos Jesus anunciando o Reino e chamando à conversão.",
                referencia: "Marcos 1, 14-15"
            },

            {
                numero: 4,
                titulo: "A Transfiguração de Jesus",
                descricao:
                    "Contemplamos Jesus manifestando Sua glória.",
                referencia: "Mateus 17, 1-8"
            },

            {
                numero: 5,
                titulo: "A Instituição da Eucaristia",
                descricao:
                    "Contemplamos Jesus oferecendo Seu Corpo e Seu Sangue.",
                referencia: "Mateus 26, 26-29"
            }

        ],

        oracaoFinal:
            "Senhor Jesus, iluminai nossa caminhada com Vossa Palavra. " +
            "Ajudai-nos a reconhecer Vossa presença em nossa vida e, " +
            "como Maria, a fazer sempre aquilo que nos pedirdes. Amém."

    },


    sexta: {

        chave: "dolorosos",

        dia: "Sexta-feira",

        titulo: "Mistérios Dolorosos",

        descricao:
            "Contemplamos a Paixão e a Morte de Nosso Senhor Jesus Cristo.",

        imagem: "img/dolorosos.png",

        fundo: "img/fundo_dolorosos.jpg",

        audio: "audios/misterios_dolorosos.mp3",

        cor: "#b71c1c",

        mistérios: [

            {
                numero: 1,
                titulo: "A Agonia de Jesus no Horto",
                descricao:
                    "Contemplamos Jesus em profunda oração.",
                referencia: "Mateus 26, 36-46"
            },

            {
                numero: 2,
                titulo: "A Flagelação de Jesus",
                descricao:
                    "Contemplamos Jesus sendo flagelado.",
                referencia: "João 19, 1"
            },

            {
                numero: 3,
                titulo: "A Coroação de Espinhos",
                descricao:
                    "Contemplamos Jesus coroado com espinhos.",
                referencia: "Mateus 27, 27-31"
            },

            {
                numero: 4,
                titulo: "Jesus Carrega a Cruz",
                descricao:
                    "Contemplamos Jesus caminhando para o Calvário.",
                referencia: "João 19, 16-17"
            },

            {
                numero: 5,
                titulo: "A Crucificação e Morte de Jesus",
                descricao:
                    "Contemplamos Jesus entregando Sua vida por nós.",
                referencia: "Lucas 23, 33-46"
            }

        ],

        oracaoFinal:
            "Senhor Jesus, pela Vossa Santa Cruz, " +
            "ensinai-nos a confiar em Vós mesmo diante das dificuldades. " +
            "Dai-nos força, esperança e perseverança. Amém."

    },


    sábado: {

        chave: "gozosos",

        dia: "Sábado",

        titulo: "Mistérios Gozosos",

        descricao:
            "Contemplamos a Encarnação e a infância de Jesus.",

        imagem: "img/gozosos.png",

        fundo: "img/fundo_gozosos.jpg",

        audio: "audios/misterios_gozosos.mp3",

        cor: "#3479ea",

        mistérios: [

            {
                numero: 1,
                titulo: "A Anunciação do Anjo a Maria",
                descricao:
                    "Contemplamos o anúncio do nascimento de Jesus.",
                referencia: "Lucas 1, 26-38"
            },

            {
                numero: 2,
                titulo: "A Visitação de Maria a Isabel",
                descricao:
                    "Contemplamos Maria visitando Isabel.",
                referencia: "Lucas 1, 39-45"
            },

            {
                numero: 3,
                titulo: "O Nascimento de Jesus",
                descricao:
                    "Contemplamos o nascimento do Salvador.",
                referencia: "Lucas 2, 1-20"
            },

            {
                numero: 4,
                titulo: "A Apresentação de Jesus no Templo",
                descricao:
                    "Contemplamos Jesus apresentado no Templo.",
                referencia: "Lucas 2, 22-35"
            },

            {
                numero: 5,
                titulo: "O Encontro de Jesus no Templo",
                descricao:
                    "Contemplamos Jesus encontrado entre os doutores.",
                referencia: "Lucas 2, 41-52"
            }

        ],

        oracaoFinal:
            "Senhor Jesus, pela intercessão de Maria Santíssima, " +
            "ensinai-nos a acolher Vossa presença com humildade, " +
            "amor e confiança. Que nossa família permaneça sempre unida " +
            "em Vossa graça. Amém."

    }

};


/* ============================================================
   VERSÍCULOS
============================================================ */

const VERSICULOS = [

    {
        texto:
            "Confia no Senhor de todo o teu coração.",
        referencia:
            "Provérbios 3, 5"
    },

    {
        texto:
            "O Senhor é meu pastor, nada me faltará.",
        referencia:
            "Salmo 23, 1"
    },

    {
        texto:
            "Eu estarei convosco todos os dias.",
        referencia:
            "Mateus 28, 20"
    },

    {
        texto:
            "Tudo posso naquele que me fortalece.",
        referencia:
            "Filipenses 4, 13"
    },

    {
        texto:
            "Não temas, porque Eu estou contigo.",
        referencia:
            "Isaías 41, 10"
    },

    {
        texto:
            "Buscai primeiro o Reino de Deus e a sua justiça.",
        referencia:
            "Mateus 6, 33"
    },

    {
        texto:
            "A paz esteja convosco.",
        referencia:
            "João 20, 19"
    }

];


/* ============================================================
   FRASES
============================================================ */

const FRASES = [

    "Quem reza nunca está sozinho.",

    "Maria sempre conduz ao coração de Jesus.",

    "A oração transforma o coração e fortalece a esperança.",

    "Rezar o Terço é caminhar com Nossa Senhora.",

    "A fé ilumina até os dias mais difíceis.",

    "Deus nunca abandona quem confia Nele.",

    "Quando rezamos, entregamos a Deus aquilo que não conseguimos carregar sozinhos.",

    "Que a oração de hoje seja fonte de paz para o seu coração."

];


/* ============================================================
   INTENÇÕES
============================================================ */

const INTENCOES = [

    "Pela paz em todas as famílias.",

    "Pelos enfermos e por todos aqueles que necessitam de conforto.",

    "Pelos professores e educadores, para que sejam sempre instrumentos de esperança.",

    "Pelos jovens, para que encontrem caminhos de fé, amor e esperança.",

    "Pelos idosos, para que nunca lhes faltem carinho, companhia e dignidade.",

    "Por todos aqueles que procuram emprego e por suas famílias.",

    "Pela Igreja e por todos aqueles que dedicam sua vida ao serviço de Deus.",

    "Pelas pessoas que hoje carregam preocupações silenciosas em seus corações.",

    "Pelas famílias que estão passando por momentos de dificuldade.",

    "Por aqueles que precisam tomar decisões importantes em suas vidas."

];


/* ============================================================
   SANTOS / FRASES DO DIA
============================================================ */

const SANTOS = [

    {
        nome: "Nossa Senhora",
        frase:
            "Fazei tudo o que Ele vos disser.",
        referencia:
            "João 2, 5"
    },

    {
        nome: "São José",
        frase:
            "A verdadeira fé também se manifesta no silêncio e na confiança.",
        referencia:
            "Exemplo de vida"
    },

    {
        nome: "Santa Teresinha do Menino Jesus",
        frase:
            "A confiança e somente a confiança deve conduzir-nos ao amor.",
        referencia:
            "Espiritualidade de Santa Teresinha"
    },

    {
        nome: "São Francisco de Assis",
        frase:
            "Comece fazendo o que é necessário, depois o que é possível.",
        referencia:
            "Tradição atribuída a São Francisco"
    },

    {
        nome: "Santa Teresa de Calcutá",
        frase:
            "Não podemos fazer grandes coisas, apenas pequenas coisas com grande amor.",
        referencia:
            "Espiritualidade de Madre Teresa"
    },

    {
        nome: "São João Paulo II",
        frase:
            "Não tenhais medo. Abri, escancarai as portas a Cristo.",
        referencia:
            "Homilia de início do pontificado"
    },

    {
        nome: "Santo Antônio",
        frase:
            "Quem tem fé possui luz para caminhar mesmo quando o caminho parece difícil.",
        referencia:
            "Reflexão espiritual"
    }

];


/* ============================================================
   EVANGELHOS / MENSAGENS
============================================================ */

const EVANGELHOS = [

    {
        titulo: "A Palavra de Deus",
        texto:
            "Permanecei em Mim, e Eu permanecerei em vós.",
        referencia:
            "João 15, 4"
    },

    {
        titulo: "A Palavra de Deus",
        texto:
            "Vinde a Mim, todos vós que estais cansados e carregados.",
        referencia:
            "Mateus 11, 28"
    },

    {
        titulo: "A Palavra de Deus",
        texto:
            "Onde dois ou três estiverem reunidos em Meu nome, ali estou Eu.",
        referencia:
            "Mateus 18, 20"
    },

    {
        titulo: "A Palavra de Deus",
        texto:
            "Pedi e vos será dado; procurai e encontrareis.",
        referencia:
            "Mateus 7, 7"
    }

];


/* ============================================================
   CONFIGURAÇÃO DA HOMENAGEM
============================================================ */

const HOMENAGEM = {

    titulo:
        "Esta homenagem foi preparada especialmente para você.",

    mensagem:
        "Que este presente leve até você todo o carinho, " +
        "amor e gratidão de quem o preparou.",

    botao:
        "💌 Ver minha homenagem",

    destino:
        "homenagem.html"

};


/* ============================================================
   MENSAGENS DA VELA
============================================================ */

const MENSAGENS_VELA = [

    "Sua intenção foi colocada em oração. 🙏",

    "Que esta luz represente sua fé e sua esperança. 🕯️",

    "Que Deus acolha sua intenção e fortaleça seu coração. 🙏",

    "Que esta pequena luz ilumine sua caminhada. ✨"

];


/* ============================================================
   CONFIGURAÇÕES DA APLICAÇÃO
============================================================ */

const CONFIG = {

    nomeAplicacao:
        "Santo Terço",

    nomeArquivoAudio:
        "misterios",

    tempoRetroceder:
        10,

    tempoAvancar:
        10,

    velocidadePadrao:
        1,

    volumePadrao:
        1,

    chaveVela:
        "santoTerco_vela",

    chaveOracoes:
        "santoTerco_oracoes",

    chaveFavorito:
        "santoTerco_favorito",

    chaveLembrete:
        "santoTerco_lembrete"

};


/* ============================================================
   DIAS DA SEMANA
============================================================ */

const DIAS_SEMANA = [

    "Domingo",

    "Segunda-feira",

    "Terça-feira",

    "Quarta-feira",

    "Quinta-feira",

    "Sexta-feira",

    "Sábado"

];


/* ============================================================
   MESES
============================================================ */

const MESES = [

    "Janeiro",

    "Fevereiro",

    "Março",

    "Abril",

    "Maio",

    "Junho",

    "Julho",

    "Agosto",

    "Setembro",

    "Outubro",

    "Novembro",

    "Dezembro"

];
