"use client";
import {useEffect, useState} from "react";
import {useRef} from "react";

export default function Home() {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<string[]>([]);
  const inputName = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputName.current?.focus();
  }, []);

  const handleAddTodo = () => {
    if (todo.trim() !== "") {
      setTodos([...todos, todo]);
      setTodo("");
    }
  };
  const handleDeleteTodo = (index: number) => {
    const newTodos = todos.filter((_, i) => i !== index);

    setTodos(newTodos);
  };

  return (
    <div className="m-auto sm:max-w-screen-sm ">
      <div className="m-5 flex  justify-evenly">
        <input
          ref={inputName}
          className="m-1 rounded-lg p-1"
          placeholder="New todo"
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          //al apretar enter, ejecutar hanfleAddTodo
          onKeyDown={(e) => {
            if (e.code === "Enter") {
              handleAddTodo();
            }
          }}
        />
        <button
          className="m-1 rounded-lg bg-blue-400 p-2 align-top"
          type="submit"
          onClick={handleAddTodo}
        >
          Save
        </button>
      </div>
      {todos.map((todo, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={index} className="m-2 flex  justify-between">
          <li className="p-1">{todo}</li>
          <div>
            <button
              className="ml-2 rounded-lg bg-red-400 p-1"
              type="submit"
              onClick={() => handleDeleteTodo(index)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
