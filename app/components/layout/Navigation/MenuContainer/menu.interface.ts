export interface IMenuItem {
    icon: string;
    name:string;
    link:string;
}

export interface IMenu {
    title:string;
    item: IMenuItem[]
}