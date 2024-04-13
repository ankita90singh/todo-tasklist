import React, { useState } from 'react'

const App = () => {
  const [tasks, setTasks] = useState([
  
  ])
  const [title , setTitle] = useState("")
 

  const submitHandler = (e)=>{
    e.preventDefault()
    const newtask = {title, completed: false}
    const copytask = [...tasks]
    copytask.push(newtask)
    setTasks(copytask)

    setTitle("")
    
   
  }
  console.log(tasks)
  

  const CompleteTaskToggle = (e, i)=>{
    
    const copytask = [...tasks]
    copytask[i].completed = !tasks[i].completed;
    setTasks(copytask)

  }


  let rendertask = <h2 className='text-xl font-bold px-4 text-red-400'> no task available</h2>
if(tasks.length>0){
  rendertask = tasks.map((t, i )=>{
    return (
      <li key={i} className="total-task mt-2 w-[20vw] py-2 border-2 pl-2 rounded-md ml-3  flex item-center justify-between">
    <div className="text-circle flex item-center justify-center gap-2">
    <div  onClick={(e) => CompleteTaskToggle(e, i)} className={`${t.completed ? "bg-green-500 border-none" : "border-2"} circle rounded-full w-[15px] h-[15px] border-2 border-red-500  mt-1`}></div>
   <h1 className={`${t.completed && "line-through"}text-s font-bold text-blue-900`}>{t.title}</h1>
    </div>
      <div className="icon px-2 ">
      <i className="ri-file-edit-fill">
      <i className="pl-2 ri-delete-bin-6-line"></i>
      </i>
      </div>
    </li>
   

    )
  })
}
 
  return (
   <>

   <div className='w-full bg-zinc-100 py-4 flex item-center justify-between px-5 pt-4'>
   <div className='pl-3'><h1 className='text-3xl font-bold  capitalize font-mono'>to do list</h1>
   <h4 className='text-xl font-bold  px-10 -mt-2 capitalize font-mono'>create your list</h4></div>
   <div className='flex gap-4 pr-8  item-center justify-center '>
    <h3  className='text-2xl font-bold capitalize font-mono mt-3'>task done</h3>
    <div className='w-[55px] h-[55px] rounded-full bg-blue-500'><h3 className=' text-white p-3 font-bold text-xl'>{tasks.filter((t)=>t.completed === true).length}/{tasks.length}</h3></div>
   </div>
   </div>

   <div className='hero flex item-center justify-flex-start gap-20 m-20  capitalize'>
    <div className="list  w-[15vw] h-[20vw] border-2 rounded-md">
     <div className="tasks ml-2  mt-2 flex item-center border-l-2 border-blue-500">
 
     <h3 className='text-xl font-bold text-zinc-600  mb-2 p-3'>tasks</h3>
     </div>
      <div className="history">
      <h3 className='text-xl font-bold text-zinc-600  mb-2 p-3'>history</h3>
      </div>

    </div>
    <div className="main border-2 rounded-md "> 
    <h3 className='text-xl font-bold text-zinc-600  mb-2 p-3'> add tasks</h3>

    <form onSubmit={submitHandler} className='mt-10 ml-3' >
      <input onChange={(e)=>setTitle(e.target.value)} value={title} className='border-none bg-zinc-100 pr-15 px-1 py-2 rounded-md outline-none' type="text" placeholder='Enter title' />
      <input className='border-none outline-none bg-blue-500 mx-6  rounded-md px-3 py-1 text-2xl font-bold text-white' type="submit" value='+' />
    </form>
   
    </div>
    <div className="task-list bg-zinc-100 rounded-md w-[30vw] ">
    <h3 className='text-xl font-bold text-zinc-600  mb-2 p-3'>tasks list</h3>
   

   <ul> {rendertask}</ul>
    </div>
   </div>
   
   
   </>
  )
}

export default App