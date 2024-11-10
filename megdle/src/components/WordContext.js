import {createContext, useState } from "react";

export const WordContext = createContext('')

export const WordContextProvider = ({children}) => {
    const [word, setWord] = useState('')

    return <WordContext.Provider value={{word: word, update: setWord}}>
        {children}
    </WordContext.Provider>
}
