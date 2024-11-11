import {createContext, useState } from "react";

export const WordContext = createContext('')

export const WordContextProvider = ({children}) => {
    const [word, setWord] = useState('')
    const [row, setRow] = useState(0)
    const [pastAttempts, setPastAttempts] = useState([])

    var value = {
        word: word,
        updateWord: setWord,
        row: row,
        updateRow: setRow,
        pastAttempts: pastAttempts,
        updatePastAttempts: setPastAttempts
    }

    return <WordContext.Provider value={value}>
        {children}
    </WordContext.Provider>
}
