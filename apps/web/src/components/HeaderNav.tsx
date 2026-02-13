"use client";

import Link from "next/link";

export default function HeaderNav() {
	return (
		<div className="hidden lg:flex items-center gap-8 text-[11px] font-bold uppercase tracking-[0.15em] text-black dark:text-white">
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
			<Link href="#" className="hover:text-accent transition-colors">
				Ký gửi
			</Link>
			<Link href="#" className="hover:text-accent transition-colors">
				Phụ kiện
			</Link>
			<Link href="/news" className="hover:text-accent transition-colors">
				Tin tức
			</Link>
		</div>
	);
}
