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

interface ItemDetailsComponentProps {
    response: ResponseGetItemByItemIdDTO
}

const ItemDetailsComponent = ({ response } : ItemDetailsComponentProps) => {

	const router = useRouter();

    const { item, user_finder, user_claimer } = response;

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