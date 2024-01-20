import { NextResponse } from "next/server";

export async function POST(request) {
	try {
		const { title } = await request.json();

		const brand = { title };
		console.log(brand);
		return NextResponse.json(brand);
	} catch (error) {
		console.log(error);
		return NextResponse(
			{ error, message: "Fail to create brand" },
			{ status: 500 }
		);
	}
}
