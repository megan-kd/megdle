import React, { useContext } from 'react'
import { Row, Col, Space, Avatar } from 'antd'
import { WordContext } from './WordContext'

const GridRow = (props) => {
    const rowWord = props.rowWord ? props.rowWord : ""
    const context = useContext(WordContext)
    const blankStyle = {
        backgroundColor: '#FFFFFF',
        borderColor: '#000000'
    }

    const getColor = (letter, pos) => {
        let megdle = context.megdle
        let megdleLetter = megdle[pos]

        console.log(megdleLetter + " " + letter)

        //if a match, green
        if (megdleLetter == letter) {
            return '#6AAA64'
        }

        //else
        else {
            //in word
            if (megdle.includes(letter)) {
                return '#C9B458' 
            }
            //not in word
            else {
        
                return '#667C7E'
            }

        }

    }

    const createColumns = () => {
        var columns = null
        if (rowWord.length === 0) {
            columns = <>
                <Col><Avatar shape={'square'} size={64} style={blankStyle} /></Col>
                <Col><Avatar shape={'square'} size={64} style={blankStyle}/></Col>
                <Col><Avatar shape={'square'} size={64} style={blankStyle}/></Col>
                <Col><Avatar shape={'square'} size={64} style={blankStyle}/></Col>
                <Col><Avatar shape={'square'} size={64} style={blankStyle}/></Col>
            </>
        }
        else {
            var letterList = rowWord.split("")
            columns = letterList.map((letter, pos) =>
                <Col>
                    <Avatar shape={'square'} style={{ backgroundColor: getColor(letter, pos) }} size={64}>{letter}</Avatar>
                </Col>
            )

            if (letterList.length < 5) {
                let extraRowCount = 5 - letterList.length
                for (let i = 0; i < extraRowCount; i++) {
                    columns.push(<Col><Avatar shape={'square'} size={64} /></Col>)
                }
            }

        }

        return (
            <Space direction='horizontal' size={'middle'}>
                {columns}
            </Space>
        )
    }
    return (
        <Row justify={'center'}>
            {createColumns()}
        </Row>
    )
}

export default GridRow