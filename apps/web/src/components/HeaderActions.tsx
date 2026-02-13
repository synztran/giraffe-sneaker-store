"use client";

import { Heart, Moon, ShoppingCart, Sun, User } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import SearchInput from "./SearchInput";

export default function HeaderActions() {
	const [cartCount] = useState(0);
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

	return (
		<div className="flex items-center gap-6">
			{/* Search */}
			<SearchInput placeholder="Tìm kiếm sneaker..." />

			{/* Actions */}
			<div className="flex items-center gap-2">
				{/* Wishlist */}
				<button className="p-2 text-black dark:text-white hover:text-accent transition-colors">
					<Heart className="w-5 h-5" />
				</button>

				{/* Cart */}
				<Link
					href="/cart"
					className="p-2 text-black dark:text-white hover:text-accent transition-colors relative">
					<ShoppingCart className="w-5 h-5" />
					<span className="absolute top-1 right-1 bg-accent text-black text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-black">
						{cartCount}
					</span>
				</Link>

				{/* Account */}
				<Link
					href="/account"
					className="p-2 text-black dark:text-white hover:text-accent transition-colors">
					<User className="w-5 h-5" />
				</Link>

				{/* Theme Toggle */}
				{mounted && (
					<button
						onClick={toggleTheme}
						className="p-2 text-black dark:text-white hover:text-accent transition-colors"
						aria-label="Toggle theme">
						{isDark ? (
							<Sun className="w-5 h-5 text-yellow-500" />
						) : (
							<Moon className="w-5 h-5 text-blue-600" />
						)}
					</button>
				)}
			</div>
		</div>
	);
}
