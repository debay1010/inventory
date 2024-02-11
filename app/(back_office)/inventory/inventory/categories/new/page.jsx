"use client";
import FormHeader from "@/components/dashboard/FormHeader";
import SubmitButton from "@/components/formInputs/SubmitButton";
import TextInput from "@/components/formInputs/TextInput";
import TextareaInput from "@/components/formInputs/TextareaInput";
import { makePostRequest, makePutRequest } from "@/lib/apiRequest";
import { useRouter } from "next/navigation";

import { useState } from "react";
import { useForm } from "react-hook-form";

const NewCategory = ({ initialData = {}, isUpdate = false }) => {
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
			router.push("/inventory/inventory/categories");
		}
		console.log(data);

		if (isUpdate) {
			makePutRequest(
				setLoading,
				`api/categories/${initialData.id}`,
				data,
				"Category",
				redirect,
				reset
			);
		} else {
			makePostRequest(
				setLoading,
				"api/categories",
				data,
				"Category",
				reset
			);
		}
	}

	return (
		<div className="">
			{/* Header */}
			<FormHeader
				title={isUpdate ? "Update Category" : "New Category"}
				href="/inventory/inventory/categories"
			/>
			{/* forms */}
			<form
				onSubmit={handleSubmit(onSubmit)}
				className=" my-6 w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto"
			>
				<div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
					<TextInput
						label="Category Name"
						name="title"
						register={register}
						errors={errors}
					/>

					<TextareaInput
						label="Category Description"
						name="description"
						register={register}
						errors={errors}
					/>

					{/* <div className="sm:col-span-2">
						<label
							htmlFor="description"
							className="block text-sm font-semibold leading-6 text-gray-900"
						>
							Category Description
						</label>
						<div className="mt-2">
							<textarea
								{...register("description", { required: true })}
								id="description"
								name="description"
								rows={3}
								className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								defaultValue={""}
							/>
							{errors.title && (
								<span className="text-sm text-red-600 ">
									Category description is required
								</span>
							)}
						</div>
					</div> */}
				</div>
				<SubmitButton
					isLoading={loading}
					title={isUpdate ? "Updated Category" : "New Category"}
				/>
			</form>
		</div>
	);
};

export default NewCategory;
