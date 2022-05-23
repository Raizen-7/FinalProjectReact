import React, { useEffect, useState } from 'react';

const TodosForm = (
    { 
        addTask, 
        tasksSelected, 
        deselectTasks, 
        editTasks 
    }) => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [isCompleted, setIsCompleted] = useState(false)

    console.log(tasksSelected);

    useEffect( ()=>{
        if(tasksSelected !== null){
            setTitle(tasksSelected.title);
            setDescription(tasksSelected.description);
            setIsCompleted(tasksSelected.completed);
        }else{
            setTitle("");
            setDescription("");
            setIsCompleted(false);
        };
    }, [tasksSelected])

    const submit = (e)=> {
        e.preventDefault();
         const task = { 
            title,
            description,
            isCompleted
        }
        if(tasksSelected === null ){
            addTask(task);
        } else{
            editTasks(task);
            deselectTasks();

        }

        
    }

    return (
        <form onSubmit={submit} className="task-form">
            <div className="input-container">
                <label htmlFor="title">Title</label>
                <input
                    type = "text"
                    id = "title"
                    onChange = {e => setTitle(e.target.value)}
                    value = {title}
                />
            </div>
            <div className="input-container">
                <label htmlFor="description">Description</label>
                <textarea 
                    name = "description"
                    id = "description"
                    cols = "30"
                    rows = "1.5"
                    onChange = {e => setDescription(e.target.value)}
                    value = {description}
                    >
                    </textarea>
            </div>
            <div className="input-container">
                <label htmlFor="is-complete">Completed</label>
                <input
                    type = "checkbox"
                    id = "is-completed"
                    onChange = {e => setIsCompleted(e.target.checked )}
                    checked = {isCompleted} /*checked es el equivalente a value en checkbox */
                />
            </div>
            <button>Sudmit</button>
            {   
                tasksSelected !== null &&(
                    <button type='button' className='cancel' onClick={deselectTasks} >
                        Cancel
                    </button>
                )
            }
        </form>
    );
};

export default TodosForm;