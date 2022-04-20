import React from "react";
import { Product } from "../components";
import Slider from "react-slick";
import { useRouter } from "next/router";
import { fetchApi, baseURL } from "../../utils/fetchApi";

const products = ({ data }) => {
	const router = useRouter();
	const { products, keyword, categories } = data;
	console.log(data);
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
			<Slider {...settings} className="lg:h-screen">
				<div className="py-40 relative w-full h-full">
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
							bottom: 0,
							left: 0,
							zIndex: -1,
							opacity: 1,
						}}
					/>
					<div className="md:px-10 px-4">
						<h2 className="text-left font-bold text-5xl md:text-6xl  text-[#4e7570] ">
							New Collection
						</h2>
						<h2 className="text-left font-bold text-6xl md:text-8xl  text-yellow-500">
							Summer Sale
						</h2>
						<h2 className="text-left  font-thin text-5xl md:text-6xl text-[#4e7570]">
							SALE OFFER
						</h2>
					</div>
				</div>
				<div className="py-40 relative w-full h-full">
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
							bottom: 0,
							left: 0,
							zIndex: -1,
							opacity: 1,
						}}
					/>
					<div className="md:px-10 px-4">
						<h2 className="text-left text-5xl  md:text-6xl text-[#4e7570]  ">
							New Colors
						</h2>
						<h2 className="text-left  text-6xl md:text-8xl text-yellow-500">
							Fashion Styles
						</h2>
						<h2 className="text-left  text-5xl md:text-6xl text-[#4e7570] ">
							NEW SALE
						</h2>
					</div>
				</div>
			</Slider>

			<div className="grid grid-flow-row-dense xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 lg:-mt-52">
				{products && (
					<>
						{products?.slice(0, 4).map((product) => (
							<Product
								key={product.productId}
								product={product}
								categories={categories}
							/>
						))}
						<img
							loading="lazy"
							className="md:col-span-full"
							src="/assets/images/jewlery.jpg"
						/>
						<div className="md:col-span-2">
							{products?.slice(4, 5).map((product) => (
								<Product
									key={product.productId}
									product={product}
									categories={categories}
								/>
							))}
						</div>
						{products?.slice(5).map((product) => (
							<Product
								key={product.productId}
								product={product}
								categories={categories}
							/>
						))}
					</>
				)}
				{!products && (
					<h2 className="text-lg text-blue-400 font-bold text-center my-4">
						No Products yet
					</h2>
				)}
				products here
			</div>
		</div>
	);
};

export default products;
export async function getServerSideProps({ query }) {
	const q = query.q || "skin";

	const data = await fetchApi(
		`${baseURL}/products/search?q=${q}&pageSize=60&currentPage=1`
	);

	return {
		props: {
			data: data || null,
		},
	};
}
