import { ButtonProps } from "../types/ButtonProps";
import plusIcon from '../assets/plus.png'; 

export const Button = ({ icon, title, onClick, type, ...props }: ButtonProps) => {
    return (
        <button onClick={onClick} type={type} className="flex items-center justify-center text-white font-inter text-xl bg-blue h-14 w-[90px] rounded-lg gap-2" {...props}>
            {title}
            {icon && <span className="icon"><img src={plusIcon} alt="Plus Icon" className="" /></span>}
        </button>
    );
};
