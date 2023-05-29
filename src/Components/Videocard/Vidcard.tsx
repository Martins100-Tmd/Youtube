import { PromiseResponseComponent, RecommendedVids, vid } from "..";
import ApiContext from "../../Context/Api";
import { useContext, useEffect } from "react";
import { numberToCurrency } from "../utils/data";
import { useState } from "react";
import { Status } from "../../type";
const VideoCard = () => {
  let [status, setstatus] = useState<Status>({
    errmsg: "",
    VideoCardLists: null,
    loaded: false,
  });
  let { apiState } = useContext(ApiContext);
  useEffect(() => {
    try {
      if (apiState.data && apiState.element) {
        console.log(apiState);
        setstatus((prev: any) => ({ ...prev, loaded: true }));
        let Lists = apiState.element?.map((item: any, index: number) => {
          return (
            <div key={index} className="w-full">
              <RecommendedVids
                title={item.snippet.title}
                channel={item.snippet.channelTitle}
                // image={item.snippet.thumbnails.high.url}
                image={vid}
                screen={{
                  height: item.snippet.thumbnails.high.height,
                  width: item.snippet.thumbnails.high.width,
                }}
                id={item.id}
                watchcount={numberToCurrency(item.statistics.viewCount)}
              />
            </div>
          );
        });
        setstatus((prev: any) => ({ ...prev, VideoCardLists: Lists }));
      } else {
        setstatus((prev: any) => ({ ...prev, loaded: false }));
        setstatus((prev: any) => ({ ...prev, VideoCardLists: PromiseResponseComponent.loading }));
      }
    } catch (e: any) {
      setstatus((prev: any) => ({ ...prev, errmsg: e }));
      console.log(status.errmsg);
    }
  }, [apiState.status_, apiState.data, apiState.element]);
  return status.loaded ? (
    <section className="w-full grid md:grid-cols-3 xl:grid-cols-4">
      <div className="text-white text-2xl">
        {JSON.stringify(apiState.element)?.substring(0, 40)}
      </div>
      <div className="text-white text-2xl">{JSON.stringify(apiState)}</div>
      {status.VideoCardLists}
    </section>
  ) : (
    <section className="w-full overflow-scroll">
      <div className="text-white text-2xl">
        {JSON.stringify(apiState.element)?.substring(0, 40)}
      </div>
      <div className="text-white text-2xl">{JSON.stringify(apiState)}</div>
      <div>{status.VideoCardLists}</div>
      <div>{PromiseResponseComponent.error}</div>
    </section>
  );
};
export default VideoCard;
