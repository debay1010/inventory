"use client";
import FormHeader from "@/components/dashboard/FormHeader";
import SubmitButton from "@/components/formInputs/SubmitButton";
import TextInput from "@/components/formInputs/TextInput";
import TextareaInput from "@/components/formInputs/TextareaInput";
import { makePostRequest, makePutRequest } from "@/lib/apiRequest";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

const NewSupplier = ({ initialData = {}, isUpdate = false }) => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({ defaultValues: initialData });
	const [loading, setLoading] = useState(false);

	// async function onSubmit(data) {
	// 	console.log(data);
	// 	makePostRequest(setLoading, "api/suppliers", data, "Supplier", reset);
	// }

	const router = useRouter();
	async function onSubmit(data) {
		function redirect() {
			router.push("/inventory/inventory/suppliers");
		}
		console.log(data);

		if (isUpdate) {
			makePutRequest(
				setLoading,
				`api/suppliers/${initialData.id}`,
				data,
				"Supplier",
				redirect,
				reset
			);
		} else {
			makePostRequest(
				setLoading,
				"api/suppliers",
				data,
				"Supplier",
				reset
			);
		}
	}

	return (
		<div className="">
			{/* Header */}
			<FormHeader
				title={isUpdate ? "Update Supplier" : "New Supplier"}
				href="/inventory/inventory/suppliers"
			/>
			{/* forms */}
			<form
				onSubmit={handleSubmit(onSubmit)}
				className=" my-6 w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto"
			>
				<div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
					<TextInput
						label="Supplier Name"
						name="title"
						register={register}
						errors={errors}
						className="w-full"
					/>
					<TextInput
						label="Supplier Phone"
						name="phone"
						register={register}
						errors={errors}
						className="w-full"
					/>
					<TextInput
						label="Supplier Email"
						name="email"
						type="email"
						register={register}
						errors={errors}
						className="w-full"
					/>
					<TextInput
						label="Supplier Address"
						name="address"
						register={register}
						errors={errors}
						className="w-full"
					/>
					<TextInput
						label="Supplier Contact Person"
						name="contactPerson"
						register={register}
						errors={errors}
						className="w-full"
					/>

					<TextInput
						label="Supplier Code"
						name="supplierCode"
						register={register}
						errors={errors}
						className="w-full"
					/>
					<TextInput
						label="Supplier TIN"
						name="taxID"
						register={register}
						errors={errors}
						// className="w-full"
					/>

					<TextareaInput
						label="Supplier Payment Terms"
						name="paymentTerms"
						register={register}
						errors={errors}
					/>
					<TextareaInput
						label="Notes"
						name="notes"
						register={register}
						errors={errors}
					/>
				</div>
				<SubmitButton
					isLoading={loading}
					title={isUpdate ? "Updated Supplier" : "New Supplier"}
				/>
			</form>
		</div>
	);
};

export default NewSupplier;
