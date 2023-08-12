import Image from "next/image";
import Whatsapp from "../../../public/logo/images.jpg"

const WhatsApp = () => {
    return (
        <div className="relative">
            <Image className="absolute left-0 w-16 bottom-5" src={Whatsapp} alt=""></Image>
        </div>
    );
};

export default WhatsApp;