"use client";

import { useEffect, useState } from "react";

export default function ThemeProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		// Check for saved theme preference or system preference
		const savedTheme = localStorage.getItem("theme");
		const prefersDark = window.matchMedia(
			"(prefers-color-scheme: dark)",
		).matches;

		const theme = savedTheme || (prefersDark ? "dark" : "light");

		// Apply theme to html element
		if (theme === "dark") {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}

		setMounted(true);
	}, []);

	if (!mounted) return children;

	return children;
}
