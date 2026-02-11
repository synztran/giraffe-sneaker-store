"use client";

import { Heart, Search, ShoppingCart, Star, User } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
	const [cartCount] = useState(0);

	return (
		<>
			{/* Top Banner */}
			<div className="bg-black text-white py-2.5 px-6 text-center text-[10px] font-bold uppercase tracking-[0.25em]">
				<span className="text-accent">GIRAFFE EXCLUSIVE:</span> MIỄN PHÍ
				VẬN CHUYỂN CHO ĐƠN HÀNG TỪ 2.000.000 ₫
			</div>

			{/* Main Navbar */}
			<nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
				<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
					<div className="flex items-center gap-12">
						<Link
							href="/"
							className="flex items-center gap-2 group">
							<div className="flex flex-col items-center justify-center bg-black p-1.5 transition-colors group-hover:bg-accent">
								<Star className="text-white w-6 h-6 font-bold" />
							</div>
							<div className="flex flex-col leading-none">
								<span className="text-xl font-black tracking-tighter uppercase">
									Giraffe
								</span>
								<span className="text-[9px] font-extrabold tracking-[0.4em] uppercase text-accent">
									Sneaker
								</span>
							</div>
						</Link>

						<div className="hidden lg:flex items-center gap-8 text-[11px] font-bold uppercase tracking-[0.15em]">
							<Link
								href="/products"
								className="hover:text-accent transition-colors">
								Sản phẩm mới
							</Link>
							<Link
								href="/products"
								className="hover:text-accent transition-colors">
								Thương hiệu
							</Link>
							<Link
								href="#"
								className="hover:text-accent transition-colors">
								Ký gửi
							</Link>
							<Link
								href="#"
								className="hover:text-accent transition-colors">
								Phụ kiện
							</Link>
							<Link
								href="/news"
								className="hover:text-accent transition-colors">
								Tin tức
							</Link>
						</div>
					</div>

					<div className="flex items-center gap-6">
						<div className="hidden md:flex items-center bg-gray-50 px-4 py-2 w-64 border border-gray-100 focus-within:border-accent transition-all">
							<Search className="text-gray-400 w-5 h-5" />
							<input
								className="bg-transparent border-none focus:ring-0 text-[10px] w-full placeholder:text-gray-400 uppercase tracking-widest font-medium"
								placeholder="Tìm kiếm sneaker..."
								type="text"
							/>
						</div>

						<div className="flex items-center gap-2">
							<button className="p-2 hover:text-accent transition-colors">
								<Heart className="w-5 h-5" />
							</button>
							<Link
								href="/cart"
								className="p-2 hover:text-accent transition-colors relative">
								<ShoppingCart className="w-5 h-5" />
								<span className="absolute top-1 right-1 bg-accent text-black text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-black">
									{cartCount}
								</span>
							</Link>
							<button className="p-2 hover:text-accent transition-colors">
								<User className="w-5 h-5" />
							</button>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
}
