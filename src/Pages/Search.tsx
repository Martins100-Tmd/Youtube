import { useNavigate } from "react-router-dom";
const SearchBarComponent = () => {
  let navigate = useNavigate();
  return (
    <nav className="flex flex-row items-center sm:w-[90%] mx-auto w-full justify-between p-3">
      <i
        className={`material-icons text-3xl text-gray-400`}
        onClick={() => {
          navigate("/");
        }}
      >
        west
      </i>
      <div className={`flex flex-row items-center w-[91%] shadow bg-[#1c1c1c] rounded-3xl`}>
        <input
          type={"text"}
          className={`p-3 block outline-none h-10 w-4/5 mx-auto sm:rounded-none rounded-l-3xl placeholder:text-gray-500 bg-[#1c1c1c]`}
          placeholder={"Search"}
        />
        <button className="px-4 py-2 rounded-r-3xl bg-[#171717]">
          <i className={"fa text-xl text-gray-500"}>&#xf002;</i>
        </button>
      </div>
    </nav>
  );
};
export default SearchBarComponent;
