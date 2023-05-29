import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Homepage, Local, SearchBarPage } from "./Components";
import { ModeContextProvider } from "./Context/Mode";
import { Route, Routes } from "react-router-dom";
import { ApiContextProvider } from "./Context/Api";

const queryClient = new QueryClient();
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ApiContextProvider>
        <ModeContextProvider>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/searchpage" element={<SearchBarPage />} />
            <Route path="/local" element={<Local />} />
          </Routes>
        </ModeContextProvider>
      </ApiContextProvider>
    </QueryClientProvider>
  );
};

export default App;
