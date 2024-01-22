import { NextResponse } from "next/server";

export async function POST(request) {
	try {
		// {
		// 	title,
		// 	categoryId,
		// 	sku,
		// 	barcode,
		// 	qty,
		// 	unitId,
		// 	brandId,
		// 	buyingPrice,
		// 	sellingPrice,
		// 	supplierId,
		// 	reOrderPoint,
		// 	warehouseId,
		// 	imageUrl,
		// 	weight,
		// 	dimensions,
		// 	taxRate,
		// 	description,
		// 	notes,
		// }

		const data = await request.json();
		{
			// const formData = await request.formData();
			// console.log(formData);
		}

		console.log(data);
		return NextResponse.json(data);
	} catch (error) {
		console.log(error);
		return NextResponse(
			{ error, message: "Fail to create item" },
			{ status: 500 }
		);
	}
}
