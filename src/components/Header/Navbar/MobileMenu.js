import React from "react";
import {
	UserCircleIcon,
	ChevronRightIcon,
	XIcon,
} from "@heroicons/react/outline";
import { AiFillCloseCircle } from "react-icons/ai";

const MobileMenu = ({ addClasses, closeMenu }) => {
	const list = [
		"Home",
		"Cosmetics",
		"Collection",
		"Shop",
		"Makeup",
		"Tools",
		"Pages",
	];
	return (
		<div
			className={` z-50 fixed  top-0 h-full w-80  bg-white `}
			style={addClasses}
		>
			<div className="bg-[#ef2853] py-3 px-5 flex items-center justify-between text-white">
				<p className="flex items-center font-bold text-lg ">
					<UserCircleIcon className="h-8 mr-3" /> Hello , Sign in{" "}
				</p>
				<AiFillCloseCircle
					className="h-8 w-8 cursor-pointer"
					onClick={() => closeMenu()}
				/>
			</div>
			<div className="py-3 ">
				<h4 className="font-bold px-6 text-lg mb-4 text-[#ef2853]">
					Pages & other-links
				</h4>
				<ul>
					{list.map((item) => (
						<li
							key={item}
							className="flex  py-2 px-5  transition-all hover:bg-[#ef2853]"
						>
							<a
								href={"/" + item}
								className="capitalize text-gray-600 block flex-grow hover:text-white"
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

export default MobileMenu;
