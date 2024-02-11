import { Pencil, Trash2 } from "lucide-react";
import React from "react";
import DeleteBtn from "./DeleteBtn";

const DataTable = ({ data = [], columns = [], resourceTitle }) => {
	return (
		<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
			{data.length > 0 ? (
				<table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
					<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
						<tr>
							{columns.map((col, i) => (
								<th key={i} scope="col" className="px-6 py-3">
									{col}
								</th>
							))}
							<th scope="col" className="px-6 py-3">
								Actions
							</th>
						</tr>
					</thead>

					<tbody>
						{data.map((item, i) => {
							return (
								<tr
									key={i}
									className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
								>
									{/* {columns.map((col, i) => {
									return (
										<td key={i} className="px-6 py-4">
											{item[col]}
										</td>
									);
								})} */}

									{columns.map((col, i) => (
										<td key={i} className="px-6 py-4 ">
											{/* if the column name includes a dot, it's a nested */}
											{/* object.Access the nested key using reduce */}
											{col.includes(".") ? (
												col
													.split(".")
													.reduce(
														(obj, key) => obj[key],
														item
													)
											) : col === "createdAt" ||
											  col === "updatedAt" ? (
												new Date(
													item[col]
												).toLocaleDateString()
											) : col === "imageUrl" ? (
												<img
													src={item[col]}
													alt={`${resourceTitle} image`}
													className="w-10 h-10 object-cover rounded-full"
												/>
											) : (
												item[col]
											)}
										</td>
									))}

									<td className="px-6 py-4 text-right flex gap-3">
										{resourceTitle.includes(
											"adjustments"
										) ? (
											""
										) : (
											<a
												href={`/inventory/inventory/${resourceTitle}/update/${item.id}`}
												className="font-medium text-blue-600 dark:text-blue-500 flex items-center space-x-1"
											>
												<Pencil className="w-4 h-4" />
												<span>Edit</span>
											</a>
										)}

										{/* <button className="font-medium text-red-600 dark:text-blue-500 flex items-center space-x-1">
										<Trash2 className="w-4 h-4" />
										<span>Delete</span>
									</button> */}
										<DeleteBtn
											id={item.id}
											endpoint={resourceTitle}
										/>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			) : (
				<p className="p-4 text-xl bg-white mb-4 text-center">
					There is no data to display
				</p>
			)}
		</div>
	);
};

export default DataTable;
