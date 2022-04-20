import React from "react";
import { FaSearch } from "react-icons/fa";
import { HiSearch } from "react-icons/hi";

const Search = () => {
	return (
		<form className="bg-[#ef2853] hidden sm:flex items-center h-10 rounded-md  cursor-pointer w-full">
			<input
				type="text"
				className="p-2 h-full flex-grow flex-shrink rounded-l-md focus:outline-none border-[1px] border-gray-300"
			/>
			<button type="submit" className="focus:outline-none text-white">
				<FaSearch className=" text-white w-10 h-8 p-2" />
			</button>
		</form>
	);
};

export default Search;
