
"use client";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { auth } from "../Config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const UserContext = createContext<any>(undefined);


export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [userAuth] = useAuthState(auth);
  const [user, setUser] = useState<any>(userAuth);
  useEffect(() => {
    setUser(userAuth);
  }, [userAuth]);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): any => {
  const context = useContext(UserContext);
  if(!context) {
    throw new Error("No user context");
  }
  return context;
}