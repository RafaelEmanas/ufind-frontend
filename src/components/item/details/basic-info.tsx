import { Calendar, MapPin } from "lucide-react";

interface ItemBasicInfoProps {
    name: string;
    dateFound: string;
    placeFound: string;
}

const ItemBasicInfo = ({ name, dateFound, placeFound }: ItemBasicInfoProps) => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-foreground mb-4">
                {name}
            </h1>

            <div className="space-y-3">
                <div className="flex items-center text-muted-foreground">
                    <Calendar className="w-5 h-5 mr-3" />
                    <span>Encontrado em {new Date(dateFound).toLocaleDateString('pt-BR')}</span>
                </div>

                <div className="flex items-center text-muted-foreground">
                    <MapPin className="w-5 h-5 mr-3" />
                    <span>{placeFound}</span>
                </div>
            </div>
        </div>
    );
};

export default ItemBasicInfo;