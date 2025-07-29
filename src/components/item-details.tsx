"use client"

import { ArrowLeft, MapPin, Calendar, User, Package, CheckCircle, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { components } from "@/types/api";
import { useRouter } from "next/navigation";

type ResponseGetItemByItemIdDTO = components['schemas']['ResponseGetItemByItemIdDTO']

export const mockItemDetailsList: ResponseGetItemByItemIdDTO[] = [
	{
		item: {
			id: "a1b2c3d4-e5f6-7890-1234-56789abcdef0",
			name: "Blue Umbrella",
			description: "Dark blue umbrella with a wooden handle.",
			report: "Found near the library entrance.",
			image_url: "https://preview.redd.it/why-is-teto-pear-so-addicting-v0-gxac6cd20m0f1.jpeg?width=1080&crop=smart&auto=webp&s=b34f190f7853d369243b0252bcad093243d417c5",
			place_found: "Library",
			date_found: "2025-07-20",
			place_stored: "Secretary's Office",
			is_with_finder: false,
			is_claimed: false,
			date_claimed: null as any,
		},
		user_finder: {
			id: "11112222-3333-4444-5555-666677778888",
			name: "Alice Johnson",
			email: "alice.johnson@example.com",
		},
	},
	{
		item: {
			id: "f1e2d3c4-b5a6-7890-1234-abcdefabcdef",
			name: "Wireless Mouse",
			description: "Black Logitech wireless mouse.",
			report: "Found in room 203.",
			image_url: "https://preview.redd.it/why-is-teto-pear-so-addicting-v0-gxac6cd20m0f1.jpeg?width=1080&crop=smart&auto=webp&s=b34f190f7853d369243b0252bcad093243d417c5",
			place_found: "Room 203",
			date_found: "2025-07-10",
			place_stored: "IT Office",
			is_with_finder: false,
			is_claimed: true,
			date_claimed: "2025-07-12",
		},
		user_finder: {
			id: "aaaabbbb-cccc-dddd-eeee-ffff00001111",
			name: "Bruno Silva",
			email: "bruno.silva@example.com",
		},
		user_claimer: {
			id: "22223333-4444-5555-6666-777788889999",
			name: "Maria Souza",
			email: "maria.souza@example.com",
		},
	},
	{
		item: {
			id: "12345678-90ab-cdef-1234-567890abcdef",
			name: "Silver Ring",
			description: "Engraved silver ring found in the bathroom.",
			report: "Lost and found report filled on July 25th.",
			image_url: "https://preview.redd.it/why-is-teto-pear-so-addicting-v0-gxac6cd20m0f1.jpeg?width=1080&crop=smart&auto=webp&s=b34f190f7853d369243b0252bcad093243d417c5",
			place_found: "Main Building Bathroom",
			date_found: "2025-07-24",
			place_stored: "",
			is_with_finder: true,
			is_claimed: false,
			date_claimed: null as any,
		},
		user_finder: {
			id: "abc12345-def6-7890-ghij-klmnopqrstuv",
			name: "Lucas Pereira",
			email: "lucas.pereira@example.com",
		},
	},
	{
		item: {
			id: "7890abcd-1234-ef56-7890-abcdefabcdef",
			name: "USB Flash Drive",
			description: "16GB Kingston drive with university documents.",
			report: "Likely belongs to a CS student.",
			image_url: "https://preview.redd.it/why-is-teto-pear-so-addicting-v0-gxac6cd20m0f1.jpeg?width=1080&crop=smart&auto=webp&s=b34f190f7853d369243b0252bcad093243d417c5",
			place_found: "Computer Lab",
			date_found: "2025-07-15",
			place_stored: "Lost & Found Cabinet",
			is_with_finder: false,
			is_claimed: false,
			date_claimed: null as any,
		},
		user_finder: {
			id: "13579bdf-2468-ace0-1357-2468ace0ace1",
			name: "Fernanda Lima",
			email: "fernanda.lima@example.com",
		},
	},
];

const ItemDetailsComponent = () => {

	const router = useRouter()

	const itemDetails = mockItemDetailsList[0];
	const item = itemDetails.item;
	const userFinder = itemDetails.user_finder;
	const userClaimer = itemDetails.user_claimer ? itemDetails.user_claimer : undefined;

	return (
		<div className="min-h-screen bg-background">
			<main className="container mx-auto px-4 py-3 max-w-4xl">
				{/* Back button */}
				<Button
					onClick={()=> router.back()}
					variant="ghost"
					className="mb-6 hover:cursor-pointer"
				>
					<ArrowLeft className="w-4 h-4" />
					Voltar
				</Button>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
					{/* Image Section */}
					<div className="space-y-4">
						<Card className="overflow-hidden border-none">
							<CardContent className="p-0">
								<img
									src={item.image_url}
									alt={item.name}
									className="w-full h-64 sm:h-80 lg:h-96 object-cover"
								/>
							</CardContent>
						</Card>

						{/* Status Badge */}
						<div className="flex justify-center rounded-4xl">
							{item.is_claimed && userClaimer ? (
								<div className="grid grid-cols-1 w-full">
									<Card className="border-none bg-primary">
										<CardContent className="pt-6">
											<div className="text-center space-y-2">
												<XCircle className="w-8 h-8 mx-auto text-primary-foreground" />
												<h3 className="font-semibold text-primary-foreground">
													Item já foi reivindicado
												</h3>
											</div>
										</CardContent>
									</Card>

								</div>
							) : null}
						</div>
					</div>

					{/* Details Section */}
					<div className="space-y-6">
						{/* Title and basic info */}
						<div>
							<h1 className="text-3xl font-bold text-foreground mb-4">
								{item.name}
							</h1>

							<div className="space-y-3">
								<div className="flex items-center text-muted-foreground">
									<Calendar className="w-5 h-5 mr-3" />
									<span>Encontrado em {new Date(item.date_found).toLocaleDateString('pt-BR')}</span>
								</div>

								<div className="flex items-center text-muted-foreground">
									<MapPin className="w-5 h-5 mr-3" />
									<span>{item.place_found}</span>
								</div>
							</div>
						</div>

						{/* Description */}
						<Card className="border-border">
							<CardHeader>
								<CardTitle className="text-lg">Descrição</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-muted-foreground leading-relaxed">
									{item.description}
								</p>
							</CardContent>
						</Card>

						{/* Found by */}
						<Card className="border-border">
							<CardHeader>
								<CardTitle className="text-lg">Encontrado por</CardTitle>
							</CardHeader>
							<CardContent>
								<div className="flex items-center space-x-3">
									<div className="bg-muted w-10 h-10 flex items-center justify-center rounded-4xl">
										<User className="w-4 h-4" />
									</div>
									<div>
										<p className="font-medium text-foreground">{userFinder.name}</p>
										<p className="text-sm text-muted-foreground">{userFinder.email}</p>
									</div>
								</div>
							</CardContent>
						</Card>

						{/* Status and Action */}
						{userClaimer ? (
							<div>
								<Card className="border-border">
									<CardHeader>
										<CardTitle className="text-lg">Reivindicado por</CardTitle>
									</CardHeader>
									<CardContent>
										<div className="flex items-center space-x-3 mb-2">
											<div className="bg-muted w-10 h-10 flex items-center justify-center rounded-4xl">
												<User className="w-4 h-4" />
											</div>
											<div>
												<p className="font-medium text-foreground">{userClaimer.name}</p>
												<p className="text-sm text-muted-foreground">{userClaimer.email}</p>
											</div>
										</div>
										<div className="flex items-center text-muted-foreground">
											<span className="text-sm md:text-base">Reivindicado em {new Date(item.date_found).toLocaleDateString('pt-BR')}</span>
										</div>
									</CardContent>
								</Card>
							</div>
						) : (
							<Card className="border-border">
								<CardContent className="pt-6">
									<div className="text-center space-y-4">
										<div>
											<h3 className="font-semibold text-foreground mb-2">
												Local atual do item
											</h3>
											<p className="text-muted-foreground text-sm">
												{item.is_with_finder? `Está com o encontrador ${userFinder.name}` : item.place_stored}
											</p>
										</div>

										<Button
											className="w-full"
											size="lg"
										>
											<Package className="w-4 h-4 mr-1" />
											Reivindicar este item
										</Button>
									</div>
								</CardContent>
							</Card>
						)}
					</div>
				</div>

				{/* Full Report */}
				<Card className="mt-8 border-border">
					<CardHeader>
						<CardTitle>Relatório completo</CardTitle>
					</CardHeader>
					<CardContent>
						<p className="text-muted-foreground leading-relaxed">
							{item.report}
						</p>
					</CardContent>
				</Card>
			</main>
		</div>
	);
}

export default ItemDetailsComponent;