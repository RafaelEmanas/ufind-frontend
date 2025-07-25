import { Search } from "lucide-react";

const LandingHeader = () => {
	return (
		<header className="container mx-auto px-4 py-4">
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-2">
					<Search className="h-6 w-8 text-primary" />
					<h1 className="text-2xl font-bold text-primary">UFind</h1>
				</div>
			</div>
		</header>
	);
}

export default LandingHeader;