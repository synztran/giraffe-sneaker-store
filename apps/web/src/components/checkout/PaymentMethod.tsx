"use client";

import { Banknote, CreditCard, Wallet } from "lucide-react";
import { useState } from "react";

export default function PaymentMethod() {
	const [selectedPayment, setSelectedPayment] = useState("card");

	return (
		<section className="space-y-0 pt-12 border-t border-slate-100 dark:border-slate-800">
			<div className="flex items-center gap-3 mb-6">
				<span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
					3
				</span>
				<h2 className="text-xl font-bold uppercase tracking-tight">
					Phương thức thanh toán
				</h2>
			</div>
			<div className="space-y-4">
				<div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
					<button
						onClick={() => setSelectedPayment("card")}
						className={`flex flex-col items-center justify-center gap-2 px-4 py-6 rounded-xl font-bold text-xs uppercase transition-all ${
							selectedPayment === "card"
								? "bg-primary text-white shadow-lg shadow-primary/20"
								: "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800"
						}`}>
						<CreditCard className="w-6 h-6" />
						Thẻ Tín Dụng
					</button>
					<button
						onClick={() => setSelectedPayment("transfer")}
						className={`flex flex-col items-center justify-center gap-2 px-4 py-6 rounded-xl font-bold text-xs uppercase transition-all ${
							selectedPayment === "transfer"
								? "bg-primary text-white shadow-lg shadow-primary/20"
								: "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800"
						}`}>
						<Banknote className="w-6 h-6" />
						Chuyển Khoản
					</button>
					<button
						onClick={() => setSelectedPayment("wallet")}
						className={`flex flex-col items-center justify-center gap-2 px-4 py-6 rounded-xl font-bold text-xs uppercase transition-all ${
							selectedPayment === "wallet"
								? "bg-primary text-white shadow-lg shadow-primary/20"
								: "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800"
						}`}>
						<Wallet className="w-6 h-6" />
						Ví Điện Tử
					</button>
				</div>
				<div className="p-5 bg-primary/5 dark:bg-primary/10 border border-primary/10 dark:border-primary/20 rounded-xl">
					<p className="text-xs text-slate-500 dark:text-slate-400 text-center italic">
						Bạn sẽ được chuyển hướng đến cổng thanh toán bảo mật để
						hoàn tất giao dịch.
					</p>
				</div>
			</div>
		</section>
	);
}
