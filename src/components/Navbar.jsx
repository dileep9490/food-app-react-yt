import React, { useState } from "react";
import {
	AiOutlineClose,
	AiOutlineMenu,
	AiOutlineSearch,
	AiFillTag,
} from "react-icons/ai";
import { TbTruckDelivery } from "react-icons/tb";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { FaUser, FaWallet } from "react-icons/fa";
import { MdHelp, MdFavorite } from "react-icons/md";

const Navbar = () => {
	const [nav, setNav] = useState(false);

	return (
		<div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
			{/* Left side */}
			<div className="flex items-center">
				<div
					onClick={() => {
						setNav(!nav);
					}}
					className="cursor-pointer"
				>
					<AiOutlineMenu size={30} />
				</div>
				<h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
					Best <span className="font-bold">Eats</span>
				</h1>
				<div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
					<p className="bg-black text-white rounded-full p-2">Delivery</p>
					<p className="p-2">Pickup</p>
				</div>
			</div>

			{/* Search Input */}
			<div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
				<AiOutlineSearch size={25} />
				<input
					type="text"
					placeholder="Search Foods"
					className="bg-transparent p-2 focus:outline-none"
				/>
			</div>
			{/* Cart button */}
			<button className="bg-black text-white hidden md:flex items-center py-2 rounded-full">
				<BsFillCartFill size={20} className="mr-2" /> Cart
			</button>
			{/* mobile menu */}
			{/* overlay */}

			{nav ? (
				<div className="bg-black/80 fixed w-full h-screen top-0 left-0 z-10"></div>
			) : (
				""
			)}

			{/* Side bar menu */}
			<div
				className={
					nav
						? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
						: "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
				}
			>
				<AiOutlineClose
					onClick={() => {
						setNav(!nav);
					}}
					size={30}
					className="absolute top-4 right-4 cursor-pointer "
				/>
				<h2 className="text-2xl p-4">
					Best <span className="font-bold">Eats</span>
				</h2>
				<nav>
					<ul className="flex-col p-4 text-gray-800">
						<li className="text-xl flex py-4 ">
							<TbTruckDelivery size={25} className="mr-4" /> Orders
						</li>
						<li className="text-xl flex py-4 ">
							<MdFavorite size={25} className="mr-4" /> Favourites
						</li>
						<li className="text-xl flex py-4 ">
							<FaWallet size={25} className="mr-4" /> Wallet
						</li>
						<li className="text-xl flex py-4 ">
							<MdHelp size={25} className="mr-4" /> Help
						</li>
						<li className="text-xl flex py-4 ">
							<AiFillTag size={25} className="mr-4" /> Promotions
						</li>
						<li className="text-xl flex py-4 ">
							<BsFillSaveFill size={25} className="mr-4" /> Best Ones
						</li>
						<li className="text-xl flex py-4 ">
							<FaUser size={25} className="mr-4" /> Invite Friends
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default Navbar;
