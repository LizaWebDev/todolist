import React from "react";
import {Button} from "./Button";

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
}

export function Todolist(props: PropsType) {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <Button title={'+'} />
            </div>
            {props.tasks.length === 0 ? (
                <p>Тасок нет</p>
            ) : (
                <ul>
                    {props.tasks.map(task => {
                        return (
                            <li key={task.id}>
                                <input type="checkbox" checked={task.isDone} readOnly={true} />
                                <span>{task.title}</span>
                            </li>
                        );
                    })}
                </ul>
            )}
            <div>
                <Button title={'All'} />
                <Button title={'Active'} />
                <Button title={'Completed'} />
            </div>
        </div>
    );
}