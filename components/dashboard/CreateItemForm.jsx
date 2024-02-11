"use client";
import ImageInput from "@/components/formInputs/ImageInput";
import SelectInput from "@/components/formInputs/SelectInput";
import SubmitButton from "@/components/formInputs/SubmitButton";
import TextInput from "@/components/formInputs/TextInput";
import TextareaInput from "@/components/formInputs/TextareaInput";

import { makePostRequest, makePutRequest } from "@/lib/apiRequest";

import { useRouter } from "next/navigation";

import { useState } from "react";
import { useForm } from "react-hook-form";

const CreateItemForm = ({
	categories,
	units,
	brands,
	warehouses,
	mySuppliers,
	initialData = {},
	isUpdate = false,
}) => {
	const [imageUrl, setImageUrl] = useState(initialData.imageUrl);
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
		data.imageUrl = imageUrl;
		console.log(data);
		function redirect() {
			router.push("/inventory/inventory/items");
		}
		// to redirect the cursor to the beginning of the page
		// after item creation
		function redirect2() {
			router.push("/inventory/inventory/items/new");
		}

		if (isUpdate) {
			makePutRequest(
				setLoading,
				`api/items/${initialData.id}`,
				data,
				"Item",
				redirect,
				reset
			);
			setImageUrl("");
		} else {
			makePostRequest(
				setLoading,
				"api/items",
				data,
				"Item",
				reset,
				redirect2
			);
			setImageUrl("");
			// router.push("/inventory/inventory/items/new");
		}
	}

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className=" my-6 w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto"
		>
			<div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
				<TextInput
					label="Item Name"
					name="title"
					register={register}
					errors={errors}
					className="w-full"
				/>

				<SelectInput
					label="Select Item Category"
					name="categoryId"
					options={categories}
					register={register}
					className="w-full"
				/>

				<TextInput
					// disabled={isUpdate ? true : false}
					label="Item SKU"
					name="sku"
					register={register}
					errors={errors}
					className="w-full"
				/>
				<TextInput
					label="Item Barcode"
					name="barcode"
					register={register}
					errors={errors}
					// isRequired={false}
					className="w-full"
				/>

				<TextInput
					label="Item Quantity"
					name="qty"
					register={register}
					errors={errors}
					className="w-full"
					type="number"
				/>

				<SelectInput
					label="Select Item Unit"
					name="unitId"
					options={units}
					register={register}
					className="w-full"
				/>
				<SelectInput
					label="Select Item's Brand"
					name="brandId"
					options={brands}
					register={register}
					className="w-full"
				/>
				<TextInput
					label="Buying Price"
					name="buyingPrice"
					register={register}
					errors={errors}
					className="w-full"
					type="number"
				/>
				<TextInput
					label="Selling Price"
					name="sellingPrice"
					register={register}
					errors={errors}
					className="w-full"
					type="number"
				/>

				<SelectInput
					label="Select Item Supplier"
					name="supplierId"
					options={mySuppliers}
					register={register}
					className="w-full"
				/>

				<TextInput
					label="Re-order Point"
					name="reOrderPoint"
					register={register}
					errors={errors}
					className="w-full"
					type="number"
				/>

				<SelectInput
					label="Select Item Warehouse"
					name="warehouseId"
					options={warehouses}
					register={register}
					className="w-full"
				/>

				<TextInput
					label=" Item Weight in kg"
					name="weight"
					register={register}
					errors={errors}
					className="w-full"
					type="number"
				/>
				<TextInput
					label="Item Dimension in cm (20 x 10 x 30)"
					name="dimensions"
					register={register}
					errors={errors}
					className="w-full"
				/>
				<TextInput
					label="Item Tax Rate in %)"
					name="taxRate"
					type="number"
					register={register}
					errors={errors}
					className="w-full"
				/>

				<TextareaInput
					label="Item Description"
					name="description"
					register={register}
					errors={errors}
				/>
				<TextareaInput
					label="Item Notes"
					name="notes"
					register={register}
					errors={errors}
				/>

				<ImageInput
					label="Item Image"
					imageUrl={imageUrl}
					setImageUrl={setImageUrl}
					endpoint="imageUploader"
				/>
			</div>
			<SubmitButton
				isLoading={loading}
				title={isUpdate ? "Updated Item" : "New Item"}
			/>
		</form>
	);
};

export default CreateItemForm;
