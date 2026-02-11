"use client";

import { Edit2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function ProfileForm() {
	const [formData, setFormData] = useState({
		fullName: "Nguyễn Thành Trung",
		phone: "0901234567",
		email: "trung.nguyen@example.com",
		dob: "1995-12-15",
		gender: "male",
	});

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("Form submitted:", formData);
	};

	return (
		<div className="bg-white dark:bg-black border border-slate-200 dark:border-white/10 p-8 lg:p-12 shadow-sm">
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
				{/* Left Column - Avatar */}
				<div className="lg:col-span-1 border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-white/10 pb-10 lg:pb-0 lg:pr-12">
					<div className="mb-10">
						<h1 className="text-2xl font-black uppercase tracking-tighter mb-2 italic font-montserrat">
							Hồ Sơ <span className="text-primary">Cá Nhân</span>
						</h1>
						<p className="text-xs text-slate-500 leading-relaxed font-semibold">
							Quản lý tài khoản và thiết lập quyền riêng tư cho
							Giraffe ID của bạn.
						</p>
					</div>
					<div className="flex flex-col items-center gap-6">
						<div className="relative group">
							<div className="h-32 w-32 rounded-full overflow-hidden border-4 border-slate-50 dark:border-white/5 ring-1 ring-slate-200 dark:ring-white/20 relative">
								<Image
									src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4NsdfjxeUksJ19CYSN8RvHeGxz4KYT4hHBQ5q2gQk9enSyPzC2vCgCnIc0aNF493phbsLjOtlqMKTN0EqhylPszoQkmwgDVb1Zm4RMLSwfQajNhtj9M55DPHI1lw-cxnY8lOmN-1HDqTAp4YMqSEpFjBCdzgyjEQvJKO_w5xVTgCpyLpEBHAMKlKN3TfF9UKRb8im1edv0HvW7TlU3gIy5dvVRpR1I79SvLaDBVFH_escVyNAu6HCH5VB222Rhvj4yrQvr4b7ZWhf"
									alt="User Avatar"
									fill
									className="object-cover"
								/>
							</div>
							<button className="absolute bottom-1 right-1 bg-black dark:bg-primary text-white dark:text-black p-2 rounded-full shadow-xl hover:scale-105 transition-transform">
								<Edit2 className="w-4 h-4" />
							</button>
						</div>
						<div className="text-center">
							<p className="text-[9px] uppercase tracking-[0.2em] font-black text-slate-400 mb-1">
								Giraffe ID: 951215
							</p>
							<button className="text-[10px] font-extrabold text-black dark:text-primary hover:underline underline-offset-4 uppercase tracking-widest">
								Đổi ảnh đại diện
							</button>
						</div>
					</div>
				</div>

				{/* Right Column - Form Fields */}
				<div className="lg:col-span-2 space-y-8">
					<form onSubmit={handleSubmit} className="space-y-8">
						{/* Name and Phone Row */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							<div className="space-y-3">
								<label className="text-[9px] font-black uppercase tracking-widest text-slate-400">
									Họ và tên
								</label>
								<input
									type="text"
									name="fullName"
									value={formData.fullName}
									onChange={handleInputChange}
									className="w-full bg-slate-50 dark:bg-white/5 border-0 rounded-none px-5 py-4 text-sm font-semibold focus:ring-1 focus:ring-primary transition-all outline-none dark:text-white"
								/>
							</div>
							<div className="space-y-3">
								<label className="text-[9px] font-black uppercase tracking-widest text-slate-400">
									Số điện thoại
								</label>
								<input
									type="tel"
									name="phone"
									value={formData.phone}
									onChange={handleInputChange}
									className="w-full bg-slate-50 dark:bg-white/5 border-0 rounded-none px-5 py-4 text-sm font-semibold focus:ring-1 focus:ring-primary transition-all outline-none dark:text-white"
								/>
							</div>
						</div>

						{/* Email */}
						<div className="space-y-3">
							<label className="text-[9px] font-black uppercase tracking-widest text-slate-400">
								Địa chỉ Email
							</label>
							<div className="relative">
								<input
									type="email"
									disabled
									value={formData.email}
									className="w-full bg-slate-100 dark:bg-white/10 border-0 rounded-none px-5 py-4 text-sm font-semibold text-slate-400 cursor-not-allowed italic dark:text-slate-500"
								/>
								<svg
									className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
									/>
								</svg>
							</div>
						</div>

						{/* DOB and Gender */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							<div className="space-y-3">
								<label className="text-[9px] font-black uppercase tracking-widest text-slate-400">
									Ngày sinh
								</label>
								<input
									type="date"
									name="dob"
									value={formData.dob}
									onChange={handleInputChange}
									className="w-full bg-slate-50 dark:bg-white/5 border-0 rounded-none px-5 py-4 text-sm font-semibold focus:ring-1 focus:ring-primary transition-all outline-none dark:text-white"
								/>
							</div>
							<div className="space-y-3">
								<label className="text-[9px] font-black uppercase tracking-widest text-slate-400">
									Giới tính
								</label>
								<div className="flex gap-8 py-4">
									<label className="flex items-center gap-3 cursor-pointer group">
										<input
											type="radio"
											name="gender"
											value="male"
											checked={formData.gender === "male"}
											onChange={handleInputChange}
											className="w-4 h-4 text-black dark:text-primary accent-primary"
										/>
										<span className="text-[10px] font-black uppercase tracking-widest text-slate-600 dark:text-slate-400 group-hover:text-black dark:group-hover:text-white">
											Nam
										</span>
									</label>
									<label className="flex items-center gap-3 cursor-pointer group">
										<input
											type="radio"
											name="gender"
											value="female"
											checked={
												formData.gender === "female"
											}
											onChange={handleInputChange}
											className="w-4 h-4 text-black dark:text-primary accent-primary"
										/>
										<span className="text-[10px] font-black uppercase tracking-widest text-slate-600 dark:text-slate-400 group-hover:text-black dark:group-hover:text-white">
											Nữ
										</span>
									</label>
								</div>
							</div>
						</div>

						{/* Save Button */}
						<div className="pt-6 border-t border-slate-200 dark:border-white/10 flex justify-end">
							<button
								type="submit"
								className="bg-black dark:bg-primary text-white dark:text-black font-black uppercase tracking-[0.2em] text-[10px] py-5 px-14 hover:opacity-90 transition-all active:scale-95">
								Lưu thay đổi
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
