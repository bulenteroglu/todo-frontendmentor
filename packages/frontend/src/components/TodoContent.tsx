import React from "react";

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

function Todos() {
  const todos = [
    { title: "Complete the online JavaScript", checked: false },
    { title: "Complete the online JavaScript", checked: false },
  ];

  return (
    <div className='mt-4 w-full flex flex-col bg-white rounded'>
      {todos.map((todo, i) => (
        <div key={i} className='border-b py-5'>
          <div className='flex items-center px-2'>
            <div
              style={{
                background:
                  "linear-gradient(to bottom right, #57ddff, #c058f3)",
              }}
              className='ml-4 rounded-full border h-6 w-6'
            ></div>
            <div className='ml-5'>{todo.title}</div>
          </div>
        </div>
      ))}
      <div className='flex items-center text-xs'>
        <div className='w-1/3'>5 items left</div>
        <div className='w-1/3 flex items-center justify-between'>
          <div>All</div>
          <div>Active</div>
          <div>Completed</div>
        </div>
        <div className='w-1/3 text-center'>Clear Completed</div>
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
