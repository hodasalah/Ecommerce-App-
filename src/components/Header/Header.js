import React from "react";
import { TopNav, SecondNav, ThirdNav, MainNav } from "./Navbar";
const Header = () => {
	return (
		<header className="header ">
			{/* 1st nav */}
			<TopNav />
			{/* 2nd nav */}
			<SecondNav />
			{/* 3th nav */}
			<ThirdNav />
			{/* 4nav */}
			<MainNav />
		</header>
	);
};

export default Header;
