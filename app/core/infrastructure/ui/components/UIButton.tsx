'use client'
import { Button } from 'react-bootstrap';

export type UIButtonProps = {
    label: string;
    name?: string;
    type?: "button" | "submit" | "reset" | undefined;
    disabled?: boolean;
    onClick?: (event: any) => void
}

export const UIButton: React.FC<UIButtonProps> = ({ label, name, type, disabled, onClick }) => {

    return (
        <Button id={name} name={name} type={type} onClick={onClick} disabled={disabled} >{label}</Button>
    );
    
}