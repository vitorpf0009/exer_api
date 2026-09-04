// dao/livroDAO.js — Camada de acesso a dados (persistência em memória)

// =============================================
// Base de dados simulada (persistência em memória)
// =============================================
let livros = [
  { id: 1, titulo: "Dom Casmurro", autor: "Machado de Assis", preco: 29.9 },
  {
    id: 2,
    titulo: "Grande Sertão: Veredas",
    autor: "Guimarães Rosa",
    preco: 45.0,
  },
  { id: 3, titulo: "Capitães da Areia", autor: "Jorge Amado", preco: 34.5 },
];

let proximoId = 4;

// =============================================
// Operações de Acesso a Dados
// =============================================

function buscarTodos() {
  return livros;
}

function buscarPorId(id) {
  return livros.find(function (livro) {
    return livro.id === id;
  });
}

function inserir(livro) {
  const novoLivro = {
    id: proximoId,
    titulo: livro.titulo,
    autor: livro.autor,
    preco: livro.preco,
  };

  proximoId = proximoId + 1;
  livros.push(novoLivro);

  return novoLivro;
}

function atualizar(id, dadosAtualizados) {
  const indice = livros.findIndex(function (livro) {
    return livro.id === id;
  });

  if (indice === -1) {
    return null;
  }

  livros[indice] = {
    id: id,
    titulo: dadosAtualizados.titulo,
    autor: dadosAtualizados.autor,
    preco: dadosAtualizados.preco,
  };

  return livros[indice];
}

function remover(id) {
  const indice = livros.findIndex(function (livro) {
    return livro.id === id;
  });

  if (indice === -1) {
    return null;
  }

  const removido = livros.splice(indice, 1);
  return removido[0];
}

function limparTudo() {
  livros = [];
}

module.exports = {
  buscarTodos: buscarTodos,
  buscarPorId: buscarPorId,
  inserir: inserir,
  atualizar: atualizar,
  remover: remover,
  limparTudo: limparTudo,
};
