import {
	ChevronDown,
	ChevronRight,
	HelpCircle,
	LayoutGrid,
	List,
	MoreHorizontal,
	Plus,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const FixedInventoryHeader = ({ newLink }) => {
	return (
		<div className="flex justify-between items-center  bg-white py-6 px-4">
			<button className="text-2xl flex justify-between items-center">
				<span>All Items</span>
				<ChevronRight />
			</button>

			<div className="flex gap-4 ">
				{/* New Item */}
				<Link href={newLink}>
					<button className=" flex items-center space-x-2 bg-blue-600 p-2 rounded-lg px-2  ">
						<Plus className="text-slate-50 h-4 w-4" />
						<span className="text-slate-50">New</span>
					</button>
				</Link>
				{/* Layout */}
				<div className=" flex">
					<button className="bg-gray-300 p-2  rounded-l-lg ">
						<List className="w-4 h-4 " />
					</button>
					<button className="bg-gray-100 p-2 rounded-r-lg">
						<LayoutGrid className="w-4 h-4" />
					</button>
				</div>
				{/* More */}
				<button className="bg-slate-200  p-2 rounded-lg border">
					<MoreHorizontal />
				</button>

				{/* Help */}
				<button className=" bg-orange-400 p-2 rounded-lg">
					<HelpCircle className="text-white" />
				</button>
			</div>
		</div>
	);
};

export default FixedInventoryHeader;
