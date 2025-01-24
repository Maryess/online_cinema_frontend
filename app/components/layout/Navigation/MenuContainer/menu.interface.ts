import { TypeMaterialIcon } from "shared/types/icon.types";

export interface IMenuItem {
    icon: TypeMaterialIcon;
    name:string;
    link:string;
}

export interface IMenu {
    title:string;
    item: IMenuItem[]
}