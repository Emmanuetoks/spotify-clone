'use client'

import { ReactNode, createContext, useContext } from "react";
import { TUser } from "../../types";

interface AuthContextType {
  user: TUser;
}

const authContext = createContext<null | AuthContextType>(null);

const dummyUser = {
  name: "Emmanuel Toks",
  playlists: "20",
};

const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  return (
    <authContext.Provider value={{ user: dummyUser }}>
      {children}
    </authContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(authContext) as AuthContextType;
  return context;
};

export default AuthContextProvider;
