"use client"

import ItemDetailsComponent from "@/components/item/details/item-details-component";
import LoadingScreenComponent from "@/components/loading/loading-component";
import { getItemByItemId } from "@/services/api";
import { components } from "@/types/api";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type ResponseGetItemByItemIdDTO = components['schemas']['ResponseGetItemByItemIdDTO']

interface ItemDetailsPageClientWrapperProps {
	itemId: string;
}

const ItemDetailsPageClientWrapper = ({ itemId }: ItemDetailsPageClientWrapperProps) => {

	const router = useRouter();
	const [response, setResponse] = useState<ResponseGetItemByItemIdDTO>();

	const fetchItemDetails = async() =>{
		try {
			setResponse(await getItemByItemId(itemId))
		} catch (error) {
			router.replace("/signup")
		}
	}

	useEffect(() => {
		fetchItemDetails();
	}, []);

	return(
		response?(
			<ItemDetailsComponent response={response}/>
		) : (
			<LoadingScreenComponent/>
		)
	)

}

export default ItemDetailsPageClientWrapper;