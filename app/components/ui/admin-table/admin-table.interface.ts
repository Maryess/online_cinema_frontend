import { ChangeEvent } from "react";

export interface IAdminTableItem{
    id:string;
    editUrl:string;
    items:string[];
}

export interface ITableItem{
    tableItem:IAdminTableItem;
    removeHandler: () => void
}

export interface ITableHeader{
    createHandler: () => void,
    searchTerm:string,
    handleSearch:(e:ChangeEvent<HTMLInputElement>)=>void,
}
