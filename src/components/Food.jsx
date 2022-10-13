import React, { useState } from "react";
import { data } from "../data/data";

const Food = () => {
	const [foods, setFoods] = useState(data);

	return (
		<div className="max-w-1=[1640px] mx-auto px-4 py-12">
			<h1 className="text-orange-600 font-bold text-4xl text-center">
				Top Rated Menu Items
			</h1>
			{/* Filter row */}
			<div className="flex flex-col lg:flex-row justify-between">
				{/* filter type */}
				<div>
					<p className="font-bold text-gray-700">Filter Type</p>
					<div className="flex justify-between flex-wrap">
						<button className="border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600 m-1">
							All
						</button>
						<button className="border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600 m-1">
							Burgers
						</button>
						<button className="border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600 m-1">
							Pizzas
						</button>
						<button className="border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600 m-1">
							Salads
						</button>
						<button className="border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600 m-1">
							Chicken
						</button>
					</div>
				</div>

				{/* filter price */}
				<div>
					<p className="font-bold text-gray-700">Filter Price</p>
					<div className="flex justify-between max-w-[390px] ">
						<button className="border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600 m-1">
							$
						</button>
						<button className="border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600 m-1">
							$$
						</button>
						<button className="border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600 m-1">
							$$$
						</button>
						<button className="border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600 m-1">
							$$$$
						</button>
					</div>
				</div>
			</div>
			{/* display images */}
			<div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
				{foods.map((item, index) => (
					<div
						key={index}
						className="border shadow-lg hover:scale-105 duration-300 rounded-lg"
					>
						<img  className="w-full h-[200px] object-cover rounded-t-lg" src={item.image} alt={item.name} />
						<div className="flex justify-between px-2 py-4">
							<p className="font-bold">{item.name}</p>
							<p>
								<span className="bg-orange-600 rounded-full text-white p-1">{item.price}</span>
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Food;