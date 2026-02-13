"use client";
import { Heart, ShoppingBag, User } from "lucide-react";
import Link from "next/link";
import { memo } from "react";
import HeaderActions from "./HeaderActions";
import HeaderLogo from "./HeaderLogo";
import HeaderNav from "./HeaderNav";
import SearchInput from "./SearchInput";

interface IProps {
	isOnlySearch?: boolean;
}

const Header = ({ isOnlySearch = false }: IProps) => {
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
						{/* Logo & Navigation */}
						<HeaderLogo />
						<HeaderNav />
						{/* Search, Wishlist, Cart, User */}
						<HeaderActions />
					</div>
				</nav>
			</>
		);
	}

	return (
		<header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-20">
					<HeaderLogo />
					<SearchInput
						variant="large"
						placeholder="Tìm kiếm sản phẩm..."
						defaultValue="Giày thể thao"
					/>
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
					</div>
				</div>
			</div>
		</header>
	);
};

export default memo(Header);
