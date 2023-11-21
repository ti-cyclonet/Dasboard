import { ILoginService } from "@app/core/domain/ILoginService";
import { ISessionUser } from "@app/core/domain/ISessionUser";

import Cryptr from "cryptr";


export class LoginService implements ILoginService<ISessionUser> {

  private cryptr = new Cryptr(process.env.APP_CRYPT_PHRASE??'');
  private apiBasePath = process.env.BASEPATH_API_AUTH;

  constructor() {
    //console.log("BASEPATH_API_AUTH" + process.env.BASEPATH_API_AUTH);
  }

  async getUserRoles(username: string): Promise<string[]> {
    //console.log("*********************" + username);
    const resp = await fetch(this.apiBasePath+"/auth/roles/" + username, {
      mode: 'cors',
      headers: {        
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    })
    console.log(JSON.stringify(resp));
    return Promise.resolve(await resp.json());
  }

  async logIn(username: string, password: string): Promise<ISessionUser | null> {

    //console.log("username: " + username);
    //console.log("password: " + password);

    const resp = await fetch(this.apiBasePath+"/auth/login", {
      method: 'POST',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      mode: 'cors',
      body: JSON.stringify({ username, password }),
    })

    const user = await resp.json();
    return Promise.resolve(user);

  };

  async logOut(token: String): Promise<void> {
    const resp = await fetch(this.apiBasePath+"/auth/logout", {
      method: 'POST',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      mode: 'cors',
      body: JSON.stringify({ token: token }),
    })

    const user = await resp.json();
  }



}


