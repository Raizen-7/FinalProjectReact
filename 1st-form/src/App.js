
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import TodosForm from './components/TodosForm';
import TodosList from './components/TodosList';

function App() {

  const [tasks, setTasks] = useState([]);
  const [tasksSelected, setTasksSelected] = useState(null);

  useEffect(() =>{
    axios.get('https://todo-app-academlo.herokuapp.com/todos/')
    .then(res => setTasks( res.data ) )
    .catch(error => console.log(error.response)) // para delimitar mas rapido cual es el error
  },[])
console.log(tasks);

  const getTasks = ()=>{
    axios.get('https://todo-app-academlo.herokuapp.com/todos/')
    .then(res => setTasks( res.data ) )
    .catch(error => console.log(error.response)) // para delimitar mas rapido cual es el error
  }

  const addTask = (task) => {
    // console.log('se añadió producto');
    // preoperation [...task, task] = todo lo que hay en tasks agregale task
    // setTasks([...tasks, task ]);

    axios.post('https://todo-app-academlo.herokuapp.com/todos/', task)
        .then(()=> getTasks());
        
  };

  const removeTasks = id => {
    console.log(id);
    /* SIN API, SOLO LOCAL
    const index = tasks.findIndex( task => task.id === id )
    tasks.splice( index, 1 );
    setTasks([...tasks]);

    const tasksFiltered = tasks.filter( task => task.id !== id );
    setTasks(tasksFiltered);*/

    // CON API
    axios.delete(`https://todo-app-academlo.herokuapp.com/todos/${id}/`)
      .then(()=> getTasks());
  };

  

  const selectedTasks = task =>{
    setTasksSelected(task);
  };

  const deselectTasks = ()=> setTasksSelected(null);

  const editTasks = taskEdit => {
    //CON API
    axios.put(`https://todo-app-academlo.herokuapp.com/todos/${tasksSelected.id}/`, taskEdit)
    .then(()=> getTasks());
    
    /*SIN API
    console.log(taskEdit);
    taskEdit.id = tasksSelected.id;
    const index = tasks.findIndex(task => task.id === tasksSelected.id );
    tasks[index] = taskEdit;
    setTasks([ ...tasks ]);*/
  };

  return (
    <div className="App">
      <TodosForm 
        addTask={addTask}
        tasksSelected={tasksSelected}
        deselectTasks={deselectTasks}
        editTasks={editTasks}
      />
      <TodosList 
        tasks={tasks}
        removeTasks={removeTasks}
        selectedTasks={selectedTasks}

      />
    </div>
  );
};

export default App;
