import DataTable from "@/components/dashboard/DataTable";
import FixedInventoryHeader from "@/components/dashboard/FixedInventoryHeader";
import { getData } from "@/lib/getData";
import React from "react";

const Suppliers = async () => {
	const data = await getData("suppliers");
	const columns = ["title", "phone", "email"];

	return (
		<div>
			<FixedInventoryHeader
				title="Supplier"
				newLink="/inventory/inventory/suppliers/new"
			/>
			<div className="m-4 p-8">
				<DataTable
					data={data}
					columns={columns}
					resourceTitle="suppliers"
				/>
			</div>
		</div>
	);
};

export default Suppliers;
