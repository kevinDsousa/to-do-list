import { InputProps } from "../types/InputProps"

export const Input = ({...props}: InputProps) => {
    return (
        <input type="text" {...props} />
    )
}