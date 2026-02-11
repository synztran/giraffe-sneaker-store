import Footer from "@/components/Footer";
import Header from "@/components/Header";
import DeliveryInfo from "@/components/checkout/DeliveryInfo";
import OrderSummary from "@/components/checkout/OrderSummary";
import PaymentMethod from "@/components/checkout/PaymentMethod";
import ShippingMethod from "@/components/checkout/ShippingMethod";
import { ChevronRight } from "lucide-react";

export default function CheckoutPage() {
	return (
		<div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col">
			<Header />

			{/* Breadcrumb Navigation */}
			<div className="bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 sticky top-16 z-40">
				<div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
					<div className="flex items-center gap-2 text-sm font-medium">
						<span className="text-slate-400">Giỏ hàng</span>
						<ChevronRight className="w-4 h-4 text-slate-400" />
						<span className="text-primary">Thanh toán</span>
						<ChevronRight className="w-4 h-4 text-slate-400" />
						<span className="text-slate-400">Hoàn tất</span>
					</div>
					<div className="flex items-center gap-4">
						<svg
							className="w-5 h-5 text-slate-600 dark:text-slate-400"
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
						<span className="text-xs uppercase tracking-widest font-semibold hidden sm:block">
							Thanh toán bảo mật
						</span>
					</div>
				</div>
			</div>

			<main className="flex-1 max-w-7xl mx-auto px-4 py-8 md:py-12 w-full">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
					{/* Left Column - Form */}
					<div className="lg:col-span-7 space-y-0">
						<DeliveryInfo />
						<ShippingMethod />
						<PaymentMethod />
					</div>

					{/* Right Column - Order Summary */}
					<div className="lg:col-span-5">
						<OrderSummary />
					</div>
				</div>
			</main>

			<Footer />
		</div>
	);
}
