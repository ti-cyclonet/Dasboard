import { UIButton } from '@core/infrastructure/ui/components/UIButton';
import { UIInput } from '@core/infrastructure/ui/components/UIInput';
import { UIDropdown } from '@core/infrastructure/ui/components/UIDropdown';
import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { emptyVehi } from '../../domain/IVehiculo';
import { VehiContext, VehiContextType } from '../context/VehiContext';

export type VehiFormProps = {
  setShowModal?: (show: boolean) => void;
  onSubmit?: () => void;
}

export const VehiForm: React.FC<VehiFormProps> = ({ setShowModal }) => {

  const { current, setCurrent, isEdit, setIsEdit, registerVehiculo, updateVehiculo } = React.useContext(VehiContext) as VehiContextType;
  const [localRoles] = useState<string[]>([]);
  const [reload, setReload] = useState(false);

  const statusOptions = [
    { label: 'ACTIVE', value: 'ACTIVE' },
    { label: 'INACTIVE', value: 'INACTIVE' }
  ];

  const handleDropDownChange = (event: any) => {
   
    const { name, value } = event.target;
     
    let _vehiculo = { ...current, [name]: value.code };
    setCurrent(_vehiculo);
     
  };
  
  const handleAdd = (event: any) => {
    if (setShowModal) setShowModal(true);
    console.log(JSON.stringify(current));
    event.preventDefault();
    setIsEdit(false);
    setCurrent(emptyVehi);
    setReload(true);
    console.log(JSON.stringify(current));
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
     
    console.log(current);
    if (!isEdit) registerVehiculo(current);
    if (isEdit) updateVehiculo(current);
    if (setShowModal) setShowModal(false);
     
  };

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    
    let _vehi = { ...current, [name]: value };
    setCurrent(_vehi);
     
  };

  useEffect(() => {
    
  }, [reload]);

  return (
    <div className="mx-4 d-grid gap-3">
      <form onSubmit={handleSubmit} method="post">
        <UIInput required label="Alias: " name="alias" value={current.alias} onChange={handleChange} />
        <UIInput required label="Batery max cap: " name="batery_max_cap" value={(current.batery_max_cap?.toString())} onChange={handleChange} />
        <UIInput required label="Charge max cap: " name="charge_max_cap" value={(current.charge_max_cap?.toString())} onChange={handleChange} />
        <UIDropdown label="Status: " name="status" value={current.status ? current.status : ""} options={statusOptions} placeholder='Seleccione ...' onChange={handleDropDownChange} />
         
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