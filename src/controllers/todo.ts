import { Request, Response } from "express";
import { TodoUtils } from "@/models";
import { asyncHandler } from "@/libs";

export const createTodoController = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const todo = await TodoUtils.create(req.body);

    res.status(201).json({
      message: "Todo created successfully",
      data: todo,
    });
  },
);

export const getAllTodosController = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const todos = await TodoUtils.find();

    res.status(200).json({
      message: "Todos retrieved successfully",
      count: todos.length,
      data: todos,
    });
  },
);

export const getTodoByIdController = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const todo = await TodoUtils.findById(id);

    if (!todo) {
      res.status(404).json({ message: "Todo not found" });
      return;
    }

    res
      .status(200)
      .json({ message: "Todo retrieved successfully", data: todo });
  },
);

export const updateTodoController = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;

    const todo = await TodoUtils.findById(id);
    if (!todo) {
      res.status(404).json({ message: "Todo not found" });
      return;
    }
    todo.set(req.body);

    const updatedTodo = await todo.save();
    res
      .status(200)
      .json({ message: "Todo updated successfully", data: updatedTodo });
  },
);

export const deleteTodoController = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const deletedTodo = await TodoUtils.findByIdAndDelete(id);

    if (!deletedTodo) {
      res.status(404).json({ message: "Todo not found" });
      return;
    }

    res
      .status(200)
      .json({ message: "Todo deleted successfully", data: deletedTodo });
  },
);

export const toggleTodoCompletionController = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const todo = await TodoUtils.findById(id);

    if (!todo) {
      res.status(404).json({ message: "Todo not found" });
      return;
    }

    todo.completed = !todo.completed;
    const updatedTodo = await todo.save();
    res.status(200).json({
      message: "Todo completion status toggled successfully",
      data: updatedTodo,
    });
  },
);
