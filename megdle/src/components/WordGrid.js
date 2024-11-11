import React, { useContext } from 'react'
import { WordContext } from './WordContext'
import GridRow from './RowGrid'
import {Space} from 'antd'

const WordGrid = () => {
    const current = useContext(WordContext)

    const createDataList = () => {
        var list = []
        list.push(...current.pastAttempts)
        if (list.length < 5) {
            list.push(current.word)
        }
        while (list.length < 5)
        {
            list.push("")
        }

        return list
    }

    const drawGrid = () => {
        const dataList = createDataList()

        return (
            dataList.map(word =>
                <>
                    <GridRow rowWord={word}/>
                </>
            )
        )


    }
    return (
        <>
        <Space direction='vertical' size='small'>
            {drawGrid()}
        </Space>

        </>
    )
}

export default WordGrid