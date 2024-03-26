import React, {useState, useContext} from "react";

// This context is getting the user data from the backend and passing it to the components to be used in the components 
// This is also stored in the cookies so that the user can be logged in and logged out without having to log in again.
// Creating a user context object to share data between components
export const SecondCardContext = React.createContext();

// SecondCardContext function to provide user data to components
export const SecondCardHolder = (props) => {

    const [secondCard, setSecondCard] = useState(null)

    return (
        // Providing the current user and handleUser function to the context object
        <SecondCardContext.Provider value={{secondCard, setSecondCard}}>
            {props.children}
        </SecondCardContext.Provider>
    );
}

export const useSecondCardContext = () => {
    return useContext(SecondCardContext);
  };