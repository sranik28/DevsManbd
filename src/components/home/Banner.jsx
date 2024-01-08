"use client";

import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner from "/public/banner.jpg";
import Link from "next/link";

const Banner = () => {
  return (
    <section>
      <div className="w-full h-[90vh] relative">
        <div className="before:content-[''] w-full h-[90vh] relative before:absolute before:bg-[#00000042] before:z-20 before:top-0 before:right-0 before:left-0 before:bottom-0">
          <Image fill={true} src={banner} alt="" />
        </div>

        <div className="absolute z-30 max-w-[1240px] w-full mx-auto top-5 left-0 right-0  text-white h-full flex justify-center flex-col">
          <h2 className="pl-2 text-4xl font-bold leading-snug sm:text-6xl text-secondary">
            We create memorably <br />
            <span className="text-primary">digital experiences.</span>
          </h2>
          <p className="my-5 ml-3 text-xl leading-relaxed">
            Discover the chef in you with our mouth-watering recipe <br /> Where
            passion meets flavor in every dish <br /> Taste the difference of
            our handcrafted dishes
          </p>

          <Link href="/blog">
            <button className="btn px-4 py-3 ml-3 rounded font-semibold w-[150px]">
              Explore
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
