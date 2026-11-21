const AllTask = ({ employeesdata }) => {
  return (
    <div
      id="AllTask"
      className="bg-black h-80 w-full mt-5 flex flex-col gap-4 overflow-x-auto"
    >
      {employeesdata?.map((employee, idx) => (
        <div
          key={idx}
          className="flex items-center justify-between py-3 px-10 font-bold text-medium bg-green-300 rounded"
        >
          <h2>{employee.name}</h2>

          <div className="flex justify-center items-center gap-1.5 ">
            {employee.tasks.map((task, taskIdx) => (
              <div id="states" key={taskIdx}>
                <h3 className="border-b-2">{task.taskTitle}</h3>
                <h3 className="">
                  {task.active && "pending"}
                  {task.newTask && "new"}
                  {task.completed && "completed"}
                  {task.failed && "failed"}
                </h3>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllTask;
