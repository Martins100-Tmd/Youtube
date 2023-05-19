import { PromiseResponseComponent, RecommendedVids } from "..";
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
        <div key={index}>
          <RecommendedVids
            title={item.snippet.title}
            channel={item.snippet.channelTitle}
            image={item.snippet.thumbnails.high.url}
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
    VideoCardLists = PromiseResponseComponent.loading;
  }
  return loaded ? (
    <section className="w-full overflow-scroll grid lg:grid-cols-4 md:grid-cols-3">
      {VideoCardLists}
    </section>
  ) : (
    <section className="w-full overflow-scroll">{VideoCardLists}</section>
  );
};
export default VideoCard;
