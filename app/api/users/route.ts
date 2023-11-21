/*import { NextResponse } from "next/server";
import { UserManagement } from '@users/application/userManagement';
import { UserService } from "@/app/users/infrastructure/user.service";
import { IUser } from "@/app/core/domain/IUser";
 {user?.user.firstname + " " + user?.user.lastname}
const manager = new UserManagement(new UserService);


export async function GET(request: Request) {

    const resp = await manager.getAllUsers();
    let _userstmp = resp.users ?? [];
    //console.log(_userstmp);
    let _users = await Promise.all(
        _userstmp.map(async (user) => {
            //console.log(user);
            if (user.id) {
                let resp = await loginmanager.getUserRoles(user.id);
                let _roles = resp.roles;
                let _user: IUser = { ...user, roles: _roles } as IUser;
                //console.log(_user);
                return _user;
            };
        })
    );

  } 
*/