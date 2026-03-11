import { Router } from "express";
import { getAlerts } from "./controllers/alertController.js";
import verifyUser from "../users/controller/userAuthMiddleware.js";


const router = Router();

router.get('/', verifyUser , getAlerts);

export default router;