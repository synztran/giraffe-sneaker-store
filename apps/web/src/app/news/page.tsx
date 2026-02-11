import Footer from "@/components/Footer";
import Header from "@/components/Header";
import AdBanner from "@/components/news/AdBanner";
import CategoryTabs from "@/components/news/CategoryTabs";
import FeaturedNews from "@/components/news/FeaturedNews";
import NewsletterSignup from "@/components/news/NewsletterSignup";
import PopularPosts from "@/components/news/PopularPosts";
import PostCard from "@/components/news/PostCard";
import SocialLinks from "@/components/news/SocialLinks";

// Mock blog posts data
const blogPosts = [
	{
		id: 1,
		title: "Top 5 phối màu Sneaker không thể bỏ lỡ trong mùa Thu 2024",
		image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDHo1Fq1iuGdFdXO5_CZO2vH9AKIis8fLSHrbeslSDJWq2gc5Q2xDz3FDq3GNWy8h1E1IE8bkzcB7TQXV90jN8R9A0YAegxvPY2UvW2p2HhMqVLTJZnC-jusKQnCDjd-RLA--IiMHI0s2Cg3xPJOCBKFlnnrV0BN2SyasSHokxVrAodOboN2rDInlRNv5K3Bi_b5XFqTOYQbnP1QaXTH4f3jBPMlPN6BM0UeJDNqGboENk8HsevttSNt5uI80nMRP12-cmUuSbl4tx5",
		category: "Xu hướng",
		excerpt:
			"Dự báo xu hướng màu sắc từ các sàn diễn thời trang đường phố lớn nhất tại Paris và New York.",
		href: "#",
	},
	{
		id: 2,
		title: "Trải nghiệm Nike Air Max 90: Có còn thực sự êm ái sau 30 năm?",
		image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB5D6CLuUcHXbha0ayktULcSLIRgATUX5--ZPCzY3mc02FnQ1MuJwtk7TKVDmeWrnK9V15n09bYrAmcjsEYzOTG4y2jVtAPQejSal4rVNL1zlWnYOqBgHgdmE0pi4NX9q4R5s_QrNgFhgqbKswug0hYoYnSiTV9aj50RSqzYkI0O85do_BAPLl8IjV86aM5GW18YGw4Rbg9O92MWxvFREpQFqpNdVMLRXdbkK2HptEmoaVLit4V6cc1g6-bV7OPn712-rc-RY7H8qrd",
		category: "Review giày",
		excerpt:
			"Bài phân tích chuyên sâu về công nghệ Air và độ bền của dòng giày biểu tượng đến từ nhà Nike.",
		href: "#",
	},
	{
		id: 3,
		title: "Hà Nội Sneaker Fest 2024: Nơi hội tụ của hàng ngàn đầu giày",
		image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBae-cAQnHtpcuwVekHNLYVimN9g3iO-ZKPzx7gJnHzE9Nk6YCRbIpotEsZH8-17SbD8qA_JRTn_T9UUN9eR9m5udHCEhGpqSeC-6AZ5m-OtpyAn4vPF3xfC0PJbtjLe6LqT_CVNVYnKA2UrpXpUR2OY9wEjyg2aD0-YK0Cwm7joUA18AdcEowN5UYkBKdszl6B2nq_FXI5KbTN50xUSmXcNHBBGMSDMz3Ugu6zdaTMD8Drxe7b7Ym_l5P5xNDWeZBBwGigRarA4LcB",
		category: "Sự kiện",
		excerpt:
			"Tổng hợp những hình ảnh ấn tượng và những đôi giày giá trị nhất xuất hiện tại sự kiện vừa qua.",
		href: "#",
	},
	{
		id: 4,
		title: "Học cách vệ sinh giày Suede (da lộn) đúng cách tại nhà",
		image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD4yr6Q8BcaLOks9pPJfmVNAU-xFpxWxkumaJ5MQzODpQKV0ZvaVC9pOxhPOvrEqlhRh3oZa7jfXiT_TaBCGCLC5ENzfQiOMe9lzqucDWfDKuKEj_Bj8hmkhRe_o9cW93PEIrXPm0nfrocKvy8wcNy1gZpZWg748QCP2xP9DUFa3jeoqckpivcO_lGV265MWKSuhx6uxZddZWmmRlE9sMeVNQNzAgXggAoa8_BSS8Yp6EM7cYrOCGdjfN30V5QnvS6eTEKbsB4LKJaE",
		category: "Review giày",
		excerpt:
			"Hướng dẫn chi tiết từng bước để đôi giày của bạn luôn như mới mà không làm hỏng chất liệu da.",
		href: "#",
	},
];

export default function NewsPage() {
	return (
		<div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col">
			<Header />

			<main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				{/* Featured News Section */}
				<FeaturedNews />

				<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
					{/* Main Content Area */}
					<div className="lg:col-span-8">
						{/* Category Tabs */}
						<CategoryTabs />

						{/* Blog Grid */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							{blogPosts.map((post) => (
								<PostCard
									key={post.id}
									title={post.title}
									image={post.image}
									category={post.category}
									excerpt={post.excerpt}
									href={post.href}
								/>
							))}
						</div>

						{/* Pagination */}
						<div className="mt-12 flex justify-center">
							<nav className="flex items-center gap-2">
								<a
									href="#"
									className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-primary hover:text-white transition-colors font-bold">
									1
								</a>
								<a
									href="#"
									className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-white font-bold">
									2
								</a>
								<a
									href="#"
									className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-primary hover:text-white transition-colors font-bold">
									3
								</a>
								<span className="px-2">...</span>
								<a
									href="#"
									className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-primary hover:text-white transition-colors">
									<svg
										className="w-5 h-5"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M9 5l7 7-7 7"
										/>
									</svg>
								</a>
							</nav>
						</div>
					</div>

					{/* Sidebar */}
					<aside className="lg:col-span-4 space-y-12">
						<PopularPosts />
						<NewsletterSignup />
						<SocialLinks />
						<AdBanner />
					</aside>
				</div>
			</main>

			<Footer />
		</div>
	);
}
