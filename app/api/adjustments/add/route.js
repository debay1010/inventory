import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
	try {
		const {
			receivingWarehouseId,
			addStockQty,
			itemId,
			referenceNumber,
			notes,
			supplierId,
		} = await request.json();

		// Carry out all the activities in the curlly braces before
		// the addstock operation
		{
			// Get the item first
			const item2Update = await db.item.findUnique({
				where: {
					id: itemId,
				},
			});

			const currentItemQty = item2Update.qty;
			const newQty = parseInt(currentItemQty) + parseInt(addStockQty);

			// Adjust the stock item  being added with new value
			const updatedItem = await db.item.update({
				where: {
					id: itemId,
				},
				data: {
					qty: newQty,
				},
			});

			// Adjust the warehouse being added to

			// get the warehouse
			const warehouse = await db.warehouse.findUnique({
				where: {
					id: receivingWarehouseId,
				},
			});

			// current stock of the warehouse
			const currentWarehouseStock = warehouse.stockQty;
			const newStockQty =
				parseInt(currentWarehouseStock) + parseInt(addStockQty);

			//Update the stock on the warehouse
			const updateWarehouse = await db.warehouse.update({
				where: {
					id: receivingWarehouseId,
				},
				data: {
					stockQty: newStockQty,
				},
			});

			console.log({ qty: updatedItem.qty });
		}

		const addStock = await db.addStockAdjustment.create({
			data: {
				receivingWarehouseId,
				addStockQty: parseInt(addStockQty),
				itemId,
				referenceNumber,
				notes,
				supplierId,
			},
		});

		console.log(addStock);
		return NextResponse.json(addStock);
	} catch (error) {
		console.log(error);
		return NextResponse.json(
			{ error, message: "Fail to add stock" },
			{ status: 500 }
		);
	}
}

export async function GET(request) {
	try {
		const addStock = await db.addStockAdjustment.findMany({
			orderBy: {
				createdAt: "desc", // Latest on top
			},

			include: {
				item: true,
			},
		});
		return NextResponse.json(addStock);
	} catch (error) {
		console.log(error);
		return NextResponse.json(
			{ error, message: "Fail to fetch transfer adjustment" },
			{ status: 500 }
		);
	}
}

export async function DELETE(request) {
	try {
		const id = request.nextUrl.searchParams.get("id");
		const deleteAddStock = await db.addStockAdjustment.delete({
			where: {
				id,
			},
		});

		console.log(deleteAddStock);
		return NextResponse.json(deleteAddStock);
	} catch (error) {
		console.log(error);
		return NextResponse.json(
			{ error, message: "Fail to delete stock" },
			{ status: 500 }
		);
	}
}
