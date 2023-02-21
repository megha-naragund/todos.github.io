const Task = ({todos, deleteTask, onStatusChange}) =>{
    // conditional rendering of status of the task
    const statusRendering=({todoItem}) =>{
        // if the task is completed no need to show drop down to change the status
        if(todoItem.completed){
            // console.log(todoItem.completed);
            return <div className="taskStatusCompleted" name="category" id="category"  >
                        Completed
                    </div>
        }
        // else need to change the status change dropdown
        else{
            return <select onChange={(e)=> onStatusChange(e,todoItem.id)} className="taskStatus" name="category" id="category"  >
                    <option  className="status" value="none" selected disabled hidden >{todoItem.completed ? 'Completed' : 'Pending'} </option>
                    <option className="status" value="Completed">Completed</option>
            </select> 
        }
    }
    return(
        <div>
            {/* header for task description */}
            <div className="taskContainerHeader">
                <div className="taskDescription Header">
                    <h3>TASK DESCRIPTION</h3>   
                    <h3>STATUS</h3>                        
                </div>
            </div>
            {/* loop through the task/todos and render each task */}
            {todos.map((todoItem) => {
                return (
                    <div className="taskContainer">
                        <div className="taskDescription">
                            <div className="taskTitle"><h4>{todoItem.title}</h4></div>                    
                            {statusRendering({todoItem})}
                        </div>
                        <div className="deleteTask"> 
                            <button className="deleteTaskButton" onClick ={() => { deleteTask(todoItem.id)}} >
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/6711/6711573.png"
                                    width="30"
                                    height="30"
                                    alt = "Delete Task"
                                    />
                            </button>
                        </div>
                </div>
                );
            })
            }
        </div>
    )
}

export default Task;