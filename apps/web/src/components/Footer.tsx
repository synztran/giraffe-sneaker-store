import { AtSign, Camera, Facebook, Star } from "lucide-react";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className="bg-white border-t border-gray-100 pt-20 pb-10">
			<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
				<div className="col-span-1 lg:col-span-2">
					<Link
						href="/"
						className="flex items-center gap-2 mb-8 group">
						<div className="flex flex-col items-center justify-center bg-black p-1.5 transition-colors group-hover:bg-accent">
							<Star className="text-white w-6 h-6 font-bold" />
						</div>
						<div className="flex flex-col leading-none">
							<span className="text-2xl font-black tracking-tighter uppercase">
								Giraffe
							</span>
							<span className="text-[10px] font-extrabold tracking-[0.4em] uppercase text-accent">
								Sneaker
							</span>
						</div>
					</Link>

					<p className="text-gray-500 text-[11px] font-medium uppercase tracking-widest leading-loose max-w-xs mb-8">
						Nền tảng phân phối giày Sneaker và trang phục Streetwear
						chính hãng với triết lý &apos;Stand Tall, Walk
						Bold&apos;.
					</p>

					<div className="flex gap-4">
						<Link
							href="#"
							className="w-10 h-10 border border-black flex items-center justify-center hover:bg-accent hover:border-accent transition-all">
							<Facebook className="w-5 h-5" />
						</Link>
						<Link
							href="#"
							className="w-10 h-10 border border-black flex items-center justify-center hover:bg-accent hover:border-accent transition-all">
							<Camera className="w-5 h-5" />
						</Link>
						<Link
							href="#"
							className="w-10 h-10 border border-black flex items-center justify-center hover:bg-accent hover:border-accent transition-all">
							<AtSign className="w-5 h-5" />
						</Link>
					</div>
				</div>

				<div>
					<h5 className="font-black text-[11px] uppercase tracking-[0.2em] mb-8 border-b border-accent pb-2 inline-block">
						Sản phẩm
					</h5>
					<ul className="space-y-4 text-[10px] font-extrabold uppercase tracking-[0.15em] text-gray-400">
						<li>
							<Link
								href="/products"
								className="hover:text-black transition-colors">
								Giày mới nhất
							</Link>
						</li>
						<li>
							<Link
								href="#"
								className="hover:text-black transition-colors">
								Trang phục
							</Link>
						</li>
						<li>
							<Link
								href="#"
								className="hover:text-black transition-colors">
								Phụ kiện
							</Link>
						</li>
						<li>
							<Link
								href="#"
								className="hover:text-black transition-colors">
								Ưu đãi đặc biệt
							</Link>
						</li>
					</ul>
				</div>

				<div>
					<h5 className="font-black text-[11px] uppercase tracking-[0.2em] mb-8 border-b border-accent pb-2 inline-block">
						Chính sách
					</h5>
					<ul className="space-y-4 text-[10px] font-extrabold uppercase tracking-[0.15em] text-gray-400">
						<li>
							<Link
								href="#"
								className="hover:text-black transition-colors">
								Vận chuyển
							</Link>
						</li>
						<li>
							<Link
								href="#"
								className="hover:text-black transition-colors">
								Đổi trả
							</Link>
						</li>
						<li>
							<Link
								href="#"
								className="hover:text-black transition-colors">
								Bảo mật
							</Link>
						</li>
						<li>
							<Link
								href="#"
								className="hover:text-black transition-colors">
								Ký gửi sản phẩm
							</Link>
						</li>
					</ul>
				</div>

				<div>
					<h5 className="font-black text-[11px] uppercase tracking-[0.2em] mb-8 border-b border-accent pb-2 inline-block">
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

			<div className="max-w-7xl mx-auto px-6 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
				<p>© 2024 GIRAFFE SNEAKER STORE. ALL RIGHTS RESERVED.</p>
				<div className="flex gap-8">
					<Link href="#" className="hover:text-black">
						Quyền riêng tư
					</Link>
					<Link href="#" className="hover:text-black">
						Điều khoản
					</Link>
				</div>
			</div>
		</footer>
	);
}
