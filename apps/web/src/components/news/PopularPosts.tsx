"use client";

import Image from "next/image";

interface PopularPost {
	id: number;
	title: string;
	thumbnail: string;
	date: string;
}

const popularPosts: PopularPost[] = [
	{
		id: 1,
		title: "Lịch phát hành giày Yeezy tháng 6/2024",
		thumbnail:
			"https://lh3.googleusercontent.com/aida-public/AB6AXuBQqFnWCvBJvMgQ3IJY9i3Y945BAFwEfDmgnfHeEX82DjTl0UfZ_e4RLnEu2HnWEYDxpkVw6KpZF6gEyrNuICkL5LxBppww6WKmX1SoJzAZB06ol-aWf2Sf9NYxvUY2I0Zo6tdbC5P2y4DK2FOr_Dd86RNjhN08FQR3JFgg4BVLnVHgERiMOIXU4V7PUZBWa1xokp87FadWY9fGDmqv2RIEMqBryacpNZYs87whO0lLNFANIGp_ADM7uE1b7xpYyLMA0BU6RJzLEYnR",
		date: "24.05.2024",
	},
	{
		id: 2,
		title: "Cách phân biệt Nike Fake vs Real chuẩn nhất",
		thumbnail:
			"https://lh3.googleusercontent.com/aida-public/AB6AXuDetyETCy-RG3R1ZKqdCgV7r_tUiTBQRqa64ir2zSBqw76adxNCnUdE3JmRbpZKqlg2QGplNGF20AP3YMHHfFRb_415Cxv7pmyjXbLm3o3IEhF6NNhbgXCqFgj28wvgY9MMlHP8OeohgSI3HXBjQNbJUCDOl6ko_ZB4etXqELOogha2KHDYLF-sqYrnMbgSvBDtd-RzMJkwDatXcEGNC4tOfjuocRKlRNa9OLf7eV2C9opCDRamFkJXEM8Ld4PkvbbEESFnhpi3-mwY",
		date: "20.05.2024",
	},
	{
		id: 3,
		title: "Gợi ý phối đồ với Sneaker trắng cực chất",
		thumbnail:
			"https://lh3.googleusercontent.com/aida-public/AB6AXuD0RfG4t4cfMOzku1wayG135i17y64qrsnUTdcTrxPYrWcHV0BpbCw13hnyMQnA7pq9wHiqXm4Lyy6Q7qOkAnXd7kvdrz_ipCV0c0Ff1aidmTO-bRjhF593v2bUMe0iu-LhRJvabUPHVHP-XsxaYoRQNE-OGgi2lF-DY0EPYFb8hFG0RVbG7QwS_ZghN7AqaoEv5VRmP0jer25u4PjIqy8nRonwhsA6OrBGnTqNncVoBouqFbrlMtWbp93gNjRFkOOJr80RgSFMKZSd",
		date: "18.05.2024",
	},
];

export default function PopularPosts() {
	return (
		<section>
			<h2 className="text-xl font-bold border-l-4 border-primary pl-4 mb-6 font-montserrat uppercase">
				Xem nhiều nhất
			</h2>
			<div className="space-y-6">
				{popularPosts.map((post) => (
					<a
						key={post.id}
						className="flex gap-4 group cursor-pointer"
						href="#">
						<div className="w-20 h-20 flex-shrink-0 overflow-hidden rounded-lg bg-slate-100 dark:bg-slate-800 relative">
							<Image
								src={post.thumbnail}
								alt={post.title}
								fill
								className="object-cover group-hover:scale-110 transition-transform"
							/>
						</div>
						<div className="flex flex-col justify-center">
							<span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
								{post.date}
							</span>
							<h4 className="text-sm font-bold leading-snug group-hover:text-primary transition-colors">
								{post.title}
							</h4>
						</div>
					</a>
				))}
			</div>
		</section>
	);
}
