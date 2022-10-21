import { Router } from "express";

import { createThinksController } from "../modules/thoughts/useCase/createThink";

const thinkRoutes = Router();

thinkRoutes.post("/", (request, response) => {
  return createThinksController.handle(request, response);
});

export { thinkRoutes };
