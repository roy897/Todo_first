import React, { useState } from "react";
import styles from "./todo.module.css";
import TodoItem from "./TodoItem";

const Todo = () => {
  let [value, setValue] = useState(""); //we use useState over here instead of "" to avoid unnesessry clearnes of data of Add.
  const [todos, setTodos] = useState([]);

  //onChange of input read value, store the value
  //onClick of Add button
  //read the stored value and add it to my todo list.

  const onDelete = (id) => {
    let newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <div>
      {/* Todo   */}
      {/* here i take 'value' to see all the udate which is done by user in input tag */}
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="write here"
      />

      <button
        onClick={() => {
          // console.log(value)
          setTodos([
            ...todos,
            { id: Date.now(), value: value, isCompleted: false }
          ]);
          setValue(""); //for clearing input tag
        }}
      >
        Add
      </button>

      <div className={styles.todo}>
        {todos.map((
          todo //{ then return also
        ) => (
          <div>
            {/* <input type="checkbox"/>
            <div key={todo.id}>{todo.value}</div> */}
            <TodoItem key={todo.id} todo={todo} onDelete={onDelete} />
          </div>
        ))}
      </div>
    </div>
  );
};

export { Todo };
