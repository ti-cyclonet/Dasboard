import { IUser } from "@/app/core/domain/IUser";
import { UserRepository } from "@users/domain/userRepository";


export class UserService implements UserRepository {

    private apiBasePath = process.env.BASEPATH_API_USERS;

    constructor(){
        //console.log("BASEPATH_API_USERS: "+process.env.BASEPATH_API_USERS);        
    }
    
    async getAllRoles(): Promise<string[]> {
        //console.log("BASEPATH_API_USERS: "+process.env.BASEPATH_API_USERS);        
        const resp = await fetch(this.apiBasePath+'/users/roles', {
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            }
        });
        //console.log(resp);
        return Promise.resolve(await resp.json());
    }
    async getAll(): Promise<IUser[]> {
        const resp = await fetch(this.apiBasePath+'/users', {
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            }
        });
        //console.log(resp);
        return Promise.resolve(await resp.json());
    }
    getById(id: string): Promise<IUser | null> {
        throw new Error("Method not implemented.");
    }
    async add(entity: IUser): Promise<IUser> {
        console.log(entity);
        const resp = await fetch(this.apiBasePath+"/users", {
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
    async update(entity: IUser): Promise<IUser> {
        const resp = await fetch(this.apiBasePath+"/users", {
            method: 'PUT',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            mode: 'cors',
            body: JSON.stringify({user: entity, email: entity.email}),
        });
        return Promise.resolve(await resp.json());
    }
    async delete(id: string): Promise<void> {
        const resp = await fetch(this.apiBasePath+"/users/"+id, {
            method: 'DELETE',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            mode: 'cors',
        });
        return Promise.resolve(await resp.json());
    }
}