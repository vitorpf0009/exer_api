// app.js — Ponto de entrada da aplicação. Configuração e montagem.

require("dotenv").config();
const express = require("express");
const app = express();

// Importação das rotas organizadas por recurso
const livroRoutes = require("./routes/livroRoutes");
const authRoutes = require("./routes/authRoutes");

// Importação do middleware centralizado de erros
const errorHandler = require("./middlewares/errorHandler");

// =============================================
// Configuração de Middlewares Globais
// =============================================
app.use(express.json());

// =============================================
// Montagem das Rotas
// =============================================
// Rotas PÚBLICAS (antes de qualquer auth global)
app.use("/auth", authRoutes);

// Rotas de livros (GET público, escrita protegida dentro de livroRoutes.js)
app.use("/livros", livroRoutes);

// =============================================
// Middleware de Tratamento Centralizado de Erros
// =============================================
app.use(errorHandler);

// =============================================
// Inicialização do Servidor
// =============================================
const PORTA = process.env.PORT || 3000;

app.listen(PORTA, function () {
  console.log("API de Livros rodando em http://localhost:" + PORTA);
});
