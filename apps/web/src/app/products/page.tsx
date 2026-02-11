"use client";

import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import ProductFilters from "@/components/ProductFilters";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const products = [
	{
		id: 1,
		name: "Sneaker Cổ Cao Phối Màu Chicago",
		category: "Mới nhất",
		price: "12.500.000₫",
		image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAaIQbKSrLu2ljYU37nps6OfNthL2B1DjQhr5mYSn91jIsXcqytp62u57Pu71TtBuhT8e7legrvQ6CT7b7fVF2XgwncLCp-8UxHvoKEUEpPfBSjvF87kmah6nWFm8LsRzNi6Bzw3eaSCZh15jtPWXKls8Bo6MRTd1h220J18UCKUGx1RVvpnyfIg_fZBLmhe3OnCPFHiXaH5bZZ0kKzI71NH6AsKLIzlGlkHf2YpxnM4r8tGPOwNDWiunUa7MmvYjOa-9MKl20vPJFI",
		tag: "Hot",
		tagColor: "bg-red-600",
	},
	{
		id: 2,
		name: "Sneaker Cổ Vừa Light Smoke Grey",
		category: "Thịnh hành",
		price: "5.800.000₫",
		image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBN3pteheunUJidGqsSRsIVNg8R6Zrz-AGBTY6TDbU_pFmJ5jEiCRxK14NjxThi6GRZq-dvqSf6o9eLDkKatV1knYamAtjv1dx6eazOWvIVMtGIw_LiZaWYJZqXIkX1wB_V8DbpeuxWQvg6WLmzqQ8b9ZXmi6Fxy_F7RqeMEfUsAEQvf0xK5Ks7yGAjE3dI-v5RRDqrUN2saHZ8fn4SISX9VIxDDXx94pTX6FC6t0ABrCegl9AXwtgtLnBirKIfd1NGPuaHg9NCpK7v",
	},
	{
		id: 3,
		name: "Sneaker Cổ Thấp Wolf Grey",
		category: "Mới nhất",
		price: "4.250.000₫",
		image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDYOEgQNm5FSlm98VlPXZn1JlYJ5NZdQIErOFqRyOqxnEkklml13T_UpHrEGPVYHYDJQ50jtahlH2v3fhH4nEMujfPanBpyLrFRDML6xwn7EClzYs5Gc3glvQYJm5DDNfI_YQ5pupq9MJaFVljHaA4vniURE3eG8paS35u9RjL_DYrOVS45_q9oiAak2axCN9YHyOGQR1T7FHFUbEZIXjJ6kB1w5sj05sYp9xo_CjlPUnuWDKkH7uETpt7r2ph1G87rxFs7wxTotqu3",
		tag: "New",
		tagColor: "bg-[#E67E22]",
	},
];

export default function ProductsPage() {
	const [selectedSizes, setSelectedSizes] = useState([39, 42]);
	const [categories, setCategories] = useState({
		sneakers: true,
		clothing: false,
		accessories: false,
	});
	const [brands, setBrands] = useState({
		brandA: true,
		brandB: false,
		brandC: false,
	});

	const toggleSize = (size: number) => {
		setSelectedSizes((prev) =>
			prev.includes(size)
				? prev.filter((s) => s !== size)
				: [...prev, size],
		);
	};

	const handleCategoryChange = (category: string, checked: boolean) => {
		setCategories({
			...categories,
			[category]: checked,
		});
	};

	const handleBrandChange = (brand: string, checked: boolean) => {
		setBrands({
			...brands,
			[brand]: checked,
		});
	};

	return (
		<div className="min-h-screen bg-[#f6f6f8] dark:bg-[#111621] text-slate-900 dark:text-slate-100">
			{/* Header */}
			<Header isOnlySearch />

			<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				{/* Breadcrumb and Title */}
				<div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-slate-200 dark:border-slate-800">
					<div>
						<nav
							aria-label="Breadcrumb"
							className="flex mb-2 text-xs text-slate-500 uppercase tracking-widest font-semibold">
							<ol className="flex items-center space-x-2">
								<li>
									<Link
										className="hover:text-[#E67E22]"
										href="/">
										Trang chủ
									</Link>
								</li>
								<li>
									<ChevronRight className="w-3 h-3" />
								</li>
								<li className="font-bold text-slate-900 dark:text-white">
									Tìm kiếm
								</li>
							</ol>
						</nav>
						<h1 className="text-3xl font-extrabold">
							Kết quả tìm kiếm cho &quot;
							<span className="text-[#E67E22]">
								Giày thể thao
							</span>
							&quot;
						</h1>
						<p className="text-slate-500 mt-1 font-medium">
							Tìm thấy 124 sản phẩm tương ứng
						</p>
					</div>
					<div className="mt-4 md:mt-0 flex items-center space-x-4">
						<label
							className="text-sm font-semibold text-slate-600 dark:text-slate-400 whitespace-nowrap"
							htmlFor="sort">
							Sắp xếp theo:
						</label>
						<select
							className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg text-sm font-medium focus:ring-[#E67E22] focus:border-[#E67E22]"
							id="sort">
							<option>Mới nhất</option>
							<option>Giá: Thấp đến Cao</option>
							<option>Giá: Cao đến Thấp</option>
							<option>Phổ biến nhất</option>
						</select>
					</div>
				</div>

				<div className="flex flex-col lg:flex-row gap-8">
					{/* Sidebar Filters */}
					<ProductFilters
						selectedSizes={selectedSizes}
						onSizeChange={toggleSize}
						selectedCategories={categories}
						onCategoryChange={handleCategoryChange}
						selectedBrands={brands}
						onBrandChange={handleBrandChange}
					/>
					<div className="flex-1">
						<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
							{products.map((product) => (
								<ProductCard
									key={product.id}
									id={product.id}
									name={product.name}
									category={product.category}
									price={product.price}
									image={product.image}
									tag={product.tag}
									tagColor={product.tagColor}
								/>
							))}
						</div>

						{/* Pagination */}
						<div className="mt-12 flex justify-center">
							<nav className="flex items-center space-x-1">
								<button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
									<ChevronLeft className="w-5 h-5" />
								</button>
								<button className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#E67E22] text-white font-bold">
									1
								</button>
								<button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 font-bold hover:border-[#E67E22] hover:text-[#E67E22] transition-all">
									2
								</button>
								<button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 font-bold hover:border-[#E67E22] hover:text-[#E67E22] transition-all">
									3
								</button>
								<span className="px-2 text-slate-400 font-bold">
									...
								</span>
								<button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 font-bold hover:border-[#E67E22] hover:text-[#E67E22] transition-all">
									12
								</button>
								<button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
									<ChevronRight className="w-5 h-5" />
								</button>
							</nav>
						</div>
					</div>
				</div>
			</main>

			{/* Footer */}
			<footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 mt-20 pt-16 pb-8">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
						<div className="col-span-1 md:col-span-1">
							<span className="text-2xl font-black tracking-tighter text-[#E67E22]">
								GIRAFFE
								<span className="text-slate-900 dark:text-white">
									.SNEAKER
								</span>
							</span>
							<p className="mt-4 text-sm text-slate-500 leading-relaxed font-medium">
								Cửa hàng thời trang Giraffe Sneaker cao cấp tại
								Việt Nam. Chuyên cung cấp các dòng Sneakers,
								Clothing và Accessories từ các thương hiệu hàng
								đầu thế giới.
							</p>
							<div className="flex space-x-4 mt-6">
								<Link
									href="#"
									className="w-8 h-8 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center hover:bg-[#E67E22] hover:text-white transition-all">
									<span className="text-sm">f</span>
								</Link>
								<Link
									href="#"
									className="w-8 h-8 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center hover:bg-[#E67E22] hover:text-white transition-all">
									<span className="text-sm">📷</span>
								</Link>
								<Link
									href="#"
									className="w-8 h-8 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center hover:bg-[#E67E22] hover:text-white transition-all">
									<span className="text-sm">@</span>
								</Link>
							</div>
						</div>
						<div>
							<h4 className="font-bold text-sm uppercase tracking-wider mb-6">
								Liên kết nhanh
							</h4>
							<ul className="space-y-4 text-sm text-slate-500 font-semibold">
								<li>
									<Link
										href="#"
										className="hover:text-[#E67E22] transition-colors">
										Sản phẩm mới
									</Link>
								</li>
								<li>
									<Link
										href="#"
										className="hover:text-[#E67E22] transition-colors">
										Khuyến mãi
									</Link>
								</li>
								<li>
									<Link
										href="#"
										className="hover:text-[#E67E22] transition-colors">
										Chính sách đổi trả
									</Link>
								</li>
								<li>
									<Link
										href="#"
										className="hover:text-[#E67E22] transition-colors">
										Vận chuyển
									</Link>
								</li>
							</ul>
						</div>
						<div>
							<h4 className="font-bold text-sm uppercase tracking-wider mb-6">
								Chăm sóc khách hàng
							</h4>
							<ul className="space-y-4 text-sm text-slate-500 font-semibold">
								<li>
									<Link
										href="#"
										className="hover:text-[#E67E22] transition-colors">
										Trung tâm trợ giúp
									</Link>
								</li>
								<li>
									<Link
										href="#"
										className="hover:text-[#E67E22] transition-colors">
										Kiểm tra đơn hàng
									</Link>
								</li>
								<li>
									<Link
										href="#"
										className="hover:text-[#E67E22] transition-colors">
										Thẻ thành viên
									</Link>
								</li>
								<li>
									<Link
										href="#"
										className="hover:text-[#E67E22] transition-colors">
										Bảng size hướng dẫn
									</Link>
								</li>
							</ul>
						</div>
						<div>
							<h4 className="font-bold text-sm uppercase tracking-wider mb-6">
								Đăng ký nhận tin
							</h4>
							<p className="text-sm text-slate-500 mb-4 font-medium">
								Cập nhật những mẫu giày mới nhất và ưu đãi độc
								quyền.
							</p>
							<form className="flex space-x-2">
								<input
									className="flex-1 bg-slate-100 dark:bg-slate-800 border-none rounded py-2 px-3 text-sm focus:ring-[#E67E22] font-medium"
									placeholder="Email của bạn"
									type="email"
								/>
								<button className="bg-[#E67E22] text-white px-4 py-2 rounded text-sm font-bold hover:bg-orange-700 transition-colors">
									Gửi
								</button>
							</form>
						</div>
					</div>
					<div className="border-t border-slate-100 dark:border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center">
						<p className="text-xs text-slate-400 font-bold">
							© 2024 GIRAFFE SNEAKER. Bảo lưu mọi quyền. Designed
							for premium streetwear.
						</p>
						<div className="flex items-center space-x-6 mt-4 md:mt-0 opacity-50">
							<Image
								className="h-4 w-auto grayscale"
								alt="Visa payment logo"
								src="https://lh3.googleusercontent.com/aida-public/AB6AXuCllb2py0f28JlCr6XMyOexa-C5Mp8nspSe08CD6kq401BmoXcUh1ht63Ky8thwE7ibeH7fUxDFP89rm7vym400_a7TEuy6-3JNGAqWLkpK9gmFV497SZcIkG0PoOM5VyQxmQ8eqKOyNns6_0gYy8_DBK33j_8Uwy2d2YIK1a87LlIgM9yl4Z2mBirTLQ2SqVkIijt1NRf8NC9HAYThlmbz8152ngPWR1FSqATLlQLeFjbc8rk7A55n6ibDBUQtGQ-aBjuH90ZMxvj5"
								width={40}
								height={16}
							/>
							<Image
								className="h-4 w-auto grayscale"
								alt="Mastercard payment logo"
								src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIQHM94BZFz-UXiQOHV_OsvgLm1p6o4Fg0ScpIYqW6IIWCGPnJjt5Vu9H46J9xp1X3d2Gd1CTSvGa3dNCZWPKYS-wXIJgwXKZhfI4PeT5x5h2SlRIyt3E4-cvJD_mautnVSyIaFt4CtABfEbFYw4rELOrbSWooX3-L_Pct8_EKWK_MVit84syuWhn31YxRv6MPFLKxwZ68ohMxvpqr6m3R8Qd5e7odtCXOEC3TkfA0zO44WrOHDhZMveHcTAeRjSo1W_5elxH3W9kj"
								width={40}
								height={16}
							/>
							<Image
								className="h-4 w-auto grayscale"
								alt="Paypal payment logo"
								src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUBBnxgvvKj0yMfHrt4u4EkPPoofxZcO-V2K0VFad6fJzvuNLgQlxb50Ucn3duNaBu-COE9-5sHDAGauuCf4b3JwqrJqlhFXGxaluR5pVcP6Wenlr184IkfpRa5SZ_Co08CQoG1OIhNPIdr8jMFJQPJBJrvzQaVoXeIuKIZoJFwmF5dY13GPsIt6FFqXijq25TkvCAMrCi-QLjbogYQJX58asDrMg9oFqJisoXenMaZ2Fk558DUMOYsMLwO2-E1ktQtPEQAa-RDgZJ"
								width={40}
								height={16}
							/>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}
