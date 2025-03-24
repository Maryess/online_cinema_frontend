export interface IAdminTableItem{
    id:string;
    editUrl:string;
    items:string[];
}

export interface ITableItem{
    tableItem:IAdminTableItem;
    removeHandler: () => void
}
