
export interface StyleType{
    name:string,
    desc:string,
    id:any
}
export interface MasterType{
    name:string,
    desc:string,
    img_url:string
    styles:StyleType[]
}
export interface TatoType{
    style:string,
    master:string,
    img_url:string
}
export interface MasterTypeBase{
    name:string,
    desc:string,
    img_url:string
    styles:StyleType[]
    id:string
}
export interface TatoTypeBase{
    style:string,
    master:string,
    img_url:string
    id:string
}
export interface DeleteDataType{
    collectionName:string,
    id:string

}