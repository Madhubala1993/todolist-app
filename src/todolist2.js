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
//     "apples",
//     "oranges",
//     "mango",
//     "carrots",
//     "onions",
//     "brocoli",
//   ];

//   return (
//     <div className="App">
//       <ToDoForm InitialList={InitialList} />
//     </div>
//   );
// }

// function ToDoForm({ InitialList }) {
//   let updatedValue = {};
//   const [toggle, setToggle] = useState(0);
//   const [task, setTask] = useState("");
//   const [taskList, setTaskList] = useState(InitialList);
//   const [arr, setArr] = useState({});
//   var a = [];
//   console.log(arr);
//   console.log(toggle);
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
//             setToggle(0);
//           }}
//         >
//           All
//         </Button>

//         <Button
//           variant="text"
//           onClick={() => {
//             console.log("active");
//           }}
//         >
//           Active
//         </Button>
//         <Button
//           variant="text"
//           onClick={() => {
//             console.log("Completed");
//             setToggle(1);
//           }}
//         >
//           Completed
//         </Button>
//         {toggle == 1 ? <ListItems arr={arr} a={a} /> : ""}
//         {toggle == 0 ? (
//           <ListActivities
//             listItems={taskList}
//             arr={arr}
//             setArr={setArr}
//             updatedValue={updatedValue}
//           />
//         ) : (
//           ""
//         )}
//       </div>
//     </div>
//   );
// }

// function ListActivities({ listItems, arr, setArr, updatedValue }) {
//   const a = (listItems) => {
//     return listItems.map((item, index) => (
//       <ListContainer
//         key={index}
//         index={index}
//         item={item}
//         arr={arr}
//         setArr={setArr}
//         updatedValue={updatedValue}
//       />
//     ));
//   };

//   return <div>{a(listItems)}</div>;
// }

// function ListContainer({ index, item, arr, setArr, updatedValue }) {
//   const handleChange = (item, checked) => {
//     arr[item] = checked;
//     setArr({ ...arr });
//   };

//   return (
//     <div>
//       <input
//         className="demo"
//         type="checkbox"
//         value={item}
//         label={item}
//         onClick={(e) => handleChange(item, e.target.checked)}
//       />
//       <label> {item} </label>
//     </div>
//   );
// }

// function ListItems({ arr, a }) {
//   const asArray = Object.entries(arr);
//   console.log(a);
//   console.log(asArray);
//   return (
//     <div>
//       {asArray.filter(([item, checked]) =>
//         checked ? console.log((a += item + ",")) : ""
//       )}
//       {a.map((ele) => (
//         <CreateList item={ele} />
//       ))}
//     </div>
//   );
// }
// {
//   /* ; */
// }
// function CreateList({ item }) {
//   console.log(item);
//   return (
//     <div>
//       <input
//         className="demo"
//         type="checkbox"
//         value={item}
//         label={item}
//         // checked={checked}
//       />
//       {/* <label> {item} </label> */}
//     </div>
//   );
// }
