import {  Category} from "@prisma/client";
import prisma from "../../../shared/prisma";


const createCategory = async(data:Category): Promise<Category> => {
    const result = await prisma.category.create({
        data
    })
    return result;
}

const getAllCategory = async(): Promise<Category[]> => {
    const result = await prisma.category.findMany();
    return result;
}
const getSingleCategory = async(id:string): Promise<Category | null> => {
    const result = await prisma.category.findUnique({
        where : {
            id
        }
    });
    return result;
}
const updateCategory = async(id:string, data:Category): Promise<Category | null> => {
    const result = await prisma.category.update({
        where : {
            id
        },
        data
    });
    return result;
}
const deleteCategory = async(id:string): Promise<Category | null> => {
    const result = await prisma.category.delete({
        where : {
            id
        }
    });
    return result;
}



export const categoryService = {
    createCategory,
    getAllCategory,
    getSingleCategory,
    updateCategory,
    deleteCategory
}