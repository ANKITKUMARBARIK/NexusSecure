import asyncHandler from "../utils/asyncHandler.util.js";
import ApiError from "../utils/ApiError.util.js";
import ApiResponse from "../utils/ApiResponse.util.js";
import User from "../models/user.model.js";

export const changeCurrentPassword = asyncHandler(async (req, res) => {
    const { oldPassword, newPassword, confirmPassword } = req.body;

    const existedUser = await User.findById(req.user?._id);
    if (!existedUser) throw new ApiError(400, "user not found");

    const isPasswordValid = await existedUser.comparePassword(oldPassword);
    if (!isPasswordValid) throw new ApiError(401, "invalid old password");

    existedUser.password = confirmPassword;
    await existedUser.save();

    return res
        .status(200)
        .json(new ApiResponse(200, {}, "password changed successfully"));
});
