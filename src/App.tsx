import { Homepage, SearchBarPage } from "./Components";
import { ModeContextProvider } from "./Context/Mode";
import { Route, Routes } from "react-router-dom";
let [api_key, http] = [
  "AIzaSyBBSfTYz9KYQKxdUj6GsSCCQW-tut_F7d0",
  "https://www.googleapis.com/youtube/v3/videos?",
];
const App = () => {
  const Fetch = async () => {
    const A = await fetch(
      http +
        new URLSearchParams({
          key: api_key,
          part: "snippet",
          chart: "mostpopular",
          // maxResult: "10",
          regionCode: "NG",
        })
    );
    const B = await A.json();
    return await B;
  };
  Fetch().then((res) => console.log(res));
  return (
    <ModeContextProvider>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/searchpage" element={<SearchBarPage />} />
      </Routes>
    </ModeContextProvider>
  );
};

export default App;
