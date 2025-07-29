import { ItemDetailsComponent } from "@/components/details/item-details";
interface ItemPageProps {
    params: {
        id: string;
    };
}

export default function ItemDetailsPage({ params }: ItemPageProps) {

	return <ItemDetailsComponent itemId={params.id}/>

}