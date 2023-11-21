'use client'

import {
  UIButton,
  UIInput,
  UIPassword,
} from "@app/core/infrastructure/ui/components";

import { useState } from "react";

import { ToastEventManager } from '@core/infrastructure/utilities/EventsManager';

import { signIn, getSession } from "next-auth/react";
import  authOptions from "@pages/api/auth/[...nextauth]"
import { ISessionUser } from "@/app/core/domain/ISessionUser";
import { useSearchParams } from 'next/navigation';

import Cryptr from "cryptr";

export default function Login() {

  const [email, setEmail] = useState("");
  
  const [password, setPassword] = useState("");
  const [disabled, setDisabled] = useState(false);

  const searchParams = useSearchParams();
  const _callbackUrl = searchParams?.get('callbackUrl') ?? '/';

  const cryptr = new Cryptr(process.env.APP_CRYPT_PHRASE??'');

  const onSubmit = (event: any) => {
    event.preventDefault();
    setDisabled(true);
    const res = signIn("credentials", { username: email, password: cryptr.encrypt(password), callbackUrl: _callbackUrl })
      .then(async (data) => {        
        //console.log(data);
        const session = getSession(authOptions).then((session)=>{
          
          if (session?.user){
            let _user = session.user as unknown as ISessionUser;
            //console.log(typeof(_user));
            //console.log(_user);
            //ToastEventManager.setSubject({ severity: 'success', summary: 'Hola de nuevo! ' + _user.user?.firstname + ' ' + _user.user?.lastname });
          }
          
        });
        //console.log(session);
        setDisabled(false);
      });
  };

  return (
    <>
      <div className="mx-4 d-grid gap-3">
        <form onSubmit={onSubmit} method="POST">
          <UIInput
            required
            label="Email: "
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <UIPassword
            required
            label="Password: "
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <div className="flex">
            <div className="mx-auto text-center">
              <UIButton label="Login" type="submit" disabled={disabled} />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
