"use client";

import { AlertCircle, TrendingUp } from "lucide-react";

interface StatsCardProps {
	title: string;
	value: string | number;
	trend?: {
		value: number;
		label: string;
		positive: boolean;
	};
	icon: React.ReactNode;
	iconBgColor: string;
	iconColor: string;
}

export default function StatsCard({
	title,
	value,
	trend,
	icon,
	iconBgColor,
	iconColor,
}: StatsCardProps) {
	return (
		<div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between">
			<div>
				<p className="text-sm font-medium text-slate-500 mb-1">
					{title}
				</p>
				<h3 className="text-2xl font-bold">{value}</h3>
				{trend && (
					<p
						className={`text-xs flex items-center gap-1 mt-1 ${
							trend.positive
								? "text-green-600 dark:text-green-500"
								: "text-red-600 dark:text-red-500"
						}`}>
						{trend.positive ? (
							<TrendingUp className="w-3 h-3" />
						) : (
							<AlertCircle className="w-3 h-3" />
						)}
						{trend.label}
					</p>
				)}
			</div>
			<div
				className={`w-12 h-12 ${iconBgColor} rounded-xl flex items-center justify-center ${iconColor}`}>
				{icon}
			</div>
		</div>
	);
}
