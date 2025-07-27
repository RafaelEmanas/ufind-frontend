"use client"

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const SearchSection = () => {
	return (
		<section className="py-12 bg-primary">
			<div className="mx-auto px-4">
				<div className="max-w-3xl mx-auto">
					<h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-white">
						Encontre Seus Itens Perdidos
					</h2>
					<p className="text-muted text-center mb-8 text-lg">
						Pesquise em nossa base de dados de itens encontrados e reencontre seus pertences          </p>
					<div className="flex gap-2">
						<div className="relative flex-1">
							<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
							<Input
								placeholder="O que você perdeu?"
								className="pl-10 py-6 text-lg border-0 bg-white"
							/>
						</div>
						<Button size="lg" className="hidden h-auto md:block px-8 bg-background text-primary hover:bg-background/90">
						Buscar
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SearchSection;