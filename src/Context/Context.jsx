import React, {createContext, useContext} from "react";

export const GameContext = createContext();

export const useGameContext = () => useContext(GameContext);

function GameContextProvider ({children}) {
    return (
        <GameContext.Provider value={{}}>
            {children}
        </GameContext.Provider>
    )
}

export default GameContextProvider;