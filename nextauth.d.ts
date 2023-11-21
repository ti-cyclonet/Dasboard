import IUser from '@core/domain/IUser'
import ISessionUser from '@core/domain/ISessionUser'

declare module "next-auth" {
    interface User extends ISessionUser {
    }

    interface Session extends DefaultSession {
        user?: User;
    }
}

declare module "next-auth/jwt" {
    interface JWT extends ISessionUser{
    }
}