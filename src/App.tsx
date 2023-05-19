import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Homepage, SearchBarPage } from "./Components";
import { ModeContextProvider } from "./Context/Mode";
import { Route, Routes } from "react-router-dom";
import { ApiContextProvider } from "./Context/Api";
// let [api_key, http] = [
//   "AIzaSyBBSfTYz9KYQKxdUj6GsSCCQW-tut_F7d0",
//   "https://www.googleapis.com/youtube/v3/videos?",
// ];
const queryClient = new QueryClient();
const App = () => {
  // const Fetch = async () => {
  //   const A = await fetch(
  //     http +
  //       new URLSearchParams({
  //         key: api_key,
  //         part: "snippet",
  //         chart: "mostpopular",
  //         maxResult: "50",
  //         regionCode: "US",
  //       })
  //   );
  //   const B = await A.json();
  //   return await B;
  // };
  // Fetch().then((res) => console.log(res));
  return (
    <QueryClientProvider client={queryClient}>
      <ApiContextProvider>
        <ModeContextProvider>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/searchpage" element={<SearchBarPage />} />
          </Routes>
        </ModeContextProvider>
      </ApiContextProvider>
    </QueryClientProvider>
  );
};

export default App;
