"use client";
import FormHeader from "@/components/dashboard/FormHeader";
import SelectInput from "@/components/formInputs/SelectInput";
import SubmitButton from "@/components/formInputs/SubmitButton";
import TextInput from "@/components/formInputs/TextInput";
import TextareaInput from "@/components/formInputs/TextareaInput";
import { dummyItems, warehouseTypeOptions } from "@/constants";
import { makePostRequest } from "@/lib/apiRequest";

import { useState } from "react";
import { useForm } from "react-hook-form";

const TransferInventoryForm = ({ items, warehouses }) => {
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
			"api/adjustments/transfer",
			data,
			"Stock Adjustment",
			reset
		);
	}
	console.log(items);
	console.log(warehouses);
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
						options={items}
						label="Select the item"
						className="w-full"
					/>

					<TextInput
						label="Enter Quantity of Stock to Transfer"
						name="transferStockQty"
						type="number"
						register={register}
						errors={errors}
						className="w-full"
					/>

					<SelectInput
						register={register}
						className="w-full"
						options={warehouses}
						name="givingWarehouseId"
						label="Select the warehouse that gives the stock"
					/>
					<SelectInput
						register={register}
						className="w-full"
						options={warehouses}
						name="receivingWarehouseId"
						label="Select the warehouse to receive the stock"
					/>

					<TextareaInput
						label="Stock Adjustment Notes"
						name="notes"
						register={register}
						errors={errors}
					/>
				</div>
				<SubmitButton isLoading={loading} title="Transfer" />
			</form>
		</div>
	);
};

export default TransferInventoryForm;
