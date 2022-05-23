import React from 'react';

const TodosList = (
    {
        tasks,
        removeTasks,
        selectedTasks
    }) => {


    return (
        <ul className="tasks-list">
            {
               tasks.map( task => (
                    <li key={task.id}>
                        <h3>{task.title}</h3>
                        <p><b>Description</b>: {task.description}</p>
                        <p><b>Completed</b>: { task.completed.toString() }</p>
                        <button onClick={()=> removeTasks(task.id)}>
                            Delete XD
                        </button>
                        <button onClick={ ()=> selectedTasks(task) }>
                            Edit
                        </button>
                    </li>
               ))
            }            
        </ul>
    );
};

export default TodosList;