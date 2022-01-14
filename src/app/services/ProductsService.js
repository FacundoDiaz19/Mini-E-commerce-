import db from "./db/db"

 export const GetProductByID = async (id) => {
    const productFromDB = await db.cart.get(Number(id))
    return productFromDB;
}

export const GetAllProduct = async () => {
    const AllProductsFromDB = await db.cart.toArray();
    return AllProductsFromDB;
}