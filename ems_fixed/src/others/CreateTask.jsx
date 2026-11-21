import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const CreateTask = ({ employeesdata }) => {
  const { user } = useContext(AuthContext);
  if (user) {
    console.log(user.employees.map((employee) => employee.name));
  }

  {
    console.log(employeesdata);
  }
  const [tasktitle, settasktitle] = useState(null);

  const [data, setdata] = useState(null);

  const [asign, setasign] = useState(null);

  const CreatTaskHandler = (e) => {
    e.preventDefault();

    const arr = [tasktitle, data, asign];

    console.log(arr);
  };

  return (
    <div className=" rounded  w-full  ">
      <form
        onSubmit={(e) => {
          CreatTaskHandler(e);
        }}
        className="bg-black flex h-[45%] w-[100%] p-5 items-center justify-between mt-10 px-10"
      >
        <div className=" bg-black w-[85%] h-full flex flex-col gap-3.5">
          <div>
            <h3>Task Title</h3>
            <input
              onChange={(e) => {
                settasktitle(e.target.value);
              }}
              className="border-red-800 border-2 rounded h-8.5 w-[70%] p-1.5"
              type="text"
              placeholder="Make a UI Desgin"
            />
          </div>

          <div>
            <h3>Date</h3>
            <input
              onChange={(e) => {
                setdata(e.target.value);
              }}
              className="border-red-800 border-2 rounded h-8.5 w-[70%] p-1.5"
              type="date"
            />
          </div>

          <div>
            <h3>Asign to</h3>
            <input
              onChange={(e) => {
                setasign(e.target.value);
              }}
              className="border-red-800 border-2 rounded h-8.5 w-[70%] p-1.5"
              type="text"
              placeholder="Employee Name"
            />
          </div>

          <div>
            <h3>Categroy</h3>

            <input
              className="border-red-800 border-2 rounded h-8.5 w-[70%] p-1.5"
              type="text"
              placeholder="Design, Dev, ets"
            />
          </div>
        </div>
        <div className=" bg-black h-full w-[50%] flex flex-col gap-5 ">
          <div>
            <h3>Discription</h3>
            <textarea
              className="border-red-800 border-2 rounded h-48 w-[100%]"
              name=""
              id=""
              cols="60"
              rows="40"
            ></textarea>
          </div>
          <button className="bg-green-500 h-10 rounded">Create Task</button>
        </div>
      </form>

      <div>{}</div>
    </div>
  );
};

export default CreateTask;
