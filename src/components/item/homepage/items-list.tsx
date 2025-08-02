import { components } from "@/types/api";
import ItemCard from "./item-card";
import EmptyState from "./empty-list";

type ItemsForGetItemstype = components['schemas']['ItemForGetItemsDTO'][]

type ItemsListProps = {
	itemsArray: ItemsForGetItemstype
	totalItems: number
}

const ItemsList = async ({ itemsArray, totalItems }: ItemsListProps) => {

	return (
		<section className="px-6 space-y-6">
			<div className="flex items-center justify-between">
				<h2 className="text-2xl font-bold">
					Itens Perdidos ({totalItems})
				</h2>
				<div className="text-sm text-muted-foreground whitespace-nowrap">
					Mostrando {itemsArray.length} itens
				</div>
			</div>
			{
				itemsArray.length > 0 ?
					(
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							{
								itemsArray.map((item) => (
									<ItemCard key={item.id} item={item} />
								))
							}
						</div>
					): (
						<EmptyState/>
					)
			}
		</section>
	);
};

export default ItemsList;