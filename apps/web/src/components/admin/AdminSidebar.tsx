"use client";

import {
	BarChart3,
	LayoutDashboard,
	Package,
	Settings,
	ShoppingCart,
	Users,
} from "lucide-react";
import Image from "next/image";

interface AdminSidebarProps {
	activeSection: string;
	onSectionChange: (section: string) => void;
}

const menuItems = [
	{
		id: "dashboard",
		label: "Bảng điều khiển",
		icon: LayoutDashboard,
	},
	{
		id: "products",
		label: "Quản lý sản phẩm",
		icon: Package,
	},
	{
		id: "orders",
		label: "Đơn hàng",
		icon: ShoppingCart,
	},
	{
		id: "customers",
		label: "Khách hàng",
		icon: Users,
	},
	{
		id: "reports",
		label: "Báo cáo",
		icon: BarChart3,
	},
];

export default function AdminSidebar({
	activeSection,
	onSectionChange,
}: AdminSidebarProps) {
	return (
		<aside className="w-64 bg-slate-900 text-slate-300 hidden lg:flex flex-col sticky top-0 h-screen border-r border-slate-800">
			{/* Logo */}
			<div className="p-6 flex items-center gap-3">
				<div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white">
					<Package className="w-6 h-6" />
				</div>
				<span className="text-xl font-bold tracking-tight text-white uppercase">
					Giraffe<span className="text-primary">.</span>
				</span>
			</div>

			{/* Main Navigation */}
			<nav className="flex-1 mt-6 px-4 space-y-1">
				{menuItems.map((item) => {
					const Icon = item.icon;
					const isActive = activeSection === item.id;
					return (
						<button
							key={item.id}
							onClick={() => onSectionChange(item.id)}
							className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
								isActive
									? "bg-primary/10 text-white border-l-4 border-primary"
									: "hover:bg-slate-800"
							}`}>
							<Icon className="w-5 h-5" />
							<span className="font-medium">{item.label}</span>
						</button>
					);
				})}
			</nav>

			{/* System Section */}
			<div className="px-4 space-y-1">
				<p className="px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
					Hệ thống
				</p>
				<button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-800 transition-colors">
					<Settings className="w-5 h-5" />
					<span className="font-medium">Cài đặt</span>
				</button>
			</div>

			{/* User Profile */}
			<div className="p-4 mt-auto border-t border-slate-800">
				<div className="flex items-center gap-3 px-2">
					<div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
						<Image
							src="https://lh3.googleusercontent.com/aida-public/AB6AXuDU0ICZXB_Ft4BQiRV-y2pn_16g7oWu_xHmFv_tqcFuGmL9jEjezjzntui7BcY8dAUSCFo4CUyXrFZpRXWQXB9akPMYGlCcwcRdow1MM92Bu7ZR2zd75UhEc0Anx0DBTq-Zm8IMQ8wANz3xarfoqYpMlaKIkE3DlU0CCOlHEolrWQQUwu-MCAoABQ3bDKaILf5MOY34qLoLWUE13J0QtvkMfDqPAmaRP5v0ldy7HipgjRUqDVIq1RIW7_qveCDyyKWHzb8QPe_v6_6V"
							alt="Admin Avatar"
							fill
							className="object-cover"
						/>
					</div>
					<div className="flex flex-col min-w-0">
						<span className="text-sm font-semibold text-white truncate">
							Admin Giraffe
						</span>
						<span className="text-xs text-slate-500 truncate">
							Quản trị viên
						</span>
					</div>
				</div>
			</div>
		</aside>
	);
}
