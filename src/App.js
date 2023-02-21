import Task from './components/Task';
import InputTaskForm from './components/InputTaskForm';
import React,{useEffect} from 'react';
import axios from 'axios';
const apiUrl = "https://jsonplaceholder.typicode.com/todos"
const client = axios.create({
  apiUrl : "https://jsonplaceholder.typicode.com/todos"
});


function App(){
  const [todos, setTodos] = React.useState([]); // task state
  const [identity,setIdentity] = React.useState(201);// to set id for newly added task
  // fetch and render data from api using axios call
  useEffect(() => {
    client.get(apiUrl).then((response) => {
      console.log(response);
      setTodos(response.data);
    });
  }, []);
  //add task using axios
  const addTask = async (task) => {
    // console.log(todos[0].title+"=title"+todos[0].id+"=id length="+todos.length); // debug
    //fetching the task details submitted via form
    const inputtask = {
      userId: task.userId,
      id: identity, // generating the id for new task
      title: task.titleTask,
      completed: task.completed
    }
    //try block to add task
    try {
      console.log(inputtask);
        let response = await axios.post(apiUrl,inputtask );
        // console.log(response.data.id+" "+response.data.title + "response.data from inside addTask try block");//debug
        response.data.id=identity;
        setTodos([response.data, ...todos]); // dummy call to add added task to api
        // console.log(todos) //debug
      }
      catch(error){
        console.log(error+" ==> error")
      }
      setIdentity(identity+1);// increment the id 
 };
//  delete the task --> dummy call
  const deleteTask = (id) => {
    console.log(todos);
    client.delete(`${id}`);
    //dummmy call to filter task based on id
    const result= todos.filter((todos) => {
      console.log(todos.id+" "+todos.title)
      return todos.id !== id;
   })
    setTodos(result);
 };

 // dummy call -->update the satus pf the task
 const onStatusChange=(e,todoitemId)=>{
    // console.log(e.target.value);
    // loop through api and update the status onchange with respect to dropdown selection value
    const statusUpdateToDoList = todos.filter((todoItem) => {
        if(todoItem.id === todoitemId){
            todoItem.completed =true;
        }
        return todoItem;
    });
    // console.log(statusUpdateToDoList);
    setTodos(statusUpdateToDoList); //dummy update
}
  return (
    <main>
      {/* title div */}
      <div className='titleContainer'>
        <header>
          <h1>Todos</h1>
        </header>
      </div>
      
      <div>
        {/* Input form to add new task */}
        <InputTaskForm addTask={addTask} />
        {/* to display list of task/todos */}
        <Task todos={todos} deleteTask={deleteTask}  onStatusChange={onStatusChange} /> 
      </div>
    </main>
  );

}


export default App;
