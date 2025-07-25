import LandingHeader from "@/components/landing-header";
import SearchSection from "@/components/search-section";

export default function Home() {
	return (
		<div className="min-h-screen bg-background">

			<LandingHeader />
			<SearchSection />

		</div>
	);
}