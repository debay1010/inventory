import DataTable from "@/components/dashboard/DataTable";
import FixedInventoryHeader from "@/components/dashboard/FixedInventoryHeader";
import { getData } from "@/lib/getData";
import React from "react";

const Units = async () => {
	const data = await getData("units");
	const columns = ["title", "abbreviation"];

	return (
		<div>
			<FixedInventoryHeader
				title="Units"
				newLink="/inventory/inventory/units/new"
			/>
			<div className="m-4 p-8">
				<DataTable
					data={data}
					columns={columns}
					resourceTitle="units"
				/>
			</div>
		</div>
	);
};

export default Units;
