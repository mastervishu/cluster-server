import { NextFunction, Request, Response } from "express"

type RequestHandlerTypes = (...arags: [Request, Response, NextFunction]) => Promise<any> | any

export const asyncHandler = function (requestHandler: RequestHandlerTypes) {
    return function (req: Request, res: Response, next: NextFunction) {
        Promise.resolve(requestHandler(req, res, next)).catch((error: unknown) => next(error))
    }
}