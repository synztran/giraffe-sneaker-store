"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
	const [isDark, setIsDark] = useState(false);
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
		// Check current theme
		const isDarkMode = document.documentElement.classList.contains("dark");
		setIsDark(isDarkMode);
	}, []);

	const toggleTheme = () => {
		if (document.documentElement.classList.contains("dark")) {
			document.documentElement.classList.remove("dark");
			localStorage.setItem("theme", "light");
			setIsDark(false);
		} else {
			document.documentElement.classList.add("dark");
			localStorage.setItem("theme", "dark");
			setIsDark(true);
		}
	};

	if (!mounted) return null;

	return (
		<button
			onClick={toggleTheme}
			className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
			aria-label="Toggle theme">
			{isDark ? (
				<Sun className="w-5 h-5 text-yellow-500" />
			) : (
				<Moon className="w-5 h-5 text-blue-600" />
			)}
		</button>
	);
}
