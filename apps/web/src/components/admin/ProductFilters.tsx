"use client";

import { Filter, Search } from "lucide-react";
import { useState } from "react";

interface ProductFiltersProps {
	onSearch?: (query: string) => void;
}

export default function ProductFilters({ onSearch }: ProductFiltersProps) {
	const [searchQuery, setSearchQuery] = useState("");

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		const query = e.target.value;
		setSearchQuery(query);
		onSearch?.(query);
	};

	return (
		<div className="p-6 border-b border-slate-200 dark:border-slate-800 flex flex-col lg:flex-row gap-4 lg:items-center justify-between">
			{/* Search Input */}
			<div className="relative max-w-sm w-full">
				<Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
				<input
					type="text"
					value={searchQuery}
					onChange={handleSearch}
					className="w-full pl-10 pr-4 py-2 border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none dark:text-white dark:placeholder:text-slate-500"
					placeholder="Tìm kiếm sản phẩm, SKU..."
				/>
			</div>

			{/* Filter Dropdowns */}
			<div className="flex flex-wrap items-center gap-3">
				<select className="border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-4 py-2 rounded-lg text-sm text-slate-600 dark:text-slate-300 focus:ring-2 focus:ring-primary outline-none transition-all">
					<option>Danh mục</option>
					<option>Giày chạy bộ</option>
					<option>Giày Lifestyle</option>
					<option>Phụ kiện</option>
				</select>

				<select className="border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-4 py-2 rounded-lg text-sm text-slate-600 dark:text-slate-300 focus:ring-2 focus:ring-primary outline-none transition-all">
					<option>Trạng thái</option>
					<option>Còn hàng</option>
					<option>Sắp hết hàng</option>
					<option>Hết hàng</option>
				</select>

				<select className="border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-4 py-2 rounded-lg text-sm text-slate-600 dark:text-slate-300 focus:ring-2 focus:ring-primary outline-none transition-all">
					<option>Thương hiệu</option>
					<option>Nike</option>
					<option>Adidas</option>
					<option>Puma</option>
				</select>

				<button className="flex items-center gap-2 px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors dark:text-slate-300">
					<Filter className="w-4 h-4" />
					Lọc khác
				</button>
			</div>
		</div>
	);
}
