import React, { useEffect, useState } from "react";
import clsx from "clsx";

function AddTodo({ setTodos }: { setTodos: any }) {
  const [done, setDone] = useState(false);

  const [input, setInput] = useState("");
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!(input.length < 1)) {
      setTodos((prev: any) => [
        ...prev,
        { id: Date.now(), title: input, checked: done },
      ]);
      setInput("");
      setDone(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='w-full flex items-center bg-white py-5 px-2 shadow-sm rounded-sm'
    >
      <div
        onClick={() => setDone(!done)}
        className={clsx(
          "ml-4 rounded-full border h-6 w-6 cursor-pointer bg-white",
          done && "bg-gradient-to-br from-check-blue to-check-purple"
        )}
      ></div>
      <input
        onChange={(e) => setInput(e.target.value)}
        value={input}
        className='focus:outline-none w-full ml-5'
        type='text'
        placeholder='Create a new todo...'
      />
    </form>
  );
}

function Todo({
  todo,
  setTodos,
  todos,
}: {
  todo: any;
  setTodos: any;
  todos: any;
}) {
  const [done, setDone] = useState(todo.checked);

  let id = todo.id;

  const handleClick = () => {
    setTodos(
      todos.map((todo: any) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
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

function Todos({ todos, setTodos }: { todos: any; setTodos: any }) {
  function handleTodoCount() {
    let amountOfTodo = todos.length;
    let amountOfTrue = todos.filter((todo: any) => todo.checked).length;

    return amountOfTodo - amountOfTrue;
  }

  return (
    <div className='mt-4 w-full flex flex-col bg-white rounded'>
      {todos.map((todo: any, i: number) => (
        <Todo key={i} todo={todo} setTodos={setTodos} todos={todos} />
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
  const [todos, setTodos] = useState([]);

  console.log(todos);

  return (
    <div className='shadow-2xl'>
      <AddTodo setTodos={setTodos} />
      <Todos todos={todos} setTodos={setTodos} />
    </div>
  );
}
