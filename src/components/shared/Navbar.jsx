"use client"


import { useState } from 'react';
import { HiMenuAlt1 } from 'react-icons/hi';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import Image from 'next/image';
import logo from '../../../public/logo/logo.png';
import { useRouter } from 'next/navigation'
import Navlink from './Navlink';
import Link from 'next/link';

const NavBer = () => {

    const [toggle, setToggle] = useState(false);
    const { asPath } = useRouter()

    return (
        <main className='sticky z-[1200] py-3 bg-white top-0'>
            <div className='container flex items-center justify-between'>
               <Link href="/"><Image className='w-44' src={logo} alt='' /></Link>

                <span className='md:hidden'>
                    {
                        toggle ? <AiOutlineCloseCircle onClick={() => setToggle(!toggle)} /> : <HiMenuAlt1 onClick={() => setToggle(!toggle)} />
                    }
                </span>
                <ul className={`font-semibold  flex items-center duration-300 flex-col py-5 md:p-0 text-white bg-opacity-90 md:text-black top-20 bg-black md:bg-transparent w-full md:w-auto md:flex-row gap-6   absolute md:static z-50 ${toggle ? "left-0" : "-left-full"}`}>
                    <li className='hover:text-[#4e4feb] hover:duration-500'>
                        <Navlink href="/">
                            Home
                        </Navlink>
                    </li>
                    <li className='hover:text-[#4e4feb] hover:duration-500'>
                        <Navlink href="/about"  >About</Navlink>
                    </li>
                    <li className='hover:text-[#4e4feb] hover:duration-500'>
                        <Navlink href="/our-projects">Our Project</Navlink>
                    </li>
                    <li className='hover:text-[#4e4feb] hover:duration-500'>
                        <Navlink href="/our-team">Our Team</Navlink>
                    </li>
                    <li className='hover:text-[#4e4feb] hover:duration-500'>
                        <Navlink href="/service">Service</Navlink>
                    </li>
                    <Link href="/contact"><button className='px-4 py-2 btn '>Contact</button></Link>
                </ul>
            </div>
        </main>
    );
};

export default NavBer;