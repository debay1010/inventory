"use client";
import {
	BaggageClaim,
	BarChart4,
	Cable,
	ChevronDown,
	ChevronLeft,
	ChevronRight,
	Files,
	Home,
	ShoppingBag,
	ShoppingBasket,
	ShoppingCart,
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import SubscriptionCard from "./SubscriptionCard";
import InventorySubMenu from "./InventorySubMenu";
import SidebarDropDownLink from "./SidebarDropDownLink";
import { salesSubMenu } from "@/constants";

const Sidebar = () => {
	const [hideInventorySubMenu, setHideInventorySubMenu] = useState(false);
	return (
		<div className="  flex flex-col justify-between w-60 min-h-screen text-slate-50 bg-slate-800 fixed">
			<div className="flex flex-col  ">
				<Link href="#">
					<div className=" bg-slate-950 flex space-x-2 py-3 px-2 ">
						<BaggageClaim />
						<span className="font-semibold text-xl">Inventory</span>
					</div>
				</Link>
				{/* links */}
				<nav className="flex flex-col gap-4 py-6 px-3">
					<Link
						href="/inventory/home"
						className="flex gap-2 items-center bg-blue-500 text-slate-300 p-2  rounded-md"
					>
						<Home className="w-4 h-4" />
						<span>Home</span>
					</Link>

					<Link href="/inventory/inventory">
						<div
							className="flex justify-between items-center"
							onClick={() =>
								setHideInventorySubMenu((prev) => !prev)
							}
						>
							<button
								type="button"
								href="/"
								className="flex gap-2 p-2 items-center"
							>
								<ShoppingCart className="w-4 h-4" />
								<span>Inventory</span>
							</button>
							{hideInventorySubMenu ? (
								<ChevronDown />
							) : (
								<ChevronRight />
							)}
						</div>
					</Link>
					{hideInventorySubMenu && <InventorySubMenu />}

					<SidebarDropDownLink
						heading="Sales"
						subMenuLinks={salesSubMenu}
					/>

					{/* <button
						href="/inventory/sales/"
						className="flex gap-2 p-2 items-center"
					>
						<ShoppingBasket className="w-4 h-4" />
						<span>Sales</span>
					</button> */}

					<button
						href="/inventory/purchases"
						className="flex gap-2 p-2 items-center"
					>
						<ShoppingBag className="w-4 h-4" />
						<span>Purchases</span>
					</button>

					<Link
						href="/inventory/integrations"
						className="flex gap-2 p-2 items-center"
					>
						<Cable className="w-4 h-4" />
						<span>Integrations</span>
					</Link>
					<Link
						href="/inventory/reports"
						className="flex gap-2 p-2 items-center"
					>
						<BarChart4 className="w-4 h-4" />
						<span>Reports</span>
					</Link>
					<Link
						href="/inventory/documents"
						className="flex gap-2 p-2 items-center"
					>
						<Files className="w-4 h-4" />
						<span>Documents</span>
					</Link>
				</nav>
			</div>

			{/* Bottom Part ====== */}
			<div className="flex flex-col justify-center items-center absolute  left-0 bottom-1  ">
				{/* subscription card */}
				<SubscriptionCard />
				{/* footer Icon */}
				<button
					href="#"
					className=" bg-slate-950 flex space-x-2 py-2 px-24 "
				>
					<ChevronLeft />
				</button>
			</div>
		</div>
	);
};

export default Sidebar;
