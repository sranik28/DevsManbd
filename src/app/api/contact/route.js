import contact from "@/app/models/contact";
import connectDB from "@/lib/mongodb";
import mongoose from "mongoose";
import { NextResponse } from "next/server";



export async function POST(req) {
    const { userName, userEmail, userMessage, userNumber } = await req.json();
    try {
        await connectDB();
        await contact.create({            
            userName,
            userEmail,
            userNumber,
            userMessage,
        }); 

        return NextResponse.json({
            msg: ["Your message has been sent successfully"], success: true
        });
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            let errorList = [];
            for (let e in error.errors) {
                errorList.push(error.errors[e].message)
            }
            console.log(errorList)
            return NextResponse.json({
                msg: errorList
            })
        }
        else{
            return NextResponse.json({ msg: ["Unable to send message."] }); 
        }
    }
}