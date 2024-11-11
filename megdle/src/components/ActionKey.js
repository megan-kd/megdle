import React, {useContext} from 'react'
import {Button} from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackspace } from '@fortawesome/free-solid-svg-icons'
import { WordContext } from './WordContext'

const ENTER_TYPE = 'enter'
const ActionKey = (props) => {
    const type = props.type
    const currentWord = useContext(WordContext)

    const onClick = () => {
        if (type === ENTER_TYPE) //enter
        {
            console.log('enter')
        }
        else //delete
        {
            //console.log('delete')
            currentWord.updateWord(currentWord.word.slice(0, -1))
        }
    }

    return (
        <Button
        onClick={onClick}
        style={{width: '60px' }}
        >
            {type === ENTER_TYPE ? 'Enter' : <FontAwesomeIcon icon={faBackspace} />}
        </Button>
    )
}

export default ActionKey