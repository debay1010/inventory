import React from "react";
import { useForm } from "react-hook-form";

const TextInput = ({
	label,
	name,
	register,
	errors,
	type = "text",
	isRequired = true,
	className = "sm:col-span-2",
}) => {
	return (
		<div className={className}>
			<label
				htmlFor={name}
				className="block text-sm font-semibold leading-6 text-gray-900 mb-2 "
			>
				{label}
			</label>
			<div className="mt-2">
				<input
					{...register(`${name}`, { required: isRequired })}
					type={type}
					name={name}
					id={name}
					autoComplete={name}
					className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
					placeholder="Type the Category name"
				/>

				{/* {errors.title && ( */}
				{errors[`${name}`] && (
					<span className="text-sm text-red-600 ">
						Category name is required
					</span>
				)}
			</div>
		</div>
	);
};

export default TextInput;