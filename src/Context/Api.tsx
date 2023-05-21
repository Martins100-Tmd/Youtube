import { useState, createContext, ReactNode, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchLoop, getMappedResult } from "../Components/utils/data";
import { ApiStateType } from "../type";
import { PromiseResponseComponent } from "../Components";

const ApiContext = createContext(undefined as any);

export const ApiContextProvider = ({ children }: { children: ReactNode }) => {
  let [newRequestSignal, setNewRequestSignal] = useState(0);
  let [apiState, setApiState] = useState<ApiStateType>({
    status_: "loading",
    element: null,
  });
  let { status, data } = useQuery({
    enabled: navigator.onLine,
    queryKey: ["posts"],
    queryFn: getMappedResult,
  });
  useEffect(() => {
    fetchLoop().then((res) => res);
    if (status === "loading" && navigator.onLine)
      setApiState({ status_: "loading", element: PromiseResponseComponent.loading });
    if (status === "error" || !navigator.onLine)
      setApiState({ status_: "error", element: PromiseResponseComponent });
    if (status === "success" || navigator.onLine)
      setApiState({ status_: "success", element: data });
  }, [status, newRequestSignal]);
  const signalReFetch = () => {
    setNewRequestSignal(Math.floor(Math.random() * 500));
  };
  return (
    <ApiContext.Provider value={{ apiState, setApiState, signalReFetch }}>
      {children}
    </ApiContext.Provider>
  );
};

export default ApiContext;
