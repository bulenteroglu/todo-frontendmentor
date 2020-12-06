import React, { useEffect, useState } from "react";
import clsx from "clsx";

function AddTodo() {
  return (
    <div className='w-full flex items-center bg-white py-5 px-2 shadow-sm rounded-sm'>
      <div className='ml-4 rounded-full border h-6 w-6'></div>
      <input
        className='focus:outline-none w-full ml-5'
        type='text'
        placeholder='Create a new todo...'
      />
    </div>
  );
}

function Todo({ todo }: { todo: any }) {
  const [done, setDone] = useState(todo.checked);

  const handleClick = () => {
    setDone(!done);
  };

  return (
    <div className='border-b py-5'>
      <div className='flex items-center px-2'>
        <div
          onClick={() => handleClick()}
          className={clsx(
            "ml-4 rounded-full border h-6 w-6 cursor-pointer bg-white",
            done && "bg-gradient-to-br from-check-blue to-check-purple"
          )}
        ></div>
        <div
          className={clsx("ml-5 text-lg", done && "line-through text-gray-300")}
        >
          {todo.title}
        </div>
      </div>
    </div>
  );
}

function Todos() {
  const todos = [
    { title: "Complete the online JavaScript", checked: false },
    { title: "Complete the online JavaScript", checked: false },
  ];

  function handleTodoCount() {
    let amountOfTodo = todos.length;
    let amountOfTrue = todos.filter((todo) => todo.checked).length;

    return amountOfTodo - amountOfTrue;
  }

  return (
    <div className='mt-4 w-full flex flex-col bg-white rounded'>
      {todos.map((todo, i) => (
        <Todo key={i} todo={todo} />
      ))}
      <div className='flex items-center  px-4 py-5 font-bold text-gray-300'>
        <div className='w-1/3'>
          {handleTodoCount() < 2
            ? handleTodoCount() + " Item left"
            : handleTodoCount() + " Items left"}
        </div>
        <div className='w-1/3 flex items-center justify-between'>
          <div>All</div>
          <div>Active</div>
          <div>Completed</div>
        </div>
        <div className='w-1/3 text-right'>Clear Completed</div>
      </div>
    </div>
  );
}

export default function TodoContent() {
  return (
    <div className='shadow-2xl'>
      <AddTodo />
      <Todos />
    </div>
  );
}
