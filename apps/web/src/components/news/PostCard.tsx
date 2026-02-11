"use client";

import { ChevronRight } from "lucide-react";
import Image from "next/image";

interface PostCardProps {
	title: string;
	image: string;
	category: string;
	excerpt: string;
	href?: string;
}

export default function PostCard({
	title,
	image,
	category,
	excerpt,
	href = "#",
}: PostCardProps) {
	return (
		<article className="group">
			<div className="overflow-hidden rounded-lg mb-4 aspect-[4/3] bg-slate-200 dark:bg-slate-800 relative">
				<Image
					src={image}
					alt={title}
					fill
					className="object-cover group-hover:scale-110 transition-transform duration-500"
				/>
			</div>
			<span className="text-xs font-bold text-primary uppercase tracking-widest">
				{category}
			</span>
			<h3 className="mt-2 text-xl font-bold leading-snug group-hover:text-primary transition-colors font-montserrat">
				{title}
			</h3>
			<p className="mt-3 text-slate-600 dark:text-slate-400 text-sm line-clamp-2">
				{excerpt}
			</p>
			<a
				href={href}
				className="mt-4 inline-flex items-center text-sm font-bold text-slate-900 dark:text-white group-hover:underline">
				ĐỌC THÊM <ChevronRight className="text-base ml-1 w-4 h-4" />
			</a>
		</article>
	);
}
