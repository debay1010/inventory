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
		title: "Item Groups",
		href: "/inventory/inventory/",
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
		link: "#",
		linkTitle: "New Item",
		enabled: true,
		icon: Shirt,
	},
	{
		title: "Item Groups",
		description:
			"Create multiple variant of the same item using the same Item Group",
		link: "/new",
		linkTitle: "New Item Group",
		enabled: true,
		icon: Boxes,
	},

	{
		title: "Composite Items ",
		description: "Bundle different items together and sell them as kits",
		link: "#",
		linkTitle: "New Composite Item",
		enabled: true,
		icon: Component,
	},

	{
		title: "Price List ",
		description:
			"Tweak your item price for spcific contacts or transactions",
		link: "#",
		linkTitle: "New  Price List",
		enabled: false,
		icon: ScrollText,
	},
];
