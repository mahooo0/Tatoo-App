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