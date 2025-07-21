import React, { createContext, useContext, useState } from "react";

const WrapperContext = createContext();

export const WrapperProvider = ({ children }) => {
  const [value, setValue] = useState("default value");

  const updateValue = (newVal) => {
    setValue(newVal);
  };

  return (
    <WrapperContext.Provider value={{ value, updateValue }}>
      {children}
    </WrapperContext.Provider>
  );
};

export const useWrapper = () => useContext(WrapperContext);
