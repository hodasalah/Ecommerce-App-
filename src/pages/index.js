import Head from "next/head";
import { Banner, Services, Features, People, Testim } from "./../components";

export default function Home() {
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
				{/* Features */}
				<Features />
				{/* Trusted */}
				<Testim />
				{/* People */}
				<People />
			</main>
		</div>
	);
}
