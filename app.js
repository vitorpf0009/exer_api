// app.js — Ponto de entrada da aplicação. Configuração e montagem.

const express = require("express");
const app = express();

// Importação das rotas organizadas por recurso
const livroRoutes = require("./routes/livroRoutes");

// Importação do middleware centralizado de erros
const errorHandler = require("./middlewares/errorHandler");

// =============================================
// Configuração de Middlewares Globais
// =============================================
app.use(express.json());

// =============================================
// Montagem das Rotas
// =============================================
app.use("/livros", livroRoutes);

// =============================================
// Middleware de Tratamento Centralizado de Erros
// =============================================
app.use(errorHandler);

// =============================================
// Inicialização do Servidor
// =============================================
const PORTA = 3000;

app.listen(PORTA, function () {
  console.log("API de Livros rodando em http://localhost:" + PORTA);
});
