// routes/livroRoutes.js — Definição das rotas do recurso "Livros"

const express = require("express");
const router = express.Router();

const livroController = require("../controllers/livroController");

// =============================================
// Definição das Rotas
// =============================================

// Lista todos os livros
router.get("/", livroController.listar);

// Busca um livro específico pelo identificador
router.get("/:id", livroController.buscarPorId);

// Resumo de um livro
router.get(":id/resumo", livroController.buscarResumo);

// Cria um novo livro
router.post("/", livroController.criar);

// Atualiza um livro existente
router.put("/:id", livroController.atualizar);

// Remove livros
router.delete("/", livroController.remover);

module.exports = router;
