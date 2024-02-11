"use client";
import {
	AlignJustify,
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

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import SearchInput from "./SearchInput";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import generateInitials from "@/lib/generateInitials";

const Header = ({ setShowSidebar, showSidebar }) => {
	const { data: session, status } = useSession();
	const router = useRouter();
	const username = session?.user?.name.split("") ?? "";

	const initials = generateInitials(session?.user?.name);

	if (status === "loading") {
		return <p>Loading User...</p>;
	}

	if (status === "unauthenticated") {
		// router.push("/login");
		return <Login />;
	}
	return (
		<div className=" bg-slate-100 h-12 px-5 mt-2 flex items-center justify-between border-b border-slate-300">
			{/* Mobile Menu Button */}
			<button
				className={`${
					showSidebar ? "ml-60 md:hidden" : "md:hidden"
				} "md:hidden" `}
				onClick={() => setShowSidebar((prev) => !prev)}
			>
				<AlignJustify className="w-6 h-6" />
			</button>

			<div className=" flex gap-3">
				{/* Recent activities */}
				<button className="hidden md:block">
					<History className="w-6 h-6" />
				</button>
				{/* Search */}
				<SearchInput />
			</div>
			<div className=" flex space-x-3">
				{/* Plus Icon */}
				<div className=" hidden md:block pr-2 border-r  border-gray-300">
					<button className=" bg-blue-600 p-1 rounded-lg  ">
						<Plus className="text-slate-50 h-4 w-4" />
					</button>
				</div>
				{/* group 1  */}
				<div className=" hidden md:flex border-r pr-2 border-gray-300 space-x-2">
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
					<button className=" hidden md:flex items-center">
						<span>{username}</span>
						<ChevronDown className="h-4 w-4" />
					</button>
					<button>
						<DropdownMenu>
							<DropdownMenuTrigger>
								{session.user?.image ? (
									<Image
										src={session.user?.image}
										alt="user image"
										width={96}
										height={96}
										className=" rounded-full border border-slate-800 w-8 h-8"
									/>
								) : (
									<div className=" rounded-full border bg-white  border-slate-800 w-8 h-8">
										{initials}
									</div>
								)}
							</DropdownMenuTrigger>
							<DropdownMenuContent>
								<DropdownMenuLabel>
									My Account
								</DropdownMenuLabel>
								<DropdownMenuSeparator />
								<DropdownMenuItem>
									<button onClick={() => signOut()}>
										Logout
									</button>
								</DropdownMenuItem>
								<DropdownMenuItem>Billing</DropdownMenuItem>
								<DropdownMenuItem>Team</DropdownMenuItem>
								<DropdownMenuItem>
									Subscription
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</button>

					<button className="hidden md:block">
						<LayoutGrid className="h-6 w-6 text-slate-900" />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Header;
