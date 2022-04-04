import React, { useState } from "react";
import Logo from "./Logo";
import {
	ChevronDownIcon,
	SearchIcon,
	ShoppingCartIcon,
} from "@heroicons/react/outline";
import OverLay from "./OverLay";

const TopNav = () => {
	const [showList, setShowList] = useState(false);
	const showListStyle = {
		transform: "translateY(10px)",
		opacity: 1,
		transition: "all 0.5s ease",
	};
	return (
		<>
			<div className="relative z-40 flex items-center bg-eshop_blue p-1 flex-grow py-2">
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
					<div
						className="link relative"
						onClick={() => {
							setShowList((prev) => !prev);
						}}
					>
						<p>Hello Sign in</p>
						<p className="font-extrabold md:text-sm flex  items-center">
							account & Lists{" "}
							<ChevronDownIcon
								strokeWidth={4}
								className="h-3 ml-2"
							/>
						</p>

						<ul
							className="absolute  right-0 list-none bg-white rounded-md w-64 py-4 "
							style={
								showList
									? showListStyle
									: {
											transform: "translateY(-100%)",
											opacity: 0,
											transition: "all 0.5s ease",
									  }
							}
						>
							<li className="py-2 hover:bg-gray-100 transition-all">
								<a
									href="/sign-in"
									className="text-gray-600 px-4 text-base hover:text-blue-400 block"
								>
									Sign In
								</a>
							</li>
							<li className="py-2 hover:bg-gray-100 transition-all">
								<a
									href="/profile"
									className="text-gray-600 px-4 text-base hover:text-blue-400 block"
								>
									Profile
								</a>
							</li>
						</ul>
					</div>

					{/* 2nd block */}
					<div className="link">
						<p>Returns</p>
						<p className="font-extrabold md:text-sm">& Orders</p>
					</div>
					{/* 3rd block */}
					<div className="relative hidden link  items-center md:flex">
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
			{showList && (
				<OverLay sendClick={() => setShowList(false)} zIndex={30} />
			)}
		</>
	);
};

export default TopNav;
