import { v4 as uuidV4 } from "uuid";

class Think {
  id?: string;

  theme: string;

  content: string;

  created_at: Date;

  updated_at?: Date;

  constructor() {
    if (this.id) {
      this.id = uuidV4();
    }
  }
}

export { Think };
