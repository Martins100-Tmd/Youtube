import { Categories, NavBarComponent, SideBottom, SideLeft } from "../Components";
import VideoGrid from "../Components/Videos/VidGrid";
const HTML = document.querySelector("html") as HTMLHtmlElement;
HTML.className = "bg-black";
const Home = () => {
  return (
    <>
      <nav className="bg-black">
        <NavBarComponent />
        <Categories />
      </nav>
      <main className="flex flex-row items-stretch w-full">
        <div className="sm:flex hidden w-[18%]">
          <SideLeft />
        </div>
        <div className="flex flex-row items-start flex-wrap w-full mx-auto lg:w-[78%] md:w-[70%] sm:p-0 px-3">
          <VideoGrid />
        </div>
      </main>
      <SideBottom />
    </>
  );
};

export default Home;
