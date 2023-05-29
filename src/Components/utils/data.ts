const API = `https://www.googleapis.com/youtube/v3/videos?key=AIzaSyBBSfTYz9KYQKxdUj6GsSCCQW-tut_F7d0&part=snippet&chart=mostpopular&maxResult=50&regionCode=US`;
const API_stat = (mole: string) => {
  return `https://www.googleapis.com/youtube/v3/channels?id=${mole}&part=statistics,id&key=AIzaSyBBSfTYz9KYQKxdUj6GsSCCQW-tut_F7d0`;
};

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
      some = String(mole).substring(0, 1);
      return some + "B";
  }
};
/**
 * fetchLoop - async function
 */
// localStorage.clear();
let res = JSON.parse(localStorage.getItem("Results") || "[]");
async function fetchLoop() {
  let fetchOrder = 0;
  let firstFetchRequest, responseJson;
  if (navigator.onLine) {
    firstFetchRequest = await fetch(API);
  }
  if (firstFetchRequest && firstFetchRequest.ok && res.length === 0) {
    fetchOrder = 1;
  }
  let Hash: any = {},
    statistic: any = {};
  if (fetchOrder === 1) {
    responseJson = await firstFetchRequest?.json();
    let nextPageToken = responseJson.nextPageToken,
      i = 0;
    for (i; i < 20; i++) {
      if (Hash[nextPageToken] === undefined && nextPageToken) {
        Hash[nextPageToken] = 1;
        const A = await fetch(API + "&pageToken=" + nextPageToken);
        const B_ = await A.json();
        nextPageToken = B_.nextPageToken;
        B_.items.forEach(async (item: any) => {
          const A = await fetch(API_stat(item.snippet.channelId));
          const B = await A.json();
          res.push(item);
          statistic[B.items[0].id] = B.items[0].statistics;
        });
        localStorage.setItem("Results", JSON.stringify(res));
      } else {
        Hash[nextPageToken] = Hash[nextPageToken] + 1;
      }
    }
    localStorage.setItem("stat", JSON.stringify(statistic));
  }
}
const sleepTime = (ms: number) => {
  return new Promise((res) => setTimeout(res, ms));
};
async function getMappedResult() {
  await fetchLoop().then((res) => res);
  await sleepTime(2000);
  let videosChannelStats = JSON.parse(localStorage.getItem("stat") || "{}");
  let videosChannel = JSON.parse(localStorage.getItem("Results") || "[]");
  let statList = JSON.parse(localStorage.getItem("Data") || "[]");
  for (let i = 0; i < Object.keys(videosChannelStats).length; i++) {
    if (videosChannelStats[videosChannel[i].snippet.channelId] !== undefined) {
      let curr = videosChannel[i];
      curr["statistics"] = videosChannelStats[videosChannel[i].snippet.channelId];
      statList.push(curr);
    }
  }
  return statList;
}

getMappedResult().then((res) => console.log(res));
export { API, numberToCurrency, fetchLoop, getMappedResult };
