import React from "react";

import { Carousel } from "react-responsive-carousel";
import { ChevronRightIcon } from "@heroicons/react/outline";

const Banner = () => {

	// sa5480000458608010483201
	const BannerContent = [
		{
			head: "Payments infrastructure for the internet",
			para: "Millions of companies of all sizes—from startups to Fortune 500s—use Stripe’s software and APIs to accept payments, send payouts, and manage their businesses online. ",
			imgSrc: "/assets/images/featured-image.png",
		},
		{
			head: "Building exactly the eCommerce website you want.",
			para: "e-shop is a responsive ecommerce website Get started quickly and make your way.e-shop is a responsive ecommerce website Get started quickly and make your way.",
			imgSrc: "/assets/images/featured-image-2.png",
		},
		{
			head: "you just need your Mobile.",
			para: "From your Home and be safe Choose what you like and get it.e-shop is a responsive ecommerce website Get started quickly and make your way.e-shop is a responsive ecommerce website Get started quickly and make your way.",

			imgSrc: "/assets/images/featured-image-3.png",
		},
	];
	return (
		<div className={"banner bg-banner bg-no-repeat"}>
			<Carousel
				autoPlay
				infiniteLoop
				showStatus={false}
				showIndicators={false}
				showThumbs={false}
				interval={5000}
			>
				{BannerContent.map((item) => (
					<div
						key={item.head}
						className="flex flex-wrap pb-8 pt-20 px-4 md:pl-10 items-center"
					>
						<div
							className={
								"info md:w-1/2 w-full  pl-3 pr-0 md:pr-6 h-full text-left mb-6 md:mb-0"
							}
						>
							<h1 className="font-black text-5xl lg:text-6xl xl:text-7xl  break-words capitalize">
								{item.head}
							</h1>
							<p className="py-16 text-sm text-gray-600">
								{item.para}
							</p>
							<div className="flex flex-wrap items-center space-x-4">
								<button className="py-3 bg-main_btn-bg rounded-full focus:outline-none px-8 text-white mr-2">
									Start Shopping
								</button>
								<p className="flex space-x-3 mt-2 sm:mt-0">
									<span>OR</span>
									<a className=" text-blue-400 cursor-pointer border-b-2 pb-1">
										Be A Seller
										<ChevronRightIcon className="h-3 ml-2 inline-flex " />
									</a>
								</p>
							</div>
						</div>

						<div className={"banImg h-full md:w-1/2 w-full"}>
							<img
								src={item.imgSrc}
								alt="item name"
								className="w-full h-full max-w-2xl "
								loading="lazy"
							/>
						</div>
					</div>
				))}
			</Carousel>
		</div>
	);
};

export default Banner;
