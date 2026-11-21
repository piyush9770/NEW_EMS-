const TaskNumber = ({ taskCount }) => {
  return (
    <div className="  flex justify-between mt-10 p-4 screen gap-5">
      <div className="bg-green-800  w-[25%] text-white px-6 py-9 rounded-xl ">
        <h2 className="text-2xl font-semibold">{taskCount.newTask}</h2>
        <h3 className="text-xl font-medium">New Tasks</h3>
      </div>

      <div className="bg-blue-800  w-[25%] text-white px-6 py-9 rounded-xl ">
        <h2 className="text-2xl font-semibold">{taskCount.completed}</h2>
        <h3 className="text-xl font-medium">completed Task</h3>
      </div>

      <div className="bg-purple-800  w-[25%] text-white px-6 py-9 rounded-xl ">
        <h2 className="text-2xl font-semibold">{taskCount.active}</h2>
        <h3 className="text-xl font-medium">Accepted Task</h3>
      </div>

      <div className="bg-pink-800  w-[25%] text-white px-6 py-9 rounded-xl ">
        <h2 className="text-2xl font-semibold">{taskCount.failed}</h2>
        <h3 className="text-xl font-medium">Failed Task</h3>
      </div>
    </div>
  );
};

export default TaskNumber;
