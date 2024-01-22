import { ButtonProps } from "../types/ButtonProps"

export const Button = ({ title, onClick, type, ...props }: ButtonProps) => {
    return (
        <button onClick={onClick} type={type} {...props}>{title}</button>
    )
}