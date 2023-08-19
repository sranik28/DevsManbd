import { FaLinkedinIn } from "react-icons/fa";
import {
	RiFacebookFill,
	RiInstagramFill,
	RiSkypeFill,
	RiTwitterFill,
} from "react-icons/ri";
import tofaelVai from "../../../public/our-team/tofael.jpg"
import afrozApu from "../../../public/our-team/afroz.jpg"
import '../our-team/our-team.css'
import Image from "next/image";

const OurTeamPage = () => {
	return (
		<div className="mx-auto ">
			{/* <div className="bg-[#ffffff]">
				<div
					className="h-[60vh]  bg-[white] pb-5"
					style={{
						backgroundImage: `url("https://i.ibb.co/s2pn0Bg/marvin-meyer-SYTO3xs06f-U-unsplash-min.jpg")`,
						backgroundSize: "cover",
					}}
				>
					<h1 className="text-6xl text-center text-[white] pt-32 font-bold">
					DevsManbd Team
					</h1>
				</div>
				<h1 className="text-[50px] font-bold text-[#000000] pt-7 text-center">
					Meet Our Clever Team
				</h1>
				<div className="bg-[#0DA1DB] w-[100px] mx-auto h-[6px]"></div>
			</div> */}
			<div className="w-full h-[60vh] relative">
				<div className="before:content-[''] w-full h-[60vh] relative before:absolute before:bg-[#0000009f] before:z-20 before:top-0 before:right-0 before:left-0 before:bottom-0">

					<Image className="object-cover" fill={true} src="https://i.ibb.co/s2pn0Bg/marvin-meyer-SYTO3xs06f-U-unsplash-min.jpg" alt='' />
				</div>

				<div className="absolute z-30 max-w-[1240px] w-full mx-auto top-5 left-0 right-0  text-white h-full flex justify-center flex-col">
					<h2 className='text-6xl text-center text-[white] pb-5 font-bold'>Devsmanbd Team</h2>
				</div>
			</div>
			<h1 className="text-[50px] font-bold text-[#000000] pt-7 text-center">
					Meet Our Clever Team
				</h1>
				<div className="bg-[#0DA1DB] w-[100px] mx-auto h-[6px]"></div>	
			<div className="container grid h-full mt-8 lg:grid-cols-3">
				<div className="duration-500 addClass hover:drop-shadow-xl hover:shadow-black/90 hover:scale-105">
					<div className=" bg-white w-[358px] rounded-3xl mx-auto my-10 h-[431px] hover:border hover:border-slate-500 ">
						<div className="avatar pt-[35px] flex justify-center items-center">
							<div className="w-[160px] relative  h-[160px]  rounded-full">
								<Image fill={true} alt="team member image" className="duration-500 transform rounded-full hover:scale-105" src="https://i.ibb.co/YNX8jYx/Whats-App-Image-2023-07-22-at-12-20-30-AM.jpg" />
							</div>
						</div>

						<div>
							<h1 className="text-[28px] duration-500 leading-snug text-center pt-6 text-black font-semibold ">
								Sagor Ahmed{" "}
							</h1>
							<p className="text-center font-[13px] text-[#9E9E9E] mb-5">
								Founder & CEO, Web Developer
							</p>

							<div>
								<div className="flex justify-center gap-3 mt-16 text-3xl">
									<a target="_blank" href="https://twitter.com/developerSagor">
										<div target="_blank" className="p-[7px] bg-[#A1A1A1] hover:bg-[#2BA1E9] duration-500 rounded-full">
											<RiTwitterFill target="_blank" className="text-white "></RiTwitterFill>
										</div>
									</a>
									<a href="https://www.facebook.com/sagorahmed090400/">
										<div className="p-[7px] bg-[#A1A1A1] hover:bg-[#4A6399] duration-500 rounded-full">
											<RiFacebookFill className="text-white"></RiFacebookFill>
										</div>
									</a>
									<a href="https://www.instagram.com/sagorahmed090400/">
										<div className="p-[7px] bg-[#A1A1A1] hover:bg-[#E400E9] duration-500 rounded-full">
											<RiInstagramFill className="text-white"></RiInstagramFill>
										</div>
									</a>

									<a href="https://www.linkedin.com/in/sagor-ahmed-02a472271/">
										<div className="p-[7px] bg-[#A1A1A1] hover:bg-[#0A66C2] duration-500 rounded-full">
											<FaLinkedinIn className="text-white "></FaLinkedinIn>
										</div>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="duration-500 addClass hover:drop-shadow-xl hover:shadow-black/90 hover:scale-105">
					<div className=" bg-white w-[358px] rounded-3xl mx-auto my-10 h-[431px] hover:border hover:border-slate-500">
						<div className="avatar pt-[35px] flex justify-center items-center">
							<div className="w-[160px] relative h-[160px]  rounded-full">
								<Image fill={true} alt="team member image" className="duration-500 transform rounded-full hover:scale-105" src="https://i.ibb.co/Ybmd3cb/361614513-923929135369407-8705623956156444758-n.png" />
							</div>
						</div>

						<div>
							<h1 className="text-[28px] duration-500 leading-snug text-center pt-6 text-black font-semibold ">
								Shahriar Rahman Anik
							</h1>
							<p className="text-center font-[13px] text-[#9E9E9E] mb-5">
								Founder & web Developer
							</p>

							<div>
								<div className="flex justify-center gap-3 mt-16 text-3xl">
									<a href="">
										<div className="p-[7px] bg-[#A1A1A1] hover:bg-[#2BA1E9] duration-500 rounded-full">
											<RiTwitterFill className="text-white "></RiTwitterFill>
										</div>
									</a>
									<a href="https://www.facebook.com/S.RahmanAnik">
										<div className="p-[7px] bg-[#A1A1A1] hover:bg-[#4A6399] duration-500 rounded-full">
											<RiFacebookFill className="text-white"></RiFacebookFill>
										</div>
									</a>
									<a href="https://www.instagram.com/s.rahmananik/">
										<div className="p-[7px] bg-[#A1A1A1] hover:bg-[#E400E9] duration-500 rounded-full">
											<RiInstagramFill className="text-white"></RiInstagramFill>
										</div>
									</a>

									<a href="">
										<div className="p-[7px] bg-[#A1A1A1] hover:bg-[#0A66C2] duration-500 rounded-full">
											<FaLinkedinIn className="text-white "></FaLinkedinIn>
										</div>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="duration-500 addClass hover:drop-shadow-xl hover:shadow-black/90 hover:scale-105">
					<div className=" bg-white w-[358px] rounded-3xl mx-auto my-10 h-[431px] hover:border hover:border-slate-500">
						<div className="avatar pt-[35px] flex justify-center items-center">
							<div className="w-[160px] relative h-[160px] object-cover rounded-full">
								<Image fill={true} alt="team member image" className="duration-500 transform rounded-full hover:scale-105" src={tofaelVai} />
							</div>
						</div>

						<div>
							<h1 className="text-[28px] duration-500 leading-snug text-center pt-6 text-black font-semibold ">
								Tofael Al Hasan
							</h1>
							<p className="text-center font-[13px] text-[#9E9E9E] mb-5">
								founder & Web Designer
							</p>

							<div>
								<div className="flex justify-center gap-3 mt-16 text-3xl">
									<a href="https://twitter.com/tofael005">
										<div className="p-[7px] bg-[#A1A1A1] hover:bg-[#2BA1E9] duration-500 rounded-full">
											<RiTwitterFill className="text-white "></RiTwitterFill>
										</div>
									</a>
									<a href="https://www.facebook.com/tofael005/">
										<div className="p-[7px] bg-[#A1A1A1] hover:bg-[#4A6399] duration-500 rounded-full">
											<RiFacebookFill className="text-white"></RiFacebookFill>
										</div>
									</a>
									<a href="">
										<div className="p-[7px] bg-[#A1A1A1] hover:bg-[#E400E9] duration-500 rounded-full">
											<RiInstagramFill className="text-white"></RiInstagramFill>
										</div>
									</a>

									<a href="https://www.linkedin.com/in/tofael005/">
										<div fill={true} className="p-[7px] bg-[#A1A1A1] hover:bg-[#0A66C2] duration-500 rounded-full">
											<FaLinkedinIn className="text-white "></FaLinkedinIn>
										</div>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="duration-500 addClass hover:drop-shadow-xl hover:shadow-black/90 hover:scale-105">
					<div className=" bg-white w-[358px] rounded-3xl mx-auto my-10 h-[431px] hover:border hover:border-slate-500">
						<div className="avatar pt-[35px] flex justify-center items-center">
							<div className="w-[160px] relative h-[160px]  rounded-full">
								<Image fill={true} alt="team member image" className="duration-500 transform rounded-full hover:scale-105" src={afrozApu} />
							</div>
						</div>

						<div>
							<h1 className="text-[28px] duration-500 leading-snug text-center pt-6 text-black font-semibold ">
								Afroz{" "}
							</h1>
							<p className="text-center font-[13px] text-[#9E9E9E] mb-5">
								Co-Founder &  Marketing Manager
							</p>

							<div>
								<div className="flex justify-center gap-3 mt-16 text-3xl">
									<a href="">
										<div className="p-[7px] bg-[#A1A1A1] hover:bg-[#2BA1E9] duration-500 rounded-full">
											<RiTwitterFill className="text-white "></RiTwitterFill>
										</div>
									</a>
									<a href="">
										<div className="p-[7px] bg-[#A1A1A1] hover:bg-[#4A6399] duration-500 rounded-full">
											<RiFacebookFill className="text-white"></RiFacebookFill>
										</div>
									</a>
									<a href="">
										<div className="p-[7px] bg-[#A1A1A1] hover:bg-[#E400E9] duration-500 rounded-full">
											<RiInstagramFill className="text-white"></RiInstagramFill>
										</div>
									</a>

									<a href="">
										<div className="p-[7px] bg-[#A1A1A1] hover:bg-[#0A66C2] duration-500 rounded-full">
											<FaLinkedinIn className="text-white "></FaLinkedinIn>
										</div>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* <div className="duration-500 addClass hover:drop-shadow-xl hover:shadow-black/90 hover:scale-105">
					<div className=" bg-white w-[358px] rounded-3xl mx-auto my-10 h-[431px]">
						<div className="avatar pt-[35px] flex justify-center items-center">
							<div className="w-[160px] relative h-[160px]  rounded-full">
								<Image fill={true}  alt="team member image" className="rounded-full" src="https://i.ibb.co/ynSJcd5/129303963-2799082077sdfsdf017088-4714356675360439919-n-1.jpg" />
							</div>
						</div>

						<div>
							<h1 className="text-[28px] duration-500 leading-snug text-center pt-6 text-black font-semibold ">
								Sagor Ahmed{" "}
							</h1>
							<p className="text-center font-[13px] text-[#9E9E9E] mb-5">
								Founder & CEO, Web Developer
							</p>

							<div>
								<div className="flex justify-center gap-3 mt-16 text-3xl">
									<a href="https://twitter.com/developerSagor">
										<div className="p-[7px] bg-[#A1A1A1] hover:bg-[#2BA1E9] duration-500 rounded-full">
											<RiTwitterFill className="text-white "></RiTwitterFill>
										</div>
									</a>
									<a href="https://www.facebook.com/sagorahmed090400/">
										<div className="p-[7px] bg-[#A1A1A1] hover:bg-[#4A6399] duration-500 rounded-full">
											<RiFacebookFill className="text-white"></RiFacebookFill>
										</div>
									</a>
									<a href="https://www.instagram.com/sagorahmed090400/">
										<div className="p-[7px] bg-[#A1A1A1] hover:bg-[#E400E9] duration-500 rounded-full">
											<RiInstagramFill className="text-white"></RiInstagramFill>
										</div>
									</a>

									<a href="https://www.linkedin.com/in/sagor-ahmed-02a472271/">
										<div className="p-[7px] bg-[#A1A1A1] hover:bg-[#0A66C2] duration-500 rounded-full">
											<FaLinkedinIn className="text-white "></FaLinkedinIn>
										</div>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div> */}
			</div>
		</div>
	);
};

export default OurTeamPage;