"use client";

export default function DeliveryInfo() {
	return (
		<section className="space-y-0">
			<div className="flex items-center gap-3 mb-6">
				<span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
					1
				</span>
				<h2 className="text-xl font-bold uppercase tracking-tight">
					Thông tin giao hàng
				</h2>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				<div>
					<label className="block text-xs font-bold uppercase text-slate-500 dark:text-slate-400 mb-1.5 ml-1">
						Họ
					</label>
					<input
						className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-transparent dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500"
						type="text"
						placeholder="Nguyễn"
					/>
				</div>
				<div>
					<label className="block text-xs font-bold uppercase text-slate-500 dark:text-slate-400 mb-1.5 ml-1">
						Tên
					</label>
					<input
						className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-transparent dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500"
						type="text"
						placeholder="Văn A"
					/>
				</div>
				<div className="md:col-span-2">
					<label className="block text-xs font-bold uppercase text-slate-500 dark:text-slate-400 mb-1.5 ml-1">
						Địa chỉ Email
					</label>
					<input
						className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-transparent dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500"
						type="email"
						placeholder="example@email.com"
					/>
				</div>
				<div className="md:col-span-2">
					<label className="block text-xs font-bold uppercase text-slate-500 dark:text-slate-400 mb-1.5 ml-1">
						Địa chỉ
					</label>
					<input
						className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-transparent dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500"
						type="text"
						placeholder="Số nhà, tên đường, phường/xã"
					/>
				</div>
				<div>
					<label className="block text-xs font-bold uppercase text-slate-500 dark:text-slate-400 mb-1.5 ml-1">
						Tỉnh/Thành phố
					</label>
					<input
						className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-transparent dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500"
						type="text"
						placeholder="Hồ Chí Minh"
					/>
				</div>
				<div>
					<label className="block text-xs font-bold uppercase text-slate-500 dark:text-slate-400 mb-1.5 ml-1">
						Mã bưu điện
					</label>
					<input
						className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-transparent dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500"
						type="text"
						placeholder="700000"
					/>
				</div>
			</div>
		</section>
	);
}
