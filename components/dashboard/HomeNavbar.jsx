"use client";
import { dbNavLinks } from "@/constants";
import { Building2 } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const HomeNavbar = () => {
	const { data: session, status } = useSession();

	const username = session?.user?.name.toUpperCase();

	if (status === "loading") {
		return <p>Loading User...</p>;
	}

	if (status === "loading") {
		<p>Loading User... Please wait</p>;
	}
	const pathname = usePathname();
	return (
		<div className=" p-5 h-32  relative bg-slate-50 border-b border-slate-300">
			<div className="flex items-center space-x-3 ">
				<div className=" p-2 flex items-center justify-center h-12 w-12 rounded-lg bg-white">
					<Building2 />
				</div>
				<div className=" flex flex-col ">
					<h2 className="font-semibold">
						<span>Hello, </span>
						{username}
					</h2>
					{/* <p className="text-sm">Debay</p> */}
				</div>
			</div>
			<nav className="sticky mt-6 flex gap-4">
				<div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
					<ul className="flex flex-wrap -mb-px">
						{dbNavLinks.map((link) => (
							<li className="me-2" key={link.title}>
								<Link
									className={`${
										pathname === link.href
											? " pb-3 border-b-2 border-blue-600 inline-block px-4 py-2 text-blue-600  rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
											: "inline-block px-4 py-2 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
									}`}
									href={link.href}
								>
									{link.title}
								</Link>
							</li>
						))}
						{/* 
						<li className="me-2">
							<a
								href="#"
								className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
							>
								Profile
							</a>
						</li>
						<li className="me-2">
							<a
								href="#"
								className="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
								aria-current="page"
							>
								Dashboard
							</a>
						</li> */}
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default HomeNavbar;

//  <Link href="/" className=" py-3 border-b-2 border-blue-600">
// 						Dashboard
// 					</Link>
