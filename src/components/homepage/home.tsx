import FilterSection from "@/components/homepage/filter-section";
import ItemsList from "@/components/homepage/items-list";
import Pagination from "@/components/homepage/items-pagination";
import SearchSection from "@/components/homepage/search-section";
import { components } from "@/types/api";

type ResponseGetItemsDTO = components["schemas"]["ResponseGetItemsDTO"];

interface HomeCompoenntProps {
    responseGetItemsDto: ResponseGetItemsDTO
}

const HomeComponent = ({ responseGetItemsDto } : HomeCompoenntProps ) => {


    return (
        <div className="min-h-screen bg-background">
            <SearchSection />

            <main className="container mx-auto md:px-4 md:py-8 md:space-y-8">
                <FilterSection />
                <ItemsList
                    itemsArray={responseGetItemsDto.items}
                    totalItems={responseGetItemsDto.total_elements}
                />
            </main>
            {
                responseGetItemsDto.total_elements > 0 ? (
                    <Pagination totalPages={responseGetItemsDto.total_pages} />
                ) : (
                    null
                )
            }
        </div>
    )

}

export default HomeComponent;