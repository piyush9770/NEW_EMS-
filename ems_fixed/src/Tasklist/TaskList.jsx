import AcceptTask from "./AcceptTask";
import CompeletTask from "./CompeletTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";

const TaskList = ({ task }) => {
  return (
    <div
      id="tasklist"
      className="bg-red-800 h-[40%] overflow-x-auto  w-full px-4 rounded flex items-center justify-between srinc"
    >
      {task.map((e) => {
        console.log(e.taskDate);

        if (e.active) {
          return <AcceptTask taskdata={e} key={e.id} />;
        }

        if (e.newTask) {
          return <NewTask taskdata={e} key={e.id} />;
        }

        if (e.completed) {
          return <CompeletTask taskdata={e} key={e.id} />;
        }

        if (e.failed) {
          return <FailedTask taskdata={e} />;
        }
      })}
    </div>
  );
};

export default TaskList;
