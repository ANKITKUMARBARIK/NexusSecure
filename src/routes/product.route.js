import { Router } from "express";
import {
    createProduct,
    getAllProducts,
    getProductById,
    updateProductById,
} from "../controllers/product.controller.js";
import verifyAuthentication from "../middlewares/authentication.middleware.js";
import validate from "../middlewares/validate.middleware.js";
import {
    createProductSchema,
    updateProductSchema,
} from "../validations/product.validation.js";
const router = Router();

router
    .route("/create-product")
    .post(validate(createProductSchema), verifyAuthentication, createProduct);

router.route("/get-all-products").get(verifyAuthentication, getAllProducts);

router.route("/get-user-product/:id").get(verifyAuthentication, getProductById);

router
    .route("/update-user-product/:id")
    .patch(
        validate(updateProductSchema),
        verifyAuthentication,
        updateProductById
    );

export default router;
