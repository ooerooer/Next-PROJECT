interface IProducts {
    title: string,
    _id: string,
    img?: string,
    price: string,
    stock: string,
    createdAt?: string,
}

export interface IProductsPromise {
    count: number,
    products: IProducts[],
}