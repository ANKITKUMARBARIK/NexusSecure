import { Router } from "express";
import {
    createProduct,
    getAllProducts,
} from "../controllers/product.controller.js";
import verifyAuthentication from "../middlewares/authentication.middleware.js";
import validate from "../middlewares/validate.middleware.js";
import { createProductSchema } from "../validations/product.validation.js";
const router = Router();

router
    .route("/create-product")
    .post(validate(createProductSchema), verifyAuthentication, createProduct);

router.route("/get-all-products").get(verifyAuthentication, getAllProducts);

export default router;
