"use client";
import { dbNavLinks } from "@/constants";
import { Building2 } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const HomeNavbar = () => {
	const pathname = usePathname();
	return (
		<div className=" p-5 h-32  relative bg-slate-50 border-b border-slate-300">
			<div className="flex items-center space-x-3 ">
				<div className=" p-2 flex items-center justify-center h-12 w-12 rounded-lg bg-white">
					<Building2 />
				</div>
				<div className=" flex flex-col ">
					<h2 className="font-semibold">Hello, WEBDEVELOPER</h2>
					<p className="text-sm">Debay</p>
				</div>
			</div>
			<nav>
				<div className="sticky mt-6 flex gap-4">
					{dbNavLinks.map((link) => (
						<Link
							className={`${
								pathname === link.href
									? " pb-3 border-b-2 border-blue-600"
									: ""
							}`}
							key={link.title}
							href={link.href}
						>
							{link.title}
						</Link>
					))}
				</div>
			</nav>
		</div>
	);
};

export default HomeNavbar;

//  <Link href="/" className=" py-3 border-b-2 border-blue-600">
// 						Dashboard
// 					</Link>
