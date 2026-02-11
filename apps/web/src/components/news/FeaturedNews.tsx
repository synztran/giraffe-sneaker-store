"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function FeaturedNews() {
	return (
		<section className="mb-16">
			<div className="relative group overflow-hidden rounded-xl bg-slate-900 aspect-[21/9]">
				<Image
					src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7D8UHRbP6JdAP4KHbavVA2HmrDublSU0notse_0VIVF4GlE95e98n13b-_-MS-M_68ivYtiylfo90DcxX1YrxBfXn6VHJlOTxNxNt_2EhQ9KrbKuXrnxahZZNRON5mchbKOidRpwz4TYiGM61hYPQc-VOhrow0y7lUYF1Qqv3sGFGgrFJWzrU3UfMm04aGedzL98UZ3-uAsvJw0u3FTDmr06CAcc9CAuDMEaU-Sm3RWl4k0FYggzYuVKQYwrfHwJ4oaFKlOCym2L1"
					alt="Featured News"
					fill
					priority
					className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
				<div className="absolute bottom-0 left-0 p-8 md:p-12 max-w-3xl">
					<span className="inline-block px-3 py-1 bg-primary text-white text-xs font-bold uppercase tracking-widest rounded mb-4">
						Tin tức nổi bật
					</span>
					<h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight font-montserrat">
						Cận Cảnh Siêu Phẩm Jordan 1 &quot;Lost & Found&quot; -
						Sự Hồi Sinh Của Một Huyền Thoại
					</h1>
					<p className="text-slate-200 text-lg mb-6 line-clamp-2">
						Đánh giá chi tiết về chất liệu, form dáng và những câu
						chuyện chưa kể đằng sau đôi giày đang làm mưa làm gió
						cộng đồng sneakerhead toàn cầu.
					</p>
					<a
						className="inline-flex items-center px-6 py-3 bg-white text-slate-900 font-bold rounded-lg hover:bg-primary hover:text-white transition-all"
						href="#">
						ĐỌC BÀI VIẾT <ArrowRight className="ml-2 w-4 h-4" />
					</a>
				</div>
			</div>
		</section>
	);
}
