import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { ReactSortable } from "react-sortablejs";

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
      className='w-full flex items-center bg-white dark:bg-gray-800 py-4 px-2 shadow-sm rounded-md'
    >
      <div
        onClick={() => setDone(!done)}
        className={clsx(
          "ml-4 border border-gray-200  rounded-full flex justify-center items-center  bg-white dark:bg-gray-800 dark:border-gray-600 border-gradient h-6 w-6",
          done && "bg-gradient-to-br from-check-blue to-check-purple"
        )}
      >
        {done && (
          <svg xmlns='http://www.w3.org/2000/svg' width='11' height='9'>
            <path
              fill='none'
              stroke='#FFF'
              strokeWidth='2'
              d='M1 4.304L3.696 7l6-6'
            />
          </svg>
        )}
      </div>
      <input
        onChange={(e) => setInput(e.target.value)}
        value={input}
        className='focus:outline-none w-64 ml-5 dark:bg-gray-800 dark:text-gray-400'
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
  const [hover, setHover] = useState(false);

  let id = todo.id;

  const handleClick = () => {
    setTodos(
      todos.map((todo: any) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
    setDone(!done);
  };

  function handleDelete() {
    setTodos(todos.filter((todo: any) => todo.id !== id));
  }

  useEffect(() => {
    setDone(todo.checked);
  }, [todos]);

  return (
    <div className='border-b dark:border-gray-600 py-5'>
      <div
        className='flex items-center px-2'
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div
          onClick={() => handleClick()}
          className={clsx(
            "ml-4 border border-gray-200  rounded-full flex justify-center items-center  bg-white dark:bg-gray-800 dark:border-gray-600 border-gradient h-6 w-6",
            done && "bg-gradient-to-br from-check-blue to-check-purple"
          )}
        >
          {done && (
            <svg xmlns='http://www.w3.org/2000/svg' width='11' height='9'>
              <path
                fill='none'
                stroke='#FFF'
                strokeWidth='2'
                d='M1 4.304L3.696 7l6-6'
              />
            </svg>
          )}
        </div>
        <div
          onClick={() => handleClick()}
          className={clsx(
            "ml-5 text-lg cursor-pointer",
            done && "line-through text-gray-400"
          )}
        >
          {todo.title}
        </div>
        {hover && (
          <svg
            onClick={() => handleDelete()}
            className='ml-auto mr-4 cursor-pointer'
            xmlns='http://www.w3.org/2000/svg'
            width='18'
            height='18'
          >
            <path
              fill='#494C6B'
              fillRule='evenodd'
              d='M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z'
            />
          </svg>
        )}
      </div>
    </div>
  );
}

function Todos({ todos, setTodos }: { todos: any; setTodos: any }) {
  const [active, setActive] = useState("All");

  function handleTodoCount() {
    let amountOfTodo = todos.length;
    let amountOfTrue = todos.filter((todo: any) => todo.checked).length;

    return amountOfTodo - amountOfTrue;
  }

  function handleClear() {
    let filterTest = todos.filter((todo: any) => !todo.checked);
    setTodos(filterTest);
  }

  return (
    <div className='mt-4 w-full flex flex-col rounded-md shadow-xl bg-white dark:bg-gray-800 dark:text-gray-400'>
      {todos.length > 0 ? (
        active === "All" ? (
          <ReactSortable
            delay={2}
            animation={200}
            list={todos}
            setList={setTodos}
          >
            {todos.map((todo: any, i: number) => (
              <Todo key={i} todo={todo} setTodos={setTodos} todos={todos} />
            ))}
          </ReactSortable>
        ) : active === "Active" ? (
          todos.map(
            (todo: any, i: number) =>
              !todo.checked && (
                <Todo key={i} todo={todo} setTodos={setTodos} todos={todos} />
              )
          )
        ) : (
          active === "Completed" &&
          todos.map(
            (todo: any, i: number) =>
              todo.checked && (
                <Todo key={i} todo={todo} setTodos={setTodos} todos={todos} />
              )
          )
        )
      ) : (
        <div className='flex items-center justify-center h-52 border-b dark:border-gray-700 dark:text-gray-700 italic text-xs font-bold'>
          might want to add something?
        </div>
      )}
      <div className='flex items-center px-4 py-3 font-bold text-xs text-gray-300 justify-between dark:text-gray-500'>
        <div className=''>
          {handleTodoCount() < 2
            ? handleTodoCount() + " Item left"
            : handleTodoCount() + " Items left"}
        </div>
        <div className='flex items-center space-x-4 '>
          <div
            onClick={() => setActive("All")}
            className={clsx(
              "cursor-pointer",
              active === "All" && "text-blue-500"
            )}
          >
            All
          </div>
          <div
            onClick={() => setActive("Active")}
            className={clsx(
              "cursor-pointer",
              active === "Active" && "text-blue-500"
            )}
          >
            Active
          </div>
          <div
            onClick={() => setActive("Completed")}
            className={clsx(
              "cursor-pointer",
              active === "Completed" && "text-blue-500"
            )}
          >
            Completed
          </div>
        </div>
        <div className='text-right' onClick={handleClear}>
          Clear Completed
        </div>
      </div>
    </div>
  );
}

export default function TodoContent() {
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <AddTodo setTodos={setTodos} />
      <Todos todos={todos} setTodos={setTodos} />
    </div>
  );
}
