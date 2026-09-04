// routes/livroRoutes.js — Definição das rotas do recurso "Livros"

const express = require("express");
const router = express.Router();

const livroController = require("../controllers/livroController");

// =============================================
// Definição das Rotas
// =============================================

// Lista todos os livros
router.get("/getLivros", livroController.listar);

// Busca um livro específico pelo identificador
router.get("/:id", livroController.buscarPorId);

// Resumo de um livro
router.get("/:id/resumo", livroController.buscarResumo);

// Cria um novo livro
router.get("/novo", livroController.criar);

// Atualiza um livro existente
router.put("/", livroController.atualizar);

// Remove livros
router.delete("/", livroController.remover);

module.exports = router;
