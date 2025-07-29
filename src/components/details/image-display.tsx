import { Card, CardContent } from "@/components/ui/card";
import { XCircle } from "lucide-react";

interface ItemImageDisplayProps {
    imageUrl: string;
    itemName: string;
    isClaimed: boolean;
    hasClaimer: boolean;
}

export const ItemImageDisplay = ({ imageUrl, itemName, isClaimed, hasClaimer }: ItemImageDisplayProps) => {
    return (
        <div className="space-y-4">
            <Card className="overflow-hidden border-none">
                <CardContent className="p-0">
                    <img
                        src={imageUrl}
                        alt={itemName}
                        className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                    />
                </CardContent>
            </Card>

            {isClaimed && hasClaimer && (
                <div className="flex justify-center rounded-4xl">
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
                </div>
            )}
        </div>
    );
};