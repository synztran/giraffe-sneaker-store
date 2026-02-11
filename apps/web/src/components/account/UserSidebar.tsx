"use client";

import {
	Heart,
	LogOut,
	MapPin,
	ShoppingBasket,
	Ticket,
	User,
	Zap,
} from "lucide-react";
import Image from "next/image";

export default function UserSidebar() {
	return (
		<aside className="w-full lg:w-72 shrink-0 mb-10 lg:mb-0">
			<div className="bg-white dark:bg-black border border-slate-200 dark:border-white/10 shadow-sm">
				{/* Profile Header */}
				<div className="p-8 border-b border-slate-200 dark:border-white/10 text-center">
					<div className="relative inline-block mb-4">
						<div className="h-20 w-20 rounded-full overflow-hidden mx-auto ring-4 ring-slate-50 dark:ring-white/5 relative">
							<Image
								src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7NoRck_--sZ_jiyh7ft8Yupo6raykWY4Z3jhGKPsegy13RdaP6V75HV-mpAhlryXBcaRgb2RO250d1YhNZPXy-MriWSpRGBmUym28WdD3p7whT_3vwGqZrxjzfLpp5eRBm8xmaeDaDu38apOpALRuUNv59sKdg3U7endip5JZPpQyJ0QwBZiWdbSCkW-2Q61sQXFaJHueC7S12M7IATgEt-dxgNtfEqTZ_sMf_wl5UMWH2OUKfBjw-nTLajTLr1wgSG8snDeqOsPG"
								alt="User Avatar"
								fill
								className="object-cover"
							/>
						</div>
						<div className="absolute -bottom-1 -right-1 bg-yellow-400 h-6 w-6 rounded-full flex items-center justify-center border-2 border-white dark:border-black">
							<Zap className="w-3 h-3 text-white font-bold" />
						</div>
					</div>
					<div>
						<h2 className="font-extrabold text-lg text-slate-900 dark:text-white tracking-tight">
							Nguyễn Thành Trung
						</h2>
						<div className="mt-2 inline-block px-3 py-1 bg-yellow-400/10 border border-yellow-400/20 rounded-full">
							<span className="text-[9px] font-black uppercase tracking-widest bg-gradient-to-r from-yellow-700 to-yellow-400 bg-clip-text text-transparent">
								Thành viên Vàng
							</span>
						</div>
					</div>

					{/* Rank Progress */}
					<div className="mt-8 space-y-3">
						<div className="flex justify-between items-end text-[9px] font-black uppercase tracking-widest">
							<span className="text-slate-400">
								Hành trình hạng
							</span>
							<span className="text-slate-900 dark:text-white">
								85%
							</span>
						</div>
						<div className="h-1.5 w-full bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden">
							<div
								className="h-full bg-gradient-to-r from-yellow-600 to-yellow-400"
								style={{ width: "85%" }}></div>
						</div>
						<p className="text-[10px] text-slate-500 leading-normal font-medium">
							Tích lũy thêm{" "}
							<span className="font-bold text-black dark:text-white">
								500 điểm
							</span>{" "}
							để nâng cấp{" "}
							<span className="font-bold text-slate-400">
								Thành viên Kim Cương
							</span>
						</p>
					</div>
				</div>

				{/* Navigation Menu */}
				<nav className="p-4 flex flex-col gap-1">
					<a
						href="#"
						className="flex items-center justify-between px-4 py-3 bg-white dark:bg-black/50 border-l-4 border-primary text-[10px] uppercase tracking-widest transition-all group text-slate-900 dark:text-primary font-bold">
						<div className="flex items-center gap-3">
							<User className="w-5 h-5" />
							<span>Hồ sơ cá nhân</span>
						</div>
					</a>
					<a
						href="#"
						className="flex items-center justify-between px-4 py-3 text-slate-500 dark:text-slate-400 hover:text-black dark:hover:text-primary text-[10px] uppercase tracking-widest transition-all group">
						<div className="flex items-center gap-3">
							<ShoppingBasket className="w-5 h-5" />
							<span>Đơn hàng</span>
						</div>
					</a>
					<a
						href="#"
						className="flex items-center justify-between px-4 py-3 text-slate-500 dark:text-slate-400 hover:text-black dark:hover:text-primary text-[10px] uppercase tracking-widest transition-all group">
						<div className="flex items-center gap-3">
							<Ticket className="w-5 h-5" />
							<span>Voucher của tôi</span>
						</div>
					</a>
					<a
						href="#"
						className="flex items-center justify-between px-4 py-3 text-slate-500 dark:text-slate-400 hover:text-black dark:hover:text-primary text-[10px] uppercase tracking-widest transition-all group">
						<div className="flex items-center gap-3">
							<MapPin className="w-5 h-5" />
							<span>Địa chỉ nhận hàng</span>
						</div>
					</a>
					<a
						href="#"
						className="flex items-center justify-between px-4 py-3 text-slate-500 dark:text-slate-400 hover:text-black dark:hover:text-primary text-[10px] uppercase tracking-widest transition-all group">
						<div className="flex items-center gap-3">
							<Heart className="w-5 h-5" />
							<span>Yêu thích</span>
						</div>
					</a>

					<div className="border-t border-slate-200 dark:border-white/10 my-4"></div>

					<a
						href="#"
						className="flex items-center gap-3 px-4 py-3 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 text-[10px] uppercase tracking-widest font-black transition-all group">
						<LogOut className="w-5 h-5" />
						<span>Đăng xuất</span>
					</a>
				</nav>
			</div>
		</aside>
	);
}
