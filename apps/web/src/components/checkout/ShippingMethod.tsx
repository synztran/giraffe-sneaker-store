"use client";

import { useState } from "react";

export default function ShippingMethod() {
	const [selectedShipping, setSelectedShipping] = useState("standard");

	return (
		<section className="space-y-0 pt-12 border-t border-slate-100 dark:border-slate-800">
			<div className="flex items-center gap-3 mb-6">
				<span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
					2
				</span>
				<h2 className="text-xl font-bold uppercase tracking-tight">
					Phương thức vận chuyển
				</h2>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				<label
					className={`relative flex flex-col p-5 bg-white dark:bg-slate-900 border-2 rounded-xl cursor-pointer transition-all ${
						selectedShipping === "standard"
							? "border-primary"
							: "border-slate-200 dark:border-slate-800"
					}`}
					onClick={() => setSelectedShipping("standard")}>
					<input
						type="radio"
						name="delivery"
						value="standard"
						checked={selectedShipping === "standard"}
						onChange={() => setSelectedShipping("standard")}
						className="sr-only"
					/>
					<div className="flex justify-between items-start mb-2">
						<span className="font-bold text-slate-900 dark:text-white uppercase tracking-tighter">
							Tiêu chuẩn
						</span>
						<span className="text-primary font-bold">Miễn phí</span>
					</div>
					<p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
						Giao hàng trong 3-5 ngày làm việc.
					</p>
					{selectedShipping === "standard" && (
						<div className="absolute -top-2 -right-2 text-primary z-10 bg-white">
							<svg
								className="w-6 h-6 fill-current"
								viewBox="0 0 24 24">
								<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
							</svg>
						</div>
					)}
				</label>

				<label
					className={`relative flex flex-col p-5 bg-white dark:bg-slate-900 border-2 rounded-xl cursor-pointer transition-all hover:border-primary/50 ${
						selectedShipping === "express"
							? "border-primary"
							: "border-slate-200 dark:border-slate-800"
					}`}
					onClick={() => setSelectedShipping("express")}>
					<input
						type="radio"
						name="delivery"
						value="express"
						checked={selectedShipping === "express"}
						onChange={() => setSelectedShipping("express")}
						className="sr-only"
					/>
					<div className="flex justify-between items-start mb-2">
						<span className="font-bold text-slate-900 dark:text-white uppercase tracking-tighter">
							Hỏa tốc
						</span>
						<span className="text-slate-900 dark:text-white font-bold">
							350.000₫
						</span>
					</div>
					<p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
						Giao hàng trong 1-2 ngày làm việc.
					</p>
					{selectedShipping === "express" && (
						<div className="absolute -top-2 -right-2 text-primary z-10 bg-white">
							<svg
								className="w-6 h-6 fill-current"
								viewBox="0 0 24 24">
								<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
							</svg>
						</div>
					)}
				</label>
			</div>
		</section>
	);
}
