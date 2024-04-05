import React, {useState, useContext} from "react";

// This context is getting the user data from the backend and passing it to the components to be used in the components 
// This is also stored in the cookies so that the user can be logged in and logged out without having to log in again.
// Creating a user context object to share data between components
export const PlayerHandContext = React.createContext();

// PlayerHandContext function to provide user data to components
export const PlayerHandHolder = (props) => {

    const [firstCard, setFirstCard] = useState(null)
    const [secondCard, setSecondCard] = useState(null)
    const [thirdCard, setThirdCard] = useState(null)
    const [playersHand, setPlayersHand] = useState([]);

    return (
        // Providing the current user and handleUser function to the context object
        <PlayerHandContext.Provider value={{
            firstCard, setFirstCard, secondCard, setSecondCard,
            thirdCard, setThirdCard, playersHand, setPlayersHand
            }}>
            {props.children}
        </PlayerHandContext.Provider>
    );
}

export const usePlayerHandContext = () => {
    return useContext(PlayerHandContext);
  };