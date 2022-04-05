import React from "react";
import Image from "next/image";
const Features = () => {
	const content = [
		{
			title: "first",
			bigImg: "/assets/images/pic-1.svg",
			smallImg: "/assets/images/pic-md.png",
			head1: "Go and Shopping",
			head2: "	Online From Your Home",
			para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas id nihil cumque illo mollitia consequatur voluptatem nobis eos voluptatibus, quis explicabo,corrupti ipsa odio, soluta fugiat sapiente voluptatum aliquid quam.",
			classList: "-top-14 left-0",
			infoClass: "lg:ml-60 lg:mt-20 text-center md:text-left px-4",
		},
		{
			title: "second",
			bigImg: "/assets/images/pic-2.svg",
			smallImg: "/assets/images/pic-2-md.png",
			head1: "Do Your Work and ",
			head2: "	Shopping any Time",
			para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas id nihil cumque illo mollitia consequatur voluptatem nobis eos voluptatibus, quis explicabo,corrupti ipsa odio, soluta fugiat sapiente voluptatum aliquid quam.",
			classList: "-bottom-32 right-0",
			infoClass: "lg:mr-60 lg:-mt-20 text-center md:text-left px-4",
		},
	];
	return (
		<div className="bg-feat ">
			<div className="max-w-6xl h-full mx-auto relative">
				{/* row 1 */}
				{content.map((item) => (
					<div key={item.title}>
						<div
							className={`hidden lg:block absolute ${item.classList} `}
						>
							<Image
								src={item.bigImg}
								width={477}
								height={600}
								className="flex-grow max-w-sm"
							/>
						</div>
						<div className="flex flex-wrap items-center justify-center px-4 py-12">
							<div className="flex-grow max-w-sm lg:hidden ">
								<div className="hidden lg:block ">
									<Image
										src={item.bigImg}
										width={477}
										height={600}
									/>
								</div>
								<div className="block lg:hidden ">
									<Image
										src={item.smallImg}
										width={477}
										height={600}
									/>
								</div>
							</div>

							<div className={item.infoClass}>
								<h2 className="text-white text-3xl font-bold">
									{item.head1}
									<br />
									{item.head2}
								</h2>
								<p className="text-gray-200 text-sm pb-8 pt-4 max-w-md">
									{item.para}
								</p>
								<button className="focus:outline-none bg-greenLink text-white px-11 rounded-full py-4">
									Go Shopping
								</button>
							</div>
						</div>
					</div>
				))}

				{/* row2 */}
			</div>
		</div>
	);
};

export default Features;
