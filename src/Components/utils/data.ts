const API = `https://www.googleapis.com/youtube/v3/videos?key=AIzaSyBBSfTYz9KYQKxdUj6GsSCCQW-tut_F7d0&part=snippet&
  chart=mostpopular&maxResult=50&regionCode=US`;

const API_stat = (mole: string) => {
  return `
https://www.googleapis.com/youtube/v3/channels?id=${mole}&part=statistics,id&key=AIzaSyBBSfTYz9KYQKxdUj6GsSCCQW-tut_F7d0`;
};

const ChannelProfile = `
https://www.googleapis.com/youtube/v3/channels?part=snippet&id=UC_x5XG1OV2P6uZZ5FSM9Ttw&
fields=items(snippet(thumbnails(high(url))))&key=AIzaSyBBSfTYz9KYQKxdUj6GsSCCQW-tut_F7d0
`;
fetch(ChannelProfile)
  .then((res) => res.json())
  .then((data) => console.log(data));
/**
 *
 * @param mole - number
 * @returns: string(in currency format)
 */
const numberToCurrency = (mole: number) => {
  let numberLength = String(mole).length;
  let some;
  switch (numberLength) {
    case 3:
      return numberLength;
    case 4:
      some = String(mole).substring(0, 1);
      return some + "k";
    case 5:
      some = String(mole).substring(0, 2);
      return some + "k";
    case 6:
      some = String(mole).substring(0, 3);
      return some + "k";
    case 7:
      some = String(mole).substring(0, 1);
      return some + "M";
    case 8:
      some = String(mole).substring(0, 2);
      return some + "M";
    case 9:
      some = String(mole).substring(0, 3);
      return some + "M";
    case 10:
      some = String(mole).substring(0, 2);
      return some + "B";
  }
};
/**
 * fetchLoop - async function
 */
const fetchLoop = async () => {
  const firstFetchRequest = await fetch(API);
  const responseJson = await firstFetchRequest.json();
  let nextPageToken = responseJson.nextPageToken,
    Hash: any = {},
    res = JSON.parse(localStorage.getItem("Results") || "[]"),
    stat = JSON.parse(localStorage.getItem("stat") || "[]"),
    freq = 0;
  while (nextPageToken) {
    if (Hash[nextPageToken] === undefined) {
      Hash[nextPageToken] = 1;
      const A = await fetch(API + "&pageToken=" + nextPageToken);
      const B = await A.json();
      nextPageToken = B.nextPageToken;
      B.items.forEach((item: any) => {
        stat.push(item.snippet.channelId);
      });
      localStorage.setItem("stat", JSON.stringify(stat));
      res.push(...B.items);
      localStorage.setItem("Results", JSON.stringify(res));
    } else {
      Hash[nextPageToken] = Hash[nextPageToken] + 1;
    }
    freq++;
    if (freq === 100) break;
  }
};

let videosChannelId = JSON.parse(localStorage.getItem("stat") || "[]");
const getVideosStatistic = async () => {
  let statList = JSON.parse(localStorage.getItem("Data") || "[]"),
    i = 195;
  while (videosChannelId[i] && i) {
    const A = await fetch(API_stat(videosChannelId[i]));
    const B = await A.json();
    statList.push(B.items[0].statistics);
    i--;
    localStorage.setItem("Data", JSON.stringify(statList));
  }
};
getVideosStatistic().then((res) => res);
const Fn = () => {
  return new Promise((resolve) => {
    let res = JSON.parse(localStorage.getItem("Results") || "[]"),
      final = [],
      Hash: any = {};
    let data = JSON.parse(localStorage.getItem("Data") || "[]");
    res = res.map((item: any, index: number) => {
      Object.defineProperty(item, "statistics", {
        value: data[index],
      });
      return item;
    });
    for (let i = 0; i < res.length; i++) {
      let curr = res[i].snippet.channelId;
      if (Hash[curr] === undefined) {
        Hash[curr] = 1;
        final.push(res[i]);
      } else {
        Hash[curr] = Hash[curr] + 1;
      }
    }
    resolve(final);
  });
};

const fetchYoutubeFn = async () => {
  const A = await Fn();
  return A;
};

export { API, numberToCurrency, fetchLoop, fetchYoutubeFn };

//[2,3,4,5,6,6,7];
