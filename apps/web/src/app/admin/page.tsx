"use client";

import AdminHeader from "@/components/admin/AdminHeader";
import AdminSidebar from "@/components/admin/AdminSidebar";
import Pagination from "@/components/admin/Pagination";
import ProductFilters from "@/components/admin/ProductFilters";
import ProductTable from "@/components/admin/ProductTable";
import StatsCard from "@/components/admin/StatsCard";
import { AlertCircle, Package, Plus, Sparkles } from "lucide-react";
import { useState } from "react";

export default function AdminPage() {
	const [activeSection, setActiveSection] = useState("products");
	const [currentPage, setCurrentPage] = useState(1);

	const renderContent = () => {
		switch (activeSection) {
			case "dashboard":
				return (
					<div className="space-y-6">
						<div>
							<h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
								Bảng điều khiển
							</h2>
							<p className="text-slate-500 dark:text-slate-400">
								Theo dõi thống kê kinh doanh của bạn
							</p>
						</div>
						{/* Dashboard stats */}
						<div className="grid grid-cols-3 gap-4">
							<StatsCard
								title="Doanh thu tháng"
								value="152,480,000đ"
								trend={{
									value: 12.5,
									label: "từ tháng trước",
									positive: true,
								}}
								icon={<Package className="w-6 h-6" />}
								iconBgColor="bg-blue-100 dark:bg-blue-900/30"
								iconColor="text-blue-600 dark:text-blue-400"
							/>
							<StatsCard
								title="Đơn hàng mới"
								value="324"
								trend={{
									value: 8.2,
									label: "từ tuần trước",
									positive: true,
								}}
								icon={<Package className="w-6 h-6" />}
								iconBgColor="bg-green-100 dark:bg-green-900/30"
								iconColor="text-green-600 dark:text-green-400"
							/>
							<StatsCard
								title="Khách hàng mới"
								value="42"
								trend={{
									value: 3.1,
									label: "từ tuần trước",
									positive: false,
								}}
								icon={<AlertCircle className="w-6 h-6" />}
								iconBgColor="bg-orange-100 dark:bg-orange-900/30"
								iconColor="text-orange-600 dark:text-orange-400"
							/>
						</div>
					</div>
				);

			case "products":
				return (
					<div className="space-y-6">
						<div className="flex items-center justify-between">
							<div>
								<h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
									Quản lý sản phẩm
								</h2>
								<p className="text-slate-500 dark:text-slate-400">
									Quản lý danh sách sản phẩm của bạn
								</p>
							</div>
							<button className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg font-semibold transition-colors">
								<Plus className="w-5 h-5" />
								Thêm sản phẩm
							</button>
						</div>

						{/* Stats */}
						<div className="grid grid-cols-3 gap-4">
							<StatsCard
								title="Tổng sản phẩm"
								value="1,284"
								icon={<Package className="w-6 h-6" />}
								iconBgColor="bg-blue-100 dark:bg-blue-900/30"
								iconColor="text-blue-600 dark:text-blue-400"
							/>
							<StatsCard
								title="Sắp hết hàng"
								value="12"
								icon={<AlertCircle className="w-6 h-6" />}
								iconBgColor="bg-amber-100 dark:bg-amber-900/30"
								iconColor="text-amber-600 dark:text-amber-400"
							/>
							<StatsCard
								title="Sản phẩm mới"
								value="45"
								icon={<Sparkles className="w-6 h-6" />}
								iconBgColor="bg-purple-100 dark:bg-purple-900/30"
								iconColor="text-purple-600 dark:text-purple-400"
							/>
						</div>

						{/* Filters */}
						<div className="bg-white dark:bg-slate-900 rounded-lg p-4 border border-slate-200 dark:border-slate-800">
							<ProductFilters onSearch={() => {}} />
						</div>

						{/* Table */}
						<div className="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 overflow-hidden">
							<ProductTable />
						</div>

						{/* Pagination */}
						<Pagination
							currentPage={currentPage}
							totalPages={257}
							onPageChange={setCurrentPage}
						/>
					</div>
				);

			case "orders":
				return (
					<div>
						<h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
							Quản lý đơn hàng
						</h2>
						<p className="text-slate-500 dark:text-slate-400 mb-6">
							Tính năng này sẽ sớm được phát triển
						</p>
					</div>
				);

			case "customers":
				return (
					<div>
						<h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
							Quản lý khách hàng
						</h2>
						<p className="text-slate-500 dark:text-slate-400 mb-6">
							Tính năng này sẽ sớm được phát triển
						</p>
					</div>
				);

			case "reports":
				return (
					<div>
						<h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
							Báo cáo
						</h2>
						<p className="text-slate-500 dark:text-slate-400 mb-6">
							Tính năng này sẽ sớm được phát triển
						</p>
					</div>
				);

			case "settings":
				return (
					<div>
						<h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
							Cài đặt
						</h2>
						<p className="text-slate-500 dark:text-slate-400 mb-6">
							Tính năng này sẽ sớm được phát triển
						</p>
					</div>
				);

			default:
				return null;
		}
	};

	return (
		<div className="bg-white dark:bg-slate-950 min-h-screen">
			<AdminHeader title={activeSection} />
			<div className="flex">
				{/* Sidebar */}
				<AdminSidebar
					activeSection={activeSection}
					onSectionChange={setActiveSection}
				/>

				{/* Main Content */}
				<main className="flex-1 lg:ml-64 p-6 lg:p-8">
					{renderContent()}
				</main>
			</div>
		</div>
	);
}
