"use client";

import { AtSign, Camera, Facebook } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import HeaderLogo from "./HeaderLogo";

export default function Footer() {
	const pathname = usePathname();
	const isShorterVersion = ["/checkout", "/cart"].includes(pathname);

	if (isShorterVersion) {
		return (
			<footer className="mt-20 border-t border-gray-100 dark:border-slate-800 py-12 bg-white dark:bg-slate-900">
				<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
					<div className="flex items-center gap-12 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
						<Link
							href="#"
							className="hover:text-black dark:hover:text-white transition-colors">
							Liên hệ
						</Link>
						<Link
							href="#"
							className="hover:text-black dark:hover:text-white transition-colors">
							Vận chuyển
						</Link>
						<Link
							href="#"
							className="hover:text-black dark:hover:text-white transition-colors">
							Đổi trả
						</Link>
						<Link
							href="#"
							className="hover:text-black dark:hover:text-white transition-colors">
							Chính sách bảo mật
						</Link>
					</div>

					<div className="flex gap-6">
						<Link
							href="#"
							className="w-10 h-10 rounded-full border border-gray-200 dark:border-slate-700 flex items-center justify-center hover:bg-accent hover:text-white hover:border-accent dark:hover:border-accent transition-all dark:text-white">
							<Facebook className="w-4 h-4" />
						</Link>
						<Link
							href="#"
							className="w-10 h-10 rounded-full border border-gray-200 dark:border-slate-700 flex items-center justify-center hover:bg-accent hover:text-white hover:border-accent dark:hover:border-accent transition-all dark:text-white">
							<Camera className="w-4 h-4" />
						</Link>
						<Link
							href="#"
							className="w-10 h-10 rounded-full border border-gray-200 dark:border-slate-700 flex items-center justify-center hover:bg-accent hover:text-white hover:border-accent dark:hover:border-accent transition-all dark:text-white">
							<AtSign className="w-4 h-4" />
						</Link>
					</div>

					<p className="text-[10px] font-black text-gray-400 dark:text-slate-500 uppercase tracking-widest">
						© 2024 GIRAFFE SNEAKER. BẢN QUYỀN ĐƯỢC BẢO LƯU.
					</p>
				</div>
			</footer>
		);
	}

	return (
		<footer className="bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-slate-800 pt-20 pb-10">
			<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
				{/* Logo & Description Section */}
				<div className="col-span-1 lg:col-span-2">
					<HeaderLogo />

					<p className="text-gray-500 dark:text-slate-400 text-[11px] font-medium uppercase tracking-widest leading-loose max-w-xs mb-8">
						Nền tảng phân phối giày Sneaker và trang phục Streetwear
						chính hãng với triết lý &quot;Stand Tall, Walk
						Bold&quot;.
					</p>

					<div className="flex gap-4">
						<Link
							href="#"
							className="w-10 h-10 border border-black dark:border-slate-700 flex items-center justify-center hover:bg-accent hover:border-accent dark:hover:border-accent transition-all dark:text-white">
							<Facebook className="w-5 h-5" />
						</Link>
						<Link
							href="#"
							className="w-10 h-10 border border-black dark:border-slate-700 flex items-center justify-center hover:bg-accent hover:border-accent dark:hover:border-accent transition-all dark:text-white">
							<Camera className="w-5 h-5" />
						</Link>
						<Link
							href="#"
							className="w-10 h-10 border border-black dark:border-slate-700 flex items-center justify-center hover:bg-accent hover:border-accent dark:hover:border-accent transition-all dark:text-white">
							<AtSign className="w-5 h-5" />
						</Link>
					</div>
				</div>

				{/* Products Section */}
				<div>
					<h5 className="font-black text-[11px] uppercase tracking-[0.2em] mb-8 border-b border-accent pb-2 inline-block dark:text-white">
						Sản phẩm
					</h5>
					<ul className="space-y-4 text-[10px] font-extrabold uppercase tracking-[0.15em] text-gray-400">
						<li>
							<Link
								href="/products"
								className="hover:text-black dark:hover:text-white transition-colors">
								Giày mới nhất
							</Link>
						</li>
						<li>
							<Link
								href="#"
								className="hover:text-black dark:hover:text-white transition-colors">
								Trang phục
							</Link>
						</li>
						<li>
							<Link
								href="#"
								className="hover:text-black dark:hover:text-white transition-colors">
								Phụ kiện
							</Link>
						</li>
						<li>
							<Link
								href="#"
								className="hover:text-black dark:hover:text-white transition-colors">
								Ưu đãi đặc biệt
							</Link>
						</li>
					</ul>
				</div>

				{/* Policies Section */}
				<div>
					<h5 className="font-black text-[11px] uppercase tracking-[0.2em] mb-8 border-b border-accent pb-2 inline-block dark:text-white">
						Chính sách
					</h5>
					<ul className="space-y-4 text-[10px] font-extrabold uppercase tracking-[0.15em] text-gray-400">
						<li>
							<Link
								href="#"
								className="hover:text-black dark:hover:text-white transition-colors">
								Vận chuyển
							</Link>
						</li>
						<li>
							<Link
								href="#"
								className="hover:text-black dark:hover:text-white transition-colors">
								Đổi trả
							</Link>
						</li>
						<li>
							<Link
								href="#"
								className="hover:text-black dark:hover:text-white transition-colors">
								Bảo mật
							</Link>
						</li>
						<li>
							<Link
								href="#"
								className="hover:text-black dark:hover:text-white transition-colors">
								Ký gửi sản phẩm
							</Link>
						</li>
					</ul>
				</div>

				{/* Contact Section */}
				<div>
					<h5 className="font-black text-[11px] uppercase tracking-[0.2em] mb-8 border-b border-accent pb-2 inline-block dark:text-white">
						Liên hệ
					</h5>
					<ul className="space-y-4 text-[10px] font-extrabold uppercase tracking-[0.15em] text-gray-400">
						<li>TP. Hồ Chí Minh</li>
						<li>Hotline: 1900 xxxx</li>
						<li>Email: hello@giraffesneaker.vn</li>
						<li>Mở cửa: 09:00 - 22:00</li>
					</ul>
				</div>
			</div>

			{/* Bottom Copyright Section */}
			<div className="max-w-7xl mx-auto px-6 pt-8 border-t border-gray-100 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
				<p>© 2024 GIRAFFE SNEAKER STORE. ALL RIGHTS RESERVED.</p>
				<div className="flex gap-8">
					<Link
						href="#"
						className="hover:text-black dark:hover:text-white transition-colors">
						Quyền riêng tư
					</Link>
					<Link
						href="#"
						className="hover:text-black dark:hover:text-white transition-colors">
						Điều khoản
					</Link>
				</div>
			</div>
		</footer>
	);
}
