import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProfileForm from "@/components/account/ProfileForm";
import RankCard from "@/components/account/RankCard";
import SecuritySection from "@/components/account/SecuritySection";
import UserSidebar from "@/components/account/UserSidebar";

export default function AccountPage() {
	return (
		<div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col">
			<Header />

			<main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				{/* Breadcrumb */}
				<nav className="flex mb-10 text-[10px] uppercase tracking-[0.2em] font-extrabold text-slate-400">
					<a
						href="/"
						className="hover:text-black dark:hover:text-white">
						Trang chủ
					</a>
					<span className="mx-3 opacity-30">/</span>
					<span className="text-black dark:text-white">
						Giraffe Rewards
					</span>
				</nav>

				<div className="lg:flex lg:gap-12">
					{/* Sidebar */}
					<UserSidebar />

					{/* Main Content */}
					<div className="flex-1 space-y-8">
						{/* Rank Card */}
						<RankCard />

						{/* Profile Form */}
						<ProfileForm />

						{/* Security Section */}
						<SecuritySection />
					</div>
				</div>
			</main>

			<Footer />
		</div>
	);
}
