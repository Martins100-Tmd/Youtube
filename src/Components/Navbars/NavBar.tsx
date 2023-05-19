import { ytb, ytbprofile } from "../index";
import { useNavigate } from "react-router-dom";
const NavBarComponent = () => {
  let navigate = useNavigate();
  return (
    <nav
      className={`flex flex-row items-center w-full p-4 justify-between border-b-4 border-zinc-700 bg-[#121212]
      `}
    >
      <div className={"sm:w-[30%]"}>
        <div className={`flex flex-row items-center sm:w-[17%] w-2/5`}>
          <i
            className={`
            text-white
          text-4xl self-end material-icons sm:flex hidden`}
          >
            menu
          </i>
          <div className="flex flex-row items-center self-center sm:ml-5">
            <img
              src={ytb}
              className={`object-cover self-end  w-10 h-10 sm:hidden flex`}
              alt={`youtube_icon`}
            />
            <h1
              className={`sm:text-[23px] text-[18px] leading-8 font-medium font-rob self-center text-white
            `}
            >
              You<span className="text-red-600">Tube</span>
            </h1>
          </div>
        </div>
      </div>
      <div className="w-[53%] ml-0">
        <div
          className={`sm:flex flex-row sm:w-[60%] ml-0 items-stretch hidden  outline-[1px]
        outline outline-zinc-500
        `}
        >
          <input
            type={"text"}
            className={"p-3 shadow block w-full dark:bg-black outline-none dark:text-gray-200"}
            placeholder={"Search"}
          />
          <button
            onClick={() => {
              navigate("/searchpage");
            }}
            className={`py-3 px-4 font-hev shadow dark:text-gray-200 bg-[#111111]`}
          >
            <i className={"fa text-xl"}>&#xf002;</i>
          </button>
        </div>
      </div>
      <div className={"flex flex-row items-center sm:w-[22%] mr-0 justify-between w-[65%]"}>
        <i
          className={`self-center material-icons  text-xl text-white
        `}
        >
          cast
        </i>
        <i
          className={`self-center fa text-xl sm:flex hidden
        text-white`}
        >
          &#xf093;
        </i>
        <i
          className={`self-center fa text-xl
         text-white`}
        >
          &#xf0f3;
        </i>
        <i
          className={`self-center fa fa-search text-xl sm:hidden flex font-thin text-white`}
          onClick={() => {
            navigate("/searchpage");
          }}
        ></i>
        <div>
          <img
            src={ytbprofile}
            className={`sm:w-10 sm:h-10 w-8 h-8 object-cover rounded-full object-center`}
          />
        </div>
      </div>
    </nav>
  );
};

export default NavBarComponent;
