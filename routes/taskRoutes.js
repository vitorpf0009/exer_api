// routes/taskRoutes.js (abordagem alternativa)
const { Router } = require("express");
const {
    authenticateToken,
    authorizeRoles,
} = require("../middleware/authMiddleware");
const taskController = require("../controllers/taskController");
const router = Router();
// GET é público
router.get("/", taskController.getAllTasks);
router.get("/:id", taskController.getTaskById);
// Todas as rotas abaixo exigem autenticação
router.use(authenticateToken);
router.post("/", taskController.createTask);
router.put("/:id", taskController.updateTask);
router.delete("/:id", taskController.deleteTask);
// Rota exclusiva para admin
router.delete(
    "/admin/purge",
    authorizeRoles("admin"),
    taskController.purgeAllTasks,
);
module.exports = router;