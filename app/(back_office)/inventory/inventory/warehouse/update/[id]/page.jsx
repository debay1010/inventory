import { getData } from "@/lib/getData";
import React from "react";
import NewWarehouse from "../../new/page";

const Update = async ({ params: { id } }) => {
	const data = await getData(`warehouse/${id}`);
	console.log(data);
	return <NewWarehouse initialData={data} isUpdate={true} />;
};

export default Update;
