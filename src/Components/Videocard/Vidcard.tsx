import { PromiseResponseComponent, RecommendedVids, vid } from "..";
import ApiContext from "../../Context/Api";
import { useContext } from "react";
import { numberToCurrency } from "../utils/data";
const VideoCard = () => {
  let { apiState } = useContext(ApiContext);
  let VideoCardLists,
    loaded = false;
  if (apiState.status_ === "success") {
    loaded = true;
    VideoCardLists = apiState.element.map((item: any, index: number) => {
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
            watchcount={numberToCurrency(3453555)}
          />
        </div>
      );
    });
  } else {
    loaded = false;
    VideoCardLists = PromiseResponseComponent;
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
