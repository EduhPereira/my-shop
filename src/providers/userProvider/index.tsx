import { createContext, ReactNode, useContext, useState } from "react";

interface UserProviderProps {
  children: ReactNode;
}

interface UserProviderData {
  isLogged: boolean;
  setIsLogged: (state: boolean) => void;
}

const UserContext = createContext<UserProviderData>({} as UserProviderData);

export const UserProvider = ({ children }: UserProviderProps) => {
  const [isLogged, setIsLogged] = useState(
    localStorage.getItem("token") ? true : false
  );
  return (
    <UserContext.Provider value={{ isLogged, setIsLogged }}>
      {children}
    </UserContext.Provider>
  );
};
export const useUser = () => useContext(UserContext);
