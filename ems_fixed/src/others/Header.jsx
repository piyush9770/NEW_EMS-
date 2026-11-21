const Header = ({ name, btn }) => {
  return (
    <div className="flex justify-between items-center bg-gray-800 text-white p-4 h-[60px] w-full rounded-2xl">
      <h1>
        Hello <br /> <span className="text-lg font-bold">{name}👋</span>
      </h1>
      <button
        onClick={btn}
        className="bg-red-500 text-white h-full w-20 flex justify-center align-center h-6 rounded btn"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
