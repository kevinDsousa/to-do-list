import { TaskProps } from "../types/TaskProps"
import { CheckBox } from "./Checkbox"

export const Task = ({taskTitle}: TaskProps) => {
    return (
        <section className="flex items-center gap-5 justify-center h-[72px]">
            <CheckBox></CheckBox>
            <span className="text-white font">{taskTitle}</span>
        </section>
    )
}