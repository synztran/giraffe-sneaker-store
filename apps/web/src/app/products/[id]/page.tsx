"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import {
	CheckCircle2,
	ChevronLeft,
	ChevronRight,
	Minus,
	Plus,
	ShoppingBag,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useState } from "react";

// Mock product data
const products = [
	{
		id: 1,
		name: "Air Jordan 1 High OG 'Heritage'",
		brand: "Jordan Brand",
		category: "Giày Sneaker",
		price: 4850000,
		originalPrice: 5500000,
		images: [
			"https://lh3.googleusercontent.com/aida-public/AB6AXuBGzHHejyPBXpJXydK7IOVv0J78zqrk6EkzMJ4HVbrXOLj0gSlLyhgi6Ve5fUko4cmnswHTsnAakRuQXUTJYyiurP_RpmulHUvxj3oZMwdCSyMETBubXXNXzkq4Ttsx1aDvvW1qRusMh7zabEfEq8_i1NakH2TI_4elZd8_EiCBMa3L9XkG-yuaz3iOwoUc0BbUVaLFvCtvz5SHD9vGSIWPjUrs_n3i5Uxoy8EFFg0PcF1B7LTPQCHWOnyHGzwfAI8IRifgsyk2ei9R",
			"https://lh3.googleusercontent.com/aida-public/AB6AXuB0SWTp2kEGXzblEnhlzrA43oov7Ec4FdU-hOTfWASKMn8bnPo3mMQCciAVeSNxUu276fHMIL-Ot3XNAz6u5rnCqqIXtVgiNGQgm1Pq9974CeIiRHBrzVpFDBLnIOG8odr0rjNaWKzGfOHEhvNFiZy-p7fZFhX7hJlAAvknzcRvYS9oA_OrZTaor5cINYOOhmmB3_Tz-mAKTgWu5oW_jZjacdsX1wV8GxBmUfGxb9PCaZoFbYjaz9Zcvz69wiCfWQeFyx41XWyiqKK4",
			"https://lh3.googleusercontent.com/aida-public/AB6AXuAQJzbjQxi5Dk3H7qTrvGxEhhHYvsKpgdl-XkiG-tJZVL8kh90HPQK1wsy-l6UNtyHnRi8_dcVX-GlyLZTUrSiB2PGTQXevAkOC_OHXg1qU2M8StwmaYc2ees2SFVxodpRee7dWO9ctM6QeIc_0-V1JfzeipWptkwapBLO-BkYrRm8osmYrEaGtK49EjENk7hGC5reeFoydgbnDzTddInKnB79Cq2U5Ob7N7DupuKeQe8ADXgNGauvOimK_gBlruBpSsqPkuv27mX6I",
			"https://lh3.googleusercontent.com/aida-public/AB6AXuDPbx4GwlJdvFAD1bPeAGdaVds3pEX5Q_BQq8c9ZOPwY7aO_R26WjvyGGSKH03Xe_qfQ_479dkwXlY_GPNpfoeLDBwEVRJsEbQ0WqKD80lYrMkwfeIxafjkR442As7xfzZObcs2k5QfvDaK1Hehd-KqHpYIddG3e82yawAZ-leCT1jF1ptBKZMN_K29JGc7DkJKyEVk6wEbQUGkhDAn25baDgoxSuK3rRsw1Cq0JhKJkIXky3ukT4nEl4LlisB4_oIf71JxjFXsoAJr",
			"https://lh3.googleusercontent.com/aida-public/AB6AXuDoFIQWTlnYZBNr2_LqbCTQKS_zYbPHBIKdtdGmG1HeNQFvt5b1xjfyyM_lIoKUmlEHpZ7_EPoB-gxoVpneSj78piQBc74mg2vka85fI_X6Xh5wNQC5YRMRRgCUot4eK3wB0771R_1-jRn_UXwWO6i5lsrNImHf-4cF4o1hhuwHjxFpbm5NskIJE-AHCLIX9SUpAgG2__K0X_t0k3WaXDg1qsMWmKdyLQFePKJr5ozK2yYZe4YPPa3Dz9bqPduI3_sj-lDh8VZ13gaT",
		],
		description:
			"Phiên bản Air Jordan 1 High OG 'Heritage' mang đến một phối màu cổ điển mang đậm DNA của thương hiệu Jordan. Với chất liệu da cao cấp và những đường nét thiết kế nguyên bản từ năm 1985, đây là sự lựa chọn không thể thiếu cho các tín đồ Sneaker tại Giraffe Sneaker.",
		code: "555088-161",
		material: "Da thật cao cấp (Tumbled Leather)",
		sole: "Cao su 100% (Rubber Cupsole)",
		technology: "Đệm khí Air-Sole",
		sizes: ["7", "7.5", "8", "8.5", "9", "9.5", "10"],
		selectedSize: "9",
		sizeConversion: { US: "8.5", UK: "7.5", EU: "42", CM: "26.5" },
	},
];

const suggestedProducts = [
	{
		id: 2,
		name: "Nike Dunk High Retro",
		subtitle: "Light Smoke Grey",
		price: 3250000,
		originalPrice: 3800000,
		image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAqyzM4zJL8tMJVJqp1bruX-mlku_liJRPSFnLCC1lkqDBL_KjyUJHHeY91VuRT1TC66Nf1M6PppLGACJA3GytIt_iP_AMRaQ3pI-zSEd7byhGgnOh4qD2tkaml_uyvWCS0Ywqda_GjpdUYLdHln7ghlGN6TXwqo87Rvt0QFky9t5qgXHmpsdT2oD3yslXHEbPISWUrAdQXZS2Wj-oGLGyeM87jNGHwxb9waN_To7OD4FxQBRpy0LEjlZn_151TKvfy715sVs7R04oh",
		discount: 15,
	},
	{
		id: 3,
		name: "Air Jordan 1 'Dark Mocha'",
		subtitle: "Sail/Black/Mocha",
		price: 12800000,
		image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDjsyVUr7giIWDR-P8TGHiIylyhm21ZK7jHBthQteGBDabEVvzaK6HnUya6nllaYSvtX2P2ovYNFztXtefC_IAE6KgDffk28Thd2BCn4YvWjOG4PcHuLJ0n3cOzJBQ_oByXe3EmNI2DiU-tOVxUyEFv4vY5W8S0bcnUsiKcR0AraZQB8z8CSOws1LdxFEfwcZPMDUv0NZzTeaUHREn4VgE0gO79zLsG2sJzF7HZwwZuRJ4SbhBU1BWrtzifE5Kv4H2W4e1BIOSdcjiM",
	},
	{
		id: 4,
		name: "Jordan 4 Retro",
		subtitle: "Midnight Navy",
		price: 6500000,
		image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBYmIqjYomFkBmCkq51v1nRfOJ8SVl7NKJJ3e45E1pnjyynmw0-c4xuYyNYh1SvE48tzWzomUUmIuHxkkthJHzSXx-X5M7tYuSJ86o_KVyNJSaTZDecLYQ8Wd7wSjex07mCoLdnwdTICdbHT6dQwQh_YlvIpyevXt_WAVdxnMYaoW-iWhRQAfcH7qtizVYcwN68G2EL0ZS17b-gW9Ju-ltNaT0RaXPgdkzrRyLd262mhEdBI49sJbxMikC7kAfG2q9o03-gs-OrodQn",
	},
	{
		id: 5,
		name: "Nike Air Force 1 '07",
		subtitle: "Classic White",
		price: 2800000,
		image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCxc4D_zQvUCOkx2yN4DEio4yqhxcufywWEoUuwvTWDs9gGQI-xV5XQMuNLVU1Jl7jXJSsaTPb8a81EIjKiAtElqI5exs2kyXzeLSw5AZTLmloCoX6SGhRBk7Kz3NpeMK7eAw9CHZvIBCaQhfvNmzI9-klMm6Xej5VJ9ill4l_ksVvjNSpy1THRcMsj4VG8qsNys0P1IZKPKUBwvKdG9rbbT2fjtbgSaD9HbeFTZRPVIi27dyeKmpqPqDLtUuo-9EOm6tHZTvBEwi3c",
	},
];

function formatPrice(price: number) {
	return price.toLocaleString("vi-VN") + "₫";
}

export default function ProductDetailPage({
	params,
}: {
	params: { id: string };
}) {
	const product = products.find((p) => p.id === Number(params.id));
	const [mainImage, setMainImage] = useState(0);
	const [quantity, setQuantity] = useState(1);
	const [selectedSize, setSelectedSize] = useState(product?.selectedSize);

	if (!product) return notFound();

	return (
		<div className="min-h-screen bg-white dark:bg-black text-slate-900 dark:text-slate-100">
			<Header />

			<main className="max-w-7xl mx-auto px-6 py-8">
				{/* Breadcrumb */}
				<nav className="flex items-center gap-2 text-[10px] font-bold text-slate-400 mb-8 uppercase tracking-widest">
					<Link
						href="/"
						className="hover:text-primary transition-colors">
						Trang chủ
					</Link>
					<ChevronRight className="w-3 h-3" />
					<Link
						href="/products"
						className="hover:text-primary transition-colors">
						{product.category}
					</Link>
					<ChevronRight className="w-3 h-3" />
					<span className="text-slate-900 dark:text-white">
						{product.name}
					</span>
				</nav>

				<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
					{/* Image Gallery */}
					<div className="lg:col-span-7 space-y-4">
						<div className="grid grid-cols-2 gap-4">
							{/* Main Image */}
							<div className="col-span-2 aspect-square rounded-lg overflow-hidden bg-slate-50 dark:bg-neutral-dark flex items-center justify-center">
								<Image
									src={product.images[mainImage]}
									alt={product.name}
									width={600}
									height={600}
									className="w-full h-full object-cover"
									priority
								/>
							</div>
							{/* Thumbnails */}
							{product.images.map((img, idx) => (
								<button
									key={idx}
									onClick={() => setMainImage(idx)}
									className={`aspect-square rounded-lg overflow-hidden bg-slate-50 dark:bg-neutral-dark flex items-center justify-center cursor-pointer transition-all border-2 ${
										mainImage === idx
											? "border-black dark:border-white"
											: "border-transparent hover:border-slate-200 dark:hover:border-slate-800"
									}`}>
									<Image
										src={img}
										alt={`${product.name} ${idx + 1}`}
										width={150}
										height={150}
										className="w-full h-full object-cover"
									/>
								</button>
							))}
						</div>
					</div>

					{/* Product Details */}
					<div className="lg:col-span-5">
						<div className="lg:sticky lg:top-28 space-y-6">
							{/* Trust Badges */}
							<div className="flex flex-wrap gap-2">
								<div className="flex items-center gap-1.5 px-3 py-1 bg-green-500/10 text-green-600 dark:text-green-400 rounded-full">
									<CheckCircle2 className="w-4 h-4" />
									<span className="text-[10px] font-bold uppercase tracking-tight">
										Cam kết chính hãng 100%
									</span>
								</div>
								<div className="flex items-center gap-1.5 px-3 py-1 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full">
									<CheckCircle2 className="w-4 h-4" />
									<span className="text-[10px] font-bold uppercase tracking-tight">
										Đổi trả trong 7 ngày
									</span>
								</div>
							</div>

							{/* Product Info */}
							<div className="space-y-3">
								<p className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em]">
									{product.brand}
								</p>
								<h1 className="text-3xl font-[800] tracking-tight leading-tight uppercase">
									{product.name}
								</h1>
								<div className="flex items-baseline gap-4">
									<p className="text-3xl font-[900] text-red-600">
										{formatPrice(product.price)}
									</p>
									<p className="text-lg text-slate-400 line-through font-medium">
										{formatPrice(product.originalPrice)}
									</p>
								</div>
							</div>

							{/* Size Selection */}
							<div className="space-y-4 py-6 border-y border-slate-100 dark:border-slate-800">
								<div className="flex items-center justify-between">
									<h3 className="text-xs font-bold uppercase tracking-widest">
										Chọn Kích Thước{" "}
										<span className="text-slate-400 font-medium normal-case">
											(US Men)
										</span>
									</h3>
									<button className="text-[10px] font-bold text-primary hover:underline flex items-center gap-1 uppercase tracking-wide">
										Bảng quy đổi size
									</button>
								</div>
								<div className="grid grid-cols-4 gap-2">
									{product.sizes.map((size) => (
										<button
											key={size}
											onClick={() =>
												setSelectedSize(size)
											}
											className={`py-3 border rounded font-bold text-xs transition-all ${
												selectedSize === size
													? "bg-black text-white dark:bg-white dark:text-black border-black dark:border-white"
													: "border-slate-200 dark:border-slate-800 hover:border-black dark:hover:border-white"
											}`}>
											{size}
										</button>
									))}
									<button className="py-3 border border-slate-200 dark:border-slate-800 rounded font-bold text-xs opacity-40 cursor-not-allowed bg-slate-50 dark:bg-neutral-dark">
										11
									</button>
								</div>

								{/* Size Conversion */}
								<div className="bg-slate-50 dark:bg-neutral-dark p-4 rounded-lg">
									<p className="text-[10px] font-bold uppercase mb-3 text-slate-500 tracking-wider">
										Gợi ý quy đổi Nike/Jordan:
									</p>
									<div className="grid grid-cols-4 gap-2 text-center text-[10px]">
										<div className="space-y-1">
											<p className="text-slate-400 font-medium">
												US
											</p>
											<p className="font-bold">
												{product.sizeConversion.US}
											</p>
										</div>
										<div className="space-y-1">
											<p className="text-slate-400 font-medium">
												UK
											</p>
											<p className="font-bold">
												{product.sizeConversion.UK}
											</p>
										</div>
										<div className="space-y-1">
											<p className="text-slate-400 font-medium">
												EU
											</p>
											<p className="font-bold">
												{product.sizeConversion.EU}
											</p>
										</div>
										<div className="space-y-1">
											<p className="text-slate-400 font-medium">
												CM
											</p>
											<p className="font-bold">
												{product.sizeConversion.CM}
											</p>
										</div>
									</div>
								</div>
							</div>

							{/* Action Buttons */}
							<div className="space-y-4">
								<div className="flex gap-4">
									<div className="flex items-center border border-slate-200 dark:border-slate-800 rounded px-4 h-14">
										<button
											onClick={() =>
												setQuantity(
													Math.max(1, quantity - 1),
												)
											}
											className="hover:text-primary transition-colors">
											<Minus className="w-5 h-5" />
										</button>
										<span className="w-12 text-center font-bold text-sm">
											{quantity}
										</span>
										<button
											onClick={() =>
												setQuantity(quantity + 1)
											}
											className="hover:text-primary transition-colors">
											<Plus className="w-5 h-5" />
										</button>
									</div>
									<button className="flex-1 bg-white border-2 border-black dark:border-white text-black dark:text-white font-bold h-14 rounded hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all uppercase tracking-widest text-[12px] flex items-center justify-center gap-2">
										<ShoppingBag className="w-5 h-5" />
										Thêm vào giỏ
									</button>
								</div>
								<button className="w-full bg-red-600 text-white font-bold h-14 rounded hover:bg-red-700 transition-all uppercase tracking-[0.2em] text-[12px] shadow-lg shadow-red-600/20">
									Mua ngay
								</button>
							</div>

							{/* Info Grid */}
							<div className="grid grid-cols-2 gap-4 py-4">
								<div className="flex items-center gap-3 p-3 border border-slate-100 dark:border-slate-800 rounded">
									<div className="text-primary">📦</div>
									<div>
										<p className="text-[10px] font-bold uppercase tracking-tight">
											Giao hàng toàn quốc
										</p>
										<p className="text-[9px] text-slate-400 font-medium uppercase tracking-tighter">
											Từ 2-4 ngày làm việc
										</p>
									</div>
								</div>
								<div className="flex items-center gap-3 p-3 border border-slate-100 dark:border-slate-800 rounded">
									<div className="text-primary">💳</div>
									<div>
										<p className="text-[10px] font-bold uppercase tracking-tight">
											Thanh toán COD
										</p>
										<p className="text-[9px] text-slate-400 font-medium uppercase tracking-tighter">
											Kiểm tra khi nhận hàng
										</p>
									</div>
								</div>
							</div>

							{/* Accordion Sections */}
							<div className="space-y-0 border-t border-slate-100 dark:border-slate-800">
								<details
									className="group py-4 border-b border-slate-100 dark:border-slate-800"
									open>
									<summary className="list-none flex justify-between items-center cursor-pointer">
										<span className="text-xs font-bold uppercase tracking-widest">
											Mô tả sản phẩm
										</span>
										<ChevronRight className="w-5 h-5 group-open:rotate-90 transition-transform" />
									</summary>
									<div className="mt-4 text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
										{product.description}
									</div>
								</details>
								<details className="group py-4 border-b border-slate-100 dark:border-slate-800">
									<summary className="list-none flex justify-between items-center cursor-pointer">
										<span className="text-xs font-bold uppercase tracking-widest">
											Chính sách đổi trả
										</span>
										<ChevronRight className="w-5 h-5 group-open:rotate-90 transition-transform" />
									</summary>
									<div className="mt-4 text-[13px] text-slate-500 dark:text-slate-400 space-y-2 font-medium">
										<p>
											• Hỗ trợ đổi size trong vòng 7 ngày
											kể từ khi nhận hàng tại Giraffe
											Sneaker.
										</p>
										<p>
											• Sản phẩm đổi trả phải còn nguyên
											tem, tag, hộp và chưa qua sử dụng.
										</p>
										<p>
											• Miễn phí đổi hàng nếu lỗi do nhà
											sản xuất hoặc giao sai mẫu.
										</p>
									</div>
								</details>
								<details className="group py-4 border-b border-slate-100 dark:border-slate-800">
									<summary className="list-none flex justify-between items-center cursor-pointer">
										<span className="text-xs font-bold uppercase tracking-widest">
											Thông số kỹ thuật
										</span>
										<ChevronRight className="w-5 h-5 group-open:rotate-90 transition-transform" />
									</summary>
									<div className="mt-4 text-[13px] text-slate-500 dark:text-slate-400 grid grid-cols-2 gap-y-3 font-medium">
										<div className="font-bold text-slate-900 dark:text-slate-200 uppercase text-[11px] tracking-wide">
											Chất liệu:
										</div>
										<div>{product.material}</div>
										<div className="font-bold text-slate-900 dark:text-slate-200 uppercase text-[11px] tracking-wide">
											Đế giày:
										</div>
										<div>{product.sole}</div>
										<div className="font-bold text-slate-900 dark:text-slate-200 uppercase text-[11px] tracking-wide">
											Công nghệ:
										</div>
										<div>{product.technology}</div>
										<div className="font-bold text-slate-900 dark:text-slate-200 uppercase text-[11px] tracking-wide">
											Mã sản phẩm:
										</div>
										<div>{product.code}</div>
									</div>
								</details>
							</div>
						</div>
					</div>
				</div>

				{/* Suggested Products Section */}
				<section className="mt-24">
					<div className="flex items-end justify-between mb-10">
						<div className="space-y-1">
							<span className="text-[10px] font-bold text-primary uppercase tracking-[0.4em]">
								Có thể bạn quan tâm
							</span>
							<h2 className="text-2xl font-[900] tracking-tight uppercase">
								Sản phẩm tương tự
							</h2>
						</div>
						<div className="flex gap-2">
							<button className="w-10 h-10 flex items-center justify-center border border-slate-200 dark:border-slate-800 rounded-full hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all">
								<ChevronLeft className="w-5 h-5" />
							</button>
							<button className="w-10 h-10 flex items-center justify-center border border-slate-200 dark:border-slate-800 rounded-full hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all">
								<ChevronRight className="w-5 h-5" />
							</button>
						</div>
					</div>
					<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
						{suggestedProducts.map((p) => (
							<Link key={p.id} href={`/products/${p.id}`}>
								<div className="group cursor-pointer">
									<div className="aspect-[4/5] rounded-lg overflow-hidden bg-slate-50 dark:bg-neutral-dark mb-4 relative">
										<Image
											src={p.image}
											alt={p.name}
											width={300}
											height={375}
											className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
										/>
										{p.discount && (
											<div className="absolute top-3 left-3 bg-red-600 text-white text-[9px] font-bold px-2 py-1 rounded uppercase tracking-wider">
												-{p.discount}%
											</div>
										)}
									</div>
									<h4 className="font-bold text-xs uppercase tracking-wider">
										{p.name}
									</h4>
									<p className="text-slate-400 text-[10px] font-bold uppercase mt-1">
										{p.subtitle}
									</p>
									<p className="font-black text-slate-900 dark:text-white mt-2 text-sm tracking-tight">
										{formatPrice(p.price)}
									</p>
								</div>
							</Link>
						))}
					</div>
				</section>
			</main>

			<Footer />
		</div>
	);
}
