import User from "../model/User";
 import { connectDB } from "./db";

export async function registerUser({data}) {
    await connectDB()
    return await User.create(data)  
}

export async function loginUser(email) {
    await connectDB()
    const user = await User.findOne({email})
    if(!user) return
    return user
}

export async function getProfile() {
    await connectDB()
    return await User.findBy()
}

export async function updateProfilet(id, data) {
    await connectDB()
    return await User.findByIdAndUpdate(id, data,{new: true})
}