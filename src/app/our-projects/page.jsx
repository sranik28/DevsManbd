import Projects from "@/components/our-projects/main";
import Image from "next/image";


const OurProjectPage = () => {
	return (
		<div className="">

			{/* <div
					className="h-[60vh]  bg-[white] pb-5"
					style={{
						backgroundImage: `url("https://i.ibb.co/s2pn0Bg/marvin-meyer-SYTO3xs06f-U-unsplash-min.jpg")`,
						backgroundSize: "cover",
					}}
				>
					<h1 className="text-6xl text-center text-[white] pt-32 font-bold">
					DevsManbd Projects
					</h1>
				</div> */}
			<div className="w-full h-[60vh] relative">
				<div className="before:content-[''] w-full h-[60vh] relative before:absolute before:bg-[#0000009f] before:z-20 before:top-0 before:right-0 before:left-0 before:bottom-0">

					<Image className="object-cover" fill={true} src="https://i.ibb.co/s2pn0Bg/marvin-meyer-SYTO3xs06f-U-unsplash-min.jpg" alt='' />
				</div>

				<div className="absolute z-30 max-w-[1240px] w-full mx-auto top-5 left-0 right-0  text-white h-full flex justify-center flex-col">
					<h2 className='text-6xl text-center text-[white] pb-5 font-bold'>Devsmanbd Projects</h2>
				</div>
			</div>
			<div>
				<Projects />
			</div>
		</div>

	);
};

export default OurProjectPage;