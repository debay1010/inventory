import { getData } from "@/lib/getData";
import React from "react";
import NewUnit from "../../new/page";

const Update = async ({ params: { id } }) => {
	const data = await getData(`units/${id}`);
	console.log(data);
	return <NewUnit initialData={data} isUpdate={true} />;
};

export default Update;
