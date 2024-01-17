import React from "react";
import Link from "next/link";

const SubscriptionCard = () => {
	return (
		<>
			<div className="p-3 mb-5  flex-col rounded-lg mx-1 bg-slate-900">
				<p className="text-sm border-l-2 px-3 border-orange-200 border-solid  ">
					Your <span className="font-bold">premium's</span> plan
					expires in{" "}
					<span className="text-orange-400 text-sm">13 days</span>
				</p>
				<div className=" space-x-2 text-sm mt-2 pt-1 flex justify-between  border-t rounded-lg border-slate-600">
					<button className=" pl-1  ">Change Plan</button>
					<Link
						href="#"
						className=" px-5 border-l-2 border-slate-600  "
					>
						Upgrade
					</Link>
				</div>
			</div>
		</>
	);
};

export default SubscriptionCard;
