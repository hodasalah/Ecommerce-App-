import React from "react";
import Slider from "react-slick";

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
	const settings = {
		infinite: true,
		autoplaySpeed: 2000,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		speed: 500,
		autoplaySpeed: 5000,
		cssEase: "linear",
	};
	return (
		<div className="bg-section my-32 p-4">
			<h2 className="text-3xl sm:text-5xl text-center font-bold text-gray-800">
				Trusted by Agencies
				<br />
				<span className="text-blue-400">& Store Owners</span>
			</h2>

			{/* main-content */}
			<div className="max-w-6xl mx-auto py-32 flex flex-col lg:flex-row items-center justify-between ">
				<div className="flex lg:flex-col flex-row flex-wrap justify-center ">
					<img
						src={"/assets/images/per-1.svg"}
						width={156}
						height={172}
						loading="lazy"
						className="lg:ml-32 ml:20"
					/>
					<img
						src={"/assets/images/per-2.svg"}
						width={"125px"}
						height={"125px"}
						loading="lazy"
						className="lg:mr-20 lg:ml-0 md:ml-20 md:mr-20 mr-8 ml-8  lg:my-32 my-0 md:mb-36"
					/>
					<img
						src={"/assets/images/per-3.svg"}
						width={129}
						height={137}
						loading="lazy"
						className="lg:ml-32 ml-0"
					/>
				</div>
				<div className="relative max-w-md  w-full lg:my-0 my-20">
					<div className="hidden md:block">
						<img
							src="/assets/images/Group 6.png"
							alt="bullets"
							loading="lazy"
							className="absolute top-5 -z-10 left-52 max-w-xs"
						/>
						<img
							src="/assets/images/Group 5.png"
							alt="bullets"
							loading="lazy"
							className="absolute -bottom-20 -z-10 -left-10 max-w-xs "
						/>
					</div>

					<Slider {...settings} className="testi   mx-auto">
						{content.map((item) => (
							<div
								key={item.title}
								className=" text-center relative"
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
								<div>
									<p className="py-10 md:px-8 px-2 text-gray-500">
										{item.para}
									</p>
									<p className="flex flex-col text-sm pb-8 text-blue-400">
										<span>{item.name}</span>
										<span className="text-gray-400">
											{item.job}
										</span>
									</p>
								</div>
							</div>
						))}
					</Slider>
				</div>

				<div className="flex lg:flex-col flex-row flex-wrap justify-center">
					<img
						src={"/assets/images/per-4.svg"}
						width={142}
						height={142}
						loading="lazy"
						className="lg:mr-32 mr-0"
					/>
					<img
						src={"/assets/images/per-5.svg"}
						
						height={202}
						loading="lazy"
						className="lg:ml-32 lg:mr-0 md:ml-20 md:mr-20 mr-8 ml-8  lg:my-20 my-0 md:mt-36 lg:w-36 w-24"
					/>
					<img
						src={"/assets/images/per-6.svg"}
						width={111}
						height={120}
						loading="lazy"
						className="lg:mr-32 mr-0  "
					/>
				</div>
			</div>
		</div>
	);
};

export default Testim;
