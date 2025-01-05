import React, { createContext, useContext, useState } from "react";

const MyLang = createContext();

export const useMyLang = () => useContext(MyLang);

export const MyProvider = ({ children }) => {
  const [myCurrentLang, setCurrentState] = useState("Fr");

  const updateLangState = (newLangState) => {
    setCurrentState(newLangState);
  };

  return (
    <MyLang.Provider value={{ myCurrentLang, updateLangState }}>
      {children}
    </MyLang.Provider>
  );
};
