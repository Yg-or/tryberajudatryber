const express = require('express');
const bodyParser = require('body-parser');
const fetch = require("node-fetch");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));


let nome;
let email;
let telefone;
let turma;

function dadosCadastro(req) {
    nome = req.query.nome;
    email = req.query.email
    telefone = req.query.telefone;
    turma = req.query.turma;

    if (!nome) {
        return {'Teste': 'Node Js'}
    }


    return {
        nome: nome,
        email: email,
        telefone: telefone,
        turma: turma
    };

}

function confereDados(req, res) {
    if (!req.query.nome || !req.query.email || !req.query.telefone || !req.query.turma) {
        return false;
    }
    return true;

}

app.get('/curso', (req, res) => {
    if (!confereDados(req)) {
        return res.json({'erro': 'algo de errado ocorreu'})
    }
    return res.json(dadosCadastro(req));
});

app.listen(3000);
