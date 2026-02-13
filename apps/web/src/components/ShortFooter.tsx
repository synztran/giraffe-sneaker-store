import { AtSign, Camera, Facebook } from "lucide-react";
import Link from "next/link";

export default function ShortFooter() {
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
