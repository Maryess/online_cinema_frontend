export interface IAdmin{
    item:IAdminItem[]
}

export interface IAdminItem{
    title:string;
    state?:string;
}