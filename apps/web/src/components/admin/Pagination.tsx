"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
	currentPage?: number;
	totalPages?: number;
	onPageChange?: (page: number) => void;
}

export default function Pagination({
	currentPage = 1,
	totalPages = 257,
	onPageChange,
}: PaginationProps) {
	const getPageNumbers = () => {
		const pages: (number | string)[] = [];

		if (totalPages <= 7) {
			for (let i = 1; i <= totalPages; i++) {
				pages.push(i);
			}
		} else {
			pages.push(1);

			if (currentPage > 3) {
				pages.push("...");
			}

			const startPage = Math.max(2, currentPage - 1);
			const endPage = Math.min(totalPages - 1, currentPage + 1);

			for (let i = startPage; i <= endPage; i++) {
				if (!pages.includes(i)) {
					pages.push(i);
				}
			}

			if (currentPage < totalPages - 2) {
				pages.push("...");
			}

			pages.push(totalPages);
		}

		return pages;
	};

	const handlePageChange = (page: number) => {
		if (onPageChange) {
			onPageChange(page);
		}
	};

	const pages = getPageNumbers();

	return (
		<div className="flex items-center justify-center gap-2 mt-6 flex-wrap">
			<button
				onClick={() => handlePageChange(currentPage - 1)}
				disabled={currentPage === 1}
				className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
				<ChevronLeft className="w-5 h-5" />
			</button>

			{pages.map((page, index) => {
				if (page === "...") {
					return (
						<span
							key={`ellipsis-${index}`}
							className="px-2 text-slate-400">
							...
						</span>
					);
				}

				const isActive = page === currentPage;

				return (
					<button
						key={page}
						onClick={() => handlePageChange(page as number)}
						className={`w-10 h-10 rounded-lg font-semibold text-sm transition-colors ${
							isActive
								? "bg-primary text-white"
								: "border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800"
						}`}>
						{page}
					</button>
				);
			})}

			<button
				onClick={() => handlePageChange(currentPage + 1)}
				disabled={currentPage === totalPages}
				className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
				<ChevronRight className="w-5 h-5" />
			</button>
		</div>
	);
}
