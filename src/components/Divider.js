import React from "react";

const Divider = (props) => {
	return (
		<div className={`${props.classes} relative flex flex-col `}>
			<img
				src={props.srcImg}
				className="absolute top-0 left-0 w-full  h-full -z-1 object-cover"
			/>
			{props.children}
		</div>
	);
};

export default Divider;
