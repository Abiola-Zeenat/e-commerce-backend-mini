import express, { Router } from "express";
import {
  getSession,
  signup,
  login,
  refreshAccessToken,
  logoutUser,
} from "../../controllers/auth";
import { protect } from "../../middlewares/authMiddleware";
import {
  validateLogin,
  validateSignup,
} from "../../middlewares/validationMiddleware";

export const router: Router = express.Router();

router.get("/get-session", getSession);
router.post("/signup", validateSignup, signup);
router.post("/login", validateLogin, login);
router.post("/logout", protect, logoutUser);

router.post("/refresh", refreshAccessToken);
