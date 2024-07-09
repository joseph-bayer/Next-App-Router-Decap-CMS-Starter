"use client";

import { createContext, useState } from "react";
import { GlobalState, GlobalStateContext } from "../interfaces/GlobalContext";

const initialState: GlobalState = {};
export const GlobalContext = createContext<GlobalStateContext>({
  globalState: initialState,
  setGlobalState: (globalState: GlobalState) => {},
});

export default function GlobalContextWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [globalState, setGlobalState] = useState(initialState);
  return (
    <GlobalContext.Provider value={{ globalState, setGlobalState }}>
      {children}
    </GlobalContext.Provider>
  );
}
