import React, {useState, useContext} from "react";

// This context is getting the user data from the backend and passing it to the components to be used in the components 
// This is also stored in the cookies so that the user can be logged in and logged out without having to log in again.
// Creating a user context object to share data between components
export const StreakContext = React.createContext();

// StreakContext function to provide user data to components
export const StreakHolder = (props) => {

    const [streak, setStreak] = useState([]);

    return (
        // Providing the current user and handleUser function to the context object
        <StreakContext.Provider value={{streak, setStreak}}>
            {props.children}
        </StreakContext.Provider>
    );
}

export const useStreakContext = () => {
    return useContext(StreakContext);
  };