import React, { useState } from "react";
import Image from "next/image";

import Currency from "react-currency-formatter";
import { StarRate } from "./";

const Product = ({ product }) => {
	const { title, price, category, description, image, rating } = product;
	const rate = rating.rate;
	console.log(product);
	return (
		<div className="relative flex flex-col m-5 bg-white z-30 xl:p-10 p-6">
			<p className="absolute top-2 right-2 text-xs italic text-gray-200">
				{category}
			</p>
			<Image src={image} width={200} height={200} objectFit="contain" />
			<h4 className="my-3">{title}</h4>
			<StarRate rate={rate} />
			<p className="text-xs my-2 line-clamp-2">{description}</p>
			<div className="mb-5">
				<Currency quantity={price} currency="USD" />
			</div>
			<button className="mt-auto pro-btn">Add To Basket</button>
		</div>
	);
};

export default Product;
