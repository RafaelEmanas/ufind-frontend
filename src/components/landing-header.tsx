import { Search } from "lucide-react";
import Link from "next/link";

const LandingHeader = () => {
	return (
			<header className="bg-card border-b border-border shadow-sm">
				<div className="container mx-auto px-4 py-4">
					<div className="flex items-center justify-between">
						<Link href="/">
							<div className="flex items-center gap-2">
								<Search className="h-6 w-8 text-primary" />
								<h1 className="text-2xl font-bold text-primary">UFind</h1>
							</div>
						</Link>
					</div>
				</div>
			</header>
	);
}

export default LandingHeader;