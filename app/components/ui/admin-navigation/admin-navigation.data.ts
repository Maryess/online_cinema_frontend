import { getAdminUrl } from "config/api.config";
import { IAdminNavItem } from "./admin-navigation.interface";

export const navItems:IAdminNavItem[] = 
[{
    title: 'Statistics',
    link: getAdminUrl(`/`)
},
{
    title: 'Users',
    link:getAdminUrl(`/users`)
},
{
    title: 'Movies',
    link:getAdminUrl(`/movies`)
},
{
    title: 'Actors',
    link:getAdminUrl(`/actors`)
},
{
    title: 'Genres',
    link:getAdminUrl(`/genres`)
}]