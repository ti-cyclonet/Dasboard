'use client'
import { useContext, useState } from 'react';
import { emptyUser } from '@core/domain/IUser';
import { UIButton } from '@core/infrastructure/ui/components/UIButton';
import { UIModal } from '@core/infrastructure/ui/components/UIModal';
import { UserContext, UserContextType } from '../context/UserContext';
import { UserForm } from './UserForm';
import { UserList } from './UserList';

//theme
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";
//core
import "primereact/resources/primereact.min.css";
//icons
import "primeicons/primeicons.css";
import { Card } from 'react-bootstrap';

export const UserCrud = () => {

    const { setCurrentUser, setIsEdit } = useContext(UserContext) as UserContextType;
    const [show, setShow] = useState(false);

    const newUser = () => {
        setIsEdit(false);
        setCurrentUser(emptyUser);
        setShow(true);
    }

    return (
        <>
            <div className="row">
                <div className="col-12 col-lg-12 col-xxl-12 d-flex">

                    <Card className='flex-fill'>
                        <Card.Header>
                            <div className="col-12 col-lg-12 col-xxl-12 d-flex justify-content-between">
                                <Card.Title>Gestión de Usuarios</Card.Title>
                                <UIButton label="Crear Usuario" type='button' onClick={newUser} />
                            </div>
                        </Card.Header>
                        <Card.Body><UserList setShowModal={setShow} /></Card.Body>
                    </Card>

                </div>
            </div>

            <UIModal closeButton={true} show={show} title='Registrar Usuario' onHide={() => setShow(false)}>
                <UserForm setShowModal={setShow}  />
            </UIModal>
        </>

    );

}

