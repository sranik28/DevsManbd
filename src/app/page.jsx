import Banner from "@/components/home/Banner";
import DevServices from "@/components/home/DevServices";
import FAQ from "@/components/home/FAQ";
import OurTechnology from "@/components/home/OurTechnology";
import Image from "next/image";
import Whatsapp from "../../public/logo/images.jpg"


const HomePage = () => {
    return (
        <>
        
            {/* <Banner /> */}
            <DevServices />
            <OurTechnology />
            <FAQ />
        </>
    );
};

export default HomePage;