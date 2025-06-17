import { Router } from "express";
import {
    changeCurrentPassword,
    updateAccountDetails,
    updateUserAvatar,
    updateUserCoverImage,
    getCurrentUser,
} from "../controllers/user.controller.js";
import validate from "../middlewares/validate.middleware.js";
import {
    changeCurrentPasswordSchema,
    updateAccountDetailsSchema,
} from "../validations/user.validation.js";
import verifyAuthentication from "../middlewares/authentication.middleware.js";
import upload from "../middlewares/multer.middleware.js";

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

router
    .route("/update-avatar")
    .patch(verifyAuthentication, upload.single("avatar"), updateUserAvatar);

router
    .route("/update-coverImage")
    .patch(
        verifyAuthentication,
        upload.single("coverImage"),
        updateUserCoverImage
    );

router.route("/current-user").get(verifyAuthentication, getCurrentUser);

export default router;
