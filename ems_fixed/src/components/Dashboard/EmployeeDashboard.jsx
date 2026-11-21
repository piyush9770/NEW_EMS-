import Header from "../../others/Header";
import TaskNumber from "../../others/TaskNumber";
import TaskList from "../../Tasklist/TaskList";

const EmployeeDashboard = ({ data, btn }) => {
  console.log(data);
  const name = data.name;
  const taskCount = data.taskCounts;
  const task = data.tasks;
  const role = data.role;

  console.log(role);

  return (
    <div className="bg-pink-900 overflow-auto h-screen w-[100%] p-4 flex justify-between flex-col">
      <Header name={name} btn={btn} />
      <TaskNumber taskCount={taskCount} />
      <TaskList task={task} />
      EmployeeDashboard
    </div>
  );
};

export default EmployeeDashboard;
