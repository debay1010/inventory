import NewUnit from "@/app/(back_office)/inventory/inventory/units/new/page";
import db from "@/lib/db";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";

// const POST = async (request) => {
export async function POST(request) {
	try {
		const { name, email, password } = await request.json();

		// Check if user email already exixts
		const userExist = await db.user.findUnique({
			where: { email },
		});
		if (userExist) {
			return NextResponse.json(
				{
					message: "User already exists",
					user: null,
				},
				{ status: 409 }
			);
		}

		const hashedPassword = await hash(password, 10);
		const newUser = await db.user.create({
			data: {
				name,
				email,
				password: hashedPassword,
			},
		});

		console.log(newUser);
		return NextResponse.json(newUser);
	} catch (error) {
		console.log(error);
		return NextResponse.json({ error });
	}
	// return <div>POST</div>;
}

// export default POST;
