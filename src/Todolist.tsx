import React from "react";
import {Button} from "./Button";
import {FilterValuesType} from "./App";

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: number) => void
    changeFilter: (filter: FilterValuesType) => void
}

export function Todolist(props: PropsType) {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <Button title={'+'}/>
            </div>
            {props.tasks.length === 0 ? (
                <p>Тасок нет</p>
            ) : (
                <ul>
                    {props.tasks.map(task => {
                        return (
                            <li key={task.id}>
                                <input type="checkbox" checked={task.isDone} readOnly={true}/>
                                <span>{task.title}</span>
                                <Button title={'x'} onClick={() => props.removeTask(task.id)}/>
                            </li>
                        );
                    })}
                </ul>
            )}
            <div>
                <div>
                    <Button title={'All'} onClick={() => {
                        props.changeFilter('all')
                    }}/>
                    <Button title={'Active'} onClick={() => {
                        props.changeFilter('active')
                    }}/>
                    <Button title={'Completed'} onClick={() => {
                        props.changeFilter("completed")
                    }}/>
                </div>
            </div>
        </div>
    );
}