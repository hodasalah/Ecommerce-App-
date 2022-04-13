import React from "react";
import { Product } from "../components";
import Slider from "react-slick";

const products = ({ products }) => {
	const settings = {
		infinite: true,
		autoplaySpeed: 2000,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		speed: 500,
		autoplaySpeed: 5000,
		cssEase: "linear",
		arrows: false,
	};
	return (
		<div className="bg-section pro-banner">
			<Slider {...settings}>
				<div className="  pt-32 pb-40 relative">
					<img
						loading="lazy"
						src="/assets/images/Design.png"
						style={{
							display: "block",
							width: "100%",
							height: "100%",
							objectFit: "cover",
							position: "absolute",
							top: 0,
							left: 0,
							zIndex: -1,
						}}
					/>
					<div className="px-10">
						<h2 className="text-left font-bold text-7xl text-[#4e7570] ">
							New Collection
						</h2>
						<h2 className="text-left font-bold text-7xl text-[#4e7570]">
							Summer Sale
						</h2>
						<p className="text-left mt-6 font-thin text-2xl text-[#4e7570]">
							SALE OFFER
						</p>
					</div>
				</div>
				<div className=" pt-32 pb-40 relative">
					<img
						loading="lazy"
						src="/assets/images/design-3.png"
						style={{
							display: "block",
							width: "100%",
							height: "100%",
							objectFit: "cover",
							position: "absolute",
							top: 0,
							left: 0,
							zIndex: -1,
						}}
					/>
					<div className="px-10">
						<h2 className="text-left text-6xl text-[#4e7570]  ">
							NEW
						</h2>
						<h2 className="text-left text-8xl text-yellow-500">
							FASHION
						</h2>
						<h2 className="text-left text-6xl text-[#4e7570] ">
							SALE
						</h2>
					</div>
				</div>
			</Slider>

			<div className="grid grid-flow-row-dense xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 md:-mt-48">
				{products &&
					products?.map((product) => (
						<Product key={product.id} product={product} />
					))}
				{!products && (
					<h2 className="text-lg text-blue-400 font-bold text-center my-4">
						No Products yet
					</h2>
				)}
			</div>
		</div>
	);
};

export default products;
export async function getServerSideProps(context) {
	const data = await fetch("https://fakestoreapi.com/products")
		.then((res) => res.json())
		.catch((err) => {
			console.log(err);
		});
	return {
		props: {
			products: data || null,
		},
	};
}
