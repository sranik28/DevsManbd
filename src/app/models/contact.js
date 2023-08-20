import { Schema, mongoose } from "mongoose";

const contactSchema = new Schema({
    userName: {
        type: String,
        required: [true, "Name is required"],
        minLength: [2, "name must be larger than 2 characters"],
        maxLength: [50, "Name must be lesser than 50 characters"],
    },
    userEmail: {
        type: String,
        required: [true, "Email is required"],
        match: [/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i, "Invalid email address"],
    },
    userNumber: {
        type: Number,
        required: [true, "Number is required"]
    },
    userMessage: {
        type: String,
        required: [true, "message is required"],
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const contact = mongoose.model.contact || mongoose.model("contact",contactSchema);


export default contact;