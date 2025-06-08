import { Button } from "@/shared/components/ui/button/Button"
import { useTranslations } from "next-intl"


export default function HomePage(){
    const t = useTranslations('mainPageBanner')
    return (
        <>
        <header className="header h-full mt-5 px-4  lg:mt-20">
            <div className="header-content container flex items-center flex-col justify-center text-center gap-7 lg:gap-4  bg-[url('/images/mobile-banner.jpg')] lg:bg-[url('/images/banner.jpg')]  bg-top mx-auto h-180 lg:h-200 bg-center bg-cover rounded-2xl overflow-hidden">
            <h1 className="header-title text-2xl lg:text-4xl font-bold">{t('title')}</h1>
            <p className="header-description text-lg lg:text-xl max-w-80 lg:max-w-4xl font-semibold">{t('description')}</p>
            <Button size="md" variant="default" >{t('actionBtn')}</Button>
            </div>
        </header>
        </>
    )
}