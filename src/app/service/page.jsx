"use client"
import Image from 'next/image';
import React from 'react';
import webDevelopment from "/public/our-servies/Web App Development.png"
import { FaReact } from 'react-icons/fa';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiExpress, SiFirebase } from 'react-icons/si';
import { SiMongodb } from 'react-icons/si';
import { BiLogoNodejs, BiLogoJavascript } from 'react-icons/bi';
import serviceBanner from '/public/our-servies/servicebanner.jpg'

const OurServicePage = () => {
    return (
        <main className=''>
            {/* <div
                className="h-[60vh] pb-5"
                style={{
                    backgroundImage: `url("https://i.ibb.co/250qwFr/365382453-3429115160682547-1564854372547910580-n.jpg")`,
                    backgroundSize: "cover",
                       

                }}
            >
                <h1 className="text-6xl text-center text-[white] pt-32 font-bold">
                    Devsmanbd Service
                </h1>
            </div> */}
            <div className="w-full h-[60vh] relative">
                <div className="before:content-[''] w-full h-[60vh] relative before:absolute before:bg-[#0000009f] before:z-20 before:top-0 before:right-0 before:left-0 before:bottom-0">

                    <Image fill={true} src={serviceBanner} alt='' />
                </div>

                <div className="absolute z-30 max-w-[1240px] w-full mx-auto top-5 left-0 right-0  text-white h-full flex justify-center flex-col">
                    <h2 className='text-6xl text-center text-[white] pb-5 font-bold'>Devsmanbd Service</h2>
                </div>
            </div>

            <h1 className="text-[50px] font-bold text-[#000000] pt-7 text-center">
                Our Service
            </h1>
            <div className="bg-[#0DA1DB] w-[100px] mx-auto h-[6px]"></div>
            <div className='container'>
                <div data-aos="fade-up" className='grid items-center gap-4 my-28 md:grid-cols-2'>
                    <div>
                        <h2 className='mt-5 mb-5 text-3xl'>Web Development</h2>
                        <p>Web development refers to building, creating, and maintaining websites. It includes aspects such as web design, web publishing, web programming, and database management. While the terms web developer and web designer are often used synonymously, they do not mean the same thing.</p>
                        <div className='grid grid-cols-6 px-5 my-5 '>
                            <span className='inline-block mb-10 transition-all duration-500 rounded-full border-spacing-0 hover:scale-110'> <FaReact className='p-1 text-3xl border border-blue-700 rounded-full ' /> </span>
                            <span className='inline-block transition-all duration-500 rounded-full border-spacing-0 hover:scale-110'> <TbBrandNextjs className='p-1 text-3xl border border-blue-700 rounded-full' /> </span>
                            <span className='inline-block transition-all duration-500 rounded-full border-spacing-0 hover:scale-110'> <SiMongodb className='p-1 text-3xl border border-blue-700 rounded-full' /> </span>
                            <span className='inline-block transition-all duration-500 rounded-full border-spacing-0 hover:scale-110'> <BiLogoNodejs className='p-1 text-3xl border border-blue-700 rounded-full' /> </span>
                            <span className='inline-block transition-all duration-500 rounded-full border-spacing-0 hover:scale-110'> <BiLogoJavascript className='p-1 text-3xl border border-blue-700 rounded-full' /> </span>
                            <span className='inline-block transition-all duration-500 rounded-full border-spacing-0 hover:scale-110'> <SiExpress className='p-1 text-3xl border border-blue-700 rounded-full' /> </span>
                            <span className='inline-block transition-all duration-500 rounded-full border-spacing-0 hover:scale-110'> <SiFirebase className='p-1 text-3xl border border-blue-700 rounded-full' /> </span>
                        </div>
                        <button className='px-10 py-3 my-5 btn'>Explore</button>
                    </div>
                    <Image src={webDevelopment} alt='' />
                </div>

                <div data-aos="fade-up" className='grid items-center gap-4 my-28 md:grid-cols-2'>
                    <Image src={webDevelopment} alt='' />
                    <div>
                        <h2 className='mt-5 mb-5 text-3xl'>Frontend Development</h2>
                        <p>What are web design services? A web design service provides you with a customized website design thats perfect for your business or personal site. They will work with you to create a design that matches your brand, while giving your customers a seamless user experience that will delight them.</p>
                        <div className='grid grid-cols-6 px-5 my-5 '>
                            <span className='inline-block mb-10 transition-all duration-500 rounded-full border-spacing-0 hover:scale-110'> <FaReact className='p-1 text-3xl border border-blue-700 rounded-full' /> </span>
                            <span className='inline-block transition-all duration-500 rounded-full border-spacing-0 hover:scale-110'> <TbBrandNextjs className='p-1 text-3xl border border-blue-700 rounded-full ' /> </span>
                            <span className='inline-block transition-all duration-500 rounded-full border-spacing-0 hover:scale-110'> <SiMongodb className='p-1 text-3xl border border-blue-700 rounded-full' /> </span>
                            <span className='inline-block transition-all duration-500 rounded-full border-spacing-0 hover:scale-110'> <BiLogoNodejs className='p-1 text-3xl border border-blue-700 rounded-full' /> </span>
                            <span className='inline-block transition-all duration-500 rounded-full border-spacing-0 hover:scale-110'> <BiLogoJavascript className='p-1 text-3xl border border-blue-700 rounded-full' /> </span>
                            <span className='inline-block transition-all duration-500 rounded-full border-spacing-0 hover:scale-110'> <SiExpress className='p-1 text-3xl border border-blue-700 rounded-full' /> </span>
                            <span className='inline-block transition-all duration-500 rounded-full border-spacing-0 hover:scale-110'> <SiFirebase className='p-1 text-3xl border border-blue-700 rounded-full' /> </span>
                        </div>
                        <button className='px-10 py-3 my-5 btn'>Explore</button>
                    </div>
                </div>

                <div data-aos="fade-up" className='grid items-center gap-4 my-28 md:grid-cols-2'>
                    <div>
                        <h2 className='mt-5 mb-5 text-3xl'>Wordpress Development</h2>
                        <p>A Service is an application component that can perform long-running operations in the background. It does not provide a user interface. Once started, a service might continue running for some time, even after the user switches to another application.</p>
                        <div className='grid grid-cols-6 px-5 my-5 '>
                            <span className='inline-block mb-10 transition-all duration-500 rounded-full border-spacing-0 hover:scale-110'> <FaReact className='p-1 text-3xl border border-blue-700 rounded-full' /> </span>
                            <span className='inline-block transition-all duration-500 rounded-full border-spacing-0 hover:scale-110'> <TbBrandNextjs className='p-1 text-3xl border border-blue-700 rounded-full ' /> </span>
                            <span className='inline-block transition-all duration-500 rounded-full border-spacing-0 hover:scale-110'> <SiMongodb className='p-1 text-3xl border border-blue-700 rounded-full' /> </span>
                            <span className='inline-block transition-all duration-500 rounded-full border-spacing-0 hover:scale-110'> <BiLogoNodejs className='p-1 text-3xl border border-blue-700 rounded-full' /> </span>
                            <span className='inline-block transition-all duration-500 rounded-full border-spacing-0 hover:scale-110'> <BiLogoJavascript className='p-1 text-3xl border border-blue-700 rounded-full' /> </span>
                            <span className='inline-block transition-all duration-500 rounded-full border-spacing-0 hover:scale-110'> <SiExpress className='p-1 text-3xl border border-blue-700 rounded-full' /> </span>
                            <span className='inline-block transition-all duration-500 rounded-full border-spacing-0 hover:scale-110'> <SiFirebase className='p-1 text-3xl border border-blue-700 rounded-full' /> </span>
                        </div>
                        <button className='px-10 py-3 my-5 btn'>Explore</button>
                    </div>
                    <Image src={webDevelopment} alt='' />
                </div>

                <div data-aos="fade-up" className='grid items-center gap-4 my-28 md:grid-cols-2'>
                    <Image src={webDevelopment} alt='' />
                    <div>
                        <h2 className='mt-5 mb-5 text-3xl'>UI/UX Design</h2>
                        <p>When UX helps users accomplish their goals, UI creates a connection between the user and the service provider. Our UI designers aim to build keen brand awareness to help your company improve customer satisfaction, improve user interaction, as well as boost your business grow and enhance.</p>
                        <div className='grid grid-cols-6 px-5 my-5 '>
                            <span className='inline-block mb-10 transition-all duration-500 rounded-full border-spacing-0 hover:scale-110'> <FaReact className='p-1 text-3xl border border-blue-700 rounded-full' /> </span>
                            <span className='inline-block transition-all duration-500 rounded-full border-spacing-0 hover:scale-110'> <TbBrandNextjs className='p-1 text-3xl border border-blue-700 rounded-full ' /> </span>
                            <span className='inline-block transition-all duration-500 rounded-full border-spacing-0 hover:scale-110'> <SiMongodb className='p-1 text-3xl border border-blue-700 rounded-full' /> </span>
                            <span className='inline-block transition-all duration-500 rounded-full border-spacing-0 hover:scale-110'> <BiLogoNodejs className='p-1 text-3xl border border-blue-700 rounded-full' /> </span>
                            <span className='inline-block transition-all duration-500 rounded-full border-spacing-0 hover:scale-110'> <BiLogoJavascript className='p-1 text-3xl border border-blue-700 rounded-full' /> </span>
                            <span className='inline-block transition-all duration-500 rounded-full border-spacing-0 hover:scale-110'> <SiExpress className='p-1 text-3xl border border-blue-700 rounded-full' /> </span>
                            <span className='inline-block transition-all duration-500 rounded-full border-spacing-0 hover:scale-110'> <SiFirebase className='p-1 text-3xl border border-blue-700 rounded-full' /> </span>
                        </div>
                        <button className='px-10 py-3 my-5 btn'>Explore</button>
                    </div>

                </div>
                <div data-aos="fade-up" className='grid items-center gap-4 my-28 md:grid-cols-2'>
                    <div>
                        <h2 className='mt-5 mb-5 text-3xl'>Digital Marketing</h2>
                        <p>Digital marketing, also called online marketing, is the promotion of brands to connect with potential customers using the internet and other forms of digital communication. This includes not only email, social media, and web-based advertising, but also text and multimedia messages as a marketing channel.</p>
                        <div className='grid grid-cols-6 px-5 my-5 '>
                            <span className='inline-block mb-10 transition-all duration-500 rounded-full border-spacing-0 hover:scale-110'> <FaReact className='p-1 text-3xl border border-blue-700 rounded-full' /> </span>
                            <span className='inline-block transition-all duration-500 rounded-full border-spacing-0 hover:scale-110'> <TbBrandNextjs className='p-1 text-3xl border border-blue-700 rounded-full ' /> </span>
                            <span className='inline-block transition-all duration-500 rounded-full border-spacing-0 hover:scale-110'> <SiMongodb className='p-1 text-3xl border border-blue-700 rounded-full' /> </span>
                            <span className='inline-block transition-all duration-500 rounded-full border-spacing-0 hover:scale-110'> <BiLogoNodejs className='p-1 text-3xl border border-blue-700 rounded-full' /> </span>
                            <span className='inline-block transition-all duration-500 rounded-full border-spacing-0 hover:scale-110'> <BiLogoJavascript className='p-1 text-3xl border border-blue-700 rounded-full' /> </span>
                            <span className='inline-block transition-all duration-500 rounded-full border-spacing-0 hover:scale-110'> <SiExpress className='p-1 text-3xl border border-blue-700 rounded-full' /> </span>
                            <span className='inline-block transition-all duration-500 rounded-full border-spacing-0 hover:scale-110'> <SiFirebase className='p-1 text-3xl border border-blue-700 rounded-full' /> </span>
                        </div>
                        <button className='px-10 py-3 my-5 btn'>Explore</button>
                    </div>
                    <Image src={webDevelopment} alt='' />
                </div>
                <div data-aos="fade-up" className='grid items-center gap-4 my-28 md:grid-cols-2'>
                    <Image src={webDevelopment} alt='' />
                    <div>
                        <h2 className='mt-5 mb-5 text-3xl'>Graphics Design</h2>
                        <p>Full-service design means that the design agency can provide a large range of services. These can range from brochure design to website design. Agencies will differ slightly on what they provide. But you will normally find their services on a service page on their website</p>
                        <div className='grid grid-cols-6 px-5 my-5 '>
                            <span className='inline-block mb-10 transition-all duration-500 rounded-full border-spacing-0 hover:scale-110'> <FaReact className='p-1 text-3xl border border-blue-700 rounded-full' /> </span>
                            <span className='inline-block transition-all duration-500 rounded-full border-spacing-0 hover:scale-110'> <TbBrandNextjs className='p-1 text-3xl border border-blue-700 rounded-full ' /> </span>
                            <span className='inline-block transition-all duration-500 rounded-full border-spacing-0 hover:scale-110'> <SiMongodb className='p-1 text-3xl border border-blue-700 rounded-full' /> </span>
                            <span className='inline-block transition-all duration-500 rounded-full border-spacing-0 hover:scale-110'> <BiLogoNodejs className='p-1 text-3xl border border-blue-700 rounded-full' /> </span>
                            <span className='inline-block transition-all duration-500 rounded-full border-spacing-0 hover:scale-110'> <BiLogoJavascript className='p-1 text-3xl border border-blue-700 rounded-full' /> </span>
                            <span className='inline-block transition-all duration-500 rounded-full border-spacing-0 hover:scale-110'> <SiExpress className='p-1 text-3xl border border-blue-700 rounded-full' /> </span>
                            <span className='inline-block transition-all duration-500 rounded-full border-spacing-0 hover:scale-110'> <SiFirebase className='p-1 text-3xl border border-blue-700 rounded-full' /> </span>
                        </div>
                        <button className='px-10 py-3 my-5 btn'>Explore</button>
                    </div>

                </div>

            </div>
        </main>
    );
};

export default OurServicePage;
