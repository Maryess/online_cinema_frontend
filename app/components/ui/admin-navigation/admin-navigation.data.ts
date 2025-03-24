import { IAdminNavItem } from "./admin-navigation.interface";

export const navItems:IAdminNavItem[] = 
[{
    title: 'Statistics',
    link:'/manage'
},
{
    title: 'Users',
    link:'/manage/users'
},
{
    title: 'Movies',
    link:'/manage/movies'
},
{
    title: 'Actors',
    link:'/manage/actors'
},
{
    title: 'Genres',
    link:'/manage/genres'
}]