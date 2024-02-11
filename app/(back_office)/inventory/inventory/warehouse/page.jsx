import DataTable from "@/components/dashboard/DataTable";
import FixedInventoryHeader from "@/components/dashboard/FixedInventoryHeader";
import { getData } from "@/lib/getData";
import React from "react";

const Warehouse = async () => {
	const data = await getData("warehouse");
	const columns = ["title", "location", "warehouseType", "stockQty"];

	return (
		<div>
			<FixedInventoryHeader
				title="Warehouse"
				newLink="/inventory/inventory/warehouse/new"
			/>
			<div className="m-4 p-8">
				<DataTable
					data={data}
					columns={columns}
					resourceTitle="warehouse"
				/>
			</div>
		</div>
	);
};

export default Warehouse;
