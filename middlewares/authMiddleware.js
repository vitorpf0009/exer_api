// middleware/authMiddleware.js
const jwt = require("jsonwebtoken");

// Armazena tokens revogados em memória
// Nota: em produção, usar Redis ou banco de dados
const tokenBlacklist = new Set();
/**
* Middleware de autenticação JWT.
*
* Verifica se o token JWT é válido e adiciona os dados
* decodificados ao objeto req.user.
*
* Fluxo:
* 1. Extrai o token do header Authorization (formato: Bearer <token>)
* 2. Se ausente → 401 (não autenticado)
* 3. Se revogado (blacklist) → 401
* 4. Verifica assinatura e expiração com jwt.verify()
* 5. Se inválido/expirado → 403/401
* 6. Se válido → anexa payload a req.user e chama next()
*/
function authenticateToken(req, res, next) {
    // 1. Extrai o header Authorization
    const authHeader = req.headers["authorization"];
    // O formato esperado é: "Bearer eyJhbGci..."
    const token = authHeader && authHeader.split(" ")[1];
    // 2. Token ausente
    if (!token) {
        return res.status(401).json({
            error: "Acesso negado. Token de autenticação não fornecido.",
        });
    }
    // 3. Verifica se o token está na blacklist ANTES de validar
    if (tokenBlacklist.has(token)) {
        return res.status(401).json({
            error: "Token revogado. Realize login novamente.",
        });
    }
    // 4. Verifica o token
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        // 5. Token inválido ou expirado
        if (err) {
            // Diferencia erro de expiração para melhor feedback
            if (err.name === "TokenExpiredError") {
                return res.status(401).json({
                    error: "Token expirado. Realize o login novamente.",
                });
            }
            return res.status(403).json({
                error: "Token inválido.",
            });
        }

        // 6. Token válido: anexa dados do usuário à requisição
        req.user = decoded;
        next();
    });
}

// Função auxiliar para adicionar token à blacklist
function revokeToken(token) {
    tokenBlacklist.add(token);
}

// Limpa tokens expirados da blacklist a cada 15 minutos
const blacklistCleanup = setInterval(
    () => {
        for (const token of tokenBlacklist) {
            try {
                jwt.verify(token, process.env.JWT_SECRET);
            } catch (err) {
                // Token expirado ou inválido → pode ser removido da blacklist
                tokenBlacklist.delete(token);
            }
        }
    },
    15 * 60 * 1000,
);
// Não mantém o processo vivo só por causa da limpeza
if (blacklistCleanup.unref) blacklistCleanup.unref();

module.exports = { authenticateToken, revokeToken };

