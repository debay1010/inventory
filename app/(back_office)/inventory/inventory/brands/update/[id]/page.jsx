import { getData } from "@/lib/getData";
import React from "react";
import NewBrand from "../../new/page";

const Update = async ({ params: { id } }) => {
	const data = await getData(`brands/${id}`);
	console.log(data);
	return <NewBrand initialData={data} isUpdate={true} />;
};

export default Update;
