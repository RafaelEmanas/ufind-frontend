// src/components/item-details/ClaimerInfoCard.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User } from "lucide-react";
import { components } from "@/types/api";

type UserType = components['schemas']['UserForGetItemByItemIdDTO'];

interface ClaimerInfoCardProps {
    userClaimer: UserType;
    dateClaimed: string;
}

const ClaimerInfoCard = ({ userClaimer, dateClaimed }: ClaimerInfoCardProps) => {
    return (
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
                    <span className="text-sm md:text-base">Reivindicado em {new Date(dateClaimed).toLocaleDateString('pt-BR')}</span>
                </div>
            </CardContent>
        </Card>
    );
};

export default ClaimerInfoCard;