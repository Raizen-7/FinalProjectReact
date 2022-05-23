
import { useState } from 'react';
import './App.css';
import TodosForm from './components/TodosForm';
import TodosList from './components/TodosList';

function App() {
  
  const tasksDefaul = [
    {
      id : 1,
      title: "breakfast",
      description: "make everyone breakfast",
      completed: true
    },

    {
      id : 2,
      title: "start pending work",
      description: "complete assigned pending tasks",
      completed: false
    },
  ];

  const [tasks, setTasks] = useState(tasksDefaul);
  const [tasksSelected, setTasksSelected] = useState(null);

  const addTask = (task)=>{
    // console.log('se añadió producto');
    // preoperation [...task, task] = todo lo que hay en tasks agregale task
    setTasks([...tasks, task ]);
  };

  const removeTasks = id => {
    console.log(id);
    // const index = tasks.findIndex( task => task.id === id )
    // tasks.splice( index, 1 );
    // setTasks([...tasks]);

    const tasksFiltered = tasks.filter( task => task.id !== id );
    setTasks(tasksFiltered);
  };

  const selectedTasks = task =>{
    setTasksSelected(task);
  };

  const deselectTasks = ()=> setTasksSelected(null);

  const editTasks = taskEdit => {
    console.log(taskEdit);
    taskEdit.id = tasksSelected.id;
    const index = tasks.findIndex(task => task.id === tasksSelected.id );
    tasks[index] = taskEdit;
    setTasks([ ...tasks ]);
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
