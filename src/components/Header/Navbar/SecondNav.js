import React from "react";
import { FaSignInAlt, FaUserAlt, FaHeart } from "react-icons/fa";

const SecondNav = () => {
	return (
		<div className="bg-[#ef2853] py-2  relative z-40">
			<div className="container ">
				<nav className="flex flex-wrap px-2  sm:justify-between justify-center">
					{/* left bar */}
					<ul className="text-white flex space-x-3 text-[13px] w-full sm:w-auto justify-center">
						<li className="border-gray-100 border-r-[1px] pl-[1px] pr-2">
							<a href="/products">Foundation Puff</a>
						</li>
						<li className="border-gray-100 border-r-[1px] px-2">
							<a href="/products">Lip Liners</a>
						</li>
						<li className="border-gray-100 border-r-[1px] px-2">
							<a href="/products">Brush</a>
						</li>
						<li>
							<a href="/products">Concealer</a>
						</li>
					</ul>
					{/* right bar */}
					<div className="mt-[10px] sm:mt-0">
						<ul className="flex space-x-4 text-white text-[13px]">
							<li>
								<a title="Log in" href="/account/login">
									<FaSignInAlt />
								</a>
							</li>
							<li>
								<a
									title="Create account"
									href="/account/register"
								>
									<FaUserAlt />
								</a>
							</li>

							<li>
								<a title="Add to wishlist" href="">
									<FaHeart />
								</a>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</div>
	);
};

export default SecondNav;
