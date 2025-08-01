import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User } from "lucide-react";
import { components } from "@/types/api";

type UserType = components['schemas']['UserForGetItemByItemIdDTO'];

interface FinderInfoCardProps {
    userFinder: UserType;
}

const FinderInfoCard = ({ userFinder }: FinderInfoCardProps) => {
    return (
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
    );
};

export default FinderInfoCard;