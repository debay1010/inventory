import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request, { params: { id } }) {
	try {
		const category = await db.category.findUnique({
			where: {
				id,
			},
		});
		return NextResponse.json(category);
	} catch (error) {
		console.log(error);
		return NextResponse.json(
			{ error, message: "Fail to fetch category" },
			{ status: 500 }
		);
	}
}

export async function PUT(request, { params: { id } }) {
	try {
		const { title, description } = await request.json();
		const category = await db.category.update({
			where: {
				id,
			},
			data: { title, description },
		});
		return NextResponse.json(category);
	} catch (error) {
		console.log(error);
		return NextResponse.json(
			{ error, message: "Fail to update category" },
			{ status: 500 }
		);
	}
}
