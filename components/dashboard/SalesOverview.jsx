"use client";
import React from "react";
import SalesActCard from "./SalesActCard";
import InventoryActCard from "./InventoryActCard";
import { salesActivity } from "@/constants";
import { inventorySummary } from "@/constants";
import { getData } from "@/lib/getData";

const SalesOverview = async () => {
	const warehouses = await getData("warehouse");
	// const items = await getData("items");
	// const categorie = await getData("categories");
	// const suppliers = await getData("supplier");
	// const brands = await getData("brands");

	// const itemsData = await getData("items");
	// const categoriesData = await getData("categories");
	// const warehousesData = await getData("warehouse");
	// const mySuppliersData = await getData("suppliers");

	// const [items, categories, warehouses, mySuppliers] = await Promise.all([
	// 	categoriesData,
	// 	warehousesData,
	// 	itemsData,
	// 	mySuppliersData,
	// ]);

	console.log(warehouses);
	return (
		// <div className="flex flex-col lg:flex-row justify-between p-8 bg-blue-50 border-b border-slate-200">
		<div className="grid grid-cols-12 justify-between p-8 bg-blue-50 border-b border-slate-200">
			<div className="col-span-full lg:col-span-8">
				<h2 className="text-xl mb-4 text-center font-semibold ">
					Sales Activity
				</h2>
				<div className=" grid grid-col1 sm:grid-cols-2 xl:grid-cols-4 items-center justify-center gap-4 space-x-6 ">
					{salesActivity.map((item, index) => (
						<SalesActCard item={item} key={index} />
					))}
				</div>
			</div>

			<div className="flex flex-col ">
				<h2 className="text-xl mb-4  font-semibold ">
					Inventory Activities
				</h2>
				<div className="flex flex-col gap-6">
					{/* {inventorySummary.map((item, index) => ( */}
					{warehouses.map((item, index) => (
						// <InventoryActCard item={item} key={index} />
						<InventoryActCard item={item} key={item.id} />
					))}
				</div>
			</div>
		</div>
	);
};

export default SalesOverview;
