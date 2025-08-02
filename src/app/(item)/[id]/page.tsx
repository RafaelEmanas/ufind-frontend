import ItemDetailsPageClientWrapper from "./client-wrapper";

interface ItemDetailsPageProps {
    params: Promise<{ id: string }>
}

export default async function ItemDetailsPage({ params }: ItemDetailsPageProps) {

    const itemId = (await params).id;

	return <ItemDetailsPageClientWrapper itemId={itemId}/>

}