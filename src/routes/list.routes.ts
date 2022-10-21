import { Router } from "express";

import { listThinksController } from "../modules/thoughts/useCase/listThinks";

const listRoutes = Router();

listRoutes.get("/", (request, response) => {
  return listThinksController.handle(request, response);
});

export { listRoutes };
