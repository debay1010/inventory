"use client";

import AdjustmentForm from "@/components/dashboard/adjustmentForm";
import { getData } from "@/lib/getData";

const NewAdjustment = async () => {
	const itemsData = await getData("items");
	const warehousesData = await getData("warehouse");
	const supplierData = await getData("suppliers");

	const [items, warehouses, suppliers] = await Promise.all([
		itemsData,
		warehousesData,
		supplierData,
	]);

	return (
		<AdjustmentForm
			items={items}
			warehouses={warehouses}
			suppliers={suppliers}
		/>
	);
};

export default NewAdjustment;
