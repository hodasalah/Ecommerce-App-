import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import TopNav from "./TopNav";
const Header = () => {
	return (
		<div className="header">
			{/* top nav */}
			<TopNav />
			{/* bottom nav */}
			<Navbar />
		</div>
	);
};

export default Header;
