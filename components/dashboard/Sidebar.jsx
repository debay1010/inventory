import {
	BadgeDollarSign,
	BaggageClaim,
	BarChart4,
	Cable,
	CandlestickChartIcon,
	ChevronLeft,
	File,
	Files,
	Home,
	ShoppingBag,
	ShoppingBasket,
	ShoppingCart,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import SubscriptionCard from "./SubscriptionCard";

const Sidebar = () => {
	return (
		<div className=" flex flex-col justify-between w-60 min-h-screen text-slate-50 bg-slate-800 fixed">
			{/* Top Part ===== */}
			<div className="flex flex-col  ">
				{/* Logo */}
				<Link href="#">
					<div className=" bg-slate-950 flex space-x-2 py-3 px-2 ">
						<BaggageClaim />
						<span className="font-semibold text-xl">Inventory</span>
					</div>
				</Link>
				{/* links */}
				<nav className="flex flex-col gap-4 py-6 px-3">
					<Link
						href="/"
						className="flex gap-2 items-center bg-blue-500 text-slate-300 p-2  rounded-md"
					>
						<Home className="w-4 h-4" />
						<span>Home</span>
					</Link>
					<button
						type="button"
						href="/"
						className="flex gap-2 p-2 items-center"
					>
						<ShoppingCart className="w-4 h-4" />
						<span>Inventory</span>
					</button>
					<button href="/" className="flex gap-2 p-2 items-center">
						<ShoppingBasket className="w-4 h-4" />
						<span>Sales</span>
					</button>
					<button href="/" className="flex gap-2 p-2 items-center">
						<ShoppingBag className="w-4 h-4" />
						<span>Purchases</span>
					</button>
					<Link href="/" className="flex gap-2 p-2 items-center">
						<Cable className="w-4 h-4" />
						<span>Integrations</span>
					</Link>
					<Link href="/" className="flex gap-2 p-2 items-center">
						<BarChart4 className="w-4 h-4" />
						<span>Reports</span>
					</Link>
					<Link href="/" className="flex gap-2 p-2 items-center">
						<Files className="w-4 h-4" />
						<span>Documents</span>
					</Link>
				</nav>
			</div>

			{/* Bottom Part ====== */}
			<div className="flex flex-col justify-center items-center">
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
