"use client";
import FormHeader from "@/components/dashboard/FormHeader";
import SubmitButton from "@/components/formInputs/SubmitButton";
import TextInput from "@/components/formInputs/TextInput";
import TextareaInput from "@/components/formInputs/TextareaInput";

import { useState } from "react";
import { useForm } from "react-hook-form";

const NewWarehouse = () => {
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
			const response = await fetch(`${baseUrl}/api/warehouse`, {
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
			<FormHeader title="New Warehouse" href="/inventory/inventory" />
			{/* forms */}
			<form
				onSubmit={handleSubmit(onSubmit)}
				className=" my-6 w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto"
			>
				<div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
					<TextInput
						label="Warehouse Name"
						name="title"
						register={register}
						errors={errors}
					/>
					<TextInput
						label="Warehouse Location"
						name="location"
						register={register}
						errors={errors}
					/>

					<TextareaInput
						label="Warehouse Description"
						name="description"
						register={register}
						errors={errors}
					/>
				</div>
				<SubmitButton isLoading={loading} title="Warehouse" />
			</form>
		</div>
	);
};

export default NewWarehouse;
