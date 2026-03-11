import { Router } from "express";
import userRoutes from "./users/index.js";
import assetRoutes from "./assets/index.js";
import telemetryRoutes from "./telemetry/index.js";
import alertRoutes from "./alerts/index.js";

const router = Router();

router
    .use("/user", userRoutes)
    .use("/asset", assetRoutes)
    .use("/telemetry", telemetryRoutes)
    .use("/alert", alertRoutes);

export default router;