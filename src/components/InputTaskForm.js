import React from "react";

const InputTaskForm =({addTask}) => {
    const [title, setTitle]= React.useState();//fetch the form data
    const [task, setTask] = React.useState({
        userId:"1",
        id:"",
        titleTask:title,
        completed: false
    });
    // to change input change
    const handleChange=(e) => {
    console.log(e.target.value+" onchange handle");
    setTitle(e.target.value);
    task.titleTask=e.target.value;
    // setTask([title,...task]);
    // console.log(task)
    }

    return (
        <div>
            {/* on submit form call the addTask function */}
            <form onSubmit={(e)=> {e.preventDefault();  addTask(task); setTitle("");}}>
                    <section id="descriptionContainer">
                        <input type="text" id="description" name="name" value={title} placeholder="What you need to do!" onChange={handleChange} required />
                        <button id="addTask" type="submit"> <img
                                src="https://cdn-icons-png.flaticon.com/512/1828/1828817.png"
                                width="40"
                                height="40"
                                alt = "Add Task"
                                />
                        </button>
                    </section>    
            </form>
        </div>
    )
}
export default InputTaskForm;