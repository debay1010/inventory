"use client";
import AddInventoryForm from "@/components/dashboard/AddInventoryForm";
import FormHeader from "@/components/dashboard/FormHeader";
import TransferInventoryForm from "@/components/dashboard/TransferInventoryForm";
import { warehouseAdjustmentTabs } from "@/constants";

import { useState } from "react";

const AdjustmentForm = ({ items, warehouses, suppliers }) => {
	const [activeForm, setActiveForm] = useState("add");

	return (
		<div className="">
			<FormHeader
				title="Add Stock Adjustment"
				href="/inventory/inventory/adjustments/"
			/>

			<div className="border-b border-gray-200  my-4 w-full max-w-4xl px-4 py-2 bg-white border rounded-lg shadow  mx-auto">
				<ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
					{warehouseAdjustmentTabs.map((tab, i) => {
						const Icon = tab.icon;
						return (
							<li className="me-2" key={i}>
								<button
									onClick={() => setActiveForm(tab.form)}
									className={` ${
										activeForm === tab.form
											? " inline-flex items-center justify-center p-4 font-bold text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group"
											: "inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
									} `}
								>
									{/* <Icon className="w-4 h-4 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300" /> */}

									<Icon
										className={`${
											activeForm === tab.form
												? "w-4 h-4 me-2 text-blue-600 dark:text-blue-500  dark:group-hover:text-blue-300"
												: "w-4 h-4 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
										}`}
									/>
									{tab.title}
								</button>
							</li>
						);
					})}
				</ul>
			</div>
			{activeForm === "add" ? (
				<AddInventoryForm
					items={items}
					warehouses={warehouses}
					suppliers={suppliers}
				/>
			) : (
				<TransferInventoryForm items={items} warehouses={warehouses} />
			)}
		</div>
	);
};

export default AdjustmentForm;
