import React, { useState } from "react";
import { Search, Logo, OverLay } from "../../utilities";
import { FaSearch, FaBars, FaShoppingCart } from "react-icons/fa";
import MobileMenu from "./MobileMenu";

const ThirdNav = () => {
	const [showList, setShowList] = useState(false);
	const [showMobileMenu, setShowMobileMenu] = useState(false);
	const showMobileMenuStyle = {
		transform: "translateX(0)",
		opacity: 1,
		transition: "all 0.5s ease",
	};
	const showListStyle = {
		transform: "translateY(10px)",
		opacity: 1,
		transition: "all 0.5s ease",
	};
	const currencies = ["USD", "EUR", "JPY", "CAD", "RSA", "INR"];
	return (
		<>
			<div className="bg-white relative z-40">
				<div className="container flex justify-between items-center px-2">
					{/* search box */}
					<div className="sm:block hidden">
						<Search />
					</div>
					{/* logo box */}
					<div className="max-w-full md:mr-[70px]">
						<Logo />
					</div>
					{/* Cart box */}
					<ul className="flex space-x-4 items-center text-gray-600 text-[16px]">
						<li className="text-gray-600 block sm:hidden">
							<a title="open menu">
								<FaSearch />
							</a>
						</li>
						<li className="relative">
							<a
								className="text-gray-600 text-sm cursor-pointer font-bold"
								onClick={() => {
									setShowList((prev) => !prev);
								}}
							>
								USD
								<ul
									className="absolute  right-0 list-none bg-white rounded-md w-64 py-4 border-t-4 border-[#ef2853]"
									style={
										showList
											? showListStyle
											: {
													transform:
														"translateY(-200%)",
													opacity: 0,
													transition: "all 0.5s ease",
											  }
									}
								>
									{currencies.map((cur) => (
										<li
											key={cur}
											className="p-2 text-center font-bold hover:bg-[#ef2853] hover:text-white"
										>
											{cur}
										</li>
									))}
								</ul>
							</a>
						</li>
						<li className="text-gray-600">
							<a title="open your cart">
								<FaShoppingCart />
							</a>
						</li>

						<li className="text-gray-600 block sm:hidden">
							<a
								title="mobile menu"
								onClick={() => setShowMobileMenu(true)}
							>
								<FaBars />
							</a>
						</li>
					</ul>
				</div>
			</div>
			<MobileMenu
				closeMenu={() => setShowMobileMenu(false)}
				addClasses={
					showMobileMenu
						? showMobileMenuStyle
						: {
								transform: "translateX(-100%)",
								transition: "all 0.5s ease",
								opacity: 0,
						  }
				}
			/>
			{(showList || showMobileMenu) && (
				<OverLay
					sendClick={() => {
						setShowList(false);
						setShowMobileMenu(false);
					}}
					zIndex={30}
				/>
			)}
		</>
	);
};

export default ThirdNav;
