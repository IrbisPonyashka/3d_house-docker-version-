import { useTranslations } from "next-intl";
import { Button } from "../button/Button";
import { Link } from "@/i18n/navigation";

export function Banner(){
    const t = useTranslations('mainBanner')
    return (
        <header className="header h-full mt-5 px-4  lg:mt-20 mb-5 lg:mb-10">
            <div className="header-content container flex items-center flex-col justify-center text-center gap-7 lg:gap-4  bg-[url('/images/mobile-banner.jpg')] lg:bg-[url('/images/banner.jpg')]  bg-top mx-auto h-180 lg:h-200 bg-center bg-cover rounded-2xl overflow-hidden">
            <h1 className="header-title text-2xl lg:text-4xl font-bold">{t('title')}</h1>
            <p className="header-description text-lg lg:text-xl max-w-80 lg:max-w-4xl font-semibold">{t('description')}</p>
            <Link href={'#/search-appartaments'}><Button size="md" variant="default" >{t('actionBtn')}</Button></Link>
            </div>
        </header>
    )
}