/* ============================================================
   SANTO TERÇO — VERSÃO 1.0
   ARQUIVO: service-worker.js

   Responsável pelo funcionamento básico offline
   e pelo armazenamento dos arquivos principais.
============================================================ */


/* ============================================================
   CONFIGURAÇÃO
============================================================ */

const CACHE_NAME =
    "santo-terco-v1";


/* ============================================================
   ARQUIVOS PRINCIPAIS
============================================================ */

const ARQUIVOS_CACHE = [

    "./",

    "./index.html",

    "./style.css",

    "./manifest.json",

    "./js/dados.js",

    "./js/util.js",

    "./js/player.js",

    "./js/efeitos.js",

    "./js/app.js"

];


/* ============================================================
   INSTALAÇÃO
============================================================ */

self.addEventListener(
    "install",
    event => {

        event.waitUntil(

            caches
                .open(CACHE_NAME)
                .then(
                    cache => {

                        return cache.addAll(
                            ARQUIVOS_CACHE
                        );

                    }
                )

        );


        /*
           Faz o novo Service Worker assumir
           imediatamente o controle.
        */

        self.skipWaiting();

    }
);


/* ============================================================
   ATIVAÇÃO
============================================================ */

self.addEventListener(
    "activate",
    event => {

        event.waitUntil(

            caches
                .keys()
                .then(
                    nomesCaches => {

                        return Promise.all(

                            nomesCaches.map(
                                nomeCache => {

                                    if (
                                        nomeCache !==
                                        CACHE_NAME
                                    ) {

                                        return caches.delete(
                                            nomeCache
                                        );

                                    }

                                    return null;

                                }
                            )

                        );

                    }
                )

        );


        /*
           Assume o controle das páginas
           abertas imediatamente.
        */

        self.clients.claim();

    }
);


/* ============================================================
   INTERCEPTAÇÃO DE REQUISIÇÕES
============================================================ */

self.addEventListener(
    "fetch",
    event => {

        /*
           Apenas requisições GET são tratadas.
        */

        if (
            event.request.method !==
            "GET"
        ) {

            return;

        }


        event.respondWith(

            caches.match(
                event.request
            )
            .then(
                respostaCache => {

                    /*
                       Se o arquivo estiver no cache,
                       utiliza a versão armazenada.
                    */

                    if (respostaCache) {

                        return respostaCache;

                    }


                    /*
                       Caso contrário, tenta buscar
                       na internet.
                    */

                    return fetch(
                        event.request
                    )
                    .then(
                        respostaRede => {

                            /*
                               Cria uma cópia da resposta
                               para armazenar no cache.
                            */

                            if (
                                respostaRede &&
                                respostaRede.status === 200 &&
                                respostaRede.type !==
                                    "opaque"
                            ) {

                                const copia =
                                    respostaRede.clone();


                                caches
                                    .open(
                                        CACHE_NAME
                                    )
                                    .then(
                                        cache => {

                                            cache.put(
                                                event.request,
                                                copia
                                            );

                                        }
                                    );

                            }


                            return respostaRede;

                        }
                    )
                    .catch(
                        () => {

                            /*
                               Se estiver offline e a
                               página não estiver disponível,
                               tenta entregar o index.
                            */

                            return caches.match(
                                "./index.html"
                            );

                        }
                    );

                }
            )

        );

    }
);


/* ============================================================
   MENSAGENS
============================================================ */

self.addEventListener(
    "message",
    event => {

        if (
            !event.data
        ) {

            return;

        }


        if (
            event.data.tipo ===
            "ATUALIZAR_CACHE"
        ) {

            caches
                .open(
                    CACHE_NAME
                )
                .then(
                    cache => {

                        return cache.addAll(
                            ARQUIVOS_CACHE
                        );

                    }
                );

        }

    }
);
