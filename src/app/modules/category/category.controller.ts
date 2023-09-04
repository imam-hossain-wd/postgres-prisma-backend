import { RequestHandler } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { categoryService } from "./category.service";



const createCategory:RequestHandler = catchAsync(async(req, res)=> {
    const result = await categoryService.createCategory(req.body)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "User created successfully",
        data: result
    })

})
const getAllCategories:RequestHandler = catchAsync(async(req, res)=> {
    const result = await categoryService.getAllCategory();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "User fetch successfully",
        data: result
    })

})
const getSingleCategory:RequestHandler = catchAsync(async(req, res)=> {
    const {id} = req.params
    const result = await categoryService.getSingleCategory(id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Single User fetch successfully",
        data: result
    })

})
const updateCategory:RequestHandler = catchAsync(async(req, res)=> {
    const {id} = req.params;
    const data = req.body;
    const result = await categoryService.updateCategory(id, data);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "User updated successfully",
        data: result
    })

})
const deleteCategory:RequestHandler = catchAsync(async(req, res)=> {
    const {id} = req.params;
    const result = await categoryService.deleteCategory(id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "User deleted successfully",
        data: result
    })

})



export const categoryController = {
    createCategory,
    getAllCategories,
    getSingleCategory,
    updateCategory,
    deleteCategory
}