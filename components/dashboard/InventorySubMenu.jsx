"use client";
import React, { useState } from "react";
import { inventorySubMenu } from "@/constants";
import Link from "next/link";
import { PlusCircle } from "lucide-react";
import { usePathname } from "next/navigation";

const InventorySubMenu = () => {
	// const [style, setStyle] = useState("hidden");
	const pathname = usePathname();
	return (
		<div className="flex flex-col  gap-4">
			{inventorySubMenu.map((menu, index) => (
				<div className="">
					<Link
						className={`flex justify-between items-center ${
							pathname === menu.href ? "bg-blue-600" : ""
						} hover:bg-slate-900 py-2 pl-8 transition-all duration-300 rounded-md`}
						key={menu.title}
						// key={index}
						href={menu.href}
						// onMouseEnter={(e) => setStyle(" focus:hover:block")}
						// onMouseLeave={(e) => setStyle("hidden")}
					>
						<span>{menu.title}</span>

						{/* <PlusCircle className={` h-4 w-4 ${style}`} /> */}
						<PlusCircle className="h-4 w-4" />
					</Link>
				</div>
			))}
		</div>
	);
};

export default InventorySubMenu;
