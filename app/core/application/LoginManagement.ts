import { ILoginService } from "@core/domain/ILoginService";
import { ISessionUser } from "@core/domain/ISessionUser";

export class LoginManagement {
    
    constructor(private readonly service: ILoginService<ISessionUser>){        
        this.service = service;
    }

    async getUserRoles(username:string):Promise<{success: boolean, roles: string[]}>{
        const resp = await this.service.getUserRoles(username);        
        //console.log(resp);
        return {success: true, roles: resp};
    }

    async logIn(username: string, password: string): Promise<{success: boolean, sessionUser: ISessionUser | null}>{
        const resp = await this.service.logIn(username, password);
        //console.log(resp);
        return {success: true, sessionUser: resp};
    }

    async logOut(token:string): Promise<void>{
        const resp = await this.service.logOut(token);
    }
}