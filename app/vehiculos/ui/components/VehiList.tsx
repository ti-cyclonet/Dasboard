import { UIDataTable } from '@core/infrastructure/ui/components/UIDataTable';
import { UIDataTableFilter } from '@core/infrastructure/ui/components/UIDataTableFilter';
import { useContext, useEffect, useState } from 'react';
import { IVehiculo } from '../../domain/IVehiculo';
import { VehiContext, VehiContextType } from '../context/VehiContext';
import { UIConfirmationDialog } from '@core/infrastructure/ui/components/UIConfirmationDialog';
import { UIModal } from '@core/infrastructure/ui/components/UIModal';
import { VehiForm } from './VehiForm';


export type VehiListProps  = {
    setShowModal?: (show:boolean) => void;
    onSubmit?: () => void;
  }
  

export const VehiList : React.FC<VehiListProps> = ({setShowModal}) => {
    const [show, setShow] = useState(false);
    const { current, vehiculos, setCurrent, setIsEdit, deleteVehiculo  } = useContext(VehiContext) as VehiContextType;
    const [showConfirmation, setShowConfirmation] = useState(false);

    const columns = [
        { field: 'id', header: 'id'},        
        { field: 'alias', header: 'alias'},
        { field: 'batery_max_cap', header: 'batery max cap'},
        { field: 'charge_max_cap', header: 'charge max cap'},
        //{ field: 'status', header: 'vehicle status' }, 
        
    ];

    
    const handleEdit = (Vehi: IVehiculo) => {
        setCurrent(Vehi);
        console.log(JSON.stringify(Vehi));
        setIsEdit(true);
        if (setShowModal) setShowModal(true);        
    };

    const handleDelete = (Vehi: IVehiculo) => {
        setCurrent(Vehi);
        setShowConfirmation(true);
    };

    

    useEffect(() => {
        console.log(vehiculos);
    }, []);

    return (
        <div>
            {vehiculos && vehiculos.length > 0 ? (
                <>
                    <UIDataTableFilter columns={columns} items={vehiculos}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete} 
                         
                        paginacion={5}
                        dK = "id"
                        fD='row'
                        msg='No found'
                        filterPlaceholder='Search'
                        minW= '12rem'    >
                        </UIDataTableFilter>
                         
                    <UIConfirmationDialog
                        show={showConfirmation}                        
                        title="Eliminar registro"
                        message="Esta seguro de eliminar este registro?"
                        onHide={()=>setShowConfirmation(false)}
                        onConfirm={()=> {deleteVehiculo(current); setShowConfirmation(false)}}
                        onCancel={()=>setShowConfirmation(false)}
                    />             
                       
           
                </>
            ) : (
                <p>No records found.</p>
            )
            }
        </div>
    );

}
