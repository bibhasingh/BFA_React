import React, { createContext, useContext, useState } from "react";

const Page = createContext();

export const useContent = () => useContext(Page);

export const ContentProvider = ({ children }) => {
  const [content, setContent] = useState("Home"); // Renamed setCurrentContent to setContent for consistency

  const updateContent = (newPageState) => {
    setContent(newPageState); // Ensure the state is updated correctly
  };

  return (
    <Page.Provider value={{ content, updateContent }}>
      {children}
    </Page.Provider>
  );
};
