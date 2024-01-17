import React from "react";

const InventoryActCard = ({ item }) => {
	return (
		<div className="flex  justify-between items-center p-4 w-80 h-16 bg-white hover:border-blue-300 border hover:shadow-md shadow-sm rounded-lg">
			<p className="text-slate-500  text-xs">{item.title}</p>
			<h2 className=" text-slate-500 font-semibold text-2xl">
				{item.number}
			</h2>
		</div>
	);
};

export default InventoryActCard;
