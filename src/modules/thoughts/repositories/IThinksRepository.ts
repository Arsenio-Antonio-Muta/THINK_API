import { Think } from "../module/Think";

interface ICreateThinkDTO {
  theme: string;
  content: string;
}

interface IThinksRepository {
  create({ theme, content }: ICreateThinkDTO): void;
  delete(id: string);
  update({ theme, content }: ICreateThinkDTO): Think;
  list(): Think[];
}

export { IThinksRepository, ICreateThinkDTO };
