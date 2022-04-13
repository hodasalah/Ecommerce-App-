import React from "react";
import Logo from "./Logo";
import {
	CheckCircleIcon,
	LockClosedIcon,
	SupportIcon,
} from "@heroicons/react/outline";

const Footer = () => {
	return (
		<footer className="bg-eshop_blue">
			<div className="max-w-6xl mx-auto px-4">
				<div className="flex flex-wrap justify-between px-4 py-12 md:space-y-0 space-y-5  ">
					<div className="box-1">
						<p className="flex px-2  text-white items-center space-x-3">
							<CheckCircleIcon className="h-10 mr-2" />
							30 day money back guarantee
						</p>
					</div>
					<div className="box-2 ">
						<p className="flex px-2 text-white items-center space-x-3">
							<SupportIcon className="h-10 mr-2" /> Support teams
							across the world
						</p>
					</div>
					<div className="box-3">
						<p className="flex px-2 text-white items-center space-x-3">
							<LockClosedIcon className="h-10 mr-2" />
							Safe & Secure online payment
						</p>
					</div>
				</div>
				<div className=" text-center pt-12">
					<Logo />
				</div>
				<div className=" py-12">
					<hr className="bg-gray-500 border-transparent" />
				</div>
				<div className="md:space-x-0 space-x-3 md:space-y-0 space-y-5 flex flex-wrap justify-between">
					{/* 1st menu */}
					<div className="md:mt-0 mt-5">
						<h2 className="text-white text-lg font-bold mb-4">
							Get to Know Us
						</h2>
						<ul className="text-gray-100 text-base">
							<li>Careers</li>
							<li>Blog</li>
							<li>About e-shop</li>
							<li>Sustainability</li>
							<li>Press Center</li>
							<li>Investor Relations</li>
							<li>E-shop Devices</li>
							<li>E-shop Science</li>
						</ul>
					</div>

					{/* 2nd menu */}
					<div>
						<h2 className="text-white text-lg font-bold mb-4">
							Make Money with Us
						</h2>
						<ul className="text-gray-100 text-base">
							<li>Sell products on e-shop</li>
							<li>Sell apps on E-shop</li>
							<li>Become an Affiliate</li>
							<li>Become a Delivery Driver</li>
							<li>Start a package delivery business</li>
							<li>Advertise Your Products</li>
							<li>Self-Publish with Us</li>
							<li>Host an e-shop Hub</li>
						</ul>
					</div>
					{/* 3rd menu */}
					<div>
						<h2 className="text-white text-lg font-bold mb-4">
							Amazon Payment Products
						</h2>
						<ul className="text-gray-100 text-base">
							<li>Rewards Visa Signature Cards</li>
							<li>E-shop Store Card</li>
							<li>E-shop Secured Card</li>
							<li>E-shop Business Card</li>
							<li>E-shop Business Line of Credit</li>
							<li>Shop with Points</li>
							<li>Credit Card Marketplace</li>
							<li>Reload Your Balance</li>
						</ul>
					</div>
					{/* 4th menu */}
					<div>
						<h2 className="text-white text-lg font-bold mb-4">
							Let Us Help You
						</h2>
						<ul className="text-gray-100 text-base">
							<li>E-shop and COVID-19</li>
							<li>Your Account</li>
							<li>Your Orders</li>
							<li>Shipping Rates & Policies</li>
							<li>Returns & Replacements</li>
							<li>Investor Relations</li>
							<li>E-shop Assistant</li>
							<li>E-shop Help</li>
						</ul>
					</div>
				</div>
			</div>
			{/* bottom footer */}
			<div className="bg-purple-50 mt-12 py-4">
				<div className="max-w-6xl mx-auto px-4 flex flex-wrap md:justify-between justify-center md:space-y-0 space-y-5">
					{/* social-icons */}
					<div className="flex flex-wrap space-x-8 text-center">
						<img src="/assets/images/Vector-1.svg" />
						<img src="/assets/images/Vector-2.svg" />
						<img src="/assets/images/Vector.svg" />
						<img src="/assets/images/Union.svg" />
					</div>
					{/* copyRights */}
					<div className="text-center">
						COPYRIGHT E-Shop 2022 -{" "}
						<a className="link">TERMS & CONDITIONS</a>{" "}
						<a className="link">PRIVACY POLICY</a>
					</div>
					{/* logo */}
					<div>
						<h2 className="font-bold text-lg">
							<span className="text-blue-400">E-</span>Shop
						</h2>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
