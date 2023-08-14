import Link from 'next/link';
import {  BsFacebook, BsYoutube, BsLinkedin } from "react-icons/bs";
import {  AiOutlineTwitter } from "react-icons/ai";
import contact from "../../../public/contact/contact.jpg"
import Image from 'next/image';

const ContactPage = () => {
    return (
        <div className="container grid gap-10 mt-20 font-light md:grid-cols-2">
            <div className=''>
                {/* <Fade delay={50} direction="left"> */}
                {/* <img className="w-full rounded-md" src={imge} alt="" /> */}
                <Image className="w-full rounded-md" src={contact} alt="" />
                <h1 className="text-2xl text-[#068fff] font-semibold mt-8">Devsmanbd</h1>
                <p className="my-4 font-semibold ">I am available for freelance or remote work. Connect with me via and call in to my account or contact with me a send message.</p>
                <p className="my-3 font-semibold ">Phone: +88 01703825046</p>
                <p className="font-semibold ">Email: info@devsmanbd.com</p>
                <div>
                    <h1 className="mt-6 text-lg font-semibold ">FIND US</h1>
                    {/* <div className="flex gap-4 mt-6"> */}
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
                        {/* <Link target="_blank" to="https://www.linkedin.com/in/tofael005/" className="text-3xl hover:bg-black/30 hover:text-[#FF024F] duration-300 p-6 shadow-md  shadow-[#131619] scale-90 hover:scale-105 ease-in rounded-md text-gray-300"><FiLinkedin /></Link> */}
                        {/* <Link className="text-3xl hover:bg-black/30 hover:text-[#FF024F] duration-300 p-6 shadow-md  shadow-[#131619] scale-90 hover:scale-105 ease-in rounded-md text-gray-300"><FaInstagram /></Link> */}
                    {/* </div> */}
                </div>
                {/* </Fade> */}
            </div>
            {/* <Fade delay={50} direction="right"> */}
            <div className="">
                <form  >
                    <label className='font-semibold' htmlFor="">YOUR NAME</label> <br />
                    <input className='w-full p-4 my-3 bg-transparent border rounded-md shadow-md outline-none shadow-black/50 border-white/10 placeholder:font-normal' type="text" name='user_name' placeholder='Enter your name' /><br />
                    <label className='font-semibold' htmlFor="">YOUR EMAIL</label> <br />
                    <input className="w-full p-4 my-3 bg-transparent border rounded-md shadow-md outline-none placeholder:font-normal border-white/10 shadow-black/50" type="email" name="user_email" id="" placeholder='Enter your email' /><br />
                    <label className='font-semibold' htmlFor="">SUBJECT</label><br />
                    <input className="w-full p-4 my-3 bg-transparent border rounded-md shadow-md outline-none placeholder:font-normal border-white/10 shadow-black/50" type="text" name='user_subject' placeholder='Enter your question' /><br />
                    <label className='font-semibold' htmlFor="">YOUR MESSAGE</label><br />
                    <textarea className="w-full h-40 p-4 my-3 bg-transparent border rounded-md shadow-md outline-none placeholder:font-normal border-white/10 shadow-black/50" name="message"  placeholder='Type your massage'></textarea>
                    <input className="w-full font-normal cursor-pointer shadow-md shadow-black/50 p-4 rounded-md border border-white/20 hover:text-[#4e4feb] hover:font-bold duration-300" type="submit" value="SEND MESSAGE" />
                </form>
            </div>
            {/* </Fade> */}
        </div>
    );
};

export default ContactPage;