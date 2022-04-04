import React from "react";
import {
	UserCircleIcon,
	ChevronRightIcon,
	XIcon,
} from "@heroicons/react/outline";

const MainNav = ({ addClasses, closeMenu }) => {
	const list = ["about", "services", "products", "sign-in"];
	return (
		<div
			className={` z-50 fixed  top-0 h-full w-80  bg-white `}
			style={addClasses}
		>
			<div className="bg-eshop_blue py-3 px-5 flex items-center justify-between text-white">
				<p className="flex items-center font-bold text-lg">
					<UserCircleIcon className="h-8 mr-3" /> Hello , Sign in{" "}
				</p>
				<XIcon
					className="h-6 cursor-pointer"
					onClick={() => closeMenu()}
				/>
			</div>
			<div className="py-3 ">
				<h4 className="font-black px-6 text-lg mb-4">
					Pages & other-links
				</h4>
				<ul>
					{list.map((item) => (
						<li
							key={item}
							className="flex  py-2 px-5 hover:bg-gray-200 transition-all hover:text-blue-400"
						>
							<a
								href={"/" + item}
								className="capitalize text-gray-600 block flex-grow hover:text-blue-400"
							>
								{item}
							</a>
							<ChevronRightIcon className="h-5" />
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default MainNav;
