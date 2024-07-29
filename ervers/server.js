// server.js
const express = require('express');
const server = express();

// Definindo a rota de entrada
server.get('/', (req, res) => {
    res.send('<h1>Olá ExpressJS</h1>');
});

// Adicionando mais rotas
server.get('/sobre', (req, res) => {
    res.send('<h2>Somos quem podemos ser</h2>');
});

// Adicionando content-type json
server.get('/json', (req, res) => {
    res.send({ 'nome': 'Alcebíades' });
});

// Tratando recurso não disponível
server.use((req, res) => {
    res.status(404).send("<h1>Erro!!</h1>");
});

// Iniciando o servidor
server.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
