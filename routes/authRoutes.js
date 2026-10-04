// routes/authRoutes.js
const { Router } = require("express");
const { login, logout } = require("../controllers/authController");
const { authenticateToken } = require("../middlewares/authMiddleware");
const router = Router();
router.post("/login", login);
router.post("/logout", authenticateToken, logout);
module.exports = router;