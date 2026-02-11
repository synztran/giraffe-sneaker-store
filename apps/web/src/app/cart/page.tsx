import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ArrowRight, Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Mock cart data
const cartItems = [
	{
		id: 1,
		name: "Air Force 1 Low 'University Blue'",
		brand: "Nike",
		price: 31250000,
		image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA1x9dG4XsZ8kqnXC0UjUmu3cAoqwtH5BH_lxpLJIceLu1tudoqJ_YYBjkqo-lxRYT-JbXkaIQ90Cptyyl7cfGOpdIkiOb9yqrxwCGLM7REVGizROTKvpd24qC3A0pcNlmfpJX1ybplMa7UUpKG65Ay3OEDQKs4O3YN_IGYrOliMvixDtRxvAfHMepG-XlPer7MAYrbOHlempkV7zoU5BsKHwH5ZUoRXX66Y-b8wx7Cy8prv4C3XwYQzi4IXdo_P08_w5NFByMLwtAm",
		size: "US 10.5",
		quantity: 1,
	},
	{
		id: 2,
		name: "Oversized Fleece Hoodie",
		brand: "Thời Trang Essential",
		price: 4500000,
		image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAUSiE-JTAl0lLS57I1QH_bDy7_zJaw8pwnqeC8LhVxC19xF5hS4CvjupubOfMcvSv9ytmlwzadptvvs26XhToNalQQt9V8hwduVj5lkp1-fKT3HNKjjPPH9lQZjDyphrDI30DZ3Yrq3r_-KVHyEn51HCC-JF9LOYnjRwD-PnXMnOBZ1YVMbbG8ZLBCKtSENiHsk6UVGNjAZ-8IfRV7Z_L7pJWI3cEvmHKLrKZE0y5efbgolt5vgogGoXPI1BRS3qFbE8NCaZqfwphW",
		size: "Large • Cream",
		quantity: 1,
	},
	{
		id: 3,
		name: "Air Jordan 1 Retro 'Court Purple'",
		brand: "Jordan Brand",
		price: 11250000,
		image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBs3K21Ip58jHJudSZJX_CGqKKtI5po5ImMbxo113KhZgs1-eoA5nzfi6XlI79KmTSlTayl8mBZAK0XIAB2fJQSdVX81qwwoTKBeUY7tQnNn7XZkiJ4UJeZhop-aSnCB4Iarzn4hz8emapZZzSAQDI4XYkYL1Hex-LZ0UkqYlqHidPuViqr1dzsyjaYuSCrZh0TLszDIqQ17_6awCjUY8O0GQEjUgwsXP4J55JHgOqCb7LDl-1w5KXj6oM50h9uqU-6nFI7GdhAgdee",
		size: "US 11",
		quantity: 1,
	},
];

const suggestedProducts = [
	{
		id: 101,
		name: "Air Zoom Alpha",
		price: 5500000,
		image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCzvf0ZV1mq6xBHxKlf-0E1n1M6JYsFRfNqA85bxCIUy5h0d22hCwJTiHfzRreCGvqk1vLfLNePlSGgFuJaSNksNN5uXIOfLdq5TVYWMbG4e6qtaKNmKT5gFswImV61jUKENBOug6cuN9_dF2UjxyZ_RnQwPHXx1lconUwszbhGNz7sqmvpR3D9YxebU2zAOlvDZeNEtxQ5NtBGYJBJN5PXRttvRRydNEGiHOqf1jnlSUJLt_teRauexG4jF48iijJ_hhbRHVn5sFj7",
	},
	{
		id: 102,
		name: "Red Strike Low",
		price: 2875000,
		image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC_OJT_CTNKhaZneTS33vV5dZ7B_sbFE9tKaNTrjY66f7GFYuxYijI0gldflH-C3pFz02AvXyIj9USEDlI1BJ-xHV8v4pHwM0ub373RK8-xmmcqozIlKRy1nhD4Bx8Zt4HyUFsvez9M9YCXn5rFyXamDb4Fu-2vU20r8NBOtaC9NnoUteT0z6MOhApDIfIEhLpJcTH_OmaTH7BAD9blLljGflG8oiSG_pRaGRgsHVUeb8d7oXgn7yayzL27tyeZ6e8LRZOYLahIg9Gz",
	},
	{
		id: 103,
		name: "Luxe White Court",
		price: 8500000,
		image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAcAInKGBlnrjiC6emiZwf3xhsp3xMGVoOUITCYpqRJrU-1slTll0arCj_lhf9O-grHFl1JGMvV03KkhZqVOPVI9AQoR72A1qUcS3JAsoTZXC8JKLW2QYzGUSjxbJxzeih9ZIhhw6HGeWoCo-u6MgicETaYcorUrkQMhHB7go6WydtLg9Yd4BQ4uhyakxKtZzfjPYLdXsEklMVJHTo9_MtYmgRy1K479Qev3vcem28qGopqKvsUq7eFO890ZNEjWoP0cnGrDMaCi9ej",
	},
	{
		id: 104,
		name: "Desert Nomad 360",
		price: 4750000,
		image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC4ez9SKZAnFq9bNE-RfivowegIpeIqVOJspULTvo2udntT465kpCkEY3aV2Xb2MQET7BUBmws6uxIb3kkEF184Emgb7O-sQ2rp9u1nicDxhErjG0MU4qUtU-x1rWLNObez0epkTza3MF1K5AHqcw17IYlia5N0_Cx0HzbMMiAoewptkVQ6DlXatqyzQY-xGgRqOi2H4mXot24vjt_02KMwTfzWhJw4sOfhXE9yaZv0vkToryCosBcNpqnuBrDo_FqaR8J8bcJ0ZZZI",
	},
];

function formatPrice(price: number) {
	return price.toLocaleString("vi-VN") + "₫";
}

export default function CartPage() {
	const subtotal = cartItems.reduce(
		(sum, item) => sum + item.price * item.quantity,
		0,
	);
	const tax = Math.floor(subtotal * 0.08);
	const total = subtotal + tax;

	return (
		<div className="min-h-screen bg-[#f6f6f8] dark:bg-[#111621] text-slate-900 dark:text-slate-100 flex flex-col">
			<Header />
			<main className="flex-1 max-w-7xl mx-auto px-6 py-12 w-full">
				<div className="flex flex-col lg:flex-row gap-12">
					{/* Main Content */}
					<div className="flex-grow">
						<div className="flex items-baseline justify-between border-b border-slate-200 dark:border-slate-800 pb-6 mb-8">
							<h1 className="text-4xl font-black tracking-tight">
								Giỏ hàng của bạn
							</h1>
							<span className="text-slate-500 dark:text-slate-400 font-semibold">
								{cartItems.length} Sản phẩm
							</span>
						</div>

						{/* Cart Items */}
						<div className="space-y-8">
							{cartItems.map((item) => (
								<div key={item.id} className="flex gap-6 group">
									<div className="w-32 h-40 bg-slate-100 dark:bg-slate-800 rounded overflow-hidden flex-shrink-0">
										<Image
											src={item.image}
											alt={item.name}
											width={128}
											height={160}
											className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
										/>
									</div>
									<div className="flex-grow flex flex-col justify-between py-1">
										<div>
											<div className="flex justify-between items-start">
												<div>
													<p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#195de6] mb-1">
														{item.brand}
													</p>
													<h3 className="text-xl font-extrabold">
														{item.name}
													</h3>
													<p className="text-slate-500 dark:text-slate-400 text-sm mt-1 font-medium">
														Size: {item.size}
													</p>
												</div>
												<button className="text-slate-400 hover:text-red-500 transition-colors">
													<Trash2 className="w-5 h-5" />
												</button>
											</div>
										</div>
										<div className="flex items-center justify-between">
											<div className="flex items-center border border-slate-200 dark:border-slate-800 rounded-full p-1">
												<button className="w-8 h-8 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full text-sm">
													<Minus className="w-4 h-4" />
												</button>
												<span className="w-8 text-center font-bold text-sm">
													{item.quantity}
												</span>
												<button className="w-8 h-8 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full text-sm">
													<Plus className="w-4 h-4" />
												</button>
											</div>
											<span className="text-lg font-extrabold">
												{formatPrice(item.price)}
											</span>
										</div>
									</div>
								</div>
							))}
						</div>

						{/* Suggested Products */}
						<div className="mt-20">
							<h2 className="text-2xl font-black mb-8">
								Sản phẩm gợi ý
							</h2>
							<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
								{suggestedProducts.map((product) => (
									<div
										key={product.id}
										className="group cursor-pointer">
										<div className="aspect-[4/5] bg-white dark:bg-slate-800 rounded-lg overflow-hidden relative mb-4">
											<Image
												src={product.image}
												alt={product.name}
												width={300}
												height={375}
												className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
											/>
											<button className="absolute bottom-4 left-4 right-4 bg-white/90 dark:bg-slate-900/90 py-3 rounded-full text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
												Thêm Nhanh
											</button>
										</div>
										<h4 className="font-bold text-sm mb-1 uppercase tracking-tight">
											{product.name}
										</h4>
										<p className="text-slate-500 dark:text-slate-400 text-xs font-semibold">
											{formatPrice(product.price)}
										</p>
									</div>
								))}
							</div>
						</div>
					</div>

					{/* Order Summary Sidebar */}
					<div className="w-full lg:w-[400px] flex-shrink-0">
						<div className="bg-white dark:bg-slate-900 rounded-xl p-8 border border-slate-200 dark:border-slate-800 sticky top-32">
							<h2 className="text-2xl font-black mb-8">
								Tóm tắt đơn hàng
							</h2>
							<div className="space-y-4 mb-8 font-medium">
								<div className="flex justify-between text-slate-600 dark:text-slate-400">
									<span>Tạm tính</span>
									<span className="font-bold text-slate-900 dark:text-white">
										{formatPrice(subtotal)}
									</span>
								</div>
								<div className="flex justify-between text-slate-600 dark:text-slate-400">
									<span>Phí vận chuyển dự tính</span>
									<span className="font-bold text-green-600">
										Miễn phí
									</span>
								</div>
								<div className="flex justify-between text-slate-600 dark:text-slate-400">
									<span>Thuế</span>
									<span className="font-bold text-slate-900 dark:text-white">
										{formatPrice(tax)}
									</span>
								</div>
								<div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-between">
									<span className="text-xl font-extrabold">
										Tổng cộng
									</span>
									<span className="text-xl font-black text-[#195de6]">
										{formatPrice(total)}
									</span>
								</div>
							</div>
							<div className="space-y-4">
								<Link
									href="/checkout"
									className="w-full bg-[#195de6] hover:bg-blue-700 text-white font-black py-5 rounded-full shadow-lg shadow-blue-500/30 transition-all flex items-center justify-center gap-2 group uppercase tracking-tight">
									<span>Tiến hành thanh toán</span>
									<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
								</Link>
								<div className="relative py-4 flex items-center gap-4">
									<div className="flex-grow border-t border-slate-100 dark:border-slate-800"></div>
									<span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
										Mã giảm giá
									</span>
									<div className="flex-grow border-t border-slate-100 dark:border-slate-800"></div>
								</div>
								<div className="flex gap-2">
									<input
										className="flex-grow bg-slate-50 dark:bg-slate-800 border-none rounded-full px-6 py-3 text-sm font-semibold focus:ring-2 focus:ring-[#195de6] transition-all"
										placeholder="Nhập mã"
										type="text"
									/>
									<button className="bg-slate-900 dark:bg-slate-700 text-white px-6 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-black transition-colors">
										Áp dụng
									</button>
								</div>
							</div>

							{/* Payment Methods */}
							<div className="mt-8 flex flex-wrap justify-center gap-4 opacity-50 grayscale hover:grayscale-0 transition-all">
								<div className="w-8 h-5 bg-slate-200 dark:bg-slate-700 rounded"></div>
								<div className="w-8 h-5 bg-slate-200 dark:bg-slate-700 rounded"></div>
								<div className="w-8 h-5 bg-slate-200 dark:bg-slate-700 rounded"></div>
								<div className="w-8 h-5 bg-slate-200 dark:bg-slate-700 rounded"></div>
							</div>

							{/* Free Shipping Banner */}
							<div className="mt-8 p-6 bg-blue-500/5 rounded-xl border border-[#195de6]/10">
								<div className="flex gap-4">
									<div className="flex-shrink-0">
										<svg
											className="w-6 h-6 text-[#195de6]"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9-4v4m0 0v4m0-4h4m0 0h4"
											/>
										</svg>
									</div>
									<div>
										<p className="font-black text-sm uppercase tracking-tight">
											Giao hàng Toàn cầu Miễn phí
										</p>
										<p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed font-medium">
											Là thành viên Giraffe+, bạn đã mở
											khóa quyền lợi giao hàng nhanh miễn
											phí cho đơn hàng này.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
}
