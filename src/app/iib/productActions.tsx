"use server"

import { revalidatePath } from "next/cache";
import { Product } from "./models";
import { connectToDB } from "./utils";
import { redirect } from "next/navigation";

export const addProduct = async (formData: FormData) => {
    const { title, color, price, desc, stock, size, img, } = Object.fromEntries(formData);
    try {
        connectToDB();
        const newProduct = new Product({
            title, color, price, desc, stock, size, img,
        });
        await newProduct.save();
    } catch (error) {
        console.log(error);
    }
    revalidatePath("/dashboard/products");
    redirect("/dashboard/products");
}

export const updateProduct = async (formData: FormData) => {
    const { id, title, color, price, desc, stock, size } = Object.fromEntries(formData);

    try {
        connectToDB()
        const updatedFields = {
            id, title, desc, price, stock, color, size,
        }
        await Product.findByIdAndUpdate(id, updatedFields)
    } catch (error) {
        console.log(error);
    }
    revalidatePath("/dashboard/products");
    redirect("/dashboard/products")
}

export const delteProduct = async (formData: FormData) => {
    const { id } = Object.fromEntries(formData);
    try {
        connectToDB()
        await Product.findByIdAndDelete(id)
    } catch (error) {
        console.log(error);
    }
    revalidatePath("/dashboard/products")
}