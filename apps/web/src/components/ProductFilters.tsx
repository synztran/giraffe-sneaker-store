"use client";

import { ChevronUp } from "lucide-react";

interface ProductFiltersProps {
	selectedSizes: number[];
	onSizeChange: (size: number) => void;
	selectedCategories: Record<string, boolean>;
	onCategoryChange: (category: string, checked: boolean) => void;
	selectedBrands: Record<string, boolean>;
	onBrandChange: (brand: string, checked: boolean) => void;
}

export default function ProductFilters({
	selectedSizes,
	onSizeChange,
	selectedCategories,
	onCategoryChange,
	selectedBrands,
	onBrandChange,
}: ProductFiltersProps) {
	return (
		<aside className="w-full lg:w-64 flex-shrink-0 space-y-8">
			{/* Categories */}
			<div>
				<h3 className="text-sm font-bold uppercase tracking-wider mb-4 flex justify-between items-center">
					Danh mục
					<ChevronUp className="w-4 h-4" />
				</h3>
				<div className="space-y-2">
					<label className="flex items-center group cursor-pointer">
						<input
							checked={selectedCategories.sneakers}
							onChange={(e) =>
								onCategoryChange("sneakers", e.target.checked)
							}
							className="rounded border-slate-300 text-[#E67E22] focus:ring-[#E67E22]"
							type="checkbox"
						/>
						<span className="ml-3 text-sm font-medium text-slate-600 dark:text-slate-400 group-hover:text-[#E67E22] transition-colors">
							Giày Sneakers (112)
						</span>
					</label>
					<label className="flex items-center group cursor-pointer">
						<input
							checked={selectedCategories.clothing}
							onChange={(e) =>
								onCategoryChange("clothing", e.target.checked)
							}
							className="rounded border-slate-300 text-[#E67E22] focus:ring-[#E67E22]"
							type="checkbox"
						/>
						<span className="ml-3 text-sm font-medium text-slate-600 dark:text-slate-400 group-hover:text-[#E67E22] transition-colors">
							Quần áo (8)
						</span>
					</label>
					<label className="flex items-center group cursor-pointer">
						<input
							checked={selectedCategories.accessories}
							onChange={(e) =>
								onCategoryChange(
									"accessories",
									e.target.checked,
								)
							}
							className="rounded border-slate-300 text-[#E67E22] focus:ring-[#E67E22]"
							type="checkbox"
						/>
						<span className="ml-3 text-sm font-medium text-slate-600 dark:text-slate-400 group-hover:text-[#E67E22] transition-colors">
							Phụ kiện (4)
						</span>
					</label>
				</div>
			</div>

			{/* Brands */}
			<div>
				<h3 className="text-sm font-bold uppercase tracking-wider mb-4 flex justify-between items-center">
					Thương hiệu
					<ChevronUp className="w-4 h-4" />
				</h3>
				<div className="space-y-2">
					<label className="flex items-center group cursor-pointer">
						<input
							checked={selectedBrands.brandA}
							onChange={(e) =>
								onBrandChange("brandA", e.target.checked)
							}
							className="rounded border-slate-300 text-[#E67E22] focus:ring-[#E67E22]"
							type="checkbox"
						/>
						<span className="ml-3 text-sm font-medium text-slate-600 dark:text-slate-400 group-hover:text-[#E67E22] transition-colors">
							Thương hiệu A
						</span>
					</label>
					<label className="flex items-center group cursor-pointer">
						<input
							checked={selectedBrands.brandB}
							onChange={(e) =>
								onBrandChange("brandB", e.target.checked)
							}
							className="rounded border-slate-300 text-[#E67E22] focus:ring-[#E67E22]"
							type="checkbox"
						/>
						<span className="ml-3 text-sm font-medium text-slate-600 dark:text-slate-400 group-hover:text-[#E67E22] transition-colors">
							Thương hiệu B
						</span>
					</label>
					<label className="flex items-center group cursor-pointer">
						<input
							checked={selectedBrands.brandC}
							onChange={(e) =>
								onBrandChange("brandC", e.target.checked)
							}
							className="rounded border-slate-300 text-[#E67E22] focus:ring-[#E67E22]"
							type="checkbox"
						/>
						<span className="ml-3 text-sm font-medium text-slate-600 dark:text-slate-400 group-hover:text-[#E67E22] transition-colors">
							Thương hiệu C
						</span>
					</label>
				</div>
			</div>

			{/* Size */}
			<div>
				<h3 className="text-sm font-bold uppercase tracking-wider mb-4">
					Kích thước
				</h3>
				<div className="grid grid-cols-3 gap-2">
					{[38, 39, 40, 41, 42, 43].map((size) => (
						<button
							key={size}
							onClick={() => onSizeChange(size)}
							className={`py-2 border rounded text-xs font-bold transition-all ${
								selectedSizes.includes(size)
									? "border-[#E67E22] bg-[#E67E22]/10 text-[#E67E22]"
									: "border-slate-200 dark:border-slate-700 hover:border-[#E67E22] hover:text-[#E67E22]"
							}`}>
							{size}
						</button>
					))}
				</div>
			</div>

			{/* Price Range */}
			<div>
				<h3 className="text-sm font-bold uppercase tracking-wider mb-4">
					Khoảng giá (VND)
				</h3>
				<div className="px-2">
					<div className="h-1 bg-slate-200 dark:bg-slate-700 rounded-full relative">
						<div className="absolute h-full bg-[#E67E22] left-1/4 right-1/4"></div>
						<div className="absolute w-4 h-4 bg-white border-2 border-[#E67E22] rounded-full top-1/2 -translate-y-1/2 left-1/4 -ml-2 shadow-sm"></div>
						<div className="absolute w-4 h-4 bg-white border-2 border-[#E67E22] rounded-full top-1/2 -translate-y-1/2 right-1/4 -mr-2 shadow-sm"></div>
					</div>
					<div className="flex justify-between mt-4 text-xs font-bold text-slate-500">
						<span>2.000.000₫</span>
						<span>15.000.000₫</span>
					</div>
				</div>
			</div>

			<button className="w-full py-3 bg-slate-900 dark:bg-slate-700 text-white rounded-lg text-sm font-bold hover:bg-black transition-colors uppercase tracking-widest">
				Áp dụng bộ lọc
			</button>
			<button className="w-full py-2 text-slate-500 text-xs font-bold hover:text-[#E67E22] underline transition-colors">
				Xóa tất cả
			</button>
		</aside>
	);
}
