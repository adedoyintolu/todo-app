import React, {useState} from 'react';
import "../App.css";

export default function Todo(){
  const[newTodo, setNewTodo] = useState('')
  const[todos, setTodos] = useState([
      {
          id:1,
          text:"Buy Milk",
          isCompleted: true
      },
      {
        id:2,
        text:"Go to the Salon",
        isCompleted: true
    }
  ])

  function handleNewTodoChange(e: React.ChangeEvent<HTMLInputElement>){
    e.preventDefault();
    setNewTodo(e.target.value)
  }

  function handleNewTodo(e:any){

    e.preventDefault();
    if(newTodo === '') return
    setTodos([...todos, { id: Date.now(), text: newTodo, isCompleted:true}])
    e.target.reset()
  }

  function removeTodo(id){
    setTodos(todos.filter((todo) => todo.id !== id))
  }
   return(
     <div className="app">
         <form onSubmit={handleNewTodo} className="form">
            <h1>Todo App</h1>
            <input type="text" placeholder="Your todo..." onChange={handleNewTodoChange}/>
            <ul  className="todo-list">
                {todos.map((todo)=>(
                    <li key={todo.id} className="todos">
                        {todo.text}
                        <button onClick={() => removeTodo(todo.id)}>X</button>
                    </li>
                ))}
            </ul>
         </form>
    </div>
   )
}





// import React, { useState } from "react";
// import "../App.css";

// function Todo({ todo, index, completeTodo, removeTodo }) {
//   return (
//     <div
//       className="todo"
//       style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
//     >
//       {todo.text}

//       <div>
//         <button onClick={() => completeTodo(index)}>Complete</button>
//         <button onClick={() => removeTodo(index)}>x</button>
//       </div>
//     </div>
//   );
// }

// function TodoForm({ addTodo }) {
//   const [value, setValue] = useState("");

//   const handleSubmit = e => {
//     e.preventDefault();
//     if (!value) return;
//     addTodo(value);
//     setValue("");
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         className="input"
//         value={value}
//         onChange={e => setValue(e.target.value)}
//       />
//     </form>
//   );
// }

// function App() {
//   const [todos, setTodos] = useState([
//     {
//       text: "Learn about React",
//       isCompleted: false
//     },
//     {
//       text: "Meet friend for lunch",
//       isCompleted: false
//     },
//     {
//       text: "Build really cool todo app",
//       isCompleted: false
//     }
//   ]);

//   const addTodo = text => {
//     const newTodos = [...todos, { text }];
//     setTodos(newTodos);
//   };

//   const completeTodo = index => {
//     const newTodos = [...todos];
//     newTodos[index].isCompleted = true;
//     setTodos(newTodos);
//   };

//   const removeTodo = index => {
//     const newTodos = [...todos];
//     newTodos.splice(index, 1);
//     setTodos(newTodos);
//   };

//   return (
//     <div className="app">
//       <div className="todo-list">
//         {todos.map((todo, index) => (
//           <Todo
//             key={index}
//             index={index}
//             todo={todo}
//             completeTodo={completeTodo}
//             removeTodo={removeTodo}
//           />
//         ))}
//         <TodoForm addTodo={addTodo} />
//       </div>
//     </div>
//   );
// }

// export default App;















