import { getData } from "@/lib/getData";
import React from "react";
import NewCategory from "../../new/page";

const Update = async ({ params: { id } }) => {
	const data = await getData(`categories/${id}`);
	console.log(data);
	return <NewCategory initialData={data} isUpdate={true} />;
};

export default Update;
