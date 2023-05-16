import { Categories, NavBarComponent, SideBottom, SideLeft } from "../Components";
const HTML = document.querySelector("html") as HTMLHtmlElement;
HTML.className = "bg-black";
const Home = () => {
  return (
    <>
      <nav className="bg-black">
        <NavBarComponent />
        <Categories />
      </nav>
      <main className="flex flex-row items-center w-full">
        <div className="sm:flex hidden lg:w-[20%]">
          <SideLeft />
        </div>
      </main>
      <SideBottom />
    </>
  );
};

export default Home;
