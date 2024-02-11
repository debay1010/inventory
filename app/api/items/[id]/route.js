import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request, { params: { id } }) {
	try {
		const item = await db.item.findUnique({
			where: {
				id,
			},
			include: {
				category: true,
				warehouse: true,
				brand: true,
			},
		});
		return NextResponse.json(item);
	} catch (error) {
		console.log(error);
		return NextResponse.json(
			{ error, message: "Fail to fetch item" },
			{ status: 500 }
		);
	}
}

export async function PUT(request, { params: { id } }) {
	try {
		const {
			title,
			categoryId,
			sku,
			barcode,
			qty,
			unitId,
			brandId,
			buyingPrice,
			sellingPrice,
			supplierId,
			reOrderPoint,
			warehouseId,
			imageUrl,
			weight,
			dimensions,
			taxRate,
			description,
			notes,
		} = await request.json();

		// const itemData = await request.json();
		const item = await db.item.update({
			where: {
				id,
			},
			data: {
				title,
				categoryId,
				sku,
				barcode,
				qty: parseInt(qty),
				unitId,
				brandId,
				buyingPrice: parseFloat(buyingPrice),
				sellingPrice: parseInt(sellingPrice),
				supplierId,
				reOrderPoint,
				warehouseId,
				imageUrl,
				weight: parseFloat(weight),
				dimensions,
				taxRate: parseFloat(taxRate),
				description,
				notes,
			},
		});
		return NextResponse.json(item);
	} catch (error) {
		console.log(error);
		return NextResponse.json(
			{ error, message: "Fail to update item" },
			{ status: 500 }
		);
	}
}
