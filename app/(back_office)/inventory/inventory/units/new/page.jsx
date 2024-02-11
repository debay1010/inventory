"use client";
import FormHeader from "@/components/dashboard/FormHeader";
import SubmitButton from "@/components/formInputs/SubmitButton";
import TextInput from "@/components/formInputs/TextInput";
import TextareaInput from "@/components/formInputs/TextareaInput";
import { makePostRequest, makePutRequest } from "@/lib/apiRequest";
import { Plus, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const NewUnit = ({ initialData = {}, isUpdate = false }) => {
	const [loading, setLoading] = useState(false);
	const {
		register,
		handleSubmit,
		watch,
		reset,
		formState: { errors },
	} = useForm({ defaultValues: initialData });

	const router = useRouter();
	async function onSubmit(data) {
		function redirect() {
			router.push("/inventory/inventory/units");
		}
		console.log(data);

		if (isUpdate) {
			makePutRequest(
				setLoading,
				`api/units/${initialData.id}`,
				data,
				"Unit",
				redirect,
				reset
			);
		} else {
			makePostRequest(setLoading, "api/units", data, "Unit", reset);
		}
	}

	return (
		<div className="">
			{/* Header */}
			<FormHeader
				title={isUpdate ? "Update Unit" : "New Unit"}
				href="/inventory/inventory/units"
			/>
			{/* forms */}
			<form
				onSubmit={handleSubmit(onSubmit)}
				className=" my-6 w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto"
			>
				<div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
					<TextInput
						label="Unit Name"
						name="title"
						register={register}
						errors={errors}
						className="w-full"
					/>
					<TextInput
						label="Unit Abbreviation"
						name="abbreviation"
						register={register}
						errors={errors}
						className="w-full"
					/>
				</div>
				<SubmitButton
					isLoading={loading}
					title={isUpdate ? "Updated Unit" : "New Unit"}
				/>
			</form>
		</div>
	);
};

export default NewUnit;
