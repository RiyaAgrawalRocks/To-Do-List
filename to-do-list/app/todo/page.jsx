'use client'
import React, {useState} from 'react'


export default function Todo() {
  let currentId = 2;
  const [newTask, setNewTask] = useState('');

  const [allTasks, setAllTasks] = useState([
    {
      id: 1,
      title: 'Dummy task 1',
      completed: true,
    },
    {
      id: 2,
      title: 'Dummy task 2',
      completed: false,
    }
  ]);

  function addTask() {
    if (newTask.length === 0) {
      return;
    }

    const task = {
      id: ++currentId,
      title: newTask,
      completed: false,
    };

    setAllTasks([...allTasks, task]);
  }

  return (
    <main className='bg-teal-950 w-screen h-screen flex flex-col items-center py-4'>
      <h1 className="font-bold text-3xl underline">To-do List</h1>
      <div className="w-1/2 border-2 border-white mt-8">
        <div className="flex flex-row gap-1 p-3 items-center justify-center">
          <input
            type="text"
            placeholder="Type the task"
            className="text-black w-[80%] h-10 outline-0"
            value={newTask}
            onChange={(ev) => setNewTask(ev.target.value)}
          />
          <button
            className="w-[20%] bg-white text-black border-2 border-black h-11"
            onClick={addTask}
          >Add Task
          </button>
        </div>
        <div className="px-3 pb-8 flex flex-col gap-2">
          {/*  Render all the tasks */}
          {
            allTasks.map((task, index) => (
              <div
                className={`border-2 border-white p-4 text-xl ${task.completed ? 'opacity-50' : ''}`}
                key={task.id}

              >
                <label>{task.title}</label>
              </div>
            ))
          }
        </div>
      </div>
    </main>

  )
}
