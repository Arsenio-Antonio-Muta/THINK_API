/* eslint-disable prettier/prettier */
import { Think } from "../../module/Think";
import { IThinksRepository } from "../../repositories/IThinksRepository";


class ListThinksUseCase {
  constructor(private thinksRepository: IThinksRepository) { }

  execute(): Think[] {
    return this.thinksRepository.list()
  }
}

export { ListThinksUseCase };
