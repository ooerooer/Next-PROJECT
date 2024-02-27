import { IProductsPromise } from "../types/products"
import { Product } from "./models"
import { connectToDB } from "./utils"

export const fetchProducts = async (q: string, page: number): Promise<IProductsPromise | undefined> => {
    const regex = new RegExp(q, "i");
    const ITEM_PER_PAGE = 2
    try {
        connectToDB()
        const count = await Product.find({ title: { $regex: regex } }).countDocuments();
        const products = await Product.find({ title: { $regex: regex } }).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page - 1))
        return { count, products }
    } catch (error) {
        console.log(error);
    }
}

export const fetchProduct = async (id: string) => {
    try {
        connectToDB()
        const product = await Product.findById(id);
        return product
    } catch (error) {
        console.log(error);
    }
}