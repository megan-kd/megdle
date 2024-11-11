import React, {useContext} from 'react'
import {Button} from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackspace } from '@fortawesome/free-solid-svg-icons'
import { WordContext } from './WordContext'

const ENTER_TYPE = 'enter'
const ActionKey = (props) => {
    const type = props.type
    const context = useContext(WordContext)

    const onClick = () => {
        if (type === ENTER_TYPE) //enter
        {
            if (context.row <= 5 && context.word.length === 5)
            {
                let temps = context.pastAttempts
                temps.push(context.word)
                context.updateRow(context.row + 1)
                context.updatePastAttempts(temps)

            }
            context.updateWord("")

        }
        else //delete
        {
            //console.log('delete')
            context.updateWord(context.word.slice(0, -1))
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