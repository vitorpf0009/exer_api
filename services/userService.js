// services/userService.js — Acesso a usuários (memória, para auth JWT)

const bcrypt = require("bcrypt");

// Usuário padrão para testes: admin@example.com / 123456
// Hash gerado no boot para que bcrypt.compare funcione após restart.
const users = [
  {
    id: 1,
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    role: "admin",
  },
];

async function findUserByEmail(email) {
  return users.find((u) => u.email === email) || null;
}

module.exports = { findUserByEmail };
