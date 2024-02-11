import db from "@/lib/db";
import clsx from "clsx";
import { NextResponse } from "next/server";

export async function POST(request) {
	try {
		const {
			referenceNumber,
			itemId,
			givingWarehouseId,
			receivingWarehouseId,
			transferStockQty,
			notes,
		} = await request.json();

		//  Get the receiving warehouse
		const givingWarehouse = await db.warehouse.findUnique({
			where: {
				id: givingWarehouseId,
			},
		});

		const currentGivingWarehouseStock = givingWarehouse.stockQty;

		if (
			parseInt(currentGivingWarehouseStock) > parseInt(transferStockQty)
		) {
			const newStock4GivingWarehouse =
				parseInt(currentGivingWarehouseStock) -
				parseInt(transferStockQty);

			const updateReceivingWarehouse = await db.warehouse.update({
				where: {
					id: givingWarehouseId,
				},
				data: {
					stockQty: newStock4GivingWarehouse,
				},
			});

			{
				//  Get the receiving warehouse
				const receivingWarehouse = await db.warehouse.findUnique({
					where: {
						id: receivingWarehouseId,
					},
				});

				const currentReceivingWarehouseStock =
					receivingWarehouse.stockQty;
				const newStock4ReceivingWarehouse =
					parseInt(currentReceivingWarehouseStock) +
					parseInt(transferStockQty);

				const updateReceivingWarehouse = await db.warehouse.update({
					where: {
						id: receivingWarehouseId,
					},
					data: {
						stockQty: newStock4ReceivingWarehouse,
					},
				});
			}

			// UPDATE THE ITEMS IN BOTH WAREHOUSE
			//  Item in the giving Warehouse

			// Item in the Receiving Warehouse

			const transferStock = await db.transferStockAdjustment.create({
				data: {
					referenceNumber,
					itemId,
					givingWarehouseId,
					receivingWarehouseId,
					transferStockQty: parseInt(transferStockQty),
					notes,
				},
			});

			console.log(transferStock);
			return NextResponse.json(transferStock);
		} else {
			return NextResponse.json(
				{
					data: null,
					message:
						"Giving Warehouse has no enough stock to effect transfer",
				},
				{ status: 409 }
			);
		}
	} catch (error) {
		console.log(error);
		return NextResponse.json(
			{ error, message: "Fail to create transfer adjustment" },
			{ status: 500 }
		);
	}
}

export async function GET(request) {
	try {
		const transferStock = await db.transferStockAdjustment.findMany({
			orderBy: {
				createdAt: "desc", // Latest on top
			},
			include: {
				item: true,
			},
		});
		return NextResponse.json(transferStock);
	} catch (error) {
		console.log(error);
		return NextResponse.json(
			{ error, message: "Fail to fetch transfer adjustment" },
			{ status: 500 }
		);
	}
}
