export interface IVehiculo {
    id:string,
    alias?:string,
    batery_max_cap?:Number,
    charge_max_cap?:number,
    status?:string 
}
 
export const emptyVehi: IVehiculo = {
	id: "",
};