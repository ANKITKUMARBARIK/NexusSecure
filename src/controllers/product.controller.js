import asyncHandler from "../utils/asyncHandler.util.js";
import ApiError from "../utils/ApiError.util.js";
import ApiResponse from "../utils/ApiResponse.util.js";
import Product from "../models/product.model.js";

export const createProduct = asyncHandler(async (req, res) => {
    const { name, description, price, category, brand = "" } = req.body;

    const product = await Product.create({
        name: name.trim(),
        description: description.trim(),
        price,
        category: category.trim(),
        brand: brand?.trim() || "Generic",
        createdBy: req.user?._id,
    });

    if (!product) {
        throw new ApiError(500, "product not created");
    }

    return res
        .status(201)
        .json(new ApiResponse(201, product, "product created successfully"));
});
