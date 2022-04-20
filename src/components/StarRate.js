import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const StarRate = ({ rate }) => {
	return (
		<div className="relative inline-flex">
			<div
				className="flex overflow-hidden"
				style={{ width: `${rate * 20 - 4}px` }}
			>
				{[...Array(5)].map((_, i) => {
					return (
						<AiFillStar
							className="flex-shrink-0"
							key={i}
							style={{
								overflow: "hidden",
								width: `20px`,
								fontSize: "20px",
								color: "#ffa41c",
							}}
						/>
					);
				})}
			</div>
			<div
				className="flex  h-full absolute top-0 left-0 "
				style={{ width: "calc(100% + 4 )px" }}
			>
				{[...Array(5)].map((_, i) => {
					return (
						<AiOutlineStar
							key={i}
							style={{
								width: `20px`,
								fontSize: "20px",
								color: "#ffa41c",
							}}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default StarRate;
