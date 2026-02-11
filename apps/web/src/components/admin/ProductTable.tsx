"use client";

import { Edit2, Eye, Trash2 } from "lucide-react";
import Image from "next/image";

interface Product {
	id: string;
	name: string;
	color: string;
	image: string;
	sku: string;
	category: string;
	price: number;
	stock: number;
	status: "in-stock" | "low-stock" | "out-of-stock";
}

const mockProducts: Product[] = [
	{
		id: "1",
		name: "Nike Air Max 270",
		color: "Màu Đỏ/Đen",
		image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDjL7XgyMB3CrqZggGziUhhS5nSy1np1Sy-1rhRCCvI0hLa_3v9xl9zd9CKxIOvf1jbtEUnvMzCUs0McyyfypS39ozjn1rLAaMuIFxAUsH-VLr1vyQ2jcSdFU95w4yCYd9S0xwI-i1ym_296uT3kOCWWneUXE6xOwNNH6NwfnRV-N2jip9pCSgkuSIl9IMG_XxWufDyPhasYfvJ8deKdNJ0_yhCR4Tbz_MAh4ysa8aWZfoHYEczJBkvT_Ahj5t2wLTfKactlbCj_fYL",
		sku: "GS-NIK-270R",
		category: "Giày chạy bộ",
		price: 3250000,
		stock: 84,
		status: "in-stock",
	},
	{
		id: "2",
		name: "Nike Air Force 1 '07",
		color: "Màu Trắng",
		image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDSh5HDvdTN_XluV-wJpjNV4IZwo3OBpLtN8ao9-70xCK32bVEQGoTiBlGaKGo9IjhowtlY091_pgkur5VaKmTkvOzicfnRS7JfkzuCcDyTyMM75dXmlO_Hf6ep0xWLmrMvkev8hT_ZncJ9T73dGLdwvDBy-lasqz_WVaatIkebnfFWdSotYvckEQttG0CFhnj5dIXHTRokE_LgjAvesztkXmDW_FFG1pj12guEBSMRlV025dzhMdJKYCLnoeoCA6BCQAgkK1zWWGuO",
		sku: "GS-AF1-WT",
		category: "Lifestyle",
		price: 2850000,
		stock: 8,
		status: "low-stock",
	},
	{
		id: "3",
		name: "Adidas Ultraboost 22",
		color: "Màu Xám/Vàng",
		image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAfxEuF_5es0rbTut1X9uc_QvWU4gCARK7CJH1bKW6BSJ4ALs3iEFCVRctrdkVJR2WydMUoBB3jTgXT0XL4hYtpb1lqgf34BixN8cypCDI1eZ_g49MlTVZUka9netq6TlJ2bMXWR_TxiSngdWHRd-t4umo03ygHV5osri16tctEo-m9vuXVM_-9rpZlmUYUDbvvhccbyZKbbSjyaNzSdhw2w5s6j5cptSFp6PNmADxF-n8P_37GEjtn8FPXDLHhDTLEFItgS5GzbN6I",
		sku: "GS-ADI-UB22",
		category: "Giày chạy bộ",
		price: 4100000,
		stock: 0,
		status: "out-of-stock",
	},
	{
		id: "4",
		name: "Vans Old Skool Classic",
		color: "Màu Đen/Trắng",
		image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC2LjqyXfxhKCvdY7yVCyDyIDqrncnsCKFOKOAB9DKeuR4J4_4Nv_LAnFbAkf8FYrM2vmp377n3cmyJfxQNMwAswuxXIHk0FpKgsoyZyPgUGWOK4wNfoMrmlC7xrAhKttSAwEquOhMaFpyfZwJ7PS81IxG5rTGCXd2LUMHMmgvcFp060TDigHBagQIpzOH34fIFihZBA2Pr26OS_ukkbyH7U7vmp0Rw5VqJsYYZo96Yc4m86v0bwKQIjjGIxMX6LhE7eLZJLOckde4n",
		sku: "GS-VAN-OS-BK",
		category: "Lifestyle",
		price: 1650000,
		stock: 126,
		status: "in-stock",
	},
	{
		id: "5",
		name: "Air Jordan 1 Retro High",
		color: "Màu Chicago",
		image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6NcsOwInCOHgC5RXrUIcTaLhdEruXiFQ0QrvKOr8yDiW34WXGpuRABibNqcAKZrq4oFDbDDYi_zJKPkBGuIeMTlD5Is0Wi_5lr0Ech0kmgkjQb9zAFU47dweYowRRJl7EIWDKVzvExyOh-Zg7OzaGOH-jn9_n075IOUUfUlW5KkGyna_OEAuNwwOrZY5u-Xzv04A1j9aDDq8R-fr2LxMxxCbJTdeFXXGoFS43XRuzLTzS_NajKl-8A3bYLfF9fl4BoNqzO_jGTNX7",
		sku: "GS-JOR-1HI",
		category: "Lifestyle",
		price: 5200000,
		stock: 3,
		status: "low-stock",
	},
];

export default function ProductTable() {
	const getStatusBadge = (status: Product["status"]) => {
		const statusMap = {
			"in-stock": {
				label: "Còn hàng",
				bgColor: "bg-green-600/10",
				textColor: "text-green-600",
			},
			"low-stock": {
				label: "Sắp hết",
				bgColor: "bg-amber-600/10",
				textColor: "text-amber-600",
			},
			"out-of-stock": {
				label: "Hết hàng",
				bgColor: "bg-red-600/10",
				textColor: "text-red-600",
			},
		};
		return statusMap[status];
	};

	return (
		<div className="overflow-x-auto">
			<table className="w-full text-left">
				<thead>
					<tr className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase tracking-wider">
						<th className="px-6 py-4">Sản phẩm</th>
						<th className="px-6 py-4">SKU</th>
						<th className="px-6 py-4">Danh mục</th>
						<th className="px-6 py-4">Giá</th>
						<th className="px-6 py-4">Tồn kho</th>
						<th className="px-6 py-4">Trạng thái</th>
						<th className="px-6 py-4 text-right">Hành động</th>
					</tr>
				</thead>
				<tbody className="divide-y divide-slate-100 dark:divide-slate-800">
					{mockProducts.map((product) => {
						const statusBadge = getStatusBadge(product.status);
						return (
							<tr
								key={product.id}
								className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
								<td className="px-6 py-4">
									<div className="flex items-center gap-3">
										<div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 border border-slate-100 dark:border-slate-700">
											<Image
												src={product.image}
												alt={product.name}
												fill
												className="object-cover"
											/>
										</div>
										<div className="min-w-0">
											<p className="text-sm font-bold truncate">
												{product.name}
											</p>
											<p className="text-xs text-slate-500 truncate">
												{product.color}
											</p>
										</div>
									</div>
								</td>
								<td className="px-6 py-4 text-sm font-medium text-slate-600 dark:text-slate-400">
									{product.sku}
								</td>
								<td className="px-6 py-4 text-sm">
									{product.category}
								</td>
								<td className="px-6 py-4 text-sm font-semibold">
									{product.price.toLocaleString("vi-VN")}đ
								</td>
								<td
									className={`px-6 py-4 text-sm font-semibold ${
										product.stock === 0
											? "text-red-600 dark:text-red-500"
											: product.stock < 10
												? "text-amber-600 dark:text-amber-500"
												: "text-slate-600 dark:text-slate-400"
									}`}>
									{product.stock}
								</td>
								<td className="px-6 py-4 text-sm">
									<span
										className={`px-2 py-1 ${statusBadge.bgColor} ${statusBadge.textColor} text-[10px] font-bold rounded-full uppercase`}>
										{statusBadge.label}
									</span>
								</td>
								<td className="px-6 py-4 text-right space-x-1 flex justify-end">
									<button className="p-2 text-slate-400 hover:text-primary transition-colors">
										<Eye className="w-5 h-5" />
									</button>
									<button className="p-2 text-slate-400 hover:text-primary transition-colors">
										<Edit2 className="w-5 h-5" />
									</button>
									<button className="p-2 text-slate-400 hover:text-red-600 dark:hover:text-red-500 transition-colors">
										<Trash2 className="w-5 h-5" />
									</button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}
