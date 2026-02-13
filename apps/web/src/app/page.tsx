import Footer from "@/components/Footer";
import Header from "@/components/Header";
import {
	BadgeCheck,
	Bell,
	Headset,
	RefreshCw,
	ShoppingBag,
	Truck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	const featuredProducts = [
		{
			id: 1,
			name: "Dunk Low 'Pure Platinum'",
			brand: "Nike",
			price: "4.500.000 ₫",
			image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBwb0iRFcPCiDY0mfHCq8SBTGSkk-pOw7YHj3eA0EJxkZx-RTqwAdHJx2jDaSoNcEIMl7iXMq3fjCPIR68aFR1UafS1aSw7CHRHclOVafoCR1UDuDfrRgAjPCNrqNZqWxRy4ZTd9wIyPiHW1vLjICZLaaV9KXe9OSXtkCL3BRA8Bg2ROMmaLM4ijx0s2CIBGKPpOBZUHRRl3jnip3ky359Vn0oG_VURcRud8HLjXMW96Td4_I0lnF7O-KKyJ0G7wNhNbqWU1z40m97B",
			badge: "Giraffe New",
		},
		{
			id: 2,
			name: "Air Jordan 1 'University Blue'",
			brand: "Jordan",
			price: "11.200.000 ₫",
			image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCqgi-schaWlcKXdf-k6bEathjy9uDfw1DVAk04cCDGImffu-Zp9NxY875ZvAJpWgGbcNG5TfzyKxe9Wfj6Dd7WqATe7eBClwXC0VvTE7BrU4eRm3zFUuxvafw3KGb1HGWJa9ru-doqRvE9XebKsI40AhgA0zhRo_a19vu0BhSRu0Rrn_oDzCqmnkhyDYNQq-Sc1pAJUEfI1Qn2gaLnuYrGhfdfCfVFCs65d4nzTITZFRCXYUlgfMNJeThTW_Nnt8dKSyvoJ-JGjfhn",
		},
		{
			id: 3,
			name: "2002R 'Protection Pack'",
			brand: "New Balance",
			price: "5.800.000 ₫",
			image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA7vVimgWWSLkHuFIHDQiszKMuBy_2Fe6j4bs2Il1ODWr9-uGnaggPNkf-zY-sLWNj0UmtXrvoV5xP9fwn2lQu3mc24Vx7sjsoQ3CdblYimgmIZXrknELXVMFB7CcITSRK38OelYCyYRbJkqA6NIyIyYMLtdAq-Eve_Zx56uhRZxzyin-uDmblfGHE8IK6WRyWZ6dThxjxpgYbBlDufJw0uaMgieKMgasv4wfDG5AvL-ZK0Aum6RLJZQUv7NOTY7_pUDR6XvrOA74va",
		},
		{
			id: 4,
			name: "Yeezy Boost 350 V2 'Onyx'",
			brand: "Adidas",
			price: "8.500.000 ₫",
			image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDlyOlNSR5w-fJ7nfCVqkfYunbWy92EFtZHwDUpHbIFevJhHFiqwZmlPNj3M4JBQal-HWTzuz7LFhQHuK4XJ70H-WOB2pObp2JrDpoTEQwXS_cHRTt0p2sb_KGWBpjl4a8V7_ls5bnKquo14IcMbkVEBuzbU42vXOFsMThTBf5RMRYUrYnxOCGzxLzqjsWvxM5pt_9W_0EvF0Sr137iIk2D5c-7RXJ5CFSyfGyRMDaEj4j1rdHMIStsvvVibYzlReZg8zIuxyjCxvEk",
			badge: "Hot Item",
			badgeStyle: "bg-black text-accent",
		},
	];

	return (
		<div className="min-h-screen bg-white">
			{/* <Navbar /> */}
			<Header />
			<main>
				{/* Hero Section */}
				<section className="relative">
					<div className="relative w-full h-[80vh] overflow-hidden bg-gray-100">
						<Image
							alt="Giraffe Sneaker Hero Banner"
							className="w-full h-full object-cover object-center"
							src="https://lh3.googleusercontent.com/aida-public/AB6AXuD46nRFUmFB3Fvx2F0VWbdzkQkFzkpeSqhyXFjj_gcbgsa1p2RuXJWyRSKlmKmLCGhFttHtVhILRXQW4rP5j9X09bSTH3rZ6BqLRYSwSQaMyxkOk5TGxk9-92DD9XFMTG8wsHtNtE7qwGqAs0_O14JXhUW6Kr5-NdsRz1k4g_HNgmHWbaKCH9Km5ENxJaU_yyqaS75fjZCSqRO_lwY3Ezvo4ryZUgfN-8IvNemtDRdjcHGbU_PyWoLK1gvhXhGbRKII3NlrZITlRDAZ"
							width={400}
							height={300}
						/>
						<div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
						<div className="absolute inset-0 flex flex-col justify-center px-6 lg:px-24">
							<div className="max-w-2xl text-white border-l-4 border-accent pl-8">
								<p className="text-[12px] font-extrabold uppercase tracking-[0.5em] mb-4 drop-shadow-md text-accent">
									Stand Tall. Walk Bold.
								</p>
								<h1 className="text-[60px] lg:text-[96px] font-black mb-8 leading-[0.9] uppercase drop-shadow-xl">
									Giraffe <br />{" "}
									<span className="text-white">
										Heritage.
									</span>
								</h1>
								<div className="flex gap-4">
									<Link
										href="/products"
										className="bg-accent text-black px-12 py-5 text-[12px] font-black uppercase tracking-[0.2em] hover:bg-white transition-all">
										Mua ngay
									</Link>
									<Link
										href="/products"
										className="bg-transparent text-white border-2 border-white px-12 py-5 text-[12px] font-black uppercase tracking-[0.2em] hover:bg-accent hover:border-accent hover:text-black transition-all">
										Bộ sưu tập
									</Link>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Features Section */}
				<section className="py-12 border-b border-gray-100 bg-gray-50">
					<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8">
						<div className="flex items-center gap-4">
							<BadgeCheck className="text-accent w-8 h-8" />
							<div>
								<h4 className="font-extrabold text-[11px] uppercase tracking-wider">
									100% Chính hãng
								</h4>
								<p className="text-[9px] text-gray-500 uppercase font-semibold mt-1">
									Hệ thống Giraffe Authentic
								</p>
							</div>
						</div>
						<div className="flex items-center gap-4">
							<Truck className="text-accent w-8 h-8" />
							<div>
								<h4 className="font-extrabold text-[11px] uppercase tracking-wider">
									Giao hàng nhanh
								</h4>
								<p className="text-[9px] text-gray-500 uppercase font-semibold mt-1">
									Nội thành TP.HCM trong 2h
								</p>
							</div>
						</div>
						<div className="flex items-center gap-4">
							<RefreshCw className="text-accent w-8 h-8" />
							<div>
								<h4 className="font-extrabold text-[11px] uppercase tracking-wider">
									Đổi trả dễ dàng
								</h4>
								<p className="text-[9px] text-gray-500 uppercase font-semibold mt-1">
									7 ngày đổi trả sản phẩm
								</p>
							</div>
						</div>
						<div className="flex items-center gap-4">
							<Headset className="text-accent w-8 h-8" />
							<div>
								<h4 className="font-extrabold text-[11px] uppercase tracking-wider">
									Hỗ trợ 24/7
								</h4>
								<p className="text-[9px] text-gray-500 uppercase font-semibold mt-1">
									Tư vấn size tận tâm
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Featured Products */}
				<section className="py-20 px-6 max-w-7xl mx-auto">
					<div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-4">
						<div className="text-center md:text-left">
							<h2 className="text-[30px] font-black uppercase tracking-tighter mb-2">
								Sản phẩm nổi bật
							</h2>
							<div className="h-1.5 w-20 bg-accent mx-auto md:mx-0"></div>
						</div>
						<Link
							href="/products"
							className="text-[11px] font-extrabold uppercase tracking-widest border-b-2 border-accent pb-1 hover:text-accent transition-all">
							Khám phá tất cả
						</Link>
					</div>

					<div className="grid grid-cols-2 lg:grid-cols-4 gap-1">
						{featuredProducts.map((product) => (
							<div
								key={product.id}
								className="group border border-gray-100 p-4 hover:shadow-2xl transition-all bg-white relative">
								<div className="relative aspect-square mb-6 overflow-hidden flex items-center justify-center bg-gray-50">
									<Image
										alt={product.name}
										className="w-full h-full object-contain mix-blend-multiply"
										src={product.image}
										width={300}
										height={300}
									/>
									{product.badge && (
										<div
											className={`absolute top-0 ${product.badgeStyle === "bg-black text-accent" ? "right-0 bg-black text-accent" : "left-0 bg-accent text-black"} text-[9px] font-black uppercase px-3 py-1 tracking-wider`}>
											{product.badge}
										</div>
									)}
									<Link
										href={`/products/${product.id}`}
										className="absolute bottom-0 left-0 right-0 bg-black text-white py-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 text-[10px] font-black uppercase tracking-[0.2em] flex items-center justify-center gap-2">
										<ShoppingBag className="w-4 h-4" />
										Thêm vào giỏ
									</Link>
								</div>
								<div className="text-center">
									<p className="text-gray-400 text-[9px] font-extrabold uppercase tracking-[0.2em] mb-2">
										{product.brand}
									</p>
									<h3 className="font-bold text-[12px] mb-3 uppercase h-10 line-clamp-2 px-2 tracking-tight">
										{product.name}
									</h3>
									<p className="text-black font-black text-[18px]">
										{product.price}
									</p>
								</div>
							</div>
						))}
					</div>
				</section>

				{/* Tin tức Sneaker Section */}
				<section className="py-20 bg-gray-50 px-6">
					<div className="max-w-7xl mx-auto">
						<div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-4">
							<div className="text-center md:text-left">
								<h2 className="text-[30px] font-black uppercase tracking-tighter mb-2">
									Tin tức Sneaker
								</h2>
								<div className="h-1.5 w-20 bg-accent mx-auto md:mx-0"></div>
							</div>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							{/* News Card 1 */}
							<div className="group cursor-pointer">
								<div className="relative h-64 mb-6 overflow-hidden">
									<Image
										alt="Giraffe News"
										className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
										src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3D64jM7jwR7nQAnsT-jfS2-3qQVevW8xX295gFMkAI_9c2ye4e0b4GOeM7B-hwSQl5VA6QQzUKD79gTOVEXVWdtf6QQmYlmpbJqKZBPwnDx-sByaKHa2gwUDtjecShPtbcj5ghhNGMNWYIiRKhVBtOchEBnAKKgIh1yrbFpDBegwwFPQsOVNQmQyajT5rb30gzYQRElBUHvBqQyt1uOTyRbKTEoGSbWDR_pjKxzSzL7bwMzmHg34j8xfotwL16-OTKKh6D2sgnmW1"
										width={400}
										height={256}
									/>
									<div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all"></div>
								</div>
								<div>
									<p className="text-accent text-[9px] font-black uppercase tracking-[0.3em] mb-3">
										Sự kiện độc quyền
									</p>
									<h3 className="text-[18px] font-black mb-4 uppercase leading-tight group-hover:text-accent transition-colors">
										Đón chờ bộ sưu tập đặc biệt tại Giraffe
										Sneaker
									</h3>
									<p className="text-gray-500 text-[12px] font-medium mb-6 line-clamp-2 leading-relaxed">
										Khám phá những mẫu giày độc bản sắp có
										mặt tại hệ thống cửa hàng Giraffe
										Sneaker trên toàn quốc...
									</p>
									<Link
										href="#"
										className="text-[10px] font-black uppercase tracking-[0.2em] inline-flex items-center gap-2 border-b-2 border-black pb-1 hover:border-accent">
										Đọc thêm{" "}
										<svg
											className="w-4 h-4 text-accent"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											viewBox="0 0 24 24">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M5 12h14m-7-7l7 7-7 7"
											/>
										</svg>
									</Link>
								</div>
							</div>
							{/* News Card 2 */}
							<div className="group cursor-pointer">
								<div className="relative h-64 mb-6 overflow-hidden">
									<Image
										alt="Giraffe Guide"
										className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
										src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoz1PjrwApXq2ca5xAn8H_MJyjVenpVmJcpF4rbv7Dd6chm9eXSfnzkOmGkpWiuHIKmIA8jonPHRd0J7Dv8j4vSMgt9Wj0hVDdgodlVCKXJUBaibsiTLCnCLTSxcit6Ucovkka-7fgu5F8fzLnJQX08-XKTR8pBX78fBTJIenj1bx9jbWbaI0iErCdWmXPEWWU9g8Zr1bTi9YB905j172tOTZ8HFXLXZLlZG8Xh8UwakhxFvrWyzI6EOOBTflIc-a4CM-ZJMLK5Jht"
										width={400}
										height={256}
									/>
									<div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all"></div>
								</div>
								<div>
									<p className="text-accent text-[9px] font-black uppercase tracking-[0.3em] mb-3">
										Cẩm nang
									</p>
									<h3 className="text-[18px] font-black mb-4 uppercase leading-tight group-hover:text-accent transition-colors">
										Cách phân biệt giày thật - giả năm 2024
									</h3>
									<p className="text-gray-500 text-[12px] font-medium mb-6 line-clamp-2 leading-relaxed">
										Cùng các chuyên gia tại Giraffe Sneaker
										cập nhật những chi tiết mới nhất để nhận
										biết sản phẩm chính hãng...
									</p>
									<Link
										href="#"
										className="text-[10px] font-black uppercase tracking-[0.2em] inline-flex items-center gap-2 border-b-2 border-black pb-1 hover:border-accent">
										Đọc thêm{" "}
										<svg
											className="w-4 h-4 text-accent"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											viewBox="0 0 24 24">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M5 12h14m-7-7l7 7-7 7"
											/>
										</svg>
									</Link>
								</div>
							</div>
							{/* News Card 3 */}
							<div className="group cursor-pointer">
								<div className="relative h-64 mb-6 overflow-hidden">
									<Image
										alt="Giraffe Style"
										className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
										src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCqP5bRUfoVV2oga09ByEyx_4JByYHd39BX17hiLJnd00P_G7Nn96YGMretTVUv8KfMG5mcEq9Mjy6bE3pyozd0ib1-DiwYh8xMVy4SxzKaVFOv_YVQX9bMt87N4kMYdeqUxQbsPKDJWUCRbDRj8oioBT9pZuwCDuCjw63ne6VKZ43ugP6wto9aZ7fUSJMVI13kCLfhroB1FVwEmqcbo7IOYcW0X1AaGfmFOFj3qzIFe6EKi3NscScSX-c9hzeFhZUGlqu2rI2k8Dn"
										width={400}
										height={256}
									/>
									<div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all"></div>
								</div>
								<div>
									<p className="text-accent text-[9px] font-black uppercase tracking-[0.3em] mb-3">
										Streetwear Style
									</p>
									<h3 className="text-[18px] font-black mb-4 uppercase leading-tight group-hover:text-accent transition-colors">
										Phối đồ cùng Sneaker cho mùa lễ hội
									</h3>
									<p className="text-gray-500 text-[12px] font-medium mb-6 line-clamp-2 leading-relaxed">
										Những gợi ý mix-match từ các sneakerhead
										hàng đầu Việt Nam dành cho bạn trong mùa
										này...
									</p>
									<Link
										href="#"
										className="text-[10px] font-black uppercase tracking-[0.2em] inline-flex items-center gap-2 border-b-2 border-black pb-1 hover:border-accent">
										Đọc thêm{" "}
										<svg
											className="w-4 h-4 text-accent"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											viewBox="0 0 24 24">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M5 12h14m-7-7l7 7-7 7"
											/>
										</svg>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Newsletter Section */}
				<section className="py-24 px-6 border-t border-gray-100 bg-white">
					<div className="max-w-4xl mx-auto text-center">
						<div className="flex justify-center mb-6">
							<Bell className="text-accent w-14 h-14" />
						</div>
						<h2 className="text-[36px] font-black uppercase mb-6 tracking-tighter">
							Đăng ký nhận tin từ Giraffe
						</h2>
						<p className="text-gray-500 text-[11px] font-extrabold uppercase tracking-[0.3em] mb-10">
							Nhận thông báo sớm nhất về các đợt phát hành Drop
							giới hạn
						</p>
						<form className="flex flex-col sm:flex-row gap-0 max-w-lg mx-auto">
							<input
								className="flex-grow px-6 py-4 border border-black focus:ring-0 focus:border-accent outline-none text-[10px] font-bold uppercase tracking-widest"
								placeholder="Email của bạn"
								type="email"
							/>
							<button className="bg-black text-white px-10 py-4 font-black uppercase tracking-[0.2em] hover:bg-accent hover:text-black transition-all whitespace-nowrap text-[10px]">
								Đăng ký ngay
							</button>
						</form>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}
