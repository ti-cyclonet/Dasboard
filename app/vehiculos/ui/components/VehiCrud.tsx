'use client'
import { useContext, useState } from 'react';
import { emptyVehi } from '../../domain/IVehiculo';
import { UIButton } from '@core/infrastructure/ui/components/UIButton';
import { UIModal } from '@core/infrastructure/ui/components/UIModal';
import { VehiContext, VehiContextType } from '../context/VehiContext';
import { VehiForm } from './VehiForm';
import { VehiList } from './VehiList';

//theme
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";
//corez
import "primereact/resources/primereact.min.css";
//icons
import "primeicons/primeicons.css";
import { Card } from 'react-bootstrap';

export const VehiCrud = () => {

    const { setCurrent, setIsEdit } = useContext(VehiContext) as VehiContextType;
    const [show, setShow] = useState(false);

    const newVehi = () => {
        setIsEdit(false);
        setCurrent(emptyVehi);
        setShow(true);
    }

    return (
        <>
            <div className="row">
                <div className="col-12 col-lg-12 col-xxl-12 d-flex">

                    <Card className='flex-fill'>
                        <Card.Header>
                            <div className="col-12 col-lg-12 col-xxl-12 d-flex justify-content-between">
                                <Card.Title>Gestión de Vehiculos</Card.Title>
                                <UIButton label="Crear Vehiculo" type='button' onClick={newVehi} />
                            </div>
                        </Card.Header>
                        <Card.Body><VehiList setShowModal={setShow} /></Card.Body>
                    </Card>

                </div>
            </div>

            <UIModal closeButton={true} show={show} title='Registrar Vehiculo' onHide={() => setShow(false)}>
                <VehiForm setShowModal={setShow}  />
            </UIModal>
        </>

    );

}

