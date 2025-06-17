import { Router } from "express";
import { changeCurrentPassword } from "../controllers/user.controller.js";
import validate from "../middlewares/validate.middleware.js";
import { changeCurrentPasswordSchema } from "../validations/user.validation.js";
import verifyAuthentication from "../middlewares/authentication.middleware.js";

const router = Router();

router
    .route("/change-password")
    .patch(
        validate(changeCurrentPasswordSchema),
        verifyAuthentication,
        changeCurrentPassword
    );

export default router;
