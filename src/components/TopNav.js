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
			<div className="my-1 sm:mx-4 flex flex-grow sm:flex-grow-0 items-center">
				<Logo />
			</div>
			{/* search bar */}
			<div className="bg-blue-400 hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer">
				<input
					type="text"
					className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none"
				/>
				<SearchIcon className="h-12 p-4 text-white" />
			</div>
			{/* right side */}
			<div className="text-white flex items-center text-xs sm:mx-6 whitespace-nowrap md:space-x-6 space-x-3">
				{/* 1st block */}
				<div className="link">
					<p>Hello Hoda Salah</p>
					<p className="font-extrabold md:text-sm">account & Lists</p>
				</div>
				{/* 2nd block */}
				<div className="link">
					<p>Returns</p>
					<p className="font-extrabold md:text-sm">& Orders</p>
				</div>
				{/* 3rd block */}
				<div className="relative link flex items-center">
					<span className="absolute text-center rounded-full font-bold bg-blue-400 top-0 h-4 w-4 right-0 md:right-5">
						0
					</span>
					<ShoppingCartIcon className="h-10" />
					<p className="hidden md:inline mt-2 font-extrabold md:text-sm">
						Cart
					</p>
				</div>
			</div>
		</div>
	);
};

export default TopNav;
