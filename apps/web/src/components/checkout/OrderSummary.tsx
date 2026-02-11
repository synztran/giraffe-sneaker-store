"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const cartItems = [
	{
		id: 1,
		name: "Air Jordan 1 Retro High 'University Blue'",
		size: "10.5 US",
		quantity: 1,
		price: 6125000,
		image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAuwBN9b04XdUHDtEuWZFGQub4Tbi4TAnZY1tz5k-Jn_I80fSeFYt8VZw7Hg0mdIP3XvIt4p1NBDx5CeSsQL1uAcOOCGRGRlP_k-kfzyNFiNWp-ofpv2OC-36er71NEScLffn6ClK4J9agRlalHF4ssKVZVIX8NhIEGJAzxCY153qGyXXs7rGT3CbsKFrQ-GE1xRSIQyBde1yCMzC2kdEi0O8TeB4NYP3G4hYCMj6nINbDTNwU9Z3OZfo3HE9zvuZ0qJpLgBRRmeVVa",
	},
	{
		id: 2,
		name: "Essential Streetwear Tee 'Oversized'",
		size: "XL",
		quantity: 1,
		price: 1625000,
		image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCO3AhvmOeRgGoRMp5Jd7a9pWvXCV_c2Nj6xVJTYBgE3-D_UgRFGUdlRHLIzdreQ-KvbjalqWZiRa-iPlI0xwGIR3OjJov46AbkH9Y9AIv2jUlkZKczIi3pVBrj9fi4Thiqv20FFigrirhcY-8kMcRJeiU1iMzNr18Lp3a_AQuEpDdxA0Mnm3-YCsqv0N8hKxT5mqOx7bj25xLy7pEvfeVN_Sa1P3NX4fYrOzaU0VkS-Sdc1ajrE3aRBlWsALJmqkpDuSeKNQKou_X_",
	},
];

export default function OrderSummary() {
	const [discountCode, setDiscountCode] = useState("");
	const subtotal = cartItems.reduce(
		(sum, item) => sum + item.price * item.quantity,
		0,
	);
	const tax = subtotal * 0.08;
	const total = subtotal + tax;

	return (
		<div className="sticky top-24 space-y-6">
			{/* Order Summary Card */}
			<div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm">
				<h2 className="text-xl font-bold uppercase tracking-tight mb-6">
					Tóm tắt đơn hàng
				</h2>

				{/* Cart Items */}
				<div className="space-y-4 mb-8">
					{cartItems.map((item) => (
						<div key={item.id} className="flex gap-4">
							<div className="relative w-20 h-20 bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden flex-shrink-0">
								<Image
									src={item.image}
									alt={item.name}
									fill
									priority={false}
									className="object-cover"
								/>
							</div>
							<div className="flex-grow">
								<h4 className="font-bold text-sm uppercase leading-tight">
									{item.name}
								</h4>
								<p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
									Size: {item.size} • SL: {item.quantity}
								</p>
								<p className="font-bold text-sm mt-2">
									{item.price.toLocaleString("vi-VN")}₫
								</p>
							</div>
						</div>
					))}
				</div>

				{/* Discount Code */}
				<div className="flex gap-2 mb-8">
					<input
						value={discountCode}
						onChange={(e) => setDiscountCode(e.target.value)}
						className="flex-grow bg-slate-50 dark:bg-slate-800 border-0 rounded-lg focus:ring-2 focus:ring-primary px-4 py-2 text-sm dark:text-white dark:placeholder:text-slate-500"
						placeholder="Mã giảm giá"
						type="text"
					/>
					<button className="bg-slate-900 dark:bg-slate-700 text-white px-4 py-2 rounded-lg text-sm font-bold uppercase hover:bg-slate-800 dark:hover:bg-slate-600 transition-colors">
						Áp dụng
					</button>
				</div>

				{/* Totals */}
				<div className="space-y-3 border-t border-slate-100 dark:border-slate-800 pt-6">
					<div className="flex justify-between text-sm">
						<span className="text-slate-500 dark:text-slate-400">
							Tạm tính
						</span>
						<span className="font-medium dark:text-white">
							{subtotal.toLocaleString("vi-VN")}₫
						</span>
					</div>
					<div className="flex justify-between text-sm">
						<span className="text-slate-500 dark:text-slate-400">
							Phí vận chuyển
						</span>
						<span className="font-medium text-primary">
							Miễn phí
						</span>
					</div>
					<div className="flex justify-between text-sm">
						<span className="text-slate-500 dark:text-slate-400">
							Thuế dự kiến
						</span>
						<span className="font-medium dark:text-white">
							{Math.round(tax).toLocaleString("vi-VN")}₫
						</span>
					</div>
					<div className="flex justify-between text-lg font-bold border-t border-slate-100 dark:border-slate-800 pt-3 mt-3">
						<span className="uppercase tracking-tight">
							Tổng cộng
						</span>
						<span className="text-primary">
							{Math.round(total).toLocaleString("vi-VN")}₫
						</span>
					</div>
				</div>

				{/* Complete Order Button */}
				<button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl mt-8 flex items-center justify-center gap-2 uppercase tracking-widest text-sm transition-all shadow-lg shadow-primary/20">
					Hoàn tất đặt hàng
					<ArrowRight className="w-5 h-5" />
				</button>

				{/* Terms */}
				<p className="text-[10px] text-center text-slate-400 dark:text-slate-500 mt-6 leading-relaxed uppercase tracking-wider">
					Bằng cách nhấn &quot;Hoàn tất đặt hàng&quot;, bạn đồng ý với{" "}
					<a
						href="#"
						className="underline hover:text-slate-600 dark:hover:text-slate-300">
						Điều khoản Dịch vụ
					</a>{" "}
					và{" "}
					<a
						href="#"
						className="underline hover:text-slate-600 dark:hover:text-slate-300">
						Chính sách Bảo mật
					</a>{" "}
					của chúng tôi.
				</p>
			</div>

			{/* Security Badge */}
			<div className="bg-primary/5 dark:bg-primary/10 border border-primary/10 dark:border-primary/20 rounded-xl p-4 flex items-center gap-4">
				<div className="bg-primary/20 dark:bg-primary/30 p-2 rounded-lg flex-shrink-0">
					<svg
						className="w-5 h-5 text-primary"
						fill="currentColor"
						viewBox="0 0 24 24">
						<path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
					</svg>
				</div>
				<div>
					<p className="text-xs font-bold uppercase tracking-tight text-primary">
						Thanh toán an toàn 100%
					</p>
					<p className="text-[11px] text-slate-500 dark:text-slate-400">
						Mã hóa thanh toán với công nghệ SSL 256-bit.
					</p>
				</div>
			</div>
		</div>
	);
}
