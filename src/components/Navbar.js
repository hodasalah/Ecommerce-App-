import React, { useState } from "react";
import Logo from "./Logo";
import { MenuIcon, ShoppingCartIcon } from "@heroicons/react/outline";
import OverLay from "./OverLay";
import MainNav from "./MainNav";

const Navbar = () => {
	const [showList, setShowList] = useState(false);
	const showListStyle = {
		transform: "translateX(0)",
		opacity: 1,
		transition: "all 0.5s ease",
	};
	return (
		<>
			<div className="z-40 items-center bg-eshop_blue-dark md:pl-6 flex flex-grow py-1 text-sm text-white justify-between md:justify-start">
				{/* menu icon  */}
				<p
					className="flex items-center py-2 px-2"
					onClick={() => setShowList(true)}
				>
					<MenuIcon className="h-6 mr-1" />
					All
				</p>
				<div className="hidden md:flex">
					<p className="hover:border-white hover:bg-white hover:text-blue-400 rounded-md cursor-pointer flex items-center border-2 border-solid border-transparent py-2 px-2">
						Today's Deals
					</p>
					<p className="hover:border-white hover:bg-white hover:text-blue-400 rounded-md cursor-pointer flex items-center border-2 border-solid border-transparent py-2 px-2">
						Customer Service
					</p>
					<p className="hover:border-white hover:bg-white hover:text-blue-400 rounded-md cursor-pointer flex items-center border-2 border-solid border-transparent py-2 px-2">
						Registry
					</p>
					<p className="hover:border-white hover:bg-white hover:text-blue-400 rounded-md cursor-pointer flex items-center border-2 border-solid border-transparent py-2 px-2">
						Gift Cards
					</p>
					<p className="hover:border-white hover:bg-white hover:text-blue-400 rounded-md cursor-pointer flex items-center border-2 border-solid border-transparent py-2 px-2">
						Sell
					</p>
				</div>
				{/* 3rd block */}
				<div className="relative link flex items-center sm:hidden ">
					<span className="absolute text-center rounded-full font-bold bg-blue-400 top-0 h-5 w-5 right-0">
						0
					</span>
					<ShoppingCartIcon className="h-10" />
					<p className="hidden md:inline mt-2 font-extrabold md:text-sm">
						Cart
					</p>
				</div>
			</div>

			<>
				<MainNav
					closeMenu={() => setShowList(false)}
					addClasses={
						showList
							? showListStyle
							: {
									transform: "translateX(-100%)",
									transition: "all 0.5s ease",
									opacity: 0,
							  }
					}
				/>
				{showList && (
					<OverLay sendClick={() => setShowList(false)} zIndex={40} />
				)}
			</>
		</>
	);
};

export default Navbar;
