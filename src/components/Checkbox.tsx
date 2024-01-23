import { CheckBoxProps } from "../types/CheckboxProps"

export const CheckBox = ({ ...props }: CheckBoxProps) => {
    return (
        <input className="w-6 h-6 flex justify-center items-center rounded-full outline-none" type="checkbox" {...props} />
    )
}
