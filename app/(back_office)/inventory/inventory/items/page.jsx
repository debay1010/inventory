import DataTable from "@/components/dashboard/DataTable";
import FixedInventoryHeader from "@/components/dashboard/FixedInventoryHeader";
import { getData } from "@/lib/getData";
import React from "react";

const Items = async () => {
	const data = await getData("items");
	const columns = ["imageUrl", "title", "qty", "warehouse.title"];

	return (
		<div>
			<FixedInventoryHeader
				title="Item"
				newLink="/inventory/inventory/items/new"
			/>
			<div className="m-4 p-8">
				<DataTable
					data={data}
					columns={columns}
					resourceTitle="items"
				/>
			</div>
		</div>
	);
};

export default Items;
