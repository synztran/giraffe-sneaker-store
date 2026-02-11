"use client";

import { Facebook, Instagram, Mail, Youtube } from "lucide-react";

const socials = [
	{ icon: Facebook, label: "Facebook", href: "#" },
	{ icon: Instagram, label: "Instagram", href: "#" },
	{ icon: Youtube, label: "YouTube", href: "#" },
	{ icon: Mail, label: "Email", href: "#" },
];

export default function SocialLinks() {
	return (
		<section>
			<h2 className="text-xl font-bold border-l-4 border-primary pl-4 mb-6 font-montserrat uppercase">
				Kết nối với chúng tôi
			</h2>
			<div className="grid grid-cols-4 gap-2">
				{socials.map((social) => {
					const Icon = social.icon;
					return (
						<a
							key={social.label}
							href={social.href}
							className="aspect-square flex items-center justify-center bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-primary hover:text-white transition-all">
							<Icon className="w-6 h-6" />
						</a>
					);
				})}
			</div>
		</section>
	);
}
