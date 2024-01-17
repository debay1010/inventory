import Header from "@/components/dashboard/Header";
import Sidebar from "@/components/dashboard/Sidebar";
import React from "react";

const Layout = ({ children }) => {
	return (
		<div className=" flex bg-gray-300 min-h-screen ">
			<Sidebar />
			<main className=" ml-60 w-full min-h-screen bg-slate-100">
				<Header />
				{children}
			</main>
		</div>
	);
};

export default Layout;
