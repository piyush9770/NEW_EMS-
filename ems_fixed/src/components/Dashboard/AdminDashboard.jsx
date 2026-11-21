import Header from "../../others/Header";
import CreateTask from "../../others/CreateTask";
import AllTask from "../../others/AllTask";

const AdminDashboard = ({ btn, userdata, employeesdata }) => {
  return (
    <div className="h-screen overflow-hidden w-full p-7">
      <Header name={userdata.name} btn={btn} />
      <CreateTask />
      <AllTask employeesdata={employeesdata} />
    </div>
  );
};

export default AdminDashboard;
