import React, { useEffect, useState } from 'react';
import { emptyUser } from '@core/domain/IUser';
import { UIButton } from '@core/infrastructure/ui/components/UIButton';
import { UIDropdown } from '@core/infrastructure/ui/components/UIDropdown';
import { UIInput } from '@core/infrastructure/ui/components/UIInput';
import { UICheckbox } from '@core/infrastructure/ui/components/UICheckbox';
import { UserContext, UserContextType } from '../context/UserContext';
import { Form, Row } from 'react-bootstrap';

export type UserFormProps = {
  setShowModal?: (show: boolean) => void;
  onSubmit?: () => void;
}

export const UserForm: React.FC<UserFormProps> = ({ setShowModal }) => {

  const { currentUser, setCurrentUser, roles, isEdit, setIsEdit, updateUser, registerUser } = React.useContext(UserContext) as UserContextType;
  const [localRoles, setLocalRoles] = useState<string[]>([]);
  const [reload, setReload] = useState(false);

  const statusOptions = [
    { label: 'ACTIVE', value: 'ACTIVE' },
    { label: 'INACTIVE', value: 'INACTIVE' }
  ];

  const handleRolChange = (e: any) => {
    //console.log(currentUser);
    let _localRoles: string[] = [...currentUser.roles ?? []];


    if (e.checked) {
      _localRoles.push(e.value);
    } else {
      _localRoles.splice(localRoles.indexOf(e.value), 1);
    }

    currentUser.roles = _localRoles;
    setLocalRoles(_localRoles);
  }

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    //console.log(name);
    let _user = { ...currentUser, [name]: value };
    setCurrentUser(_user);
    //console.log(JSON.stringify(user));
    //console.log(JSON.stringify(currentUser));
  };

  const handleDropDownChange = (event: any) => {
    //console.log(JSON.stringify(event.target));
    const { name, value } = event.target;
    //console.log(name);
    let _user = { ...currentUser, [name]: value.code };
    setCurrentUser(_user);
    //console.log(JSON.stringify(_user));
    //console.log(JSON.stringify(currentUser));
  };

  // Se debe validar como hacer el refresco del componente
  const handleAdd = (event: any) => {
    if (setShowModal) setShowModal(true);
    //console.log(JSON.stringify(currentUser));
    event.preventDefault();
    setIsEdit(false);
    setCurrentUser(emptyUser);
    setReload(true);
    //console.log(JSON.stringify(currentUser));
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    //currentUser.roles = localRoles;
    //console.log(currentUser);
    (!isEdit) ? registerUser(currentUser) : updateUser(currentUser);
    if (setShowModal) setShowModal(false);
    //console.log(JSON.stringify(currentUser));
  };

  useEffect(() => {
    
  }, [reload]);

  return (
    <div className="mx-4 d-grid gap-3">
      <form onSubmit={handleSubmit} method="post">
        <UIInput required label="Email: " name="email" value={currentUser.email} onChange={handleChange} />
        <UIInput required label="Firstname: " name="firstname" value={currentUser.firstname} onChange={handleChange} />
        <UIInput required label="Lastname: " name="lastname" value={currentUser.lastname} onChange={handleChange} />
        <UIInput required label="Phonenumber: " name="phonenumber" value={currentUser.phonenumber} onChange={handleChange} />
        <UIInput required label="Password: " name="password" value={currentUser.password} onChange={handleChange} />
        <UIDropdown label="Status: " name="status" value={currentUser.status ? currentUser.status : ""} onChange={handleDropDownChange} options={statusOptions} placeholder='Seleccione ...' />

        <Row bsPrefix='form-row'>
          <Form.Label className="label">Roles</Form.Label>
          <div className="value">
            <div className='flex'>
              <div className="mx-auto text-center">

                {roles.map((rol, index) => {
                  return (
                    // eslint-disable-next-line react/jsx-key
                    <span className='ms-3'>
                      <UICheckbox key={'' + rol + index} label={rol} name={rol} group='roles' value={rol} onChange={handleRolChange} checked={currentUser.roles ? currentUser.roles.some((item) => item === rol) : false} />
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </Row>

        <Row>
          <div className="mx-auto text-center">
            {
             //<UIButton label="Nuevo" type='reset' onClick={handleAdd} />
            }
            <UIButton label={(isEdit) ? 'Actualizar' : 'Guardar'} />
          </div>
        </Row>
      </form>
    </div>
  );

} 