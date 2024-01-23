export interface TaskProps {
    taskTitle: string;
    onToggleCompletion: (isChecked: boolean) => void;
}