import React from "react";

const Services = () => {
	return (
		<div className="py-16 px-8">
			<h2 className="text-3xl sm:text-5xl text-center font-bold text-gray-800">
				What We Do To Help <br />
				<span className="text-danger">Our Customers</span>
			</h2>

			<div className="max-w-6xl  mt-20 mx-auto  grid grid-flow-row-dense  lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
				<div className="card relative  ">
					<div className="absolute -top-10 -left-16 hidden sm:block">
						<img src="/assets/images/dots.svg" />
					</div>

					<div className="img-container overflow-hidden transition-all">
						<img
							src="/assets/imgs/ser-1.jpg"
							alt="send"
							className=" img-container w-full h-full "
							loading="lazy"
						/>
					</div>
				</div>
				{/* card 2 */}
				<div className="card relative mt-0 lg:mt-10">
					<div className="img-container overflow-hidden transition-all">
						<img
							src="/assets/imgs/ser-2.jpg"
							alt="send"
							className=" img-container w-full h-full "
							loading="lazy"
						/>
					</div>
				</div>
				{/* card3 */}
				<div className="card relative mt-0   lg:mt-20">
					<div className="absolute top-60 -right-16 sm:block hidden ">
						<img src="/assets/images/dots.svg" />
					</div>

					<div className="img-container overflow-hidden transition-all">
						<img
							src="/assets/imgs/ser-3.jpg"
							alt="send"
							className=" img-container w-full h-full "
							loading="lazy"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;
