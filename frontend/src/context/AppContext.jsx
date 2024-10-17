import React, { createContext } from "react";
import { doctors } from "../assets/assets.js";

// Create the AppContext
export const AppContext = createContext();

const AppContextProvider = (props) => {
    // Define the value to be provided
    const value = {
        doctors,
    };

    // Return the provider wrapping its children
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
