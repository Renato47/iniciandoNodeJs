import express, { NextFunction, Request, Response } from "express";
import 'express-async-errors'

import { AppError } from "./errors/AppError";

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
  return response.json({ message: "Node.js API running" })
})

app.get('/err1', (request, response) => {
  throw new AppError("Error test with default status")
})

app.get('/err2', (request, response) => {
  throw new AppError("Error test with status", 404)
})

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if (err instanceof AppError)
    return response.status(err.statusCode).json({ message: err.message })

  return response.status(500).json({ message: `Internal server error - ${err.message}` })
})

app.listen(3333, () => {
  console.log('🚀 Server started on port 3333');
})
