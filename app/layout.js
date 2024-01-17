import { Inter } from "next/font/google";
import "../styles/main.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Inventory Management Ststem",
	description: "Easy and simple system",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
