import React, { createContext, useState } from "react";

export const MonsterContext = createContext();

export function MonsterContextProvider({ children }) {
  let [currentMonster, setCurrentMonster] = useState(null);

  return (
    <MonsterContext.Provider value={{ currentMonster, setCurrentMonster }}>
      {children}
    </MonsterContext.Provider>
  );
}
