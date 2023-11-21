import React, { useEffect } from 'react';
import { Form } from 'react-bootstrap';

export type UIDropdownProps = {    
    label: string;
    name: string;
    placeholder?: string;
    value:string;
    options: { label: string, value: string }[];
    onChange: (event: any) => void
}

export const UIDropdown: React.FC<UIDropdownProps> = ({ label, name, placeholder, value, options, onChange }) => {


    const getOptionByText = (optionText: string) =>{
        return options.find(option => option.value === optionText);
    };

    /*useEffect(() => {       
        console.log(JSON.stringify(options));
        console.log(JSON.stringify(getOptionByText(value)));
      }, []);*/

    return (
        <div className='form-row'>        
            <div className="label"><label htmlFor={name}>{label}</label></div>
            <div className="value">
                <Form.Select  value={value || ''} name={name} 
                    onChange={onChange}
                    placeholder={placeholder} 
                    >
                    <option selected>Seleccione ...</option>
                    {options.map((option, index) => (
                        <option key={index} value={option.label}>{option.value}</option>
                    ))}
                </Form.Select>
            </div>            
        </div>        
    );
}