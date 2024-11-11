import React, {useContext} from 'react'
import { Button } from 'antd'
import { WordContext } from './WordContext'

const LetterKey = (props) => {
    const currentWord = useContext(WordContext)
    const keyLetter = props.letter ? props.letter : ' '
    const onClick = () => {
        console.log(keyLetter)
        if (currentWord.word.length < 5){
            currentWord.updateWord(currentWord.word + keyLetter)
        }
    }
    return (
        <Button
            onClick={onClick}
            style={{width: '20px'}}
        >
            {keyLetter}
        </Button>
    )
}

export default LetterKey