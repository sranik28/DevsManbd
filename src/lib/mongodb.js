
import mongoose from "mongoose";

const connectDB = async () => {
    try {
        if (mongoose.connection.readyState === 0) {
            await mongoose.connect(process.env.MONGOBD_S_URI)
            console.log("db")
        }
    } catch (error) {
        console.log(error)
    }
}

export default connectDB;