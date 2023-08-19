import connectDb from "@/lib/mongodb"
import { NextResponse } from "next/server";

export async function POST(req) {
    const data = await req.json();
    const  { contactsCollection } = await connectDb();
    const result = await contactsCollection.insertOne(data)
    return NextResponse.json(result)
}