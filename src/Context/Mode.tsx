import { ReactNode, createContext, useState } from "react";
import { ModeContextType } from "../type";
import { ModeUtils } from "../Components";

const ModeContext = createContext<ModeContextType>(undefined as any);

export const ModeContextProvider = ({ children }: { children: ReactNode }) => {
  let [mode, setmode] = useState("light");
  ModeUtils({ setmode });
  return <ModeContext.Provider value={{ mode }}>{children}</ModeContext.Provider>;
};
export default ModeContext;
