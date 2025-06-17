import asyncHandler from "../utils/asyncHandler.util.js";
import ApiError from "../utils/ApiError.util.js";
import ApiResponse from "../utils/ApiResponse.util.js";
import Product from "../models/product.model.js";
import {
    getCache,
    setCache,
    delCache,
} from "../services/redisCache.service.js";

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

    await delCache("products:all"); // clear old cache after new product creation

    return res
        .status(201)
        .json(new ApiResponse(201, product, "product created successfully"));
});

export const getAllProducts = asyncHandler(async (req, res) => {
    // gell all products with cache
    const cachedProducts = await getCache("products:all");
    if (cachedProducts) {
        console.log("♦️ Serving from cache");
        return res
            .status(200)
            .json(
                new ApiResponse(
                    200,
                    cachedProducts,
                    "products fetched successfully from cache"
                )
            );
    }

    const products = await Product.find({})
        .populate("createdBy", "username email")
        .select("-__v")
        .sort("-createdAt");

    await setCache("products:all", products, 300); // cache for 5 min

    return res
        .status(200)
        .json(new ApiResponse(200, products, "products fetched successfully"));
});

export const getProductById = asyncHandler(async (req, res) => {
    const { id } = req.params;

    // get single product with cache
    const cachedProduct = await getCache(`product:${id}`);
    if (cachedProduct) {
        console.log("♦️ Single product from cache");
        return res
            .status(200)
            .json(
                new ApiResponse(
                    200,
                    cachedProduct,
                    "products fetched successfully from cache"
                )
            );
    }

    const product = await Product.findById(id)
        .populate("createdBy", "username email")
        .select("-__v");

    if (!product) throw new ApiError(404, "Product not found");

    await setCache(`product:${id}`, product, 300);

    return res
        .status(200)
        .json(new ApiResponse(200, product, "Product fetched successfully"));
});

export const updateProductById = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const product = await Product.findByIdAndUpdate({ _id: id }, req.body, {
        new: true,
        runValidators: true,
    })
        .populate("createdBy", "username email")
        .select("-__v");
    if (!product) throw new ApiError(404, "product not found");

    await delCache("products:all", `product:${id}`);

    return res
        .status(200)
        .json(new ApiResponse(200, product, "product updated successfully"));
});

export const deleteProductById = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const product = await Product.findByIdAndDelete({ _id: id })
        .populate("createdBy", "username email")
        .select("-__v");
    if (!product) throw new ApiError(404, "product not found");

    await delCache("products:all", `product:${id}`);

    return res
        .status(200)
        .json(new ApiResponse(200, product, "product deleted successfully"));
});
