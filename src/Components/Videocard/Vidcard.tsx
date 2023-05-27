import { PromiseResponseComponent, RecommendedVids, vid } from "..";
import ApiContext from "../../Context/Api";
import { useContext } from "react";
import { numberToCurrency } from "../utils/data";
import { useState } from "react";
const VideoCard = () => {
  let [err, seterr] = useState("");
  let { apiState } = useContext(ApiContext);
  let VideoCardLists,
    loaded = false;
  try {
    if (apiState.data) {
      console.log(apiState.element);
      loaded = true;
      VideoCardLists = apiState.element?.map((item: any, index: number) => {
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
    } else {
      loaded = false;
      VideoCardLists = PromiseResponseComponent;
    }
  } catch (e: any) {
    seterr(e);
    if (e) {
      window.location.reload();
    }
    console.log(err);
  }
  return loaded ? (
    <section className="w-full grid md:grid-cols-3 xl:grid-cols-4">{VideoCardLists}</section>
  ) : (
    <section className="w-full overflow-scroll">
      <div>{VideoCardLists.loading}</div>
      <div>{VideoCardLists.error}</div>
    </section>
  );
};
export default VideoCard;
