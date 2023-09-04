import { RequestHandler } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { profileService } from "./profile.service";




const createProfile:RequestHandler = catchAsync(async(req, res)=> {
    const result = await profileService.createProfile(req.body)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Profile created successfully",
        data: result
    })

})
const getAllProfiles:RequestHandler = catchAsync(async(req, res)=> {
    const result = await profileService.getAllProfile();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Profile fetch successfully",
        data: result
    })

})
const getSingleProfile:RequestHandler = catchAsync(async(req, res)=> {
    const {id} = req.params
    const result = await profileService.getSingleProfile(id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Single Profile fetch successfully",
        data: result
    })

})
const updateProfile:RequestHandler = catchAsync(async(req, res)=> {
    const {id} = req.params;
    const data = req.body;
    const result = await profileService.updateProfile(id, data);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Profile updated successfully",
        data: result
    })

})
const deleteProfile:RequestHandler = catchAsync(async(req, res)=> {
    const {id} = req.params;
    const result = await profileService.deleteProfile(id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Profile deleted successfully",
        data: result
    })

})



export const profileController = {
    createProfile,
    getAllProfiles,
    getSingleProfile,
    updateProfile,
    deleteProfile
}