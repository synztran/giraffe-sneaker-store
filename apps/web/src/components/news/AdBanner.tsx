"use client";

import Image from "next/image";

export default function AdBanner() {
	return (
		<div className="relative overflow-hidden rounded-xl bg-slate-900 group aspect-square">
			<Image
				src="https://lh3.googleusercontent.com/aida-public/AB6AXuCp3sNFJxOAlN2t0tzpl51zVTRdZ84s05f-RxaJpNQPFVUjk8EZeGkcEBW9bewJk8jEELXe5s-DnRplkPr9FpsWX0kajMLlnxfTTZr7Mnz_HJdgulEMvEkRyifYfjrQ-KZb9E5kbZ-dyQpnXo79LaxUkglUOSXxnULRQ1SgBKbbPKW3tSBX65MxG36G32mum2GO7SrCe1HhKi2B551TFYDv_c_b1UPODwud5utURcgtn0IX4z-7eV5seBrQE9UGOCoFyuQMl2Jy7io-"
				alt="Ad Banner"
				fill
				className="object-cover opacity-60 group-hover:scale-110 transition-transform duration-1000"
			/>
			<div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
				<h3 className="text-white font-bold text-2xl mb-2 font-montserrat">
					BST HÈ 2024
				</h3>
				<p className="text-white/80 text-sm mb-6 uppercase tracking-widest">
					Giảm đến 30%
				</p>
				<a
					href="#"
					className="px-6 py-2 bg-white text-slate-900 text-xs font-bold rounded-full hover:bg-primary hover:text-white transition-colors">
					Mua ngay
				</a>
			</div>
		</div>
	);
}
