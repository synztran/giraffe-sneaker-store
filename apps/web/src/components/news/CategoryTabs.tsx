"use client";

import { useState } from "react";

const categories = ["Tất cả", "Xu hướng", "Review giày", "Sự kiện"];

interface CategoryTabsProps {
	onCategoryChange?: (category: string) => void;
}

export default function CategoryTabs({ onCategoryChange }: CategoryTabsProps) {
	const [activeCategory, setActiveCategory] = useState("Tất cả");

	const handleCategoryClick = (category: string) => {
		setActiveCategory(category);
		onCategoryChange?.(category);
	};

	return (
		<div className="flex flex-wrap gap-4 mb-10 border-b border-slate-200 dark:border-slate-800 pb-4">
			{categories.map((category) => (
				<button
					key={category}
					onClick={() => handleCategoryClick(category)}
					className={`px-4 py-2 text-sm font-bold uppercase tracking-wider transition-colors ${
						activeCategory === category
							? "border-b-2 border-primary text-primary"
							: "text-slate-500 hover:text-primary border-b-2 border-transparent"
					}`}>
					{category}
				</button>
			))}
		</div>
	);
}
