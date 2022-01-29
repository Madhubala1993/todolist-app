// import "./index.css";
// import { useState } from "react/cjs/react.development";
// import Button from "@mui/material/Button";
// import OutlinedInput from "@mui/material/OutlinedInput";
// import FormGroup from "@mui/material/FormGroup";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
// import IconButton from "@mui/material/IconButton";
// import DeleteIcon from "@mui/icons-material/Delete";

// export default function App() {
//   const InitialList = [
//     "Create theme",
//     "Work on wordpress",
//     "Organize office main department",
//     "Error solve in HTML template",
//   ];
//   const list1 = ["1", "2", "3", "4"];
//   const list2 = ["a", "b", "c", "d"];

//   return (
//     <div className="App">
//       <ToDoForm InitialList={InitialList} list1={list1} list2={list2} />
//     </div>
//   );
// }

// function ToDoForm({ InitialList, list1, list2 }) {
//   const [task, setTask] = useState("");
//   const [taskList, setTaskList] = useState(InitialList);
//   const [activeList, setActiveList] = useState(list1);
//   const [compList, setCompList] = useState(list2);

//   const [list, setList] = useState([]);
//   console.log(InitialList);
//   console.log(list1);
//   console.log(list2);

//   return (
//     <div className="container">
//       <div className="inputContainer">
//         <OutlinedInput
//           className="input"
//           value={task}
//           placeholder="New Task..."
//           onChange={(event) => setTask(event.target.value)}
//         />

//         <Button
//           className="inputButton"
//           onClick={() => setTaskList([...taskList, task])}
//         >
//           Add Task
//         </Button>
//       </div>

//       <div className="actions">
//         <Button
//           variant="text"
//           onClick={() => {
//             console.log("All");
//             setList(taskList);
//           }}
//         >
//           All
//         </Button>
//         <Button
//           variant="text"
//           onClick={() => {
//             console.log("active");
//             console.log(activeList);
//             setList(activeList);
//           }}
//         >
//           Active
//         </Button>
//         <Button
//           variant="text"
//           onClick={() => {
//             console.log("Completed");
//             setList(compList);
//             <CompletedList compList={compList} />;
//           }}
//         >
//           Completed
//         </Button>
//         <ListActivities
//           list={list}
//           setList={setList}
//           compList={compList}
//           setCompList={setCompList}
//         />
//       </div>
//     </div>
//   );
// }

// function ListActivities({ list, setList, compList, setCompList }) {
//   const deleteItem = (index) => {
//     const deleteIndex = index;
//     const remainingList = list.filter((a, idx) => deleteIndex !== idx);
//     setList(remainingList);
//   };
//   console.log(compList);
//   return (
//     <div>
//       {list.map((item, index) => (
//         <ToDoList
//           task={item}
//           index={index}
//           key={index}
//           deleteButton={
//             <IconButton
//               aria-label="delete"
//               color="error"
//               onClick={() => deleteItem(index)}
//             >
//               <DeleteIcon />
//             </IconButton>
//           }
//           newList={
//             <input
//               type="checkbox"
//               value={item}
//               onClick={(event) => {
//                 if (event.target.checked) {
//                   setCompList([...compList, item]);
//                 }
//               }}
//             />
//           }
//         />
//       ))}
//     </div>
//   );
// }

// function ToDoList({ deleteButton, task, index, newList }) {
//   const [checked, setChecked] = useState(false);

//   return (
//     <div>
//       <FormGroup>
//         <div className="listItems">
//           <p>
//             {newList}
//             {task}
//           </p>
//           {deleteButton}
//         </div>
//       </FormGroup>
//     </div>
//   );
// }

// function CompletedList({ compList }) {
//   console.log(compList);
//   return (
//     <div>
//       {compList.map((item, index) => (
//         <ToDoList
//           task={item}
//           index={index}
//           key={index}
//           newList={<input type="checkbox" value={item} checked />}
//         />
//       ))}
//     </div>
//   );
// }
