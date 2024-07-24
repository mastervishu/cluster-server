import { Router } from "express";
import { healthCheckController } from "../controllers/healthCheck.controller";

const router = Router()

router.route("/").get(healthCheckController)

export default router;