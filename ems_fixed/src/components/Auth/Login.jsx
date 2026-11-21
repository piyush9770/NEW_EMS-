import { useState } from "react";

const Login = ({ onlogin }) => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const SubmitHandler = (e) => {
    e.preventDefault();

    onlogin(email, password);

    setemail("");
    setpassword("");

    console.log("Form submitted");
  };

  return (
    <div className="flex items-center justify-center bg-gray-800 text-white p-4 h-screen w-screen">
      <div className="bg-gray-700  rounded-lg shadow-md  max-w-sm">
        <form
          onSubmit={(e) => {
            SubmitHandler(e);
          }}
          className="flex flex-col items-center border-2 rounded-2xl justify-center bg-red-900 gap-4 h-[400px] w-[300px] p-4"
        >
          login
          <input
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
            type="email"
            placeholder="Enter your email"
            className=" p-2 mb-4 rounded bg-gray-600 text-white"
          />
          <input
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            type="password"
            placeholder="Password"
            className=" p-2 mb-4 rounded bg-gray-600 text-white"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
