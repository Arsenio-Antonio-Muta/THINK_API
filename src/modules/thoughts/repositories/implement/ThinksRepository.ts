import { Think } from "../../module/Think";
import { ICreateThinkDTO, IThinksRepository } from "../IThinksRepository";

class ThinksRepository implements IThinksRepository {
  private thinks: Think[];

  constructor() {
    this.thinks = [];
  }

  create({ theme, content }: ICreateThinkDTO): void {
    const think = new Think();

    Object.assign(think, {
      theme,
      content,
      created_at: new Date(),
    });

    this.thinks.push(think);
  }

  delete(id: string) {
    const think = this.thinks.filter((think) => think.id !== id);

    this.thinks = [...think];
  }

  update({ theme, content }: ICreateThinkDTO): Think {
    const think = new Think();

    think.theme = theme;
    think.content = content;
    think.updated_at = new Date();

    this.thinks = [...this.thinks, think];

    return think;
  }

  list(): Think[] {
    return this.thinks;
  }
}

export { ThinksRepository };
