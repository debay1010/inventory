"use client";
import LoginForm from "@/components/auth/LoginForm";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const Login = () => {
	// const session = getServerSession(authOptions);  //server side
	const { data: session, status } = useSession();

	if (status === "loading") <p>Loading user... Please wait</p>;
	if (status === "authenticated") {
		redirect("/inventory/home/dashboard");
	}

	return (
		<section className="bg-gray-50 dark:bg-gray-900">
			<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
				<a
					href="#"
					className="flex items-center mb-6 text-2xl font-semibold dark:text-white text-gray-900 "
				>
					<img
						className="h-8 w-8 mr-2"
						src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
						alt="logo"
					/>
					Inventory Management System
				</a>
				<div className="w-full bg-white rounded-lg shadow-2xl dark:border md:mt-0 lg:max-w-md  xl:p-0 dark:bg-gray-800 dark:border-gray-700">
					<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
						<h1 className="text-xl font-bold leading-tight text-gray-900 dark:text-white tracking-tight md:text-2xl text-center">
							Sign in to your account
						</h1>
						<LoginForm />
					</div>
				</div>
			</div>
		</section>
	);
};
0;

export default Login;
