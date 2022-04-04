import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Services from "../components/Services";

export default function Home() {
	return (
		<div>
			<Head>
				<title>e-shop</title>
			</Head>
			{/* header */}
			<Header />
			<main>
				{/* banner */}
				<Banner />
				{/* our Services */}
				<Services />
				{/* products-simples */}
			</main>
		</div>
	);
}
