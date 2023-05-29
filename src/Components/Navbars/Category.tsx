import { useNavigate } from "react-router-dom";

const Categories = () => {
  let nav = useNavigate();
  return (
    <div className="sm:hidden flex flex-row items-center w-full overflow-scroll gap-5 py-3">
      <div className="w-auto bg-white rounded-lg py-0.5 px-3" onClick={() => nav("/local")}>
        <i className="text-xl material-icons text-black">explore</i>
      </div>
      <div className="w-auto p-2 bg-[#1c1c1c] rounded-xl mx-3">
        <p className="text-xs font-hev font-thin text-white text-center w-full">Sports</p>
      </div>
      <div className="w-auto p-2 bg-[#1c1c1c] rounded-xl">
        <p className="text-xs font-hev font-thin text-white text-center w-full">Programming</p>
      </div>
      <div className="w-auto p-2 bg-[#1c1c1c] rounded-xl mx-3">
        <p className="text-xs font-hev font-thin text-white text-center w-full min-w-[80px]">
          Computer Science
        </p>
      </div>
      <div className="w-auto p-2 bg-[#1c1c1c] rounded-xl">
        <p className="text-xs font-hev font-thin text-white text-center w-full">Comedy</p>
      </div>
      <div className="w-auto p-2 bg-[#1c1c1c] rounded-xl mx-3">
        <p className="text-xs font-hev font-thin text-white text-center w-full">Nba</p>
      </div>
      <div className="w-auto p-2 bg-[#1c1c1c] rounded-xl">
        <p className="text-xs font-hev font-thin text-white text-center w-full">Business</p>
      </div>
      <div className="w-auto p-2 bg-[#1c1c1c] rounded-xl mx-3">
        <p className="text-xs font-hev font-thin text-white text-center w-full">Lifestyle</p>
      </div>
      <div className="w-auto p-2 bg-[#1c1c1c] rounded-xl">
        <p className="text-xs font-hev font-thin text-white text-center w-full">Architecture</p>
      </div>
    </div>
  );
};

export default Categories;
