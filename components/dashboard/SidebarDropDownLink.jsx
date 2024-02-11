import React from "react";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { PlusCircle, ShoppingBasket } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarDropDownLink = ({ heading, subMenuLinks, setShowSidebar }) => {
	const pathname = usePathname();
	return (
		<Link href="/inventory/sales">
			<div className=" ">
				<Collapsible>
					<CollapsibleTrigger className="flex gap-2 p-2 items-center">
						<ShoppingBasket className="w-4 h-4" />
						<span>{heading}</span>
					</CollapsibleTrigger>
					<CollapsibleContent>
						{subMenuLinks.map((menu) => (
							<Link
								onClick={() => setShowSidebar((prev) => !prev)}
								className={`flex justify-between items-center ${
									pathname === menu.href ? "bg-blue-600" : ""
								} hover:bg-slate-900 py-2 pl-8 transition-all duration-300 rounded-md`}
								key={menu.title}
								href={menu.href}
							>
								<span>{menu.title}</span>
								<PlusCircle className="h-4 w-4" />
							</Link>
						))}
					</CollapsibleContent>
				</Collapsible>
			</div>
		</Link>
	);
};

export default SidebarDropDownLink;
