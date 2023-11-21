import { LoginManagement } from "@app/core/application/LoginManagement";
import { IUser } from "@app/core/domain/IUser";
//import { LoginService } from "@app/core/infrastructure/services/backend/LoginService";
import { NextResponse } from "next/server";
import Cryptr from "cryptr";

export async function POST(request: Request) {
//    const body:IUser = await request.json();
//    const manager = new LoginManagement(new LoginService());
   
    //const cryptr = new Cryptr('myTotallySecretKey');
    //const pss = cryptr.decrypt(body.password??"");
    //const loginResp = await manager.logIn(body.email, pss);
   
//    const loginResp = await manager.logIn(body.email, body.password??"");
   
    //console.log(loginResp);
    //return NextResponse.json({hash: cryptr.encrypt(JSON.stringify(loginResp))});
   
//    return NextResponse.json(loginResp.sessionUser);
  } 
  