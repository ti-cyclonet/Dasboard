
import React from 'react'
import { UserService } from '@users/infrastructure/user.service';
import { UserManagement } from '@users/application/userManagement';

import { LoginService } from '@core/infrastructure/services/Login.services';
import { LoginManagement } from '@core/application/LoginManagement';
import { UserProvider } from '@users/ui/context/UserContext';
import { UserCrud } from '@users/ui/components/UserCrud';


function UsersPage() {

  //const management: UserManagement = new UserManagement(new UserService());
  const management: LoginManagement = new LoginManagement(new LoginService());

  management.getUserRoles("cesar.zambrano@aossas.com").then((data)=>{
    console.log("********************************Roles"+ JSON.stringify(data.roles));
  });

  

  return (
    <UserProvider>
      <UserCrud />
    </UserProvider >
);
}

export default UsersPage