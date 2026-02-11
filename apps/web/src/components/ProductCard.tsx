"use client";

import { Heart, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
	id: number;
	name: string;
	category: string;
	price: string;
	image: string;
	tag?: string;
	tagColor?: string;
}

export default function ProductCard({
	id,
	name,
	category,
	price,
	image,
	tag,
	tagColor,
}: ProductCardProps) {
	return (
		<Link href={`/products/${id}`}>
			<div className="product-card group bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-100 dark:border-slate-800 transition-all hover:shadow-xl cursor-pointer">
				<div className="relative aspect-square overflow-hidden bg-slate-50 dark:bg-slate-800">
					<Image
						className="product-image w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
						alt={name}
						src={image}
						width={400}
						height={400}
					/>
					{tag && (
						<span
							className={`absolute top-4 left-4 ${tagColor} text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider`}>
							{tag}
						</span>
					)}
					<button
						onClick={(e) => e.preventDefault()}
						className="absolute top-4 right-4 w-8 h-8 bg-white/80 backdrop-blur rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white">
						<Heart className="text-slate-900 w-4 h-4" />
					</button>
				</div>
				<div className="p-5">
					<p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-1">
						{category}
					</p>
					<h3 className="font-bold text-sm text-slate-900 dark:text-white leading-tight mb-2 group-hover:text-[#E67E22] transition-colors min-h-[2.5rem]">
						{name}
					</h3>
					<div className="flex items-center justify-between mt-4">
						<span className="text-lg font-black text-slate-900 dark:text-white">
							{price}
						</span>
						<button
							onClick={(e) => e.preventDefault()}
							className="w-10 h-10 bg-[#E67E22]/10 text-[#E67E22] rounded-lg flex items-center justify-center hover:bg-[#E67E22] hover:text-white transition-all">
							<ShoppingCart className="w-5 h-5" />
						</button>
					</div>
				</div>
			</div>
		</Link>
	);
}
