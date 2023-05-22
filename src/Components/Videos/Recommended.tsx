import { VideoType } from "../../type";
const RecommendedVideos = ({ image, title, channel, screen, watchcount, id }: VideoType) => {
  return (
    <div
      className={
        "flex flex-col items-center sm:w-auto w-full min-w-[150px] h-auto mr-3 cursor-pointer"
      }
      onClick={() => {
        window.location.href = `https://youtube.com/watch?v=${id}`;
      }}
    >
      <div className={"flex flex-col items-center w-[97%] mx-auto relative"}>
        <img
          src={image}
          className="w-full object-cover -z-50"
          alt="vid"
          width={screen.width}
          height={screen.height}
        />
        <div className="bg-black py-1 px-3 rounded-sm flex justify-end -z-30 absolute right-0 bottom-5 m-1 bg-opacity-80">
          <p className="text-center text-white font-hev text-xs">3:10</p>
        </div>
      </div>
      <div className="flex flex-row items-start w-full gap-3">
        <img
          src={image}
          alt="channelProfileImage"
          className="w-10 h-10 rounded-full object-cover place-self-start self-center"
        />
        <div className="flex flex-col items-start w-full mt-1 self-start">
          <div className="flex flex-row items-stretch justify-between w-full">
            <p className="text-left place-self-start text-sm text-white font-hev self-center">
              {title}
            </p>
            <i className="material-icons text-white text-xl self-start place-self-start">
              more_vert
            </i>
          </div>
          <div className="flex flex-row w-full">
            <div className="self-center text-xs font-hev text-zinc-600">{channel}</div>
            <div className="w-[2px] h-[2px] rounded-full bg-zinc-600 self-center mx-1"></div>
            <div className="self-center text-xs font-hev text-zinc-600">{watchcount}</div>
            <div className="w-[2px] h-[2px] rounded-full bg-zinc-600 self-center mx-1"></div>
            <div className="self-center text-xs font-hev text-zinc-600">3 weeks ago</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendedVideos;
