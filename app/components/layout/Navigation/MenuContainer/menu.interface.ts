import { MouseEvent } from "react";
import { TypeMaterialIcon } from "shared/types/icon.types";

export interface IMenuItem {
    icon: TypeMaterialIcon;
    name:string;
    link:string;
    onClick?: (event:MouseEvent<HTMLAnchorElement>) => void;
}

export interface IMenu {
    title:string;
    item: IMenuItem[]
}