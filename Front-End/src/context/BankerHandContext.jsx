import React, {useState, useContext} from "react";

// This context is getting the user data from the backend and passing it to the components to be used in the components 
// This is also stored in the cookies so that the user can be logged in and logged out without having to log in again.
// Creating a user context object to share data between components
export const BankerHandContext = React.createContext();

// BankerHandContext function to provide user data to components
export const BankerHandHolder = (props) => {

    const [firstCard, setFirstCard] = useState(null)
    const [secondCard, setSecondCard] = useState(null)
    const [thirdCard, setThirdCard] = useState(null)
    const [bankersHand, setBankersHand] = useState([]);

    return (
        // Providing the current user and handleUser function to the context object
        <BankerHandContext.Provider value={{
            firstCard, setFirstCard, secondCard, setSecondCard,
            thirdCard, setThirdCard, bankersHand, setBankersHand
            }}>
            {props.children}
        </BankerHandContext.Provider>
    );
}

export const useBankerHandContext = () => {
    return useContext(BankerHandContext);
  };