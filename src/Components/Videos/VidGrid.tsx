import { VideoCards } from "..";
const VideoGrid = () => {
  return (
    <main className="flex flex-col items-center w-full mx-auto overflow-scroll">
      <div className="flex justify-start place-self-start my-5">
        <p className="font-rob text-2xl text-white">Recommended</p>
      </div>
      <VideoCards />
    </main>
  );
};
export default VideoGrid;
