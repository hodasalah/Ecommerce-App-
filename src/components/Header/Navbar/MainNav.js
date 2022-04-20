import React from "react";

const MainNav = () => {
	const items = [
		"Home",
		"Cosmetics",
		"Collection",
		"Shop",
		"Makeup",
		"Tools",
		"Pages",
	];
	return (
		<div className="border-t-[1px] border-gray-200 py-4 hidden sm:block ">
			<ul className=" w-full items-center justify-center flex">
				{items.map((item) => (
					<li
						key={item}
						className="font-thin text-gray-700 px-4 py-2 border-b-0 border-[#ef2853] hover:border-b-4  hover:text-[#ef2853] transition-all"
					>
						<a>{item}</a>
					</li>
				))}
			</ul>
		</div>
	);
};

export default MainNav;
