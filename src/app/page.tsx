import FilterSection from "@/components/filter-section";
import ItemsList from "@/components/items-list";
import LandingHeader from "@/components/landing-header";
import ItemsPagination from "@/components/items-pagination";
import SearchSection from "@/components/search-section";

export default function Home() {
	return (
		<div className="min-h-screen bg-background">

			<LandingHeader />
			<SearchSection />

			<main className="container mx-auto md:px-4 md:py-8 md:space-y-8">
				<FilterSection />
			</main>

		</div>
	);
}