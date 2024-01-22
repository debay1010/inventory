"use client";
import FormHeader from "@/components/dashboard/FormHeader";
import ImageInput from "@/components/formInputs/ImageInput";
import SelectInput from "@/components/formInputs/SelectInput";
import SubmitButton from "@/components/formInputs/SubmitButton";
import TextInput from "@/components/formInputs/TextInput";
import TextareaInput from "@/components/formInputs/TextareaInput";
import { itemCategories } from "@/constants";
import { itemUnits } from "@/constants";
import { itemBrands } from "@/constants";
import { itemWarehouse } from "@/constants";
import { itemSupplier } from "@/constants";
import { UploadDropzone } from "@/lib/uploadthing";
import { UploadButton } from "@uploadthing/react";
import { Pencil } from "lucide-react";
import Image from "next/image";

import { useState } from "react";
import { useForm } from "react-hook-form";

const NewItem = () => {
	const [imageUrl, setImageUrl] = useState("");
	const [loading, setLoading] = useState(false);
	const {
		register,
		handleSubmit,
		watch,
		reset,
		formState: { errors },
	} = useForm();

	async function onSubmit(data) {
		data.imageUrl = imageUrl;
		console.log(data);
		setLoading(true);
		const baseUrl = "http://localhost:3000";
		try {
			const response = await fetch(`${baseUrl}/api/items`, {
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
			<FormHeader title="Create Item" href="/inventory/inventory" />
			{/* forms */}
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
						options={itemCategories}
						register={register}
						className="w-full"
					/>

					<TextInput
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
						options={itemUnits}
						register={register}
						className="w-full"
					/>
					<SelectInput
						label="Select Item's Brand"
						name="brandId"
						options={itemBrands}
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
						label="Select Item's Supplier"
						name="supplierId"
						options={itemSupplier}
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
						label="Select Item's Warehouse"
						name="warehouseId"
						options={itemWarehouse}
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
				<SubmitButton isLoading={loading} title="Item" />
			</form>
		</div>
	);
};

export default NewItem;
