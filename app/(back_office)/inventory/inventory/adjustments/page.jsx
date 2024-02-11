import DataTable from "@/components/dashboard/DataTable";
import FixedInventoryHeader from "@/components/dashboard/FixedInventoryHeader";
import { getData } from "@/lib/getData";
import React from "react";

const AddStockAdjustment = async () => {
	const add = await getData("adjustments/add");
	const transfer = await getData("adjustments/transfer");

	const columns = [
		"item.title",
		"addStockQty",
		"referenceNumber",
		"createdAt",
	];
	const transfercolumns = [
		"item.title",
		"transferStockQty",
		"referenceNumber",
		"createdAt",
	];

	return (
		<div>
			<FixedInventoryHeader
				title="Add Stock Adjustment"
				newLink="/inventory/inventory/adjustments/new"
			/>
			{/* Table */}

			<div className="m-4 p-8">
				<h2 className="py-4 font-semibold text-xl">
					Stock Add Adjustment
				</h2>
				<DataTable
					data={add}
					columns={columns}
					resourceTitle="adjustments/add"
				/>
			</div>

			<div className="m-4 p-8">
				<h2 className="py-4 font-semibold text-xl">
					Stock Transfer Adjustment
				</h2>
				<DataTable
					data={transfer}
					columns={transfercolumns}
					resourceTitle="adjustments/transfer"
				/>
			</div>
		</div>
	);
};

export default AddStockAdjustment;
