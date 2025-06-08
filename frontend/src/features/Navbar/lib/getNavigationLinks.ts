import { NavigationLink } from "../model/types";

export const getNavigationLinks = (): NavigationLink[]=>[
    {key:'home', href:'/',},
    {key:'about', href:'/about',},
    {key:'contacts', href:'#contacts'}
]