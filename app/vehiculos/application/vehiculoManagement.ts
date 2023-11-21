import { IVehiculo } from "../domain/IVehiculo";
import { VehiculoRepository } from "../domain/VehiRepository";

export class VehiManagement {
    
    constructor(private readonly repository: VehiculoRepository){        
        this.repository = repository;
    }

    async getAllVehi(): Promise <{success: boolean; vehiculos: IVehiculo[]|null}> {
        const responseVehiculo = await this.repository.getAll();
        return {success: true, vehiculos: responseVehiculo};
    }
    async registerVehiculo(vehiculo: IVehiculo): Promise <{success: boolean; vehiculo: IVehiculo|null}> {
        const responseVehiculo = await this.repository.add(vehiculo);
        return {success: true, vehiculo: responseVehiculo};
    }

    async updateVehiculo(id: string, vehiculo: IVehiculo): Promise <{success: boolean; vehiculo: IVehiculo|null}> {
        const responseVehiculo = await this.repository.update(vehiculo);
        return {success: true, vehiculo: responseVehiculo};
    }

    async inactivateVehiculo(alias: string): Promise <{success: boolean; vehiculo: IVehiculo|null}> {
        let responseVehiculo = await this.repository.getById(alias);        
        if (responseVehiculo){
            responseVehiculo.status = 'INACTIVE';        
            responseVehiculo = await this.repository.update(responseVehiculo);
            return {success: true, vehiculo: responseVehiculo};
        }else{
            return {success: false, vehiculo: null};
        }        
    }

    async deleteVehiculo(id: string): Promise <{success: boolean; vehiculo: IVehiculo|null}> {
        await this.repository.delete(id);
        return {success: true, vehiculo: null};
    }


    

}