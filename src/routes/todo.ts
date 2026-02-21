import { Router } from "express";

import {
  createTodoController,
  deleteTodoController,
  getAllTodosController,
  getTodoByIdController,
  updateTodoController,
} from "@/controllers";
import { validator } from "@/middleware";
import { createTodoRules, editTodoRules } from "@/utils";

const router = Router();

// GET all todos
router.get("/", getAllTodosController);

// GET todo by id
router.get("/:id", getTodoByIdController);

// POST create todo
router.post("/", createTodoRules(), validator, createTodoController);

// PUT update todo
router.put("/:id", editTodoRules(), validator, updateTodoController);

// DELETE todo
router.delete("/:id", deleteTodoController);

export default router;
