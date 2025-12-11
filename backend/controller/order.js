import Order from "../model/Order";
import { connectDB } from "./db";

export async function placeOrdert({data}) {
    await connectDB()
    return await Order.create(data)  
}

export async function getMyOrders() {
    await connectDB()
    return await Order.find()
}
export async function getOrder(id) {
    await connectDB()
    return await Order.findById(id)
}