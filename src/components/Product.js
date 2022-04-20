import React, { useState } from "react";

import { StarRate } from "./";
import { FaShoppingCart, FaLink, FaHeart } from "react-icons/fa";

const Product = ({ product, nextImg }) => {
	const { brandName, productName, displayName, image250, rating } = product;
	const price = product.currentSku.listPrice.split(" - ");
	const altImage = product.currentSku.imageAltText;

	return (
		<div className="card  relative flex flex-col mx-2 bg-white z-30  transition-all">
			{price.length > 1 ? (
				<div className="absolute top-0 left-0 px-4 py-1 bg-yellow-500 text-white z-10 ">
					Sale
				</div>
			) : (
				""
			)}

			<div className=" xl:px-10 px-6 py-14 relative reveal bg-gray-100 ">
				<img
					src={image250}
					alt={altImage}
					loading="lazy"
					width={200}
					height={200}
					className="block mx-auto mix-blend-multiply main-img"
				/>
				<img
					src={nextImg}
					alt={altImage}
					loading="lazy"
					width={200}
					height={200}
					className="bg-gray-100 featured-img mix-blend-multiply"
				/>
				<div className="bg-[rgba(255,255,255,.7)]  p-overlay p-10 opacity-0 invisible text-black absolute -top-full left-0 w-full h-full flex items-center justify-center ">
					<a className="cursor-pointer flex items-center justify-center bg-black hover:bg-mid_red text-white rounded-full w-10 h-10 ">
						<FaShoppingCart className=" " />
					</a>
					<a className="cursor-pointer  bg-black text-white rounded-full w-10 h-10 flex items-center justify-center mx-2 hover:bg-mid_red">
						<FaLink className="" />
					</a>
					<a className="cursor-pointer  bg-black text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-mid_red ">
						<FaHeart className="" />
					</a>
				</div>
			</div>

			<div className="text-center h-48 py-6">
				<h2 className="my-3 text-md text-mid_red">{brandName}</h2>
				<h4 className="text-sm my-2 line-clamp-2">
					{productName || displayName}
				</h4>
				<div className="flex justify-center">
					<StarRate rate={rating} />
				</div>

				<div className="mb-5">
					{price[0]}
					{price[1] ? (
						<span className="line-through ml-2 text-danger">
							{price[1]}
						</span>
					) : (
						""
					)}
				</div>
			</div>
			<button className="mt-auto pro-btn">Add To Basket</button>
		</div>
	);
};

export default Product;
