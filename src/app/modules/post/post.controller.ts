import { RequestHandler } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { postService } from "./post.service";



const createPost:RequestHandler = catchAsync(async(req, res)=> {
    const result = await postService.createPost(req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "User created successfully",
        data: result
    })

})
const getAllPosts:RequestHandler = catchAsync(async(req, res)=> {
    const result = await postService.getAllPost();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "User fetch successfully",
        data: result
    })

})
const getSinglePost:RequestHandler = catchAsync(async(req, res)=> {
    const {id} = req.params
    const result = await postService.getSinglePost(id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Single User fetch successfully",
        data: result
    })

})
const updatePost:RequestHandler = catchAsync(async(req, res)=> {
    const {id} = req.params;
    const data = req.body;
    const result = await postService.updatePost(id, data);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "User updated successfully",
        data: result
    })

})
const deletePost:RequestHandler = catchAsync(async(req, res)=> {
    const {id} = req.params;
    const result = await postService.deletePost(id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "User deleted successfully",
        data: result
    })

})



export const postController = {
    createPost,
    getAllPosts,
    getSinglePost,
    updatePost,
    deletePost
}