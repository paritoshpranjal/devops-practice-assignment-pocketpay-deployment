export interface BusinessDetailsInterface {
    name: string;
    registrationNo: string;
    address:string;
    businessCategory: string|undefined;
    subCategory: string; 
    businessSize: string;
    userId:number;
}

export interface TradeAddressInterface {
    address:string;
    businessId:number;
}