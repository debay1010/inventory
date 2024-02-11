import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
	try {
		const itemData = await request.json();

		// get the warehouse
		const warehouse = await db.warehouse.findUnique({
			where: {
				id: itemData.warehouseId,
			},
		});

		// current stock of the warehouse
		const currentWarehouseStock = warehouse.stockQty;
		const newStockQty =
			parseInt(currentWarehouseStock) + parseInt(itemData.qty);

		//Update the stock on the warehouse
		const updateWarehouse = await db.warehouse.update({
			where: {
				id: itemData.warehouseId,
			},
			data: {
				stockQty: newStockQty,
			},
		});

		const item = await db.item.create({
			data: {
				title: itemData.title,
				categoryId: itemData.categoryId,
				sku: itemData.sku,
				barcode: itemData.barcode,
				qty: parseInt(itemData.qty),
				unitId: itemData.unitId,
				brandId: itemData.brandId,
				buyingPrice: parseFloat(itemData.buyingPrice),
				sellingPrice: parseFloat(itemData.sellingPrice),
				supplierId: itemData.supplierId,
				reOrderPoint: itemData.reOrderPoint,
				warehouseId: itemData.warehouseId,
				imageUrl: itemData.imageUrl,
				weight: parseFloat(itemData.weight),
				dimensions: itemData.dimensions,
				taxRate: parseFloat(itemData.taxRate),
				description: itemData.description,
				notes: itemData.notes,
			},
		});
		console.log(item);
		return NextResponse.json(item);
	} catch (error) {
		console.log(error);
		return NextResponse.json(
			{ error, message: "Fail to create item" },
			{ status: 500 }
		);
	}
}

export async function GET(request) {
	try {
		const items = await db.item.findMany({
			orderBy: {
				createdAt: "desc", // Latest on top
			},
			include: {
				supplier: true,
				warehouse: true,
				category: true,
			},
		});
		return NextResponse.json(items);
	} catch (error) {
		console.log(error);
		return NextResponse.json(
			{ error, message: "Fail to fetch items" },
			{ status: 500 }
		);
	}
}

export async function DELETE(request) {
	try {
		const id = request.nextUrl.searchParams.get("id");
		const deletedItem = await db.item.delete({
			where: {
				id,
			},
		});

		console.log(deletedItem);
		return NextResponse.json(deletedItem);
	} catch (error) {
		console.log(error);
		return NextResponse.json(
			{ error, message: "Fail to delete item" },
			{ status: 500 }
		);
	}
}
