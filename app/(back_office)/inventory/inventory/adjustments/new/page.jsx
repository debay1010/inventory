"use client";
import FormHeader from "@/components/dashboard/FormHeader";
import SelectInput from "@/components/formInputs/SelectInput";
import SubmitButton from "@/components/formInputs/SubmitButton";
import TextInput from "@/components/formInputs/TextInput";
import TextareaInput from "@/components/formInputs/TextareaInput";
import { warehouseTypeOptions } from "@/constants";

import { useState } from "react";
import { useForm } from "react-hook-form";

const NewAdjustment = () => {
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
		setLoading(true);
		const baseUrl = "http://localhost:3000";
		try {
			const response = await fetch(`${baseUrl}/api/adjustments`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});
			if (response.ok) {
				setLoading(false);
				console.log(response);
				reset();
			}
		} catch (error) {
			setLoading(false);
			console.log(error);
		}
	}

	return (
		<div className="">
			{/* Header */}
			<FormHeader title="Stock Adjustment" href="/inventory/inventory" />
			{/* forms */}
			<form
				onSubmit={handleSubmit(onSubmit)}
				className=" my-6 w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto"
			>
				<div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
					<TextInput
						label="Enter Amount of Stock to Transfer"
						name="transferStockQty"
						type="number"
						register={register}
						errors={errors}
						className="w-full"
					/>
					<SelectInput
						register={register}
						className="w-full"
						options={warehouseTypeOptions}
						name="receivingBranchId"
						label="Select the branch that will receive the stock"
					/>

					<TextareaInput
						label="Stock Adjustment Notes"
						name="notes"
						register={register}
						errors={errors}
					/>
				</div>
				<SubmitButton isLoading={loading} title="Adjustment/Transfer" />
			</form>
		</div>
	);
};

export default NewAdjustment;
