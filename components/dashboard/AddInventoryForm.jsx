"use client";
import FormHeader from "@/components/dashboard/FormHeader";
import SelectInput from "@/components/formInputs/SelectInput";
import SubmitButton from "@/components/formInputs/SubmitButton";
import TextInput from "@/components/formInputs/TextInput";
import TextareaInput from "@/components/formInputs/TextareaInput";
import { dummyItems, warehouseTypeOptions } from "@/constants";
import { makePostRequest, makePutRequest } from "@/lib/apiRequest";
import { getData } from "@/lib/getData";
import { useRouter } from "next/navigation";

import { useState } from "react";
import { useForm } from "react-hook-form";

const AddInventoryForm = ({ items, warehouses, suppliers }) => {
	const [loading, setLoading] = useState(false);
	const {
		register,
		handleSubmit,
		watch,
		reset,
		formState: { errors },
	} = useForm();

	async function onSubmit(data) {
		console.log(data);

		makePostRequest(
			setLoading,
			"api/adjustments/add",
			data,
			"Stock Adjustment",
			reset
		);
	}

	// const router = useRouter();
	// async function onSubmit(data) {
	// 	function redirect() {
	// 		router.push("/inventory/inventory/adjustments/add");
	// 	}
	// 	console.log(data);
	//
	// 	if (isUpdate) {
	// 		makePutRequest(
	// 			setLoading,
	// 			`api/adjustments/add/${initialData.id}`,
	// 			data,
	// 			"Adjustment",
	// 			redirect
	// 			// reset
	// 		);
	// 	} else {
	// 		makePostRequest(
	// 			setLoading,
	// 			"api/adjustments/add",
	// 			data,
	// 			"Stock Adjustment",
	// 			reset
	// 		);
	// 	}
	// }

	return (
		<div className="">
			{/* forms */}
			<form
				onSubmit={handleSubmit(onSubmit)}
				className=" my-6 w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto"
			>
				<div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
					<TextInput
						label="Reference Number"
						name="referenceNumber"
						type="number"
						register={register}
						errors={errors}
						// className="w-full"
					/>

					<SelectInput
						name="itemId"
						register={register}
						// options={dummyItems}
						options={items}
						label="Select the item"
						className="w-full"
					/>
					<SelectInput
						name="supplierId"
						register={register}
						// options={dummyItems}
						options={suppliers}
						label="Select the supplier"
						className="w-full"
					/>

					<TextInput
						label="Enter Quantity of Stock to Add"
						name="addStockQty"
						type="number"
						register={register}
						errors={errors}
						className="w-full"
					/>

					<SelectInput
						register={register}
						// options={warehouseTypeOptions}
						options={warehouses}
						name="receivingWarehouseId"
						label="Select the warehouse to add stock to"
						className="w-full"
					/>

					<TextareaInput
						label="Stock Adjustment Notes"
						name="notes"
						register={register}
						errors={errors}
					/>
				</div>
				<SubmitButton
					isLoading={loading}
					// title={isUpdate ? "Update Adjustment" : " Add Adjustment"}
					title="Add Stock Adjustment"
				/>
			</form>
		</div>
	);
};

export default AddInventoryForm;
