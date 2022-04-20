import React from "react";
import Slider from "react-slick";
import Product from "./Product";

const FeaturedProducts = ({ products }) => {
	const filteredProduct = products.filter((product) => {
		return product.rating >= 4.5;
	});

	console.log(filteredProduct);
	const settings = {
		infinite: false,
		speed: 500,
		cssEase: "linear",

		slidesToShow: 4,
		slidesToScroll: 4,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<div className="featured max-w-6xl mt-20 mx-auto px-4">
			<h2 className="text-3xl sm:text-4xl text-left font-bold uppercase text-gray-800 mb-12">
				<span className="text-danger"> Featured Products</span>
			</h2>
			<div className="relative">
				<Slider {...settings}>
					{filteredProduct.map((product, i) => {
						let nextImg = filteredProduct[i + 1]?.image250;
						console.log(nextImg);
						return (
							<div className="h-full">
								<Product
									product={product}
									key={product.productId}
									nextImg={nextImg}
								/>
							</div>
						);
					})}
				</Slider>
			</div>
		</div>
	);
};

export default FeaturedProducts;
