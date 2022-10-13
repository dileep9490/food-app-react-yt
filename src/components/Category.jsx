import React from "react";
import { categories } from "../data/data";

const Category = () => {
	return (
		<div className="max-w-[1650px] px-4 py-12">
			<h1 className="text-orange-600 text-center font-bold text-4xl">
				Top Rated Menu Items
			</h1>
			{/* Categories */}
			<div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
				{categories.map((item, index) => (
					<div key={index} className="bg-gray-100 flex rounded-lg p-4 justify-between items-center">
						<h2 className="font-bold text-xl">{item.name}</h2>
						<img src={item.image} alt={item.name} className="w-20" />
					</div>
				))}
			</div>
		</div>
	);
};

export default Category;
