import { React, useState } from "react";
import { Content } from "../components/Content";
import { Header } from "../components/Header";
import Container from "@mui/material/Container";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@mui/material";
import { useEffect } from "react";

const TodoList = () => {
  const selectTodoById = (state, todoId) => {
    return state.todos.todos.filter((todo) => todo.id === todoId);
  };

  const dispatch = useDispatch();
  const [todolist, setTodolist] = useState([]);

  //initiate value and editstate
  const [value, setValue] = useState("");
  const [editId, setEditid] = useState(null);

  //get todo from store
  const todos = useSelector((state) => state.todos.todos);

  const handleRemove = (idx) => {
    dispatch({ type: "todos/todoDeleted", payload: idx });
  };

  const handleChange = (value) => {
    setValue(value);
  };

  const handleEdit = (idEdit) => {
    const { text, id } = (() => {
      return todos.filter((item) => item.id === idEdit)[0];
    })();

    setValue(text);
    setEditid(id);
  };

  const onSubmit = (value) => {
    //add new todo
    if (editId === null) {
      dispatch({ type: "todos/todoAdded", payload: value });
    } else {
      //update todo
      dispatch({
        type: "todos/todoUpdated",
        payload: { id: editId, text: value },
      });
    }
    setValue("");
    setEditid(null);
  };

  return (
    <div>
      <Container maxWidth="sm">
        <div>REACT TODO LIST</div>

        <Header onSubmit={onSubmit} handleChange={handleChange} value={value} />

        {/* {todolist.map((item, i) => {
          //shows the lists
          return (
            <Content
              idx={i}
              key={`card-${i}`}
              item={item}
              handleRemove={handleRemove}
            />
          );
        })} */}
        {/* <Button onClick={() => onEdit(1)}>edit</Button> */}

        {todos.map((item, i) => {
          //return <p>{item.text}</p>;

          return (
            <Content
              idx={i}
              id={item.id}
              key={`card-${i}`}
              item={item.text}
              handleRemove={handleRemove}
              handleEdit={handleEdit}
              // handleCompletedChanged={handleCompletedChanged}
            />
          );
        })}
      </Container>
    </div>
  );
};

export default TodoList;
