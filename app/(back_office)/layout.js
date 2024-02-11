"use client";
import Header from "@/components/dashboard/Header";
import Sidebar from "@/components/dashboard/Sidebar";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import Login from "../login/page";

const Layout = ({ children }) => {
	const [showSidebar, setShowSidebar] = useState(false);
	const { data: session, status } = useSession();

	if (status === "loading") {
		return <p>Loading... Please wait</p>;
	}

	if (status === "unauthenticated") {
		return <Login />;
	}

	return (
		<div className=" flex bg-gray-300 min-h-screen ">
			<Sidebar
				showSidebar={showSidebar}
				setShowSidebar={setShowSidebar}
			/>
			<main className=" md:ml-60  ml-0  w-full min-h-screen bg-slate-100">
				<Header
					setShowSidebar={setShowSidebar}
					showSidebar={showSidebar}
				/>
				{children}
			</main>
		</div>
	);
};

export default Layout;
