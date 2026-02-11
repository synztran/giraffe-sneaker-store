"use client";

import { Shield, Star } from "lucide-react";

export default function RankCard() {
	return (
		<div className="bg-black text-white dark:bg-primary dark:text-black p-10 relative overflow-hidden">
			<div className="absolute right-[-5%] bottom-[-20%] opacity-10">
				<Star className="w-64 h-64 rotate-12" />
			</div>
			<div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
				<div>
					<div className="flex items-center gap-2 mb-2">
						<Shield className="w-5 h-5 text-yellow-400 dark:text-black" />
						<span className="text-[10px] font-black uppercase tracking-[0.3em]">
							Giraffe Rewards Member
						</span>
					</div>
					<h3 className="text-4xl font-black italic tracking-tighter uppercase mb-2">
						1,500{" "}
						<span className="text-lg not-italic font-extrabold tracking-normal opacity-70">
							G-Points
						</span>
					</h3>
					<p className="text-sm opacity-70 font-semibold">
						Bạn đang ở hạng{" "}
						<strong className="text-yellow-400 dark:text-white uppercase font-black">
							Vàng
						</strong>
						. Tận hưởng đặc quyền ngay!
					</p>
				</div>
				<div className="flex gap-4">
					<button className="bg-white text-black dark:bg-black dark:text-white px-8 py-3 text-[10px] font-black uppercase tracking-widest hover:opacity-90 transition-opacity">
						Đổi quà ngay
					</button>
					<button className="border border-white/20 dark:border-black/20 px-8 py-3 text-[10px] font-black uppercase tracking-widest hover:bg-white/10 dark:hover:bg-black/10 transition-colors">
						Lịch sử điểm
					</button>
				</div>
			</div>
		</div>
	);
}
