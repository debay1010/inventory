import { getData } from "@/lib/getData";
import React from "react";
import NewItem from "../../new/page";

const Update = async ({ params: { id } }) => {
	const data = await getData(`items/${id}`);
	console.log(data);
	return <NewItem initialData={data} isUpdate={true} />;
};

export default Update;
