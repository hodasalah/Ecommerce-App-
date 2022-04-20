import React, { useState } from "react";

const OverLay = ({ sendClick, zIndex }) => {
	const [show, setShow] = useState(true);
	const displayNoneHandler = () => {
		setShow(false);
		sendClick();
	};
	return (
		<div
			className={`fixed w-full h-full bg-black z-${zIndex} opacity-80 top-0 left-0`}
			style={show ? { dispaly: "block" } : { dispaly: "none" }}
			onClick={() => displayNoneHandler()}
		>
			OverLay
		</div>
	);
};

export default OverLay;
