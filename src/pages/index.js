import Head from "next/head";
import {
	Banner,
	Services,
	FeaturedProducts,
	Divider,
	People,
} from "./../components";
import { fetchApi, baseURL } from "../../utils/fetchApi";

export default function Home({ data }) {
	const { products } = data;

	return (
		<div>
			<Head>
				<title>e-shop</title>
			</Head>

			<main>
				{/* banner */}
				<Banner />
				{/* our Services */}
				<Services />
				{/* Featured products */}
				<FeaturedProducts products={products} />
				{/* Divider */}
				<Divider
					srcImg={"/assets/imgs/divid-3.jpg"}
					classes={"max-w-6xl mx-auto my-20"}
				>
					<div className="container relative z-0 py-12 text-left">
						<div className="font-thin text-gray-50 capitalize text-xl">
							Love it with first click
						</div>
						<h2 className="text-white text-5xl ">
							Brand In Your Hand Her
						</h2>
						<p className="text-gray-50 text-md py-8 max-w-md leading-7">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua. Ut enim
						</p>
						<a className="py-3  focus:outline-none sm:px-8 px-4 text-[#3bb8b2] bg-white font-bold sm:mr-1 hover:bg-danger hover:text-white transition-all md:text-sm text-xs">
							Shop Now
						</a>
					</div>
				</Divider>
				<People />
			</main>
		</div>
	);
}
export async function getServerSideProps(context) {
	// products/list?categoryId=cat150006&pageSize=60&currentPage=1
	const data = await fetchApi(
		`${baseURL}/products/list?categoryId=cat150006&pageSize=60&currentPage=2`
	);

	return {
		props: {
			data: data || null,
		},
	};
}
