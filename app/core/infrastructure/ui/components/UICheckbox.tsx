import { Checkbox } from "primereact/checkbox";

export type UICheckboxProps = {
    label: string;
    name?: string;
    value?: string;
    group: string;
    checked: boolean
    onChange?: (event: any) => void
}

export const UICheckbox: React.FC<UICheckboxProps> = ({ label, name, value, group, checked, onChange }) => {

    return (
        <>
            <label htmlFor={name}>{name}</label>
            <Checkbox inputId={name} name={group} value={value} onChange={onChange} checked={checked} />
        </>

    );
}