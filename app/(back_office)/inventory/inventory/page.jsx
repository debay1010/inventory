"use client";
import FixedInventoryHeader from "@/components/dashboard/FixedInventoryHeader";
import { Shirt } from "lucide-react";
import Link from "next/link";
import { itemCardOptions } from "@/constants";
import React from "react";
import OptionCard from "@/components/dashboard/OptionCard";

const Inventory = () => {
	return (
		<div>
			<FixedInventoryHeader
				title="All Items"
				newLink="/inventory/inventory/items/new"
			/>
			<div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3  m-5 p-8 px-16 py-8 gap-6 rounded">
				{itemCardOptions.map((card, index) => (
					<OptionCard key={index} optionData={card} />
				))}
			</div>
		</div>
	);
};

export default Inventory;
