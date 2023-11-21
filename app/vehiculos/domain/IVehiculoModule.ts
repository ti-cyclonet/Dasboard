export interface IVehiculoModule {
    id:string,
    module_sn?:string,
    status?:string,
    vehicle_fk?:number
}
 
export const emptyVehiModule: IVehiculoModule = {
	id: "",
};