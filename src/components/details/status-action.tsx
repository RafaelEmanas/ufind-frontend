import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Package } from "lucide-react";

interface ItemStatusAndActionProps {
    isWithFinder: boolean;
    placeStored: string;
    finderName: string;
    onClaimItem: () => void;
}

const ItemStatusAndAction = ({ isWithFinder, placeStored, finderName, onClaimItem }: ItemStatusAndActionProps) => {
    return (
        <Card className="border-border">
            <CardContent className="pt-6">
                <div className="text-center space-y-4">
                    <div>
                        <h3 className="font-semibold text-foreground mb-2">
                            Local atual do item
                        </h3>
                        <p className="text-muted-foreground text-sm">
                            {isWithFinder ? `Está com o encontrador ${finderName}` : placeStored}
                        </p>
                    </div>

                    <Button
                        className="w-full"
                        size="lg"
                        onClick={onClaimItem}
                    >
                        <Package className="w-4 h-4 mr-1" />
                        Reivindicar este item
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};

export default ItemStatusAndAction;