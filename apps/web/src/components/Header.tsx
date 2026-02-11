"use client";
import {
	Heart,
	Moon,
	Search,
	ShoppingBag,
	ShoppingCart,
	Star,
	Sun,
	User,
} from "lucide-react";
import Link from "next/link";
import { memo, useEffect, useState } from "react";

interface IProps {
	isOnlySearch?: boolean;
}

const Header = ({ isOnlySearch = false }: IProps) => {
	const [cartCount] = useState(0);
	const [isDark, setIsDark] = useState(false);
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
		// Check current theme
		const isDarkMode = document.documentElement.classList.contains("dark");
		setIsDark(isDarkMode);
	}, []);

	const toggleTheme = () => {
		if (document.documentElement.classList.contains("dark")) {
			document.documentElement.classList.remove("dark");
			localStorage.setItem("theme", "light");
			setIsDark(false);
		} else {
			document.documentElement.classList.add("dark");
			localStorage.setItem("theme", "dark");
			setIsDark(true);
		}
	};

	if (!isOnlySearch) {
		return (
			<>
				{/* Top Banner */}
				<div className="bg-black dark:bg-slate-900 text-white py-2.5 px-6 text-center text-[10px] font-bold uppercase tracking-[0.25em]">
					<span className="text-accent">GIRAFFE EXCLUSIVE:</span> MIỄN
					PHÍ VẬN CHUYỂN CHO ĐƠN HÀNG TỪ 2.000.000 ₫
				</div>

				{/* Main Navbar */}
				<nav className="sticky top-0 z-50 bg-white dark:bg-black border-b border-gray-100 dark:border-slate-800">
					<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
						<div className="flex items-center gap-12">
							<Link
								href="/"
								className="flex items-center gap-2 group">
								<div className="flex flex-col items-center justify-center bg-black dark:bg-accent p-1.5 transition-colors group-hover:bg-accent dark:group-hover:bg-yellow-500">
									<Star className="text-white dark:text-black w-6 h-6 font-bold" />
								</div>
								<div className="flex flex-col leading-none">
									<span className="text-xl font-black tracking-tighter uppercase text-black dark:text-white">
										Giraffe
									</span>
									<span className="text-[9px] font-extrabold tracking-[0.4em] uppercase text-accent">
										Sneaker
									</span>
								</div>
							</Link>

							<div className="hidden lg:flex items-center gap-8 text-[11px] font-bold uppercase tracking-[0.15em] text-black dark:text-white">
								<Link
									href="/products"
									className="hover:text-accent transition-colors">
									Sản phẩm mới
								</Link>
								<Link
									href="/products"
									className="hover:text-accent transition-colors">
									Thương hiệu
								</Link>
								<Link
									href="#"
									className="hover:text-accent transition-colors">
									Ký gửi
								</Link>
								<Link
									href="#"
									className="hover:text-accent transition-colors">
									Phụ kiện
								</Link>
								<Link
									href="/news"
									className="hover:text-accent transition-colors">
									Tin tức
								</Link>
							</div>
						</div>

						<div className="flex items-center gap-6">
							<div className="hidden md:flex items-center bg-gray-50 dark:bg-slate-800 px-4 py-2 w-64 border border-gray-100 dark:border-slate-700 focus-within:border-accent transition-all">
								<Search className="text-gray-400 dark:text-slate-500 w-5 h-5" />
								<input
									className="bg-transparent border-none focus:ring-0 text-[10px] w-full placeholder:text-gray-400 dark:placeholder:text-slate-500 uppercase tracking-widest font-medium text-black dark:text-white"
									placeholder="Tìm kiếm sneaker..."
									type="text"
								/>
							</div>

							<div className="flex items-center gap-2">
								<button className="p-2 text-black dark:text-white hover:text-accent transition-colors">
									<Heart className="w-5 h-5" />
								</button>
								<Link
									href="/cart"
									className="p-2 text-black dark:text-white hover:text-accent transition-colors relative">
									<ShoppingCart className="w-5 h-5" />
									<span className="absolute top-1 right-1 bg-accent text-black text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-black">
										{cartCount}
									</span>
								</Link>
								<Link
									href="/account"
									className="p-2 text-black dark:text-white hover:text-accent transition-colors">
									<User className="w-5 h-5" />
								</Link>
								{mounted && (
									<button
										onClick={toggleTheme}
										className="p-2 text-black dark:text-white hover:text-accent transition-colors"
										aria-label="Toggle theme">
										{isDark ? (
											<Sun className="w-5 h-5 text-yellow-500" />
										) : (
											<Moon className="w-5 h-5 text-blue-600" />
										)}
									</button>
								)}
							</div>
						</div>
					</div>
				</nav>
			</>
		);
	}

	return (
		<header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-20">
					<div className="flex-shrink-0 flex items-center">
						<Link
							href="/"
							className="text-2xl font-black tracking-tighter text-[#E67E22]">
							GIRAFFE
							<span className="text-slate-900 dark:text-white">
								.SNEAKER
							</span>
						</Link>
					</div>
					<div className="flex-1 max-w-2xl mx-8">
						<div className="relative">
							<input
								className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-full py-3 pl-12 pr-4 focus:ring-2 focus:ring-[#E67E22] text-sm transition-all"
								placeholder="Tìm kiếm sản phẩm..."
								type="text"
								defaultValue="Giày thể thao"
							/>
							<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
								<Search className="text-slate-400 w-5 h-5" />
							</div>
						</div>
					</div>
					<div className="flex items-center space-x-6">
						<button className="text-slate-600 dark:text-slate-300 hover:text-[#E67E22] transition-colors">
							<Heart className="w-6 h-6" />
						</button>
						<Link
							href="/cart"
							className="relative text-slate-600 dark:text-slate-300 hover:text-[#E67E22] transition-colors">
							<ShoppingBag className="w-6 h-6" />
							<span className="absolute -top-1 -right-1 bg-[#E67E22] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
								3
							</span>
						</Link>
						<Link
							href="/account"
							className="p-2 text-black dark:text-white hover:text-accent transition-colors">
							<User className="w-5 h-5" />
						</Link>
						{mounted && (
							<button
								onClick={toggleTheme}
								className="text-slate-600 dark:text-slate-300 hover:text-[#E67E22] transition-colors"
								aria-label="Toggle theme">
								{isDark ? (
									<Sun className="w-6 h-6 text-yellow-500" />
								) : (
									<Moon className="w-6 h-6 text-blue-600" />
								)}
							</button>
						)}{" "}
					</div>
				</div>
			</div>
		</header>
	);
};

export default memo(Header);
