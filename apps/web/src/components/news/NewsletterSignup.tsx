"use client";

import { Mail } from "lucide-react";

export default function NewsletterSignup() {
	return (
		<section className="bg-primary/5 dark:bg-primary/10 p-8 rounded-xl border border-primary/20 dark:border-primary/30">
			<div className="text-center mb-6">
				<Mail className="w-12 h-12 text-primary mb-4 mx-auto" />
				<h2 className="text-xl font-bold mb-2 font-montserrat">
					Đăng ký nhận tin
				</h2>
				<p className="text-sm text-slate-600 dark:text-slate-400">
					Đừng bỏ lỡ các thông tin về đợt sale lớn và ra mắt sản phẩm
					mới sớm nhất.
				</p>
			</div>
			<form className="space-y-3">
				<input
					className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-transparent dark:text-white dark:placeholder:text-slate-500 transition-all"
					placeholder="Email của bạn..."
					type="email"
				/>
				<button
					className="w-full py-3 bg-primary text-white font-bold rounded-lg hover:bg-blue-700 transition-colors uppercase tracking-widest text-xs"
					type="submit">
					Đăng ký ngay
				</button>
			</form>
			<p className="mt-4 text-[10px] text-center text-slate-400">
				Bằng việc đăng ký, bạn đồng ý với Chính sách bảo mật của chúng
				tôi.
			</p>
		</section>
	);
}
