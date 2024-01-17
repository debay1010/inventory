"use client";
import { CreditCard, Cross, Plus, X } from "lucide-react";
import React, { useState } from "react";

const DashboardBanner = () => {
	const [hidden, setHidden] = useState(false);
	return (
		<div
			className={`${
				hidden
					? "hidden"
					: "flex justify-between items-center bg-white px-8 py-6 relative"
			}`}
		>
			{/* Icon */}
			<CreditCard className="h-20 w-20 text-slate-500" />
			{/* Text */}
			<div className=" flex flex-col w-[60%] px-2 ">
				<h1 className="text-xl font-semibold">
					Start accepting online payments.
				</h1>
				<p className=" ">
					Businesses are moving to online payment as they are easy,
					secure and fast. It is the latest trend that is assured to
					be permanent.
				</p>
			</div>
			{/* button */}
			<div className="">
				<button className=" uppercase py-2 px-4 bg-blue-500 text-white text-sm rounded-xl ">
					Enable
				</button>
			</div>
			<div className="">
				<button
					onClick={() => setHidden((prev) => !prev)}
					className=" uppercase py-2.5 px-4 font-bold text-slate-700 rounded-xl absolute top-0 right-4 "
				>
					<X />
				</button>
			</div>
		</div>
	);
};

export default DashboardBanner;
