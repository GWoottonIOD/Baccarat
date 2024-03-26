import React, {useState, useContext} from "react";

// This context is getting the user data from the backend and passing it to the components to be used in the components 
// This is also stored in the cookies so that the user can be logged in and logged out without having to log in again.
// Creating a user context object to share data between components
export const ThirdCardContext = React.createContext();

// ThirdCardContext function to provide user data to components
export const ThirdCardHolder = (props) => {

    const [thirdCard, setThirdCard] = useState(null)

    return (
        // Providing the current user and handleUser function to the context object
        <ThirdCardContext.Provider value={{thirdCard, setThirdCard}}>
            {props.children}
        </ThirdCardContext.Provider>
    );
}

export const useThirdCardContext = () => {
    return useContext(ThirdCardContext);
  };