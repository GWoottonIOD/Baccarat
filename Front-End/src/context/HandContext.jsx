import React, {useState, useContext} from "react";

// This context is getting the user data from the backend and passing it to the components to be used in the components 
// This is also stored in the cookies so that the user can be logged in and logged out without having to log in again.
// Creating a user context object to share data between components
export const HandContext = React.createContext();

// HandContext function to provide user data to components
export const HandHolder = (props) => {

    const [firstCard, setFirstCard] = useState(null)
    const [secondCard, setSecondCard] = useState(null)
    const [thirdCard, setThirdCard] = useState(null)
    const [fourthCard, setFourthCard] = useState(null)
    const [fifthCard, setFifthCard] = useState(null)
    const [sixthCard, setSixthCard] = useState(null)
    const [hand, setHand] = useState([]);

    return (
        // Providing the current user and handleUser function to the context object
        <HandContext.Provider value={{
            firstCard, setFirstCard, secondCard, setSecondCard,
            thirdCard, setThirdCard, fourthCard, setFourthCard,
            fifthCard, setFifthCard, sixthCard, setSixthCard,
            hand, setHand
            }}>
            {props.children}
        </HandContext.Provider>
    );
}

export const useHandContext = () => {
    return useContext(HandContext);
  };