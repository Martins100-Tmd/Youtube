const SideLeft = () => {
  return (
    <section className={`flex flex-col items-center w-full bg-[#151515]`}>
      <div className="flex flex-col w-full gap-4 py-5">
        <div
          className="px-6 py-2 flex flex-row items-center w-full hover:bg-zinc-800 cursor-pointer"
          onClick={() => window.location.reload()}
        >
          <i className="self-center material-icons text-3xl text-red-600 mr-8">home</i>
          <span className="self-center font-hev font-medium text-lg place-self-center text-white">
            Home
          </span>
        </div>
        <div className="px-6 py-2 flex flex-row items-center w-full hover:bg-zinc-800 cursor-pointer">
          <i className="self-center material-icons text-3xl text-zinc-600 mr-8">whatshot</i>
          <span className="self-center font-hev font-medium text-lg place-self-center text-white">
            Trending
          </span>
        </div>
        <div className="px-6 py-2 flex flex-row items-center w-full hover:bg-zinc-800 cursor-pointer">
          <i className="self-center material-icons text-3xl text-zinc-600 mr-8">subscriptions</i>
          <span className="self-center font-hev font-medium text-lg place-self-center text-white">
            Subscription
          </span>
        </div>
      </div>
      <div className="h-[1px] w-full bg-zinc-600"></div>
      <div className="flex flex-col w-full gap-4 py-5">
        <p className="text-lg uppercase place-self-start text-left text-zinc-400 pl-8">Library</p>
        <div className="px-6 py-2 flex flex-row items-center w-full hover:bg-zinc-800 cursor-pointer">
          <i className="self-center material-icons text-3xl text-zinc-600 mr-8">history</i>
          <span className="self-center font-hev font-medium text-xl place-self-center text-white">
            History
          </span>
        </div>
        <div className="px-6 py-2 flex flex-row items-center w-full hover:bg-zinc-800 cursor-pointer">
          <i className="self-center material-icons text-3xl text-zinc-600 mr-8">watch_later</i>
          <span className="self-center font-hev font-medium text-lg place-self-center text-white">
            Watch Later
          </span>
        </div>
        <div className="px-6 py-2 flex flex-row items-center w-full hover:bg-zinc-800 cursor-pointer">
          <i className="self-center material-icons text-3xl text-zinc-600 mr-8">thumb_up</i>
          <span className="self-center font-hev font-medium text-lg place-self-center text-white">
            Liked Videos
          </span>
        </div>
        <div className="px-6 py-2 flex flex-row items-center w-full hover:bg-zinc-800 cursor-pointer">
          <i className="self-center material-icons text-3xl text-zinc-600 mr-8">loyalty</i>
          <span className="self-center font-hev font-medium text-lg place-self-center text-white">
            Purchases
          </span>
        </div>
        <div className="px-6 py-2 flex flex-row items-center w-full hover:bg-zinc-800 cursor-pointer">
          <i className="self-center material-icons text-3xl text-zinc-600 mr-8">menu_open</i>
          <span className="self-center font-hev font-medium text-lg place-self-center text-white">
            LOLS cats
          </span>
        </div>
        <div className="px-6 py-2 flex flex-row items-center w-full hover:bg-zinc-800 cursor-pointer">
          <i className="self-center  material-icons text-3xl text-zinc-600 mr-8">texture</i>
          <span className="self-center font-hev font-medium text-lg place-self-center text-white">
            Classic cartoons
          </span>
        </div>
      </div>
    </section>
  );
};

export default SideLeft;
