import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

const SalesActCard = ({ item }) => {
	return (
		<Link href="/">
			<div className="flex flex-col justify-evenly items-center w-44 h-44 bg-white hover:border-blue-300 border hover:shadow-md shadow-sm rounded-lg">
				<h2 className={`${item.color} font-semibold text-4xl`}>
					{item.number}
				</h2>
				{/* <p className=" text-slate-500 text-sm">{item.unit}</p> */}
				<div className=" flex space-x-2">
					<CheckCircle2 className="w-3 h-3" />
					<p className="text-slate-500  text-xs">{item.title}</p>
				</div>
			</div>
		</Link>
	);
};

export default SalesActCard;
