import React, {useState, useContext} from "react";

// This context is getting the user data from the backend and passing it to the components to be used in the components 
// This is also stored in the cookies so that the user can be logged in and logged out without having to log in again.
// Creating a user context object to share data between components
export const CurrentStreakContext = React.createContext();

// CurrentStreakContext function to provide user data to components
export const CurrentStreakHolder = (props) => {

    const [currentStreak, setCurrentStreak] = useState(2);

    return (
        // Providing the current user and CurrentStreakleUser function to the context object
        <CurrentStreakContext.Provider value={{currentStreak, setCurrentStreak}}>
            {props.children}
        </CurrentStreakContext.Provider>
    );
}

export const useCurrentStreakContext = () => {
    return useContext(CurrentStreakContext);
  };