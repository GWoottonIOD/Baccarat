import React, {useState, useContext} from "react";

// This context is getting the user data from the backend and passing it to the components to be used in the components 
// This is also stored in the cookies so that the user can be logged in and logged out without having to log in again.
// Creating a user context object to share data between components
export const BetStyleContext = React.createContext();

// BetStyleContext function to provide user data to components
export const BetStyleHolder = (props) => {

    const [streakLength, setStreakLength] = useState(null)
    const [betSize, setBetSize] = useState(null)
    const [chaseLength, setChaseLength] = useState(null)
    const [noOfPlayers, setNoOfPlayers] = useState(null)
    const [chaseDepth, setChaseDepth] = useState(null)
    const [chaseWidth, setChaseWidth] = useState(null)
    const [betStyle, setBetStyle] = useState(null)

    return (
        // Providing the current user and handleUser function to the context object
        <BetStyleContext.Provider value={{ 
            streakLength, setStreakLength, betSize, setBetSize,
            chaseLength, setChaseLength, noOfPlayers, setNoOfPlayers,
            chaseDepth, setChaseDepth, chaseWidth, setChaseWidth,
            betStyle, setBetStyle
            }}>
            {props.children}
        </BetStyleContext.Provider>
    );
}

export const useBetStyleContext = () => {
    return useContext(BetStyleContext);
  };