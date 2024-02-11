import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
	try {
		const { title } = await request.json();

		// const brand = { title };
		const brand = await db.brand.create({
			data: { title },
		});

		console.log(brand);
		return NextResponse.json(brand);
	} catch (error) {
		console.log(error);
		return NextResponse.json(
			{ error, message: "Fail to create brand" },
			{ status: 500 }
		);
	}
}

export async function GET(request) {
	try {
		const brands = await db.brand.findMany({
			orderBy: {
				createdAt: "desc", // Latest on top
			},
		});
		return NextResponse.json(brands);
	} catch (error) {
		console.log(error);
		return NextResponse.json(
			{ error, message: "Fail to fetch brands" },
			{ status: 500 }
		);
	}
}

export async function DELETE(request) {
	try {
		const id = request.nextUrl.searchParams.get("id");
		const deletedBrand = await db.brand.delete({
			where: {
				id,
			},
		});

		console.log(deletedBrand);
		return NextResponse.json(deletedBrand);
	} catch (error) {
		console.log(error);
		return NextResponse.json(
			{ error, message: "Fail to delete brand" },
			{ status: 500 }
		);
	}
}
