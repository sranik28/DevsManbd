// import Message from "@/components/Message";
import Banner from "@/components/home/Banner";
import DevServices from "@/components/home/DevServices";
import FAQ from "@/components/home/FAQ";
import OurTechnology from "@/components/home/OurTechnology";


const HomePage = () => {
    return (
        <>
            {/* <Message /> */}
            <Banner />
            <DevServices />
            <OurTechnology />
            <FAQ />
        </>
    );
};

export default HomePage;