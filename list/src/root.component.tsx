import {useEffect, useState} from "react";
import {storeTodo, ITodo} from "@gux/store";

export default function Root(props) {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    const subscription = storeTodo.storeTodo$.subscribe(setTodos);
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <section>
      <h1>React - Todo List</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </section>
  );
}
