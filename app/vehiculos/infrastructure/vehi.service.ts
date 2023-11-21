import { IUser } from "@/app/core/domain/IUser";
import { VehiculoRepository } from "../domain/VehiRepository";
import { IVehiculo } from "../domain/IVehiculo";
import { Body } from "react-bootstrap/lib/Media";


export class VehiService implements VehiculoRepository {

    private apiBasePath = process.env.BASEPATH_API_VEHICLES;
    

    getById(id: string): Promise<IVehiculo | null> {
        throw new Error("Method not implemented.");
    }
    async add(entity: IVehiculo): Promise<IVehiculo> {
        console.log(entity);
        const resp = await fetch(this.apiBasePath+"/vehicles", {
            method: 'POST',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            mode: 'cors',
            body: JSON.stringify(entity),
            
        });
         
        return Promise.resolve(await resp.json());
    }
   
    async update(entity: IVehiculo): Promise<IVehiculo> { 
        const resp = await fetch(this.apiBasePath+"/vehicles/"+entity.id, {
            method: 'PUT',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            mode: 'cors',
            body: JSON.stringify({vehiculo: entity, id: entity.id}),
        });
        return Promise.resolve(await resp.json());
    }
    async delete(id: string): Promise<void> {
        const resp = await fetch(this.apiBasePath+"/vehicles/"+id, {
            method: 'DELETE',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            mode: 'cors',
        });
        return Promise.resolve(await resp.json());
    }
    
    async getAll(): Promise<IVehiculo[]> {
        
         const resp = await fetch(this.apiBasePath+'/vehicles', {
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            }
        });
        console.log(resp);
        return Promise.resolve(await resp.json());
        
    }
}
