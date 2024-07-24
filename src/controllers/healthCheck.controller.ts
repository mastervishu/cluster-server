import { ApiResponse } from "../utils/ApiResponse";
import { asyncHandler } from "../utils/asyncHandler";

export const healthCheckController = asyncHandler(function (req, res) {
    return res
        .status(200)
        .json(new ApiResponse(200, { processId: process.pid }, "Health Good"))
})