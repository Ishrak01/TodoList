"use client"

import { useEffect, useState } from 'react';

const Todo = () => {
  const previouslyAddedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const [tasks, setTasks] = useState(previouslyAddedTasks);
  const [newTask, setNewTask] = useState('');
  const [newPriority, setNewPriority] = useState('low');
 

  useEffect(() => {
    // Load tasks from local storage on component mount
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    console.log(storedTasks)
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    // Save tasks to local storage whenever tasks state changes
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (newTask.trim() === '') return;

    const newTaskObj = {
      id: Date.now(),
      text: newTask,
      priority: newPriority, 
      completed: false,
    };

    setTasks([...tasks, newTaskObj]);
    setNewTask('');
    setNewPriority('low');
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const toggleTaskStatus = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });

    setTasks(updatedTasks);
  };


  
 



  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>

      <div className="mb-4">
        
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
          className="p-2 border rounded"
        />
        <select
          value={newPriority}
          onChange={(e) => setNewPriority(e.target.value)}
          className="p-2 ml-2 border rounded"
        >
          <option value="low">Low Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="high">High Priority</option>
        </select>
       
        <button
          onClick={addTask}
          className="p-2 ml-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Add Task
        </button>
        
      </div>
      

      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex justify-between items-center border-b py-2"
          >
            <span
              style={{
                textDecoration: task.completed ? 'line-through' : 'none',
                color:
                  task.priority === 'low'
                    ? 'green'
                    : task.priority === 'medium'
                    ? 'orange'
                    : 'red',
              }}
              className="flex-grow"
            >
              {task.text} (Priority: {task.priority})
            </span>
            <button
              onClick={() => toggleTaskStatus(task.id)}
              className="p-2 bg-green-500 text-white rounded hover:bg-green-700 mr-2"
            >
              {task.completed ? 'Not Complete' : 'Complete'}
            </button>
            <button
              onClick={() => deleteTask(task.id)}
              className="p-2 bg-red-500 text-white rounded hover:bg-red-700"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
 
      
 
    </div>
  );
};

export default Todo;



