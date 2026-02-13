"use client";

import { Search, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface SearchProduct {
	id: string;
	name: string;
	image: string;
	price: number;
	category: string;
}

interface SearchInputProps {
	placeholder?: string;
	defaultValue?: string;
	variant?: "compact" | "large";
	onSearch?: (value: string) => void;
}

const mockProducts: SearchProduct[] = [
	{
		id: "1",
		name: "Nike Air Max 270",
		image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDjL7XgyMB3CrqZggGziUhhS5nSy1np1Sy-1rhRCCvI0hLa_3v9xl9zd9CKxIOvf1jbtEUnvMzCUs0McyyfypS39ozjn1rLAaMuIFxAUsH-VLr1vyQ2jcSdFU95w4yCYd9S0xwI-i1ym_296uT3kOCWWneUXE6xOwNNH6NwfnRV-N2jip9pCSgkuSIl9IMG_XxWufDyPhasYfvJ8deKdNJ0_yhCR4Tbz_MAh4ysa8aWZfoHYEczJBkvT_Ahj5t2wLTfKactlbCj_fYL",
		price: 3250000,
		category: "Giày chạy bộ",
	},
	{
		id: "2",
		name: "Nike Air Force 1 '07",
		image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDSh5HDvdTN_XluV-wJpjNV4IZwo3OBpLtN8ao9-70xCK32bVEQGoTiBlGaKGo9IjhowtlY091_pgkur5VaKmTkvOzicfnRS7JfkzuCcDyTyMM75dXmlO_Hf6ep0xWLmrMvkev8hT_ZncJ9T73dGLdwvDBy-lasqz_WVaatIkebnfFWdSotYvckEQttG0CFhnj5dIXHTRokE_LgjAvesztkXmDW_FFG1pj12guEBSMRlV025dzhMdJKYCLnoeoCA6BCQAgkK1zWWGuO",
		price: 2850000,
		category: "Lifestyle",
	},
	{
		id: "3",
		name: "Adidas Ultraboost 22",
		image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAfxEuF_5es0rbTut1X9uc_QvWU4gCARK7CJH1bKW6BSJ4ALs3iEFCVRctrdkVJR2WydMUoBB3jTgXT0XL4hYtpb1lqgf34BixN8cypCDI1eZ_g49MlTVZUka9netq6TlJ2bMXWR_TxiSngdWHRd-t4umo03ygHV5osri16tctEo-m9vuXVM_-9rpZlmUYUDbvvhccbyZKbbSjyaNzSdhw2w5s6j5cptSFp6PNmADxF-n8P_37GEjtn8FPXDLHhDTLEFItgS5GzbN6I",
		price: 4100000,
		category: "Giày chạy bộ",
	},
	{
		id: "4",
		name: "Vans Old Skool Classic",
		image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC2LjqyXfxhKCvdY7yVCyDyIDqrncnsCKFOKOAB9DKeuR4J4_4Nv_LAnFbAkf8FYrM2vmp377n3cmyJfxQNMwAswuxXIHk0FpKgsoyZyPgUGWOK4wNfoMrmlC7xrAhKttSAwEquOhMaFpyfZwJ7PS81IxG5rTGCXd2LUMHMmgvcFp060TDigHBagQIpzOH34fIFihZBA2Pr26OS_ukkbyH7U7vmp0Rw5VqJsYYZo96Yc4m86v0bwKQIjjGIxMX6LhE7eLZJLOckde4n",
		price: 1650000,
		category: "Lifestyle",
	},
	{
		id: "5",
		name: "Air Jordan 1 Retro High",
		image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6NcsOwInCOHgC5RXrUIcTaLhdEruXiFQ0QrvKOr8yDiW34WXGpuRABibNqcAKZrq4oFDbDDYi_zJKPkBGuIeMTlD5Is0Wi_5lr0Ech0kmgkjQb9zAFU47dweYowRRJl7EIWDKVzvExyOh-Zg7OzaGOH-jn9_n075IOUUfUlW5KkGyna_OEAuNwwOrZY5u-Xzv04A1j9aDDq8R-fr2LxMxxCbJTdeFXXGoFS43XRuzLTzS_NajKl-8A3bYLfF9fl4BoNqzO_jGTNX7",
		price: 5200000,
		category: "Lifestyle",
	},
];

export default function SearchInput({
	placeholder = "Tìm kiếm...",
	defaultValue = "",
	variant = "compact",
	onSearch,
}: SearchInputProps) {
	const [value, setValue] = useState(defaultValue);
	const [isOpen, setIsOpen] = useState(false);
	const [results, setResults] = useState<SearchProduct[]>([]);
	const modalRef = useRef<HTMLDivElement>(null);
	const inputRef = useRef<HTMLInputElement>(null);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = e.target.value;
		setValue(newValue);
		onSearch?.(newValue);

		// Filter products based on search
		if (newValue.trim()) {
			const filtered = mockProducts.filter(
				(product) =>
					product.name
						.toLowerCase()
						.includes(newValue.toLowerCase()) ||
					product.category
						.toLowerCase()
						.includes(newValue.toLowerCase()),
			);
			setResults(filtered);
		} else {
			setResults([]);
		}
	};

	const handleOpenModal = () => {
		setIsOpen(true);
		setTimeout(() => inputRef.current?.focus(), 0);
	};

	const handleCloseModal = () => {
		setIsOpen(false);
		setValue("");
		setResults([]);
	};

	// Close modal when clicking outside
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				modalRef.current &&
				!modalRef.current.contains(event.target as Node)
			) {
				handleCloseModal();
			}
		};

		if (isOpen) {
			document.addEventListener("mousedown", handleClickOutside);
		}

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [isOpen]);

	if (variant === "large") {
		return (
			<div className="flex-1 max-w-2xl mx-8">
				<div className="relative">
					<input
						className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-full py-3 pl-12 pr-4 focus:ring-2 focus:ring-[#E67E22] text-sm transition-all"
						placeholder={placeholder}
						type="text"
						value={value}
						onChange={handleChange}
					/>
					<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
						<Search className="text-slate-400 w-5 h-5" />
					</div>
				</div>
			</div>
		);
	}

	return (
		<>
			{/* Search Icon Button */}
			<button
				onClick={handleOpenModal}
				className="p-2 text-black dark:text-white hover:text-accent transition-colors hidden md:block"
				aria-label="Open search">
				<Search className="w-5 h-5" />
			</button>

			{/* Search Modal */}
			{isOpen && (
				<div className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-20">
					<div
						ref={modalRef}
						className="bg-white dark:bg-slate-900 rounded-xl shadow-2xl w-full max-w-2xl mx-4">
						{/* Search Input */}
						<div className="p-6 border-b border-slate-200 dark:border-slate-800">
							<div className="flex items-center gap-3">
								<Search className="text-slate-400 w-5 h-5 flex-shrink-0" />
								<input
									ref={inputRef}
									type="text"
									placeholder={placeholder}
									value={value}
									onChange={handleChange}
									className="flex-1 bg-transparent border-none focus:ring-0 text-sm placeholder:text-slate-400 dark:placeholder:text-slate-500 text-black dark:text-white"
								/>
								<button
									onClick={handleCloseModal}
									className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors">
									<X className="w-5 h-5" />
								</button>
							</div>
						</div>

						{/* Search Results */}
						<div className="max-h-96 overflow-y-auto">
							{results.length > 0 ? (
								<div className="divide-y divide-slate-100 dark:divide-slate-800">
									{results.map((product) => (
										<a
											key={product.id}
											href={`/products/${product.id}`}
											onClick={handleCloseModal}
											className="flex items-center gap-4 p-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
											<div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-slate-100 dark:bg-slate-800">
												<Image
													src={product.image}
													alt={product.name}
													fill
													className="object-cover"
												/>
											</div>
											<div className="flex-1 min-w-0">
												<p className="text-sm font-semibold text-black dark:text-white truncate">
													{product.name}
												</p>
												<p className="text-xs text-slate-500 dark:text-slate-400 truncate">
													{product.category}
												</p>
												<p className="text-sm font-bold text-primary mt-1">
													{product.price.toLocaleString(
														"vi-VN",
													)}
													đ
												</p>
											</div>
										</a>
									))}
								</div>
							) : value.trim() ? (
								<div className="p-12 text-center">
									<Search className="w-12 h-12 text-slate-300 dark:text-slate-600 mx-auto mb-3" />
									<p className="text-slate-500 dark:text-slate-400">
										Không tìm thấy sản phẩm nào
									</p>
								</div>
							) : (
								<div className="p-6">
									<p className="text-sm text-slate-500 dark:text-slate-400 font-medium mb-4">
										Sản phẩm phổ biến
									</p>
									<div className="space-y-2">
										{mockProducts
											.slice(0, 4)
											.map((product) => (
												<a
													key={product.id}
													href={`/products/${product.id}`}
													onClick={handleCloseModal}
													className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
													<div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-slate-100 dark:bg-slate-800">
														<Image
															src={product.image}
															alt={product.name}
															fill
															className="object-cover"
														/>
													</div>
													<div className="flex-1 min-w-0">
														<p className="text-sm font-semibold text-black dark:text-white truncate">
															{product.name}
														</p>
														<p className="text-xs text-slate-500 dark:text-slate-400">
															{product.price.toLocaleString(
																"vi-VN",
															)}
															đ
														</p>
													</div>
												</a>
											))}
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			)}
		</>
	);
}
