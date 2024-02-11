import { getData } from "@/lib/getData";
import React from "react";
import NewBrand from "../../new/page";
import NewAdjustment from "../../new/page";

const Update = async ({ params: { id } }) => {
	const data = await getData(`adjustments/add/${id}`);
	console.log(data);
	return <NewAdjustment initialData={data} isUpdate={true} />;
};

export default Update;
