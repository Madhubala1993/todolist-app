import "./index.css";
import { useState } from "react";
import Button from "@mui/material/Button";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

export default function App() {
  const InitialList = [
    { check: false, todo: "Create theme" },
    { check: false, todo: "Work on wordpress" },
    { check: false, todo: "Organize office main department" },
    { check: false, todo: "Error solve in HTML template" },
  ];

  return (
    <div className="App">
      <ToDoForm InitialList={InitialList} />
    </div>
  );
}

function ToDoForm({ InitialList }) {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState(InitialList);
  const [table, setTable] = useState("All");
  return (
    <div className="container">
      <div className="inputContainer">
        <OutlinedInput
          className="input"
          value={task}
          placeholder="New Task..."
          onChange={(event) => setTask(event.target.value)}
        />

        <Button
          className="inputButton"
          onClick={() =>
            setTaskList([...taskList, { check: false, todo: task }])
          }
        >
          Add Task
        </Button>
      </div>

      <div className="actions">
        <Button
          variant="text"
          onClick={() => {
            console.log("All");
            setTable("All");
          }}
        >
          All
        </Button>
        <Button
          variant="text"
          onClick={() => {
            console.log("active");
            setTable("Active");
          }}
        >
          Active
        </Button>
        <Button
          variant="text"
          onClick={() => {
            console.log("Completed");
            setTable("Completed");
          }}
        >
          Completed
        </Button>
        {table === "Active"
          ? taskList
              .filter(({ check }) => check === false)
              .map(({ check, todo }, index) => (
                <ToDoList
                  task={todo}
                  check={check}
                  index={index}
                  key={todo}
                  setTaskList={setTaskList}
                  taskList={taskList}
                />
              ))
          : ""}
        {table === "Completed"
          ? taskList
              .filter(({ check }) => check === true)
              .map(({ check, todo }, index) => (
                <ToDoList
                  task={todo}
                  check={check}
                  index={index}
                  key={todo}
                  setTaskList={setTaskList}
                  taskList={taskList}
                />
              ))
          : ""}
        {table === "All"
          ? taskList.map(({ check, todo }, index) => (
              <ToDoList
                task={todo}
                check={check}
                index={index}
                key={todo}
                setTaskList={setTaskList}
                taskList={taskList}
              />
            ))
          : ""}
      </div>
    </div>
  );
}

function ToDoList({ task, check, index, setTaskList, taskList }) {
  const handleChange = () => {
    for (var t of taskList) {
      if (t.todo === task) {
        t.check = !check;
        setTaskList([...taskList]);
      }
    }
  };

  const deleteItem = (index) => {
    const deleteIndex = index;
    const remainingList = taskList.filter(
      ({ todo }, idx) => deleteIndex !== idx
    );
    setTaskList(remainingList);
  };

  return (
    <div>
      <FormGroup>
        <div className="listItems">
          {check ? (
            <div>
              <Checkbox defaultChecked onClick={() => handleChange()} />
              <strike>
                <span>{task}</span>
              </strike>
            </div>
          ) : (
            <div>
              <Checkbox onClick={() => handleChange()} />
              <span>{task}</span>
            </div>
          )}

          <IconButton
            aria-label="delete"
            color="error"
            onClick={() => deleteItem(index)}
          >
            <DeleteIcon />
          </IconButton>
        </div>
      </FormGroup>
    </div>
  );
}
