import { FilterPanel } from "@/features/filters/ui/FilterPanel"
import { Banner } from "@/shared/components/ui/banner/Banner"
import { useTranslations } from "next-intl"


export default function HomePage(){
    const t = useTranslations('')
    return (
        <>
        <Banner/>
        <FilterPanel>
        </FilterPanel>
        </>
    )
}