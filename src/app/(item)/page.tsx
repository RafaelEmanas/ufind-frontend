import { redirect } from "next/navigation";
import { getItems } from "@/services/api";
import { AxiosError } from "axios";
import { ZodError } from "zod";
import { components } from "@/types/api";
import { GetItemsQuerySchema } from "@/types/zod";
import HomeComponent from "@/components/item/homepage/home-component";

type ResponseGetItemsDTO = components["schemas"]["ResponseGetItemsDTO"];
interface HomePageProps {
	searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function Home({ searchParams }: HomePageProps) {

	try {
		const parsedSearchParams = GetItemsQuerySchema.parse(await searchParams);
		const responseGetItemsDto: ResponseGetItemsDTO = await getItems(parsedSearchParams);

		return <HomeComponent responseGetItemsDto={responseGetItemsDto} />

	} catch (error) {
		if (
			error instanceof ZodError ||
			(error instanceof AxiosError && error.response?.status === 400)
		) {
			redirect("/");
		}

		throw error;
	}
}