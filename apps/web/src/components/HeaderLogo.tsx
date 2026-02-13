"use client";

import Link from "next/link";

export default function HeaderLogo() {
	return (
		<Link
			href="/"
			className="text-2xl font-black tracking-tighter text-[#E67E22]">
			GIRAFFE
			<span className="text-slate-900 dark:text-white">.SNEAKER</span>
		</Link>
	);
}
