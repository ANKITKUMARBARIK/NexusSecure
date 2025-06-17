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

export const getAllProducts = asyncHandler(async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const products = await Product.find({})
        .skip(skip)
        .limit(limit)
        .populate("createdBy", "username email")
        .select("-__v")
        .sort("-createdAt");

    return res
        .status(200)
        .json(
            new ApiResponse(
                200,
                { page, limit, products },
                "products fetched successfully with pagination"
            )
        );
});
