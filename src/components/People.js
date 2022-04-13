import React from "react";

const People = () => {
	return (
		<div>
			<h2 className="text-3xl sm:text-5xl text-center font-bold text-gray-800">
				Supported by real people <br />
				<span className="text-blue-400">& Store Owners</span>
			</h2>
			<div className=" mt-8">
				<p className="text-center max-w-lg mx-auto text-sm">
					Our team of Happiness Engineers works remotely from 58
					countries providing customer support across multiple time
					zones.
				</p>
				<div
					style={{
						backgroundImage: "url('/assets/images/people.png')",
						backgroundSize: "cover",
						backgroundPosition: "100% 100%",
					}}
				>
					<div className="max-w-6xl mx-auto ">
						<img
							src="/assets/images/image 24.png"
							className=" mx-auto"
						/>
					</div>
				</div>

				<div className="bg-purple-700  w-full px-6">
					<div className="max-w-6xl mx-auto flex flex-wrap items-center py-8 md:justify-between justify-center">
						<p className="text-left text-white max-w-lg md:text-lg">
							We make Online Markting Easy For You, You Will Never
							Search on Another Store, Get Started And You Will be
							happy.
						</p>
						<a
							href="/products"
							className="text-white bg-transparent border-2 border-white px-11 py-4 border-solid  rounded-full md:my-2 my-8"
						>
							Get Started
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default People;
