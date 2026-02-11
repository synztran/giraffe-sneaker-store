import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700", "800", "900"],
	variable: "--font-montserrat",
});

export const metadata: Metadata = {
	title: "GIRAFFE SNEAKER | Premium Sneaker Store",
	description:
		"Stand Tall. Walk Bold. - Nền tảng phân phối giày Sneaker và trang phục Streetwear chính hãng",
};

import ThemeProvider from "@/components/ThemeProvider";
import Head from "next/head";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="vi" suppressHydrationWarning>
			<Head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
			</Head>
			<body className={montserrat.className}>
				<ThemeProvider>{children}</ThemeProvider>
			</body>
		</html>
	);
}
