// routes/livroRoutes.js — Definição das rotas do recurso "Livros"

const express = require("express");
const router = express.Router();

const livroController = require("../controllers/livroController");

// =============================================
// Definição das Rotas
// =============================================

// Lista todos os livros
router.get("/Livros", livroController.listar);

// Busca um livro específico pelo identificador
router.get("/Livros/:id", livroController.buscarPorId);

// Resumo de um livro
router.get("/Livros/:id/resumo", livroController.buscarResumo);

// Cria um novo livro
router.post("/Livros", livroController.criar);

// Atualiza um livro existente
router.put("/Livros/:id", livroController.atualizar);

// Remove livros
router.delete("/Livros/:id", livroController.remover);

module.exports = router;
