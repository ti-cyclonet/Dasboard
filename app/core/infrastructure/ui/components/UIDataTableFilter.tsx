import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState, useEffect } from 'react';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
 

export type UIDataTableFilterProps = {
    columns: { field: string,   header: string, template?: (item: any) => any }[];
    items: any[];
    handleEdit: (item: any) => void;
    handleDelete: (item: any) => void;
    children?: React.ReactNode; 
    paginacion?: number;
    dK?: string;   
    fD?:  "row";    
    msg?:  string;
    filterPlaceholder?: string;
    minW?:string;
}


 
export const UIDataTableFilter: React.FC<UIDataTableFilterProps> = ({ columns, items, handleEdit, handleDelete, paginacion, fD, dK, msg, minW, filterPlaceholder }) => {
    const [customers, setCustomers] = useState(null);
            
    const [filters, setFilters] = useState({
        firsname: { value: null, matchMode: FilterMatchMode.CONTAINS }
       
    }); 

     
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
            <DataTable value={items} stripedRows paginator rows={paginacion} dataKey={dK}     filterDisplay={fD}    emptyMessage={msg}>
            
                {columns.map((col, i) => (
                    <Column key={col.field} field={col.field} body={col.template} header={col.header} filter filterPlaceholder={filterPlaceholder} style={{ minWidth: minW }}/>
                ))}
                <Column key="actions" field="" header="Actions" body={actionsTemplate}></Column>
            </DataTable>
        </div>
    );
}

