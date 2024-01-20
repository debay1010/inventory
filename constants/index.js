"use client";
import { Boxes, Component, ScrollText, Shirt } from "lucide-react";

export const dbNavLinks = [
	{
		title: "Dashboard",
		href: "/inventory/home/dashboard",
	},
	{
		title: "Getting Started",
		href: "/inventory/home/gettingStarted",
	},
	{
		title: "Recent Update",
		href: "/inventory/home/recentUpdates",
	},
	{
		title: "Announcements",
		href: "/inventory/home/announcements",
	},
];

export const salesActivity = [
	{
		title: "TO BE PACKED",
		unit: "Qty",
		number: "50",
		color: "text-blue-400",
		href: "#",
	},
	{
		title: "TO BE SHIPPED",
		unit: "Pkgs",
		number: "90",
		color: "text-red-400",
		href: "#",
	},
	{
		title: "TO BE DELIVERED",
		unit: "Pkgs",
		number: "10",
		color: "text-green-400",
		href: "#",
	},
	{
		title: "TO BE INVOICED",
		unit: "Qty",
		number: "15",
		color: "text-orange-400",
		href: "#",
	},
];
export const inventorySummary = [
	{
		title: "QUANTITY IN HAND",
		number: "10",
	},
	{
		title: "QUANTITY TO BE RECEIVED",
		number: "15",
	},
];
export const inventorySubMenu = [
	{
		title: "Items",
		href: "/inventory/inventory",
	},
	{
		title: "Brands",
		href: "/inventory/inventory/brands/new",
	},
	{
		title: "Categories",
		href: "/inventory/inventory/categories/new",
	},
	{
		title: "Units",
		href: "/inventory/inventory/units/new",
	},
	{
		title: "Warehouse",
		href: "/inventory/inventory/warehouse/new",
	},
	{
		title: "Inventory Adjustments",
		href: "/inventory/inventory/adjustments",
	},
];
export const salesSubMenu = [
	{
		title: "Credit Notes",
		href: "/inventory/sales/creditNotes",
	},
	{
		title: "Customers",
		href: "/inventory/sales/customers",
	},
	{
		title: "Invoices",
		href: "/inventory/sales/invoices",
	},
	{
		title: "Packages",
		href: "/inventory/sales/packages",
	},
	{
		title: "Payments Received",
		href: "/inventory/sales/paymentsReceived",
	},
	{
		title: "Sales Order",
		href: "/inventory/sales/salesOrder",
	},
	{
		title: "Sales Receipts",
		href: "/inventory/sales/salesReceipts",
	},
	{
		title: "Sales Returns",
		href: "/inventory/sales/salesReturns",
	},
	{
		title: "Shipments",
		href: "/inventory/sales/shipments",
	},
];

export const itemCardOptions = [
	{
		title: "Item ",
		description:
			"Create standalone items and sercives that you buy and sell",
		link: "/inventory/inventory/items/new",

		linkTitle: "New Item",
		enabled: true,
		icon: Shirt,
	},
	{
		title: "Units",
		description: "Unit, of measurement of the product and services",
		link: "/inventory/inventory/units/new",
		linkTitle: "New Unit",
		enabled: true,
		icon: Boxes,
	},

	{
		title: "Brands ",
		description: "Brands of different items. ",
		link: "/inventory/inventory/brands/new",
		linkTitle: "New Brand",
		enabled: true,
		icon: Component,
	},

	{
		title: "Warehouse",
		description: "Diffent wwrehouses that house diffenet products",
		link: "/inventory/inventory/warehouse/new",
		linkTitle: "New  Warehouse",
		enabled: true,
		icon: ScrollText,
	},
	{
		title: "Category",
		description: "Categories of products",
		link: "/inventory/inventory/categories/new",
		linkTitle: "New  Category",
		enabled: true,
		icon: ScrollText,
	},
];
