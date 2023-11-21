'use client'
import React, { createContext, useEffect, useState } from "react";
import { IVehiculo, emptyVehi } from '../../domain/IVehiculo'
import { VehiManagement } from "../../application/vehiculoManagement";
import { VehiService } from "../../infrastructure/vehi.service";

export type VehiContextType = {
    current: IVehiculo;
    setCurrent: (vehiculo: IVehiculo) => void;
    isEdit: boolean;
    setIsEdit: (isEdit: boolean) => void;
    vehiculos: IVehiculo[]
    loadVehis: () => void;
    deleteVehiculo: (vehiculo: IVehiculo) => void;
    updateVehiculo: (vehiculo: IVehiculo) => void;
    registerVehiculo: (vehiculo: IVehiculo) => void;
}

// Creamos un contexto para manejar los productos
export const VehiContext = createContext<VehiContextType | null>(null);

export type VehisProviderProps = {
    children?: React.ReactNode;
}

export const VehiProvider: React.FC<VehisProviderProps> = ({ children }) => {

    const [updateView, setUpdateView] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [current, setCurrent] = useState(emptyVehi);
    const [vehiculos, setVehiculos] = useState<IVehiculo[]>([]);
    
    const manager = new VehiManagement(new VehiService());



    const loadVehis = () => {
        (async () => {
            const resp = await manager.getAllVehi();
            if (resp.vehiculos) {
                setVehiculos(resp.vehiculos as IVehiculo[]);
            }
        })();
    };
    const deleteVehiculo = (vehiculo: IVehiculo) => {
        setUpdateView(true);
        manager.deleteVehiculo(vehiculo.id).then(data => {
            if (data.success) {
                loadVehis();
            }
        });
    };


        const registerVehiculo = (vehiculo: IVehiculo) => {
            setUpdateView(true);
            manager.registerVehiculo(vehiculo).then(data => {
                if (data.success && data.vehiculo) {
                    loadVehis();
                }
            });
        };
    
        const updateVehiculo = (vehiculo: IVehiculo) => {
                     
            manager.updateVehiculo(vehiculo.id, vehiculo).then(data => {
                if (data.success && data.vehiculo) {
                    loadVehis();
                }
            });
            setUpdateView(true);
        };
    // Simulamos una petición a una API para obtener los productos
    useEffect(() => {
        if (vehiculos && vehiculos.length < 1) {
            loadVehis();
        }
    }, [updateView]);

    return (
        <VehiContext.Provider value={{ current, setCurrent, isEdit, setIsEdit, vehiculos, loadVehis, deleteVehiculo, updateVehiculo,registerVehiculo }}>
            {children}
        </VehiContext.Provider>
    );
};
