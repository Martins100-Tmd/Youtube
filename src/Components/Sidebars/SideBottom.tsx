import ApiContext from "../../Context/Api";
import { useContext } from "react";
const BottomBar = () => {
  let { apiState } = useContext(ApiContext);
  return (
    <main
      className={`sm:hidden grid grid-cols-5 w-full bg-[#121212] fixed bottom-0 py-2.5
    ${apiState.status_ === "error" ? "hidden" : "grid"}`}
    >
      <div className=" flex flex-col items-center w-full hover:bg-zinc-800 place-self-center">
        <i className="self-center material-icons text-2xl text-white text-center">home</i>
        <span className="font-hev font-thin text-sm place-self-center text-white text-center">
          Home
        </span>
      </div>
      <div className=" flex flex-col items-center w-full hover:bg-zinc-800 place-self-center">
        <i className="self-center material-icons text-2xl text-white text-center">switch_video</i>
        <span className="font-hev font-thin text-sm place-self-center text-white text-center">
          Shorts
        </span>
      </div>
      <span className="material-icons text-4xl text-white text-center">add_circle_outline</span>
      <div className=" flex flex-col items-center w-full hover:bg-zinc-800 place-self-center">
        <i className="self-center material-icons text-2xl text-white text-center">subscriptions</i>
        <span className="font-hev font-thin text-sm place-self-center text-white text-center">
          Subscription
        </span>
      </div>
      <div className=" flex flex-col items-center w-full hover:bg-zinc-800 place-self-start">
        <i className="self-center material-icons text-2xl text-white text-center">video_library</i>
        <span className="font-hev font-thin text-sm place-self-center text-white text-center">
          Library
        </span>
      </div>
    </main>
  );
};

export default BottomBar;
