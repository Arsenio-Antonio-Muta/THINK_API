/* eslint-disable prettier/prettier */
import { Request, Response } from "express";

import { CreateThinkUseCase } from "./CreateThinkUseCase";

class CreateThinksController {
  constructor(private createThinksUseCase: CreateThinkUseCase) { }

  handle(request: Request, response: Response): Response {
    const { theme, content } = request.body;

    this.createThinksUseCase.execute({ theme, content });

    return response.status(201).send();
  }
}

export { CreateThinksController };
