import React from "react";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const Testim = () => {
	const content = [
		{
			title: "testi-1",
			para: "Lorem ipsum dolor sit amet consectetu adipisicing elit. Nobis quibusdam dolore exaspernatur ducimus alias rerum debitis namconsectetur delectus ut istevoluptatum incidunt, asperiores numquam. Harum tempore corporis odio!",
			name: "Monica Jason",
			job: "Teacher",
		},
		{
			title: "testi-2",
			para: "Lorem ipsum dolor sit amet consectetu adipisicing elit. Nobis quibusdam dolore exaspernatur ducimus alias rerum debitis namconsectetur delectus ut istevoluptatum incidunt, asperiores numquam. Harum tempore corporis odio!",
			name: "karle Dejo",
			job: "Doctor",
		},
		{
			title: "testi-3",
			para: "Lorem ipsum dolor sit amet consectetu adipisicing elit. Nobis quibusdam dolore exaspernatur ducimus alias rerum debitis namconsectetur delectus ut istevoluptatum incidunt, asperiores numquam. Harum tempore corporis odio!",
			name: "Ramy Sabry",
			job: "Designer",
		},
		{
			title: "testi-4",
			para: "Lorem ipsum dolor sit amet consectetu adipisicing elit. Nobis quibusdam dolore exaspernatur ducimus alias rerum debitis namconsectetur delectus ut istevoluptatum incidunt, asperiores numquam. Harum tempore corporis odio!",
			name: "lara Johanthom",
			job: "technical engineer",
		},
	];
	return (
		<div className="bg-section my-32">
			<h2 className="text-3xl sm:text-5xl text-center font-bold text-gray-800">
				Trusted by Agencies
				<br />
				<span className="text-blue-400">& Store Owners</span>
			</h2>

			{/* main-content */}
			<div className="max-w-6xl mx-auto py-32 flex items-center justify-between">
				<div className="inline-flex flex-col">
					<img
						src={"/assets/images/per-1.svg"}
						width={156}
						height={172}
						loading="lazy"
						className="ml-32"
					/>
					<img
						src={"/assets/images/per-2.svg"}
						width={"125px"}
						height={"125px"}
						loading="lazy"
						className="mr-20 my-32"
					/>
					<img
						src={"/assets/images/per-3.svg"}
						width={129}
						height={137}
						loading="lazy"
						className="ml-32"
					/>
				</div>

				<div className="testi max-w-md mx-auto  flex">
					<Carousel
						showThumbs={false}
						showIndicators={false}
						showStatus={false}
						autoPlay
					>
						{content.map((item) => (
							<div
								key={item.title}
								className=" text-center relative"
							>
								<div
									style={{
										backgroundImage:
											'url("/assets/images/qoutes.svg")',
										backgroundPosition: "center 5%",
										backgroundSize: "200px 100px",
										width: "100%",
										height: "100%",
										backgroundRepeat: "no-repeat",
									}}
								>
									<p className="py-12 px-8 text-gray-400">
										{item.para}
									</p>
									<p className="text-blue-400">{item.name}</p>
								</div>
							</div>
						))}
					</Carousel>
				</div>

				<div className="inline-flex flex-col">
					<img
						src={"/assets/images/per-4.svg"}
						width={142}
						height={142}
						loading="lazy"
						className="mr-32"
					/>
					<img
						src={"/assets/images/per-5.svg"}
						width={202}
						height={202}
						loading="lazy"
						className="ml-32 my-20"
					/>
					<img
						src={"/assets/images/per-6.svg"}
						width={111}
						height={120}
						loading="lazy"
						className="mr-32"
					/>
				</div>
			</div>
		</div>
	);
};

export default Testim;
