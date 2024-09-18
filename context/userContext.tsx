import { createContext, useContext, useState, ReactNode } from "react";

import axios from "axios";

interface UserData {
  username: string;
  full_name: string | undefined;
  reading_level: string;
  email: string | undefined;
  telephone: string | undefined;
  language: string;
  favorite_books: Array<string>;
  favorite_genres: Array<string>;
  favorite_authors: Array<string>;
  bookmarks: Record<string, number>;
}

interface UserContextType {
  userData: UserData;
  setUserData: React.Dispatch<React.SetStateAction<UserData>>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function useUserContext() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
}

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [userData, setUserData] = useState<UserData>({
    username: "xen",
    full_name: "Fiifi Baisie Amoah",
    reading_level: "Intermediate",
    email: "fyfybaisieamoah6@gmail.com",
    telephone: "233557650787",
    language: "english",
    favorite_books: ["wrOQLV6xB-wC"],
    favorite_genres: ["biology"],
    favorite_authors: ["Attah Kay"],
    bookmarks: {},
  });

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};
