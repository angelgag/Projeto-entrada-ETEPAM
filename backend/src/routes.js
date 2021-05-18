const express = require('express');
const connection = require('./database/connection')
const AlunoController = require('./controllers/AlunoController')

const routes = express.Router();

//listar alunos
routes.get('/cadastro', AlunoController.list);

//cadastrar aluno
routes.post('/cadastro', AlunoController.create);

module.exports = routes;