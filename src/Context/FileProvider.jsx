import { useState } from "react";
import { FileContext } from "./Context";

/* eslint-disable react/prop-types */
export default function FileProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [dataArray, setDataArray] = useState([]);
  const value = { isLoading, setIsLoading, dataArray, setDataArray };
  return <FileContext.Provider value={value}>{children}</FileContext.Provider>;
}
