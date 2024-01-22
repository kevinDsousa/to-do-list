import { CheckBoxProps } from "../types/CheckboxProps"

export const CheckBox = ({...props}: CheckBoxProps) => {
    return (
        <input type="checkbox" {...props}/>
    )
}