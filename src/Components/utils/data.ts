const API = `https://www.googleapis.com/youtube/v3/videos?key=AIzaSyBBSfTYz9KYQKxdUj6GsSCCQW-tut_F7d0&part=snippet&chart=mostpopular&maxResult=50&regionCode=US`;

const API_stat = (mole: string) => {
  return `
https://www.googleapis.com/youtube/v3/channels?id=${mole}&part=statistics,id&key=AIzaSyBBSfTYz9KYQKxdUj6GsSCCQW-tut_F7d0`;
};

// const ChannelProfile = `
// https://www.googleapis.com/youtube/v3/channels?part=snippet&id=UC_x5XG1OV2P6uZZ5FSM9Ttw&
// fields=items(snippet(thumbnails(high(url))))&key=AIzaSyBBSfTYz9KYQKxdUj6GsSCCQW-tut_F7d0
// `;
fetch(
  "https://www.googleapis.com/youtube/v3/channels?id=UCmBA_wu8xGg1OfOkfW13Q0Q&part=statistics,id&key=AIzaSyBBSfTYz9KYQKxdUj6GsSCCQW-tut_F7d0"
)
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
  let fetchOrder = 0;
  const firstFetchRequest = await fetch(API);
  if (firstFetchRequest.ok) {
    fetchOrder = 1;
    localStorage.setItem("Results", JSON.stringify([]));
    localStorage.setItem("stat", JSON.stringify([]));
  }
  const responseJson = await firstFetchRequest.json();
  let nextPageToken = responseJson.nextPageToken,
    Hash: any = {},
    res = JSON.parse(localStorage.getItem("Results") || "[]"),
    stat = JSON.parse(localStorage.getItem("stat") || "[]");
  if (fetchOrder === 1) {
    for (let i = 0; i < 195; i++) {
      if (Hash[nextPageToken] === undefined && nextPageToken) {
        Hash[nextPageToken] = 1;
        const A = await fetch(API + "&pageToken=" + nextPageToken);
        const B_ = await A.json();
        nextPageToken = B_.nextPageToken;
        B_.items.forEach(async (item: any) => {
          const A = await fetch(API_stat(item.snippet.channelId));
          const B = await A.json();
          stat.push(B.items[0].statistics);
          item["statistics"] = B.items[0].statistics;
          res.push(item);
        });
        localStorage.setItem("stat", JSON.stringify(stat));
        localStorage.setItem("Results", JSON.stringify(res));
      } else {
        Hash[nextPageToken] = Hash[nextPageToken] + 1;
      }
    }
  }
};

const getMappedResult = async () => {
  let videosChannelStats = JSON.parse(localStorage.getItem("stat") || "[]");
  let videosChannel = JSON.parse(localStorage.getItem("Results") || "[]");
  let statList = JSON.parse(localStorage.getItem("Data") || "[]");
  for (let i = 0; i < videosChannel.length; i++) {
    let curr = videosChannel[i];
    curr["statistics"] = videosChannelStats[i];
    statList.push(curr);
  }
  return statList;
};

getMappedResult();

export { API, numberToCurrency, fetchLoop, getMappedResult };
