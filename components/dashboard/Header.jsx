import {
	Bell,
	ChevronDown,
	Grid3x3,
	History,
	HistoryIcon,
	LayoutGrid,
	Plus,
	Settings,
	User2,
	Users,
} from "lucide-react";
import React from "react";
import SearchInput from "./SearchInput";
import Image from "next/image";

const Header = () => {
	return (
		<div className="bg-slate-100 h-12 px-5 mt-2 flex items-center justify-between border-b border-slate-300">
			<div className="flex gap-3">
				{/* Recent activities */}
				<button>
					<History className="w-6 h-6" />
				</button>
				{/* Search */}
				<SearchInput />
			</div>
			<div className="flex space-x-3">
				{/* Plus Icon */}
				<div className="pr-2 border-r  border-gray-300">
					<button className=" bg-blue-600 p-1 rounded-lg  ">
						<Plus className="text-slate-50 h-4 w-4" />
					</button>
				</div>
				{/* group 1  */}
				<div className=" flex border-r pr-2 border-gray-300 space-x-2">
					<button className=" hover:bg-slate-200 p-1 rounded-lg  ">
						<Users className="text-slate-900 h-4 w-4" />
					</button>
					<button className=" hover:bg-slate-200 p-1 rounded-lg  ">
						<Bell className="text-slate-900 h-4 w-4" />
					</button>
					<button className=" hover:bg-slate-200 p-1 rounded-lg  ">
						<Settings className="text-slate-900 h-4 w-4" />
					</button>
				</div>
				{/* group 2  */}
				<div className="flex gap-6">
					<button className="flex items-center">
						<span>Garat</span>
						<ChevronDown className="h-4 w-4" />
					</button>
					<button>
						<Image
							src="/user.png"
							alt="user image"
							width={100}
							height={100}
							className=" rounded-full border border-slate-800 w-8 h-8"
						/>
					</button>
					<button>
						<LayoutGrid className="h-6 w-6 text-slate-900" />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Header;
