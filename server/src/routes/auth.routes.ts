import { Router } from "express";
import { login, register, verifyMe } from "../controllers/auth.controller.ts";
import { authToken } from "../middleware/verifyMe.ts";

const router = Router();

router.post("/register", register)
router.post("/login", login)
router.get("/verify", authToken, verifyMe)

export default router;