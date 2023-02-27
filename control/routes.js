/**
 * control/routes.js
 * Arquivo de rotas do aplicativo.
 */

// Carrega o módulo "express.js".
const express = require('express');

// Cria um roteamento "Express".
const router = express.Router();

// Extrai os dados do cabeçalho da requisição usando "JSON".
const bodyParser = require('body-parser').json();

// Carrega o controller de 'pessoas'.
const pessoaControl = require('./pessoaControl');

// Carrega o controller de 'tumulo'.
const tumuloControl = require('./pessoaControl');

// Carrega o controller de 'funcionarios'.
const funciControl = require('./pessoaControl');

// Rota raiz emite mensagem de erro.
router.get("/", (req, res) => {
    res.json({
        status: "error",
        message: "Bad request"
    });
});

// Rotas para as requisições de 'pessoas'.
router.get("/pessoa/", pessoaControl.getAll);
router.get("/pessoa/:id", pessoaControl.getOne);
router.post("/pessoa/", bodyParser, pessoaControl.post);
router.put("/pessoa/:id", bodyParser, pessoaControl.put);
router.delete("/pessoa/:id", pessoaControl.delete);

// Carrega o controller de 'tumulos'.
const tumuloControl = require('./tumuloControl');

// Rotas para as requisições de 'tumulos'.
router.get("/tumulo/", tumuloControl.getAll);
router.get("/tumulo/:id", tumuloControl.getOne);
router.post("/tumulo/", bodyParser, tumuloControl.post);
router.put("/tumulo/:id", bodyParser, tumuloControl.put);
router.delete("/tumulo/:id", tumuloControl.delete);

// Rotas para as requisições de 'cemiterio'.
router.get("/cemiterio/", cemiterioControl.getAll);
router.get("/cemiterio/:id", cemiterioControl.getOne);
router.post("/cemiterio/", bodyParser, cemiterioControl.post);
router.put("/cemiterio/:id", bodyParser, cemiterioControl.put);
router.delete("/cemiterio/:id", cemiterioControl.delete);


// Rotas para as requisições de 'tumulo'.
outer.get("/tumulo/", cemiterioControl.getAll);
router.get("/tumulo/:id", cemiterioControl.getOne);
router.post("/tumulo/", bodyParser, cemiterioControl.post);
router.put("/tumulo/:id", bodyParser, cemiterioControl.put);
router.delete("/tumulo/:id", cemiterioControl.delete);



// Exporta o módulo.
module.exports = router;


