import { UploadDropzone } from "@/lib/uploadthing";
import { Pencil } from "lucide-react";
import Image from "next/image";
import React from "react";
import { classNames } from "uploadthing/client";

const ImageInput = ({
	label,
	imageUrl = "",
	setImageUrl,
	className = "col-span-full",
	endpoint = "imageUploader",
}) => {
	return (
		<div className={className}>
			<div className="flex justify-between items-center mb-4">
				<label
					htmlFor="item-image"
					className="block text-sm font-semibold leading-6 text-gray-900"
				>
					{label}
				</label>
				{imageUrl && (
					<button
						onClick={() => setImageUrl("")}
						type="button"
						className="flex space-x-2  bg-slate-900 rounded-md shadow text-slate-50  py-2 px-4"
					>
						<Pencil className="w-5 h-5" />
						<span>Change Image</span>
					</button>
				)}
			</div>

			{imageUrl ? (
				<Image
					src={imageUrl}
					alt="item image"
					width={1000}
					height={667}
					className="w-full h-64 object-cover"
				/>
			) : (
				<UploadDropzone
					endpoint={endpoint}
					onClientUploadComplete={(res) => {
						// Do something with the response
						setImageUrl(res[0].url);
						// console.log(imageUrl);

						// console.log("Files: ", res);
						// alert("Upload Successful!!!");
					}}
					onUploadError={(error) => {
						// Do something with the error.
						alert(`ERROR! ${error.message}`);
					}}
				/>
			)}
		</div>
	);
};

export default ImageInput;
