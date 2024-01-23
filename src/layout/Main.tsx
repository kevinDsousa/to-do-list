import { useState } from 'react';
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Task } from "../components/Task";

export const Main = () => {
    const [tasks, setTasks] = useState<string[]>([]);
    const [newTask, setNewTask] = useState<string>('');
    const [completedTasks, setCompletedTasks] = useState<number>(0);
    const [maxTasksToShow, setMaxTasksToShow] = useState<number>(0);

    const handleCreateTask = () => {
        if (newTask.trim() !== '') {
            setTasks((prevTasks) => [...prevTasks, newTask]);
            setNewTask('');
            setMaxTasksToShow((prevMaxTasksToShow) => prevMaxTasksToShow + 1);
        }
    };

    const handleTaskCompletion = (index: number, isChecked: boolean) => {
        const updatedTasks = tasks.map((task, i) =>
            i === index ? `${task} ${isChecked ? '(Concluída)' : ''}` : task
        );

        setTasks(updatedTasks);
        setCompletedTasks(updatedTasks.filter((task) => task.includes('(Concluída)')).length);
    };

    return (
        <main className="bg-gray-600 h-screen">
            <section className="flex items-center justify-center gap-2 -translate-y-8">
                <Input
                    placeholder="Digite uma nova tarefa"
                    className="outline-none bg-gray-500 rounded-lg p-4 font-inter text-white w-[638px]"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                />
                <Button title="Criar" icon onClick={handleCreateTask}></Button>
            </section>
            <section className="mt-16 mb-6 w-screen">
                <div className="flex text-white font-inter font-semibold justify-between px-40">
                    <span>Tarefas criadas {tasks.length}</span>
                    <p>
                        Concluídas <span>{completedTasks} de {maxTasksToShow}</span>
                    </p>
                </div>
                <div className='mt-6'>
                    <ul className='flex items-center justify-center flex-col gap-4'>
                        {tasks.slice(0, maxTasksToShow).map((task, index) => (
                            <li className="w-[800px] mx-10 px-5 flex bg-gray-500 rounded-lg" key={index}>
                                <Task
                                    taskTitle={task}
                                    onToggleCompletion={(isChecked: boolean) => handleTaskCompletion(index, isChecked)}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </main>
    );
};
