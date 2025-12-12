import User from "../model/User";
import Product from "../model/Product";
import { connectDB } from "./db";

export async function addItemToCart(userId, productId, quantity) {
    await connectDB()
    const cartItem = await Product.findById(productId)
    return await User.findOneAndUpdate(
        { user: userId },
        { $addToSet: { cart: cartItem } },
        { quantity: quantity},
        { new: true, upsert: true }
    );
}

export async function removeItemFromCart(userId, productId) {
    await connectDB()
    return await User.findOneAndUpdate(
            { user: userId },
            { $pull: { products: productId } },
            { new: true }
        );
}

export async function updateCartItemQuantity(userId, productId, quantity) {
    await connectDB()
        const cartItem = await User.findById(productId)
    return await User.findOneAndUpdate({ user: userId},{$set:{ quantity: quantity}}, {product: cartItem})
}

export async function getUserCart(userId) {
    await connectDB()
    return await User.find({userId})
}

export async function clearCart(userId) {
    await connectDB();
    return await User.deleteMany({userId});
}