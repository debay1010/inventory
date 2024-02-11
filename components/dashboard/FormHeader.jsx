import { X } from "lucide-react";
import Link from "next/link";
import React from "react";

const FormHeader = ({ title, href }) => {
	return (
		<div className="flex justify-between i tems-center bg-white py-3 px-8">
			<h2 className="text-xl font-semibold">{title}</h2>

			<a href={href}>
				<X />
			</a>
		</div>
	);
};

export default FormHeader;
