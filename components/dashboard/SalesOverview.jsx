import React from "react";
import SalesActCard from "./SalesActCard";
import InventoryActCard from "./InventoryActCard";
import { salesActivity } from "@/constants";
import { inventorySummary } from "@/constants";

const SalesOverview = () => {
	return (
		<div className="flex   justify-between p-8 bg-blue-50 border-b border-slate-200">
			<div className="flex flex-col">
				<h2 className="text-xl mb-4 ">Sales Activity</h2>
				<div className=" flex space-x-6">
					{salesActivity.map((item, index) => (
						<SalesActCard item={item} key={index} />
					))}
				</div>
			</div>

			<div className="flex flex-col">
				<h2 className="text-xl mb-4 ">Inventory Activities</h2>
				<div className="flex flex-col gap-6">
					{inventorySummary.map((item, index) => (
						<InventoryActCard item={item} key={index} />
					))}
				</div>
			</div>
		</div>
	);
};

export default SalesOverview;
