"use client";

import { Bell, Plus } from "lucide-react";

interface AdminHeaderProps {
	title: string;
	subtitle?: string;
	showAddButton?: boolean;
	onAddClick?: () => void;
}

export default function AdminHeader({
	title,
	subtitle,
	showAddButton = true,
	onAddClick,
}: AdminHeaderProps) {
	const sectionMap: Record<string, string> = {
		dashboard: "Bảng điều khiển",
		products: "Quản lý sản phẩm",
		orders: "Quản lý đơn hàng",
		customers: "Quản lý khách hàng",
		reports: "Báo cáo",
		settings: "Cài đặt",
	};

	return (
		<header className="h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-8 z-10">
			{/* Left - Breadcrumb */}
			<div className="flex items-center gap-2 text-sm">
				<span className="text-slate-400">Trang chủ</span>
				<span className="text-slate-400">/</span>
				<span className="font-medium text-slate-600 dark:text-slate-300">
					{sectionMap[title] || title}
				</span>
				{subtitle && (
					<>
						<span className="text-slate-400">/</span>
						<span className="font-medium text-slate-600 dark:text-slate-300">
							{subtitle}
						</span>
					</>
				)}
			</div>

			{/* Right - Notification & Add Button */}
			<div className="flex items-center gap-6">
				{/* Notification */}
				<button className="relative p-2 text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition-colors">
					<Bell className="w-5 h-5" />
					<span className="absolute top-1 right-1 w-2 h-2 bg-red-600 rounded-full"></span>
				</button>

				{/* Add Button */}
				{showAddButton && (
					<button
						onClick={onAddClick}
						className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
						<Plus className="w-4 h-4" />
						Thêm sản phẩm
					</button>
				)}
			</div>
		</header>
	);
}
