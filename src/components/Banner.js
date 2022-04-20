import React from "react";
import Slider from "react-slick";
import { ChevronRightIcon } from "@heroicons/react/outline";

const Banner = () => {
	const settings = {
		infinite: true,
		autoplaySpeed: 2000,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		speed: 500,
		autoplaySpeed: 5000,
		cssEase: "linear",
		fade: true,
	};
	const BannerContent = [
		{
			head: "Cosmetics For Young",
			para: "Sensitive Skin ",
			text2: "50% discount",

			style: {
				color: "text-[#f10a95]",
				align: "text-center",
				justify: "justify-center",
				text: "#fff",
			},
			btn: "bg-danger",
			imgSrc: [
				"/assets/imgs/bann-1_1920.jpg",
				"/assets/imgs/bann-1_767.jpg",
			],
		},
		{
			head: "Best Collection.",
			para: "Modern And ",
			para1: "Trendy Products",
			text2: "Flat 30% off on all items",
			style: {
				color: "text-[#d26f2c]",
				align: "text-center",
				justify: "justify-center",
				text: "#fff",
			},
			btn: "bg-secondary",
			imgSrc: [
				"/assets/imgs/bann-2_1920.jpg",
				"/assets/imgs/bann-2_767.jpg",
			],
		},
		{
			head: "Best Offers On.",
			para: "Natural Cosmetic",
			para1: " Collections.",
			text2: "flat 30% off",
			style: {
				color: "md:text-white text-mid_red",
				align: "md:text-left text-center",
				justify: "md:justify-start justify-center ",
				text: "#fff",
				color2: "text-mid_red",
				object: "object-right",
			},
			btn: "bg-[#ffffff]",
			imgSrc: [
				"/assets/imgs/bann-3_1920.jpg",
				"/assets/imgs/bann-3_767.jpg",
			],
		},
	];
	return (
		<div className="banner">
			<Slider {...settings}>
				{BannerContent.map((item) => (
					<div
						className=" relative w-full h-full overflow-hidden"
						key={item.head}
					>
						<div className="absolute top-0 bottom-0 left-0 z-0 w-full h-full">
							<picture>
								<source
									srcSet={`${item.imgSrc[0]} 1920w`}
									media="(min-width: 767px)"
								/>
								<img
									src={item.imgSrc[0]}
									srcSet={`${item.imgSrc[1]} 767w,${item.imgSrc[0]} 1920w`}
									alt="item name"
									className={`w-full h-[600px] object-cover sm:object-center ${
										item.style.object
											? item.style.object
											: "object-left"
									} `}
									loading="lazy"
								/>
							</picture>
						</div>
						<div
							className={`relative flex max-w-[80%] m-auto h-full  py-20 md:px-8 px-2 items-center z-1 ${item.style.justify} `}
						>
							<div
								className={`${item.style.align} py-12 px-7 md:bg-transparent bg-white bg-opacity-75`}
							>
								<h5 className="text-black font-thin md:text-3xl text-lg md:pb-5 pb-2  capitalize">
									{item.head}
								</h5>
								<h2
									className={`${item.style.color} uppercase xl:text-6xl md:text-5xl text-xl md:pb-5 pb-2`}
								>
									{item.para}
									<br />
									{item.para1 && item.para1}
								</h2>
								<h5 className="text-black font-thin md:text-3xl text-lg mb-5 capitalize">
									{item.text2}
								</h5>
								<div
									className={`flex flex-wrap ${item.style.justify} items-center space-x-4`}
								>
									<a
										href="/products"
										className={` ${
											item.style.color2
												? item.style.color2
												: ""
										} ${
											item.btn
										} py-3 rounded-full focus:outline-none sm:px-8 px-4 text-white sm:mr-1 hover:bg-black transition-all md:text-sm text-xs`}
									>
										Start Shopping
									</a>
									<div
										className={` flex space-x-2 mt-2 sm:mt-0 text-sm`}
									>
										<span className="block text-black">
											OR
										</span>
										<a
											className={`${item.style.color} block cursor-pointer border-b-2 pb-1`}
										>
											Be A Seller
											<ChevronRightIcon className="h-3 ml-2 inline-flex " />
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				))}
			</Slider>
		</div>
	);
};

export default Banner;
