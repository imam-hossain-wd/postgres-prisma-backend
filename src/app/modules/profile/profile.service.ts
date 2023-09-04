import { Profile } from "@prisma/client";
import prisma from "../../../shared/prisma";


const createProfile = async(data:Profile): Promise<Profile> => {
    const result = await prisma.profile.create({
        data, 
        include: {
            user: true
        }
    })
    return result;
}

const getAllProfile = async(): Promise<Profile[]> => {
    const result = await prisma.profile.findMany();
    return result;
}
const getSingleProfile = async(id:string): Promise<Profile | null> => {
    const result = await prisma.profile.findUnique({
        where : {
            id
        }
    });
    return result;
}
const updateProfile = async(id:string, data:Profile): Promise<Profile | null> => {
    const result = await prisma.profile.update({
        where : {
            id
        },
        data
    });
    return result;
}
const deleteProfile = async(id:string): Promise<Profile | null> => {
    const result = await prisma.profile.delete({
        where : {
            id
        }
    });
    return result;
}



export const profileService = {
    createProfile,
    getAllProfile,
    getSingleProfile,
    updateProfile,
    deleteProfile
}