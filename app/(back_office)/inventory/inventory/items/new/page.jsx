import CreateItemForm from "@/components/dashboard/CreateItemForm";
import FormHeader from "@/components/dashboard/FormHeader";
import { getData } from "@/lib/getData";

const NewItem = async ({ initialData = {}, isUpdate = false }) => {
	// //Sequential Fetching => Waterfall
	// const units = await getData("units");
	// const categories = await getData("categories");
	// const warehouses = await getData("warehouse");
	// const brands = await getData("brands");
	// const mySuppliers = await getData("suppliers");

	// Parallel Fetching => Faster and recommended
	const unitsData = getData("units");
	const categoriesData = getData("categories");
	const warehousesData = getData("warehouse");
	const brandsData = getData("brands");
	const mySuppliersData = getData("suppliers");

	const [units, categories, warehouses, brands, mySuppliers] =
		await Promise.all([
			unitsData,
			categoriesData,
			warehousesData,
			brandsData,
			mySuppliersData,
		]);

	// console.log(mySuppliers);

	return (
		<div className="">
			<FormHeader
				title={isUpdate ? "Update Item" : "Create Item"}
				href="/inventory/inventory/items"
			/>
			<CreateItemForm
				categories={categories}
				brands={brands}
				warehouses={warehouses}
				units={units}
				mySuppliers={mySuppliers}
				initialData={initialData}
				// isUpdate={true}
				isUpdate={isUpdate}
			/>
		</div>
	);
};

export default NewItem;
