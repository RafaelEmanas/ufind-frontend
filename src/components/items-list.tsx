
const ItemsList = async () => {

	return (
		<section className="px-4 space-y-6">
			<div className="flex items-center justify-between">
				<h2 className="text-2xl font-bold">
					Itens Perdidos
				</h2>
			</div>
			{/* Adicinaor uma função map que vai iterando os ItemCard */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			</div>
		</section>
	);
};

export default ItemsList;