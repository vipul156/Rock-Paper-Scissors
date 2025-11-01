'use client';

import { useContext, createContext, useState } from "react";

export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {

    const [score, setScore] = useState(0);
    const [userChoice, setUserChoice] = useState(null);
    const [computerChoice, setComputerChoice] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <GlobalContext.Provider value={{
            score, setScore,
            userChoice, setUserChoice,
            computerChoice, setComputerChoice,
            isOpen, setIsOpen,
        }}>
            {children}
        </GlobalContext.Provider>
    );
}
export const useGlobalContext = () => useContext(GlobalContext);

export default GlobalProvider;