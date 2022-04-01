import React from "react";
import Logo from "./Logo";

const TopNav = () => {
	return (
		<div className="flex items-center bg-eshop_blue p-1 flex-grow py-2">
			{/* logo  */}
			<div className="my-1 flex flex-grow sm:flex-grow-0 items-center">
				<Logo />
			</div>
			{/* search bar */}
			<div>
				<input type="text" name="" id="" />
			</div>
		</div>
	);
};

export default TopNav;
