// server2.js
const express = require('express');
const server2 = express();
const path = require('path');

// Iniciando o servidor
server2.listen(3000, () => {
    console.log('Servidor 2 rodando na porta 3000');
});

// Definindo as rotas
server2.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', 'principal.html'));
});

server2.get('/servicos', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', 'servicos.html'));
});

server2.get('/sobre', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', 'sobre.html'));
});

// Tratando erro 404
server2.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'html', '404.html'));
});
