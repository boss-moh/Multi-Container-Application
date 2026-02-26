import { Request, Response, NextFunction } from "express";

export const errorHandler = (
  err: Error & { status?: number; code?: string },
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const status = err.status || 500;
  const message = err.message || "Internal Server Error";

  res.status(status).json({
    error: {
      status,
      message,
      code: err.code || "INTERNAL_ERROR",
    },
  });
};
