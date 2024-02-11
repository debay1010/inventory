"use client";
import { Shirt } from "lucide-react";
import Link from "next/link";
import React from "react";

const OptionCard = ({ optionData }) => {
	const {
		title,
		description,
		link,
		linkTitle,
		enabled,
		icon: Icon,
	} = optionData;
	return (
		<div className="shadow-md bg-white flex flex-col items-center justify-center gap-4 p-6">
			<h2 className="text-2xl font-semibold">{title}</h2>
			<div className="">
				<Icon strokeWidth={0.5} className="h-28 w-28" />
			</div>
			<p className="line-clamp-1">{description}</p>

			{enabled ? (
				<Link href={link}>
					<button className=" text-slate-50 inline-flex items-center space-x-2 bg-blue-600 py-2 rounded-lg px-2  ">
						{linkTitle}
					</button>
				</Link>
			) : (
				<button className=" text-slate-50 inline-flex items-center space-x-2 bg-blue-600 py-2 rounded-lg px-2  ">
					Enable now
				</button>
			)}
		</div>
	);
};

export default OptionCard;
