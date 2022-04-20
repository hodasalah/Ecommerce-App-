import React from "react";

const TopNav = () => {
	return (
		<div className="hidden md:block  bg-white relative z-40">
			<nav className="container flex justify-between items-center w-full py-[7px] text-[10px] lg:text-[12px] px-[5px] ">
				{/* top_bar-left */}
				<ul className="flex space-x-3">
					<li className="border-gray-300 border-r-2 px-2">
						<span>Free Shipping &amp; Return</span>
					</li>
					<li className="border-gray-300 border-r-2 px-2">
						<span>Money Back Guarantee</span>
					</li>
					<li className="px-2">
						<span>Online Support24/7</span>
					</li>
				</ul>
				{/* top_bar-right */}
				<ul className="flex space-x-3">
					<li className="border-gray-300 border-r-2 px-2">
						<span>Call Us : (00) 000 111 222</span>
					</li>
					<li className="px-2">
						<span>Mail :</span>
						<a href="mailto:info@somedomain.com">
							info@somedomain.com
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default TopNav;
