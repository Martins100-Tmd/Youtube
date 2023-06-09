import { useState, createContext, ReactNode, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchLoop, getMappedResult } from "../Components/utils/data";
import { ApiStateType } from "../type";
import { PromiseResponseComponent } from "../Components";

const ApiContext = createContext(undefined as any);

export const ApiContextProvider = ({ children }: { children: ReactNode }) => {
  let [apiState, setApiState] = useState<ApiStateType>({
    status_: "loading",
    element: null,
    data: false,
  });
  let { status, data } = useQuery({
    enabled: navigator.onLine,
    queryKey: ["posts"],
    queryFn: getMappedResult,
  });
  useEffect(() => {
    fetchLoop().then((res) => res);
    if (status === "loading" && navigator.onLine)
      setApiState({ status_: "loading", element: PromiseResponseComponent.loading, data: false });
    if (status === "error" || !navigator.onLine)
      setApiState({ status_: "error", element: PromiseResponseComponent, data: false });
    if (status === "success" || navigator.onLine)
      setApiState({ status_: "success", element: data, data: true });
  }, [status, data]);
  return <ApiContext.Provider value={{ apiState, setApiState }}>{children}</ApiContext.Provider>;
};

export default ApiContext;
