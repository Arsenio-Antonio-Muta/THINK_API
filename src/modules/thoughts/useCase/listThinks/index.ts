import { ThinksRepository } from "../../repositories/implement/ThinksRepository";
import { ListThinksController } from "./ListThinksController";
import { ListThinksUseCase } from "./ListThinksUseCase";

const thinksRepository = new ThinksRepository();

const listThinksUseCase = new ListThinksUseCase(thinksRepository);

const listThinksController = new ListThinksController(listThinksUseCase);

export { listThinksController };
