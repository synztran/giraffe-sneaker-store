"use client";

import { Shield } from "lucide-react";

export default function SecuritySection() {
	return (
		<div className="bg-white dark:bg-black border border-slate-200 dark:border-white/10 p-8 shadow-sm">
			<div className="flex flex-col md:flex-row items-center justify-between gap-6">
				<div className="flex items-center gap-6">
					<div className="h-14 w-14 bg-slate-50 dark:bg-white/5 flex items-center justify-center rounded">
						<Shield className="w-7 h-7 text-black dark:text-primary" />
					</div>
					<div>
						<h3 className="font-black uppercase tracking-widest text-sm text-slate-900 dark:text-white mb-1">
							Mật khẩu & Bảo mật
						</h3>
						<p className="text-[11px] text-slate-500 font-semibold">
							Lần cuối thay đổi mật khẩu: 3 tháng trước
						</p>
					</div>
				</div>
				<button className="w-full md:w-auto text-black dark:text-white font-black text-[10px] uppercase tracking-[0.2em] border-2 border-black dark:border-white/20 px-10 py-3 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all">
					Thiết lập lại
				</button>
			</div>
		</div>
	);
}
