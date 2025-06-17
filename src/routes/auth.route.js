import { Router } from "express";
import {
    registerUser,
    verifyOtpSignup,
    resendOtpSignup,
    loginUser,
    googleOAuthLogin,
    githubOAuthLogin,
    forgetUserPassword,
} from "../controllers/auth.controller.js";
import validate from "../middlewares/validate.middleware.js";
import {
    registerUserSchema,
    verifyOtpSignupSchema,
    resendOtpSignupSchema,
    loginUserSchema,
    forgetUserPasswordSchema,
} from "../validations/auth.validation.js";
import upload from "../middlewares/multer.middleware.js";

const router = Router();

router.route("/register").post(
    upload.fields([
        { name: "avatar", maxCount: 1 },
        { name: "coverImage", maxCount: 1 },
    ]),
    validate(registerUserSchema),
    registerUser
);

router
    .route("/verify-signup")
    .post(validate(verifyOtpSignupSchema), verifyOtpSignup);

router
    .route("/resend-signup")
    .post(validate(resendOtpSignupSchema), resendOtpSignup);

router.route("/login").post(validate(loginUserSchema), loginUser);

router.route("/google").post(googleOAuthLogin);

router.route("/github").post(githubOAuthLogin);

router
    .route("/forget-password")
    .post(validate(forgetUserPasswordSchema), forgetUserPassword);

export default router;
