import { Router } from "express";

import { listRoutes } from "./list.routes";
import { thinkRoutes } from "./thinks.routes";

const router = Router();

router.use("/think", thinkRoutes);
router.use("/think", listRoutes);

export { router };
