import { IUser } from "@/types";
import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";

interface IUserProviderProps {
  children: React.ReactNode;
}

type IUserContext = {
  user: IUser | null;
  setUser: Dispatch<SetStateAction<IUser | null>>;
} | null;

const UserContext = createContext<IUserContext>(null);

export const UserProvider = ({ children }: IUserProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null);
  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("Invalid Context");

  return context;
};
