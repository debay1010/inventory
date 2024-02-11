"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const LoginForm = () => {
	const router = useRouter();

	const {
		register,
		handleSubmit,
		// reset,
		formState: { errors },
	} = useForm();

	const [loading, setLoading] = useState(false);

	async function onSubmit(data) {
		try {
			console.log(data.email, data.password);
			setLoading(true);

			const loginData = await signIn("credentials", {
				...data,
				redirect: false,
			});

			if (loginData) {
				setLoading(false);
				router.push("/inventory/home/dashboard");
			}
		} catch (error) {
			setLoading(false);
			console.error("Network Error:", error);
			toast.error("Something went wrong. Please try again later");
		}
	}
	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className=" space-y-4 md:space-6 "
		>
			{/* <div>
        <label htmlFor="name">Your Name</label>
        <input
            {...register("name", { required: true })}
            type="text"
            name="name"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required=""
            placeholder="John Doe"
        />
        {errors.name && (
            <small className="text-red-600 text-sm">
                This field is required
            </small>
        )}
    </div> */}

			<div>
				<label
					htmlFor="email"
					className="block mb-2 text-sm font-medium dark:text-white text-gray-900  "
				>
					Your Email
				</label>
				<input
					{...register("email", { required: true })}
					type="email"
					name="email"
					id="email"
					className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					placeholder="name@company.com"
					required=""
				/>
				{errors.email && (
					<small className="text-red-600 text-sm">
						This field is required
					</small>
				)}
			</div>

			<div>
				<label
					htmlFor="password"
					className="block mb-2 text-sm font-medium dark:text-white text-gray-900  "
				>
					Password
				</label>
				<input
					{...register("password", { required: true })}
					type="password"
					name="password"
					id="password"
					placeholder="........"
					className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					required=""
				/>
				{errors.password && (
					<small className="text-red-600 text-sm">
						This field is required
					</small>
				)}
			</div>

			{loading ? (
				<button
					disabled
					type="button"
					className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300  w-full dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
				>
					Logging in... please wait.
				</button>
			) : (
				<button
					type="submit"
					className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300  w-full dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
				>
					Login
				</button>
			)}

			<p className="mb-2 text-sm font-light text-gray-500 dark:text-gray-400 ">
				You don't have an account?{" "}
				<a
					href="/register"
					className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
				>
					{""} Sign Up
				</a>
			</p>
		</form>
	);
};

export default LoginForm;
