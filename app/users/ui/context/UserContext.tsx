'use client'
import React, { createContext, useEffect, useState } from "react";
import { UserManagement } from '@users/application/userManagement';
import { IUser, emptyUser } from '@core/domain/IUser'
import { LoginService } from "@core/infrastructure/services/Login.services";
import { LoginManagement } from "@core/application/LoginManagement";
import { UserService } from "@users/infrastructure/user.service";

export type UserContextType = {
    currentUser: IUser;
    setCurrentUser: (user: IUser) => void;
    isEdit: boolean;
    setIsEdit: (isEdit: boolean) => void;
    users: IUser[]
    loadUsers: () => void;
    roles: string[];
    registerUser: (user: IUser) => void;
    updateUser: (user: IUser) => void;
    deleteUser: (user: IUser) => void;
    getUserRoles: (username: string) => string[];
}

// Creamos un contexto para manejar los productos
export const UserContext = createContext<UserContextType | null>(null);

export type UserProviderProps = {
    children?: React.ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {

    const [updateView, setUpdateView] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [currentUser, setCurrentUser] = useState(emptyUser);
    const [users, setUsers] = useState<IUser[]>([]);
    const [roles, setRoles] = useState<string[]>([]);
    
    const manager = new UserManagement(new UserService());
    const loginmanager = new LoginManagement(new LoginService());



    const loadUsers = () => {
        console.log('load User on Context (server)');
        (async () => {
            const resp = await manager.getAllUsers();
            let _userstmp = resp.users ?? [];
            //console.log(_userstmp);
            let _users = await Promise.all(
                _userstmp.map(async (user) => {
                    //console.log(user);
                    if (user.id) {
                        let resp = await loginmanager.getUserRoles(user.email);
                        let _roles = resp.roles;
                        let _user: IUser = { ...user, roles: _roles } as IUser;
                        //console.log(_user);
                        return _user;
                    };
                })
            );
            //console.log(_users);
            if (_users) {
                setUsers(_users as unknown as IUser[]);
            }
        })();
    };

    const registerUser = (user: IUser) => {
        setUpdateView(true);
        manager.registerUser(user).then(data => {
            if (data.success && data.user) {
                loadUsers();
            }
        });
    };

    const updateUser = (user: IUser) => {
        //console.log(JSON.stringify(user));        
        manager.updateUser(user.email, user).then(data => {
            if (data.success && data.user) {
                loadUsers();
            }
        });
        setUpdateView(true);
    };

    const deleteUser = (user: IUser) => {
        setUpdateView(true);
        manager.deleteUser(user.email).then(data => {
            if (data.success) {
                loadUsers();
            }
        });
    };

    const getAllRoles = () => {
        manager.getAllRoles().then(data => {
            if (data.success) {
                setRoles(data.roles);
            }
        });
    };


    const getUserRoles = (username: string): string[] => {
        let roles;
        loginmanager.getUserRoles(username).then(data => {
            if (data.success) {
                //console.log(data.roles);
                roles = data.roles;
            }
        });
        //console.log(roles);
        return (roles ? roles : []) as string[];
    };

    // Simulamos una petición a una API para obtener los productos
    useEffect(() => {
        if (users && users.length < 1) {
            loadUsers();
            getAllRoles();
        }
    }, [updateView]);

    return (
        <UserContext.Provider value={{ currentUser, setCurrentUser, isEdit, setIsEdit, users, loadUsers, roles, registerUser, updateUser, deleteUser, getUserRoles }}>
            {children}
        </UserContext.Provider>
    );
};
