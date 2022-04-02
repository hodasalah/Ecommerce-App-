import React from "react";
import Logo from "./Logo";
import {
	MenuIcon,
	SearchIcon,
	ShoppingCartIcon,
} from "@heroicons/react/outline";

const TopNav = () => {
	return (
		<div className="flex items-center bg-eshop_blue p-1 flex-grow py-2">
			{/* logo  */}
			<div className="my-1 flex flex-grow sm:flex-grow-0 items-center">
				<Logo />
			</div>
			{/* search bar */}
			<div className="bg-red-700 hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer">
				<input
					type="text"
					className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none"
				/>
				<SearchIcon className="h-12 p-4 text-white" />
			</div>
			{/* right side */}
			<div className="text-white">
				{/* 1st block */}
				<div>
					<p>Hello Hoda Salah</p>
					<p>account & Lists</p>
				</div>
				{/* 2nd block */}
				<div>
					<p>Returns</p>
					<p>& Orders</p>
				</div>
				{/* 3rd block */}
				<div>
					<ShoppingCartIcon className="h-10" />
					Cart
				</div>
			</div>
		</div>
	);
};

export default TopNav;
