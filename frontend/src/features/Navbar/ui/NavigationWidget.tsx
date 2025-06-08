"use client"
import { Link,   } from "@/i18n/navigation"
import { useLocale, useTranslations } from "next-intl"
import { getNavigationLinks } from "../lib/getNavigationLinks";
import { Menu, X } from "lucide-react";
import { IconButton } from "@/shared/components/ui/icon-button";
import { useState } from "react";

export function Navbar(){
    const t = useTranslations('navbar')
    const locale = useLocale();
    const links = getNavigationLinks()
    const [isNavbarActive, setNavbarActive] = useState(false)
    return(
        <div className="navbar">
        <nav className="navbar-desktop border-b-1 border-white hidden lg:block fixed w-full  bg-background top-0 left-0">
            <div className="navbar-content container mx-auto px-4 my-3 flex items-center justify-between">
            <Link href='/' locale={locale}  className="uppercase font-semibold">3 Devor</Link>
            <div className="navbar-actions">
                <ul className="navbar-links flex gap-5">
                    {links.map(link =>
                        <li key={link.key} className="
                      relative hover:text-primary
                      pb-1
                      hover:before:bg-primary
                      hover:before:w-full
                      transition-all
                      duration-300
                      before:transition-all
                      before:duration-300
                      before:content-['']
                      before:w-0
                      before:h-0.5
                      before:left-0
                      before:bottom-0
                      before:absolute
                      before:bg-background">
                            <Link href={link.href} locale={locale} className="font-semibold text-lg">
                            {t(link.key)}
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
            </div>
        </nav>
        <nav className="navbar-mobile  border-b-1 border-white block lg:hidden">
            <div className="navbar-content container mx-auto px-4 my-3 flex items-center justify-between">
            <Link href='/' locale={locale}  className="uppercase font-semibold">3 Devor</Link>
            <IconButton onClick={()=>{
                setNavbarActive(!isNavbarActive)
            }}>
                <Menu />
            </IconButton>
            <div className={`fixed  px-4 flex justify-center items-center flex-col  h-full transition-all duration-500 top-0 w-full bg-background mobile-navbar-menu  ${isNavbarActive ? 'right-0' : '-right-full'}`}>
                <div className="navbar-menu-content flex flex-col items-center gap-32">
            <button
              onClick={() => {
                setNavbarActive(!isNavbarActive);
              }}
            >
              <X size={60} fontWeight={400} />
            </button>
                <ul className="navbar-links flex gap-5 flex-col items-center">
                    {links.map(link =>
                        <li key={link.key} className="
                      relative hover:text-primary
                      pb-1
                      hover:before:bg-primary
                      hover:before:w-full
                      transition-all
                      duration-300
                      before:transition-all
                      before:duration-300
                      before:content-['']
                      before:w-0
                      before:h-0.5
                      before:left-0
                      before:bottom-0
                      before:absolute
                      before:bg-background">
                            <Link href={link.href} locale={locale} className="font-semibold text-lg">
                            {t(link.key)}
                            </Link>
                        </li>
                    )}
                </ul>
                </div>
          </div>
            </div>
        </nav>
        </div>
    )
}