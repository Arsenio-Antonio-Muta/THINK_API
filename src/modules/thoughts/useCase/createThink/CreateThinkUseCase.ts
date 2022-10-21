/* eslint-disable prettier/prettier */
import { IThinksRepository } from "../../repositories/IThinksRepository";

interface IRequest {
  theme: string;
  content: string;
}

class CreateThinkUseCase {
  constructor(private thinksRepository: IThinksRepository) { }

  execute({ theme, content }: IRequest) {

    this.thinksRepository.create({ theme, content })

  }
}

export { CreateThinkUseCase };
