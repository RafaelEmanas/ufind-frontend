import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ItemDescriptionCardProps {
    description: string;
}

const ItemDescriptionCard = ({ description }: ItemDescriptionCardProps) => {
    return (
        <Card className="border-border">
            <CardHeader>
                <CardTitle className="text-lg">Descrição</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                    {description}
                </p>
            </CardContent>
        </Card>
    );
};

export default ItemDescriptionCard;