import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';

export type UIDataTableProps = {
    columns: { field: string, header: string, template?: (item: any) => any }[];
    items: any[];
    handleEdit: (item: any) => void;
    handleDelete: (item: any) => void;
    children?: React.ReactNode;
}


export const UIDataTable: React.FC<UIDataTableProps> = ({ columns, items, handleEdit, handleDelete }) => {

    const actionsTemplate = (item: any) => {
        return (
            <>
                <div className=''>
                    <Button icon="pi pi-file-edit" rounded outlined severity="success" aria-label="Editar" className='m-1' onClick={() => { handleEdit(item) }} />
                    <Button icon="pi pi-times" rounded outlined severity="danger" aria-label="Eliminar" className='m-1' onClick={() => { handleDelete(item) }} />
                </div>
            </>
        );
    };

    return (
        <div>
            <DataTable value={items} stripedRows>
                {columns.map((col, i) => (
                    <Column key={col.field} field={col.field} body={col.template} header={col.header} />
                ))}
                <Column key="actions" field="" header="Actions" body={actionsTemplate}></Column>
            </DataTable>
        </div>
    );
}