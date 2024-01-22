import { TaskProps } from "../types/TaskProps"
import { CheckBox } from "./Checkbox"

export const Task = ({taskTitle}: TaskProps) => {
    return (
        <section className="flex">
            <CheckBox></CheckBox>
            <span>{taskTitle}</span>
        </section>
    )
}