import { IMenu } from "./Menu.interface"

export const firstItem:IMenu = {
    title:'Menu',
    item:[{
        icon:'',
        name:'Home',
        link:'/home'
    },
    {
        icon:'',
        name:'Discovery',
        link:'/discovery'
    },
    {
        icon:'',
        name:'Fresh movie',
        link:'/fresh-movie'
    },
    {
        icon:'',
        name:'Trending now',
        link:'/trending-now'
    }]
  }

export const secondItem:IMenu = {
    title:'Popular genres',
    item:[
        {
            icon:'',
            name:'Comedy',
            link:'/genres/comedy'
        },
        {
            icon:'',
            name:'Action',
            link:'/genres/ction'
        },
        {
            icon:'',
            name:'Drama',
            link:'/genres/drama'
        },
        {
            icon:'',
            name:'Fantasy',
            link:'/genres/fantasy'
        }
    ]
}

export const thirdItem:IMenu = {
    title:'General',
    item:[{
        icon:'',
        name:'Login',
        link:'/login'
    }]
}