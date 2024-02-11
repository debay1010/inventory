import DataTable from "@/components/dashboard/DataTable";
import FixedInventoryHeader from "@/components/dashboard/FixedInventoryHeader";
import { getData } from "@/lib/getData";
import React from "react";

const Categories = async () => {
	const data = await getData("categories");
	const columns = ["title", "description"];
	// const data = categories.map((obj) => {
	// 	return {
	// 		title: obj.title,
	// 		description: obj.description,
	// 	};
	// });

	return (
		<div>
			<FixedInventoryHeader
				title="Category"
				newLink="/inventory/inventory/categories/new"
			/>
			<div className="m-4 p-8">
				<DataTable
					data={data}
					columns={columns}
					resourceTitle="categories"
				/>
			</div>
		</div>
	);
};

export default Categories;
