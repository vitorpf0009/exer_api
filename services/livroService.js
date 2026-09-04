// services/livroService.js — Lógica de negócio do recurso Livros

const livroDAO = require("../dao/livroDAO");

// =============================================
// Buscar todos os livros
// =============================================
function buscarTodos() {
  return livroDAO.buscarTodos();
}

// =============================================
// Buscar um livro por ID
// =============================================
function buscarPorId(id) {
  return livroDAO.buscarPorId(id);
}

// =============================================
// Criar um novo livro
// =============================================
function criar(dados) {
  const novoLivro = {
    titulo: dados.titulo,
    autor: dados.autor,
    preco: dados.preco,
  };

  return livroDAO.inserir(novoLivro);
}

// =============================================
// Atualizar um livro existente
// =============================================
function atualizar(id, dados) {
  const livroExistente = livroDAO.buscarPorId(id);

  if (!livroExistente) {
    return null;
  }

  const dadosAtualizados = {
    titulo: dados.titulo || livroExistente.titulo,
    autor: dados.autor || livroExistente.autor,
    preco: dados.preco !== undefined ? dados.preco : livroExistente.preco,
  };

  return livroDAO.atualizar(id, dadosAtualizados);
}

// =============================================
// Remover um livro
// =============================================
function remover(id) {
  const livroExistente = livroDAO.buscarPorId(id);

  if (!livroExistente) {
    return null;
  }

  return livroDAO.remover(id);
}

module.exports = {
  buscarTodos: buscarTodos,
  buscarPorId: buscarPorId,
  criar: criar,
  atualizar: atualizar,
  remover: remover,
};
