import React from "react";
import Logo from "./Logo";
import { MenuIcon } from "@heroicons/react/outline";

const Navbar = () => {
	return (
		<div className="bg-eshop_blue-light p-1 flex space-x-3 md:space-x-6  flex-grow py-2 text-sm text-white">
			{/* menu icon  */}
			<p className="flex items-center">
				<MenuIcon className="h-6 mr-1" />
				All
			</p>
			<p>Today's Deals</p>
			<p>Customer Service</p>
			<p>Registry</p>
			<p>Gift Cards</p>
			<p>Sell</p>
		</div>
	);
};

export default Navbar;
