import { ThinksRepository } from "../../repositories/implement/ThinksRepository";
import { CreateThinksController } from "./CreateThinkController";
import { CreateThinkUseCase } from "./CreateThinkUseCase";

const thinksRepository = new ThinksRepository();

const createThinksUseCase = new CreateThinkUseCase(thinksRepository);

const createThinksController = new CreateThinksController(createThinksUseCase);

export { createThinksController };
