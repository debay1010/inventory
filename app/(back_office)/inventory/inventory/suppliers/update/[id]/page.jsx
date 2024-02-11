import { getData } from "@/lib/getData";
import React from "react";
import NewSupplier from "../../new/page";

const Update = async ({ params: { id } }) => {
	const data = await getData(`suppliers/${id}`);
	console.log(data);
	return <NewSupplier initialData={data} isUpdate={true} />;
};

export default Update;
