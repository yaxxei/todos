import { createContext, ReactNode, useContext } from "react";
import { TodosStore } from "./todosStore";
import React from "react";

class RootStore {
  todosStore = new TodosStore();
}

export const rootStore = new RootStore();

const RootStoreContext = createContext(rootStore);

export const useStore = () => useContext(RootStoreContext);

export function RootStoreContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  return React.createElement(
    RootStoreContext.Provider,
    { value: rootStore },
    children
  );
}
