import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
	try {
		const { title, location, type, description } = await request.json(); //from form

		// const warehouse = { title, location, type, description };

		const warehouse = await db.warehouse.create({
			data: {
				title,
				location,
				warehouseType: type,
				description,
			},
		});
		console.log(warehouse);
		return NextResponse.json(warehouse);
	} catch (error) {
		console.log(error);
		return NextResponse.json(
			{ error, message: "Fail to create warehouse" },
			{ status: 500 }
		);
	}
}

export async function GET(request) {
	try {
		const warehouse = await db.warehouse.findMany({
			orderBy: {
				createdAt: "desc", // Latest on top
			},
			include: {
				items: true,
			},
		});
		return NextResponse.json(warehouse);
	} catch (error) {
		console.log(error);
		return NextResponse.json(
			{ error, message: "Fail to fetch warehouse" },
			{ status: 500 }
		);
	}
}

export async function DELETE(request) {
	try {
		const id = request.nextUrl.searchParams.get("id");
		const deletedWarehouse = await db.warehouse.delete({
			where: {
				id,
			},
		});

		console.log(deletedWarehouse);
		return NextResponse.json(deletedWarehouse);
	} catch (error) {
		console.log(error);
		return NextResponse.json(
			{ error, message: "Fail to delete warehouse" },
			{ status: 500 }
		);
	}
}
