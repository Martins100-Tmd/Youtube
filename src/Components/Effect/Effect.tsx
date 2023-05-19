const Videocard = () => {
  return (
    <div className="flex flex-col items-center w-full h-auto">
      <div className="bg-zinc-800 w-full animate-pulse h-[110px]"></div>
      <div className="flex flex-row items-stretch w-full mt-2 gap-2">
        <div className="h-12 w-14 rounded-full bg-zinc-800 animate-pulse"></div>
        <div className="flex flex-col items-center mt-2 justify-between w-full">
          <div className="w-full h-5 rounded-sm p-1 animate-pulse bg-zinc-800"></div>
          <div className="p-1 h-3 w-full bg-zinc-800 animate-pulse rounded-sm mt-2"></div>
        </div>
      </div>
    </div>
  );
};
const LoadingComponent = () => {
  return (
    <section className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 items-center w-full overflow-scroll gap-3">
      {[1, 2, 3, 4].map((index: number) => {
        return (
          <div key={index}>
            <Videocard />
          </div>
        );
      })}
    </section>
  );
};

const ComponentsResponse = {
  loading: <LoadingComponent />,
};

export default ComponentsResponse;
