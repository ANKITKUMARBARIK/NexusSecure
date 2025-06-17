import Joi from "joi";

export const changeCurrentPasswordSchema = Joi.object({
    oldPassword: Joi.string().min(6).required().messages({
        "string.empty": `"oldPassword" is required`,
        "string.min": `"oldPassword" must be at least 6 characters`,
    }),
    newPassword: Joi.string()
        .min(6)
        .required()
        .invalid(Joi.ref("oldPassword"))
        .messages({
            "string.empty": `"newPassword" is required`,
            "string.min": `"newPassword" must be at least 6 characters`,
            "any.invalid": `"newPassword" must be different from "oldPassword"`,
        }),
    confirmPassword: Joi.string()
        .valid(Joi.ref("newPassword"))
        .required()
        .messages({
            "any.only": `"confirmPassword" must match "newPassword"`,
            "string.empty": `"confirmPassword" is required`,
        }),
});

export const updateAccountDetailsSchema = Joi.object({
    fullName: Joi.string().required().messages({
        "string.empty": `"fullName" is required`,
    }),
    username: Joi.string().alphanum().min(3).max(30).required().messages({
        "string.empty": `"username" is required`,
        "string.alphanum": `"username" must be alphanumeric`,
    }),
    email: Joi.string().email().required().messages({
        "string.empty": `"email" is required`,
        "string.email": `"email" must be a valid email`,
    }),
    bio: Joi.string().allow("").optional(),
    timezone: Joi.string().required().messages({
        "string.empty": `"timezone" is required`,
    }),
});
