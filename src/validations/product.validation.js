import Joi from "joi";

export const createProductSchema = Joi.object({
    name: Joi.string().trim().required().messages({
        "string.empty": `"name" is required`,
    }),
    description: Joi.string().trim().required().messages({
        "string.empty": `"description" is required`,
    }),
    price: Joi.number().min(0).required().messages({
        "number.base": `"price" must be a number`,
        "number.min": `"price" must be non-negative`,
        "any.required": `"price" is required`,
    }),
    category: Joi.string().trim().required().messages({
        "string.empty": `"category" is required`,
    }),
    brand: Joi.string().trim().allow("").default("Generic"),
});
