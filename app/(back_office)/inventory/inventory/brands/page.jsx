import DataTable from "@/components/dashboard/DataTable";
import FixedInventoryHeader from "@/components/dashboard/FixedInventoryHeader";
import { getData } from "@/lib/getData";
import React from "react";

const Brands = async () => {
	const data = await getData("brands");
	const columns = ["title", "createdAt", "updatedAt"];

	return (
		<div>
			<FixedInventoryHeader
				title="Brands"
				newLink="/inventory/inventory/brands/new"
			/>
			<div className="m-4 p-8">
				<DataTable
					data={data}
					columns={columns}
					resourceTitle="brands"
				/>
			</div>
		</div>
	);
};

export default Brands;
