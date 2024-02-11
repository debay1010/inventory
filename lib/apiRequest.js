import toast from "react-hot-toast";
export async function makePostRequest(
	setLoading,
	endpoint,
	data,
	resourceName,
	reset,
	redirect2
) {
	try {
		setLoading(true);
		// const baseUrl = "http://localhost:3000";
		const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
		const response = await fetch(`${baseUrl}/${endpoint}`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});
		console.log(response);
		if (response.ok) {
			setLoading(false);
			console.log(response);
			toast.success(`New ${resourceName} created successfully!`);
			reset();
			redirect2();
		} else {
			setLoading(false);
			if (response.status === 409) {
				toast.error("The Giving Warehouse has no enough stoke!");
			} else {
				toast.error("Something went wrong!");
			}
		}
	} catch (error) {
		setLoading(false);
		console.log(error);
	}
}

export async function makePutRequest(
	setLoading,
	endpoint,
	data,
	resourceName,
	redirect,
	reset
) {
	try {
		setLoading(true);
		// const baseUrl = "http://localhost:3000";
		const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
		const response = await fetch(`${baseUrl}/${endpoint}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});
		if (response.ok) {
			setLoading(false);
			console.log(response);
			toast.success(` ${resourceName} updated successfully!`);
			// reset();
			redirect();
		} else {
			setLoading(false);
			toast.error("Something went wrong!");
		}
	} catch (error) {
		setLoading(false);
		console.log(error);
	}
}