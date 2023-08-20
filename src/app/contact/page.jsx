"use client"

// import ContactFrom from '@/components/ContactFrom';
import Link from 'next/link';
import { BsFacebook, BsYoutube, BsLinkedin } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import contact from "../../../public/contact/contact.jpg"
import Image from 'next/image';
import { Fade } from 'react-awesome-reveal';
import { FormControl, FormErrorMessage, FormHelperText, FormLabel, Input } from '@chakra-ui/react';
import { useState } from 'react';
// import connectDb from '@/lib/mongodb';
// import axios from 'axios';


const ContactPage = () => {

    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userNumber, setUserNumber] = useState("");
    const [userMessage, setUserMessage] = useState("");
    const [error, setError] = useState([]);
    const [success, setSuccess] = useState([]);

    const handleSubmit = async (e) => {

        e.preventDefault();
        // const data = {
        //     name: userName,
        //     email: userEmail,
        //     number: userNumber,
        //     message: userMessage
        // }

        const res = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userName,
                userEmail,
                userNumber,
                userMessage,
            }),
        });
        const { msg, success } = await res.json();
        setError(msg);
        setSuccess(success);
        if (success) {
            setUserName("");
            setUserEmail("");
            setUserNumber("");
            setUserMessage("");
        }

    }


    return (
        <main>
            <div className="container grid gap-10 mt-20 font-light md:grid-cols-2">
                <div>
                    <Fade delay={50} direction="left">
                        <Image className="w-full rounded-md" src={contact} alt="" />
                        <h1 className="text-2xl text-[#068fff] font-semibold mt-8">Devsmanbd</h1>
                        <p className="my-4 font-semibold ">I am available for freelance or remote work. Connect with me via and call in to my account or contact with me a send message.</p>
                        <p className="my-3 font-semibold ">Phone: +880 17038 25046</p>
                        <p className="font-semibold ">Email: info@devsmanbd.com</p>
                        <div>
                            <h1 className="mt-6 text-lg font-semibold ">FIND US</h1>
                            <div className="flex items-center mt-4 ">
                                <Link
                                    href="https://www.facebook.com/devsmanbd"
                                    className="text-dark hover:bg-primary hover:border-primary mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5] hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
                                >
                                    <BsFacebook />
                                </Link>
                                <Link
                                    href="#"
                                    className="text-dark hover:bg-primary hover:border-primary mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5] hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
                                >
                                    <AiOutlineTwitter />
                                </Link>
                                <Link
                                    href="#"
                                    className="text-dark hover:bg-primary hover:border-primary mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5] hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
                                >
                                    <BsYoutube />
                                </Link>
                                <Link
                                    href="#"
                                    className="text-dark hover:bg-primary hover:border-primary mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5] hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
                                >
                                    <BsLinkedin />
                                </Link>
                            </div>
                        </div>
                    </Fade>
                </div>
                <Fade delay={50} direction="right">
                    <div className="">
                        <form onSubmit={handleSubmit} >

                            <FormControl className='mb-5' isRequired >
                                <FormLabel className='font-semibold '>YOUR NAME</FormLabel>
                                <Input onChange={(e) => setUserName(e.target.value)}
                                    value={userName} className='w-full p-4 my-3 duration-300 transform bg-transparent border rounded-md shadow-sm outline-none focus:scale-105 shadow-black/50 border-white/10 placeholder:font-normal' type="text" name='user_name' placeholder='Enter your name' />
                            </FormControl>

                            <FormControl className='mb-5' isRequired>
                                <FormLabel className='font-semibold'>YOUR EMAIL</FormLabel>
                                <Input onChange={(e) => setUserEmail(e.target.value)}
                                    value={userEmail} className='w-full p-4 my-3 duration-300 transform bg-transparent border rounded-md shadow-sm outline-none focus:scale-105 shadow-black/50 border-white/10 placeholder:font-normal' type="email" name='user_email' placeholder='Enter your name' />

                            </FormControl>

                            <FormControl className='mb-5' isRequired>
                                <FormLabel className='font-semibold'>MOBILE NUMBER</FormLabel>
                                <Input onChange={(e) => setUserNumber(e.target.value)}
                                    value={userNumber} className="w-full p-4 my-3 mb-5 duration-300 transform bg-transparent border rounded-md shadow-sm outline-none placeholder:font-normal focus:scale-105 border-white/10 shadow-black/50" type="text" name='mobile_number' placeholder='Enter your question' />
                            </FormControl>


                            <FormControl isRequired>
                                <FormLabel className='font-semibold'>YOUR MESSAGE</FormLabel>

                                <textarea onChange={(e) => setUserMessage(e.target.value)}
                                    value={userMessage} className="w-full h-40 p-4 my-3 duration-300 transform bg-transparent border rounded-md shadow-sm outline-none placeholder:font-normal focus:scale-105 border-white/10 shadow-black/50" name='message' placeholder='Type your massage'></textarea>
                                <input className="w-full hover:scale-105 transform duration-500  cursor-pointer shadow-sm shadow-black/50 p-4 rounded-md border border-white/20 hover:text-[#4e4feb] font-bold " type="submit" value="SEND MESSAGE" />
                            </FormControl>
                        </form>
                        <div className='mt-3 text-lg font-medium'>
                            {error &&
                                error.map((e) => (
                                    <div
                                        className={`${success ? "text-green-800" : "text-red-600"
                                            } px-5 py-2`}
                                    >
                                        {e}
                                    </div>
                                ))}
                        </div>
                    </div>
                </Fade>
            </div>

            {/* <ContactFrom/> */}
        </main>
    );
};

export default ContactPage;