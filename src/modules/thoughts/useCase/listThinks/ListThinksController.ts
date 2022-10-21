/* eslint-disable prettier/prettier */
import { Request, Response } from "express";

import { ListThinksUseCase } from "./ListThinksUseCase";

class ListThinksController {
  constructor(private listThinksUseCase: ListThinksUseCase) { }

  handle(request: Request, response: Response): Response {
    const all = this.listThinksUseCase.execute()

    console.log(all)

    return response.status(201).json(all)
  }
}

export { ListThinksController };
