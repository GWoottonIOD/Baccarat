import React, {useState, useContext} from "react";

// This context is getting the user data from the backend and passing it to the components to be used in the components 
// This is also stored in the cookies so that the user can be logged in and logged out without having to log in again.
// Creating a user context object to share data between components
export const FirstCardContext = React.createContext();

// FirstCardContext function to provide user data to components
export const FirstCardHolder = (props) => {

    const [firstCard, setFirstCard] = useState(null)

    return (
        // Providing the current user and handleUser function to the context object
        <FirstCardContext.Provider value={{firstCard, setFirstCard}}>
            {props.children}
        </FirstCardContext.Provider>
    );
}

export const useFirstCardContext = () => {
    return useContext(FirstCardContext);
  };