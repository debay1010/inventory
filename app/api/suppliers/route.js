import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
	try {
		const {
			title,
			phone,
			email,
			address,
			contactPerson,
			supplierCode,
			paymentTerms,
			taxID,
			notes,
		} = await request.json();

		const mySuppliers = await db.supplier.create({
			data: {
				title,
				phone,
				email,
				address,
				contactPerson,
				supplierCode,
				paymentTerms,
				taxID,
				notes,
			},
		});
		console.log(mySuppliers);
		return NextResponse.json(mySuppliers);
	} catch (error) {
		console.log(error);
		return NextResponse.json(
			{ error, message: "Fail to create supplier" },
			{ status: 500 }
		);
	}
}

export async function GET(request) {
	try {
		const mySuppliers = await db.supplier.findMany({
			orderBy: {
				createdAt: "desc", // Latest on top
			},
		});
		return NextResponse.json(mySuppliers);
	} catch (error) {
		console.log(error);
		return NextResponse.json(
			{ error, message: "Fail to fetch suppliers" },
			{ status: 500 }
		);
	}
}

export async function DELETE(request) {
	try {
		const id = request.nextUrl.searchParams.get("id");
		const deletedSupplier = await db.supplier.delete({
			where: {
				id,
			},
		});

		console.log(deletedSupplier);
		return NextResponse.json(deletedSupplier);
	} catch (error) {
		console.log(error);
		return NextResponse.json(
			{ error, message: "Fail to delete supplier" },
			{ status: 500 }
		);
	}
}

// import db from "@/lib/db";
// import { NextResponse } from "next/server";

// export async function POST(request) {
// 	try {
// 		const {
// 			title,
// 			phone,
// 			email,
// 			address,
// 			contactPerson,
// 			supplierCode,
// 			paymentTerms,
// 			taxID,
// 			notes,
// 		} = await request.json();

// 		const supplier = await db.supplier.create({
// 			data: {
// 				title,
// 				phone,
// 				email,
// 				address,
// 				contactPerson,
// 				supplierCode,
// 				paymentTerms,
// 				taxID,
// 				notes,
// 			},
// 		});
// 		console.log(supplier);
// 		return NextResponse.json(supplier);
// 	} catch (error) {
// 		console.log(error);
// 		return NextResponse(
// 			{ error, message: "Fail to create supplier" },
// 			{ status: 500 }
// 		);
// 	}
// }

// export async function GET(request) {
// 	try {
// 		const suppliers = await db.supplier.findMany({
// 			orderBy: {
// 				createdAt: "desc", // Latest on top
// 			},
// 		});
// 		return NextResponse.json(suppliers);
// 	} catch (error) {
// 		console.log(error);
// 		return NextResponse(
// 			{ error, message: "Fail to fetch suppliers" },
// 			{ status: 500 }
// 		);
// 	}
// }
