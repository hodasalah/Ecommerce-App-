import Head from "next/head";
import Banner from "../components/Banner";
import Features from "../components/Features";
import Header from "../components/Header";
import Services from "../components/Services";
import Testim from "./../components/Testim";

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
				{/* Features */}
				<Features />
				{/* Trusted */}
				<Testim />
				{/* products-simples */}
			</main>
		</div>
	);
}
