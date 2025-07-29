import ItemDetailsComponent from "@/components/details/item-details";
interface ItemPageProps {
    params: Promise<{ id: string }>
}

export default async function ItemDetailsPage({ params }: ItemPageProps) {

    const itemId = (await params).id;

	return <ItemDetailsComponent itemId={itemId}/>

}