import { ReactNode } from "react";
//ModeContext
export type ModeContextType = {
  mode: string;
};

//ApiContext
export type ApiContextType = {};
export type ApiStateType = {
  status_: string;
  element: any;
  data: boolean;
};

//VideoType
export type VideoType = {
  image: string;
  title: string;
  channel: string;
  screen: {
    width: number;
    height: number;
  };
  watchcount: string | undefined | number;
  id: string;
};

export type Status = {
  errmsg: string;
  VideoCardLists: null | ReactNode | object | any;
  loaded: boolean;
};

export type PromiseRes = {
  loading: JSX.Element | object;
  error: JSX.Element | object;
};
