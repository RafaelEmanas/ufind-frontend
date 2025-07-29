"use client"

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Eye } from "lucide-react";
import type { components } from '@/types/api'
import { useRouter } from "next/navigation";

type ItemForGetItemsDTO = components['schemas']['ItemForGetItemsDTO']

type ItemCardProps = {
	item: ItemForGetItemsDTO;
}

const ItemCard = ({ item }: ItemCardProps) => {

	const router = useRouter()

	return (
		<Card
			onClick={()=>router.push(`${item.id}`)}
			className="group hover:shadow-lg transition-all duration-300 border border-border cursor-pointer hover:scale-[1.02]"
		>
			<CardContent className="p-0">
				<div className="aspect-[4/3] rounded-t-lg overflow-hidden">
					{item.image_url ? (
						<img
							src={item.image_url}
							className="w-full h-full object-cover group-hover:scale-105"
						/>
					) : (
						<div className="w-full h-full flex items-center justify-center">
							<Eye className="h-12 w-12" />
						</div>
					)}
				</div>

				<div className="p-4 space-y-3">
					<div className="flex items-start justify-between gap-2">
						<h3 className="font-semibold text-lg text-foreground line-clamp-2 flex-1 min-w-0 break-words">
							{item.name}
						</h3>
						<Badge
							variant={item.is_claimed? "default" : "secondary"}
							className="flex-shrink-0 whitespace-nowrap"
						>
							{item.is_claimed ? "Achado" : "Perdido"}
						</Badge>
					</div>
					<p className="text-sm text-muted-foreground line-clamp-2 break-words">
						{item.description}
					</p>
					<div className="space-y-2">
						<div className="flex items-center gap-2 text-sm text-muted-foreground">
							<Calendar className="h-4 w-4 flex-shrink-0" />
							<span className="break-words">Encontrado em {item.date_found}</span>
						</div>

						<div className="flex items-center gap-2 text-sm text-muted-foreground">
							<MapPin className="h-4 w-4 flex-shrink-0" />
							<span className="break-words">{item.place_found}</span>
						</div>
					</div>
				</div>
			</CardContent>
		</Card>
	);
};

export default ItemCard;