import FilterSection from "@/components/filter-section";
import ItemsList from "@/components/items-list";
import { getItems } from "@/services/api";
import LandingHeader from "@/components/landing-header";
import SearchSection from "@/components/search-section";
import { components } from "@/types/api";
import { GetItemsQuerySchema } from "@/types/zod";
import { redirect } from "next/navigation";
import { AxiosError } from "axios";
import { ZodError } from "zod";

type ResponseGetItemsDTO = components["schemas"]["ResponseGetItemsDTO"];

export default async function Home({ searchParams }: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {

    try {
        const parsedSearchParams = GetItemsQuerySchema.parse(await searchParams);
        const responseGetItemsDto : ResponseGetItemsDTO = await getItems(parsedSearchParams);

        return (
            <div className="min-h-screen bg-background">
                <LandingHeader />
                <SearchSection />

                <main className="container mx-auto md:px-4 md:py-8 md:space-y-8">
                    <FilterSection />
                    <ItemsList
                        itemsArray={responseGetItemsDto.items}
                        totalItems={responseGetItemsDto.total_elements}
                    />
                </main>
            </div>
        );
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