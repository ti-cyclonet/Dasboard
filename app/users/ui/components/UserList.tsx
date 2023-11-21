import { useContext, useEffect, useState } from 'react';
import { IUser } from '@core/domain/IUser';
import { UIDataTableFilter } from '@core/infrastructure/ui/components/UIDataTableFilter';
import { UserContext, UserContextType } from '../context/UserContext';
import { UIConfirmationDialog } from '@core/infrastructure/ui/components/UIConfirmationDialog';

export type UserListProps  = {
    setShowModal?: (show:boolean) => void;
    onSubmit?: () => void;
  }
  

export const UserList : React.FC<UserListProps> = ({setShowModal}) => {

    const { currentUser, users, setCurrentUser, setIsEdit, deleteUser } = useContext(UserContext) as UserContextType;
    const [showConfirmation, setShowConfirmation] = useState(false);
    const columns = [
        //{field: 'id', header: 'Id'},        
        { field: 'firstname', header: 'Firstname' },
        { field: 'lastname', header: 'Lastname' },
        { field: 'email', header: 'Email' },
        { field: 'status', header: 'Status' },
        { field: 'roles', header: 'Roles' }
    ];

    const handleEdit = (user: IUser) => {
        setCurrentUser(user);
        //console.log(JSON.stringify(user));
        setIsEdit(true);
        if (setShowModal) setShowModal(true);        
    };

    const handleDelete = (user: IUser) => {
        setCurrentUser(user);
        setShowConfirmation(true);
    };

    useEffect(() => {
        //console.log(users);
    }, []);

    return (
        <div>
            {users && users.length > 0 ? (
                <>
                    <UIDataTableFilter columns={columns} items={users}
                    handleEdit={handleEdit}
                    handleDelete={handleDelete} 
                    paginacion={5}
                    dK = "id"
                    fD='row'
                    msg='No found'
                    filterPlaceholder='Search'
                    minW= '12rem' 
                    >
                    </UIDataTableFilter>
                    <UIConfirmationDialog
                        show={showConfirmation}                        
                        title="Eliminar registro"
                        message="Esta seguro de eliminar este registro?"
                        onHide={()=>setShowConfirmation(false)}
                        onConfirm={()=> {deleteUser(currentUser); setShowConfirmation(false)}}
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
