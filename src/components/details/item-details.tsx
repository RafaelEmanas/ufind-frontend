"use client"

import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { components } from "@/types/api";
import ItemDescriptionCard from "./description-card";
import FinderInfoCard from "./finder-info";
import ClaimerInfoCard from "./claimer-info";
import ItemStatusAndAction from "./status-action";
import ItemImageDisplay from "./image-display";
import ItemBasicInfo from "./basic-info";
import FullReportCard from "./report";

type ResponseGetItemByItemIdDTO = components['schemas']['ResponseGetItemByItemIdDTO']

const mockItemDetailsList: ResponseGetItemByItemIdDTO[] = [
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

interface ItemDetailsPageProps {
    itemId: string;
}

const ItemDetailsComponent = ({ itemId }: ItemDetailsPageProps) => {
    const router = useRouter();

    const itemDetails = mockItemDetailsList[0];

    const { item, user_finder, user_claimer } = itemDetails;

    const handleClaimItem = () => {
        alert("Reivindicar item clicado");
    };

    return (
        <div className="min-h-screen bg-background">
            <main className="container mx-auto px-4 py-3 max-w-4xl">
                {/* Back button */}
                <Button
                    onClick={() => router.back()}
                    variant="ghost"
                    className="mb-6 hover:cursor-pointer"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Voltar
                </Button>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Image Section */}
                    <ItemImageDisplay
                        imageUrl={item.image_url}
                        itemName={item.name}
                        isClaimed={item.is_claimed}
                        hasClaimer={!!user_claimer}
                    />

                    {/* Details Section */}
                    <div className="space-y-6">
                        <ItemBasicInfo
                            name={item.name}
                            dateFound={item.date_found}
                            placeFound={item.place_found}
                        />

                        <ItemDescriptionCard description={item.description} />

                        <FinderInfoCard userFinder={user_finder} />

                        {user_claimer ? (
                            <ClaimerInfoCard
                                userClaimer={user_claimer}
                                dateClaimed={item.date_claimed as string}
                            />
                        ) : (
                            <ItemStatusAndAction
                                isWithFinder={item.is_with_finder}
                                placeStored={item.place_stored}
                                finderName={user_finder.name}
                                onClaimItem={handleClaimItem}
                            />
                        )}
                    </div>
                </div>

                <FullReportCard report={item.report} />
            </main>
        </div>
    );
};

export default ItemDetailsComponent;