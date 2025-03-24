import { IMenu } from "./menu.interface"

export const menuItem:IMenu = {
    title:'Menu',
    item:[{
        icon:"MdHome",
        name:'Home',
        link:'/'
    },
    {
        icon:"MdExplore",
        name:'Discovery',
        link:'/discovery'
    },
    {
        icon:"MdRefresh",
        name:'Fresh movie',
        link:'/fresh-movie'
    },
    {
        icon:"MdLocalFireDepartment",
        name:'Trending now',
        link:'/trending-now'
    }]
  }


export const userItem:IMenu = {
    title:'General',
    item:[]
}