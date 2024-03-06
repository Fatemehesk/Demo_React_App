/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/display-name */
import { useEffect } from "react";
import { createContext, useState } from "react";
import {fetureFlagDataServiceCall} from "../data";

export const fetureFlagContext = createContext(null);

const FeatureFlagGlobalState = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [enableflage, setenableflage] = useState({});

  const fetchFeatureflage = async () => {
 
    try {
        setLoading(true);
      const response = await fetureFlagDataServiceCall();
      setenableflage(response);
      console.log(response);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      throw new Error(error);
    }
  };
  useEffect(() => {
    fetchFeatureflage();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const togleFeatureHandler = (getKey) => {
    // Create a copy of the enableflage object
    const newFlage = { ...enableflage };
  
    // Create a new object with all keys set to false
    const updatedFlage = Object.keys(newFlage).reduce((acc, key) => {
      acc[key] = false;
      return acc;
    }, {});
  
    // Set the specified key to true
    updatedFlage[getKey] = true;
  
    // Log the updated values for debugging
    console.log(updatedFlage, "enable");
  
    // Update the state with the new object
    setenableflage((prev) => ({ ...prev, ...updatedFlage }));
  };
  return (
    <fetureFlagContext.Provider value={{loading,enableflage,togleFeatureHandler }}>
      {children}
    </fetureFlagContext.Provider>
  );
};
export default FeatureFlagGlobalState;