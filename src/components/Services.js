import React from "react";
import Image from "next/image";
import { ChevronRightIcon } from "@heroicons/react/outline";
const Services = () => {
	return (
		<div className="py-16 px-8">
			<h2 className="text-3xl sm:text-5xl text-center font-bold text-gray-800">
				What We Do To Help <br />
				<span className="text-blue-400">Our Customers</span>
			</h2>

			<div className="max-w-6xl  mt-20 mx-auto  flex flex-wrap md:space-between">
				<div className="card mb-8  md:mb-0 relative max-w-xs mx-auto">
					<div className="absolute -top-10 -left-16 hidden sm:block">
						<img src="/assets/images/dots.svg" />
					</div>

					<Image
						src="/assets/images/send.svg"
						alt="send"
						width={280}
						height={200}
						className="w-full h-full rounded-3xl  bg-gray-50 shadow-inner"
					/>

					<div className="info py-6 px-2 ">
						<h4 className="font-bold text-xl text-black">
							All You Need To Start
						</h4>
						<h5 className="font-bold text-lg text-blue-400">
							Send
						</h5>
						<p className=" text-sm my-3 text-gray-400">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt .
						</p>
						<a href="/products" className="inline-flex text-sm border-b-2 capitalize text-greenLink">
							go shopping now <ChevronRightIcon className="h-4" />
						</a>
					</div>
				</div>
				{/* card 2 */}
				<div className="card relative mb-8 md:mb-0 max-w-xs mx-auto lg:mt-10">
					<Image
						src="/assets/images/buy.svg"
						alt="send"
						width={280}
						height={200}
						className="w-full h-full rounded-3xl  bg-gray-50 shadow-inner"
					/>

					<div className="info py-6 px-2">
						<h4 className="font-bold text-xl text-black">
							Go To your Shopping cart
						</h4>
						<h5 className="font-bold text-lg text-blue-400">Buy</h5>
						<p className=" text-sm my-3 text-gray-400">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt .
						</p>
						<a href='/products' className="inline-flex text-sm border-b-2 capitalize text-greenLink">
							go shopping now <ChevronRightIcon className="h-4" />
						</a>
					</div>
				</div>
				{/* card3 */}
				<div className="card relative mb-8 md:mb-0 max-w-xs mx-auto lg:mt-20">
					<div className="absolute top-20 -right-8 sm:block hidden ">
						<img src="/assets/images/dots.svg" />
					</div>

					<Image
						src="/assets/images/receive.svg"
						alt="send"
						width={280}
						height={200}
						className="w-full h-full rounded-3xl bg-gray-50 shadow-inner"
					/>

					<div className="info  py-6 px-2">
						<h4 className="font-bold text-xl text-black">
							Just In one Day
						</h4>
						<h5 className="font-bold text-lg text-blue-400">
							Receive
						</h5>
						<p className=" text-sm my-3 text-gray-400">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt .
						</p>
						<a href="/products" className="inline-flex text-sm border-b-2 capitalize text-greenLink">
							go shopping now <ChevronRightIcon className="h-4" />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;
