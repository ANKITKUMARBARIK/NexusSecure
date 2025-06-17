import { Router } from "express";
import {
    changeCurrentPassword,
    updateAccountDetails,
} from "../controllers/user.controller.js";
import validate from "../middlewares/validate.middleware.js";
import {
    changeCurrentPasswordSchema,
    updateAccountDetailsSchema,
} from "../validations/user.validation.js";
import verifyAuthentication from "../middlewares/authentication.middleware.js";

const router = Router();

router
    .route("/change-password")
    .patch(
        validate(changeCurrentPasswordSchema),
        verifyAuthentication,
        changeCurrentPassword
    );

router
    .route("/update-account")
    .patch(
        validate(updateAccountDetailsSchema),
        verifyAuthentication,
        updateAccountDetails
    );

export default router;
