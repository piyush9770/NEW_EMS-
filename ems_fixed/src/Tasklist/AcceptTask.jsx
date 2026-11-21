
const AcceptTask = ({taskdata}) => {
  return (
    
    
      
      <div className=" flex-shrink-0 rounded-2xl px-4 bg-yellow-600 h-[100%] w-[300px] ">
         
        <div className=" h-[20%] w-full rounded-2xl flex justify-between items-center text-white font-semibold text-lg">

          <h3 className="bg-red-800 rounded text-sm px-3 py-1 ">{taskdata.category}</h3>

          <h4 className="text-sm">{taskdata.taskDate}</h4>
        </div>

        <h1 className="text-white font-bold text-xl mt-2">{taskdata.taskTitle}</h1>

        <p className="text-white text-sm mt-2">{taskdata.taskDescription}</p>
      

      <div className="flex justify-between mt-20">
        <button className="bg-green-500 py-1 px-2 text-sm rounded">Mark as Completed</button>
        <button className="bg-red-500 py-1 px-2 text-sm rounded">Mark as failed</button>
      </div>

      </div>
     
  )
}

export default AcceptTask