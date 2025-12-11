import Wishlist from "../model/Wishlist";
import { connectDB } from "./db";

export async function addToWishlist({data}) {
    await connectDB()
    return await Wishlist.create(data)  
}

export async function removeFromWishlist(id) {
    await connectDB()
    return await Wishlist.findByIdAndDelete(id)
}
export async function getWishlist() {
    await connectDB()
    return await Wishlist.findBy()
}