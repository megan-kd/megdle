import React from 'react'
import { Row, Col, Space, Avatar } from 'antd'

const GridRow = (props) => {
    const rowWord = props.rowWord ? props.rowWord : ""

    const createColumns = () => {
        var columns = null
        if (rowWord.length === 0) {
            columns = <>
                <Col><Avatar shape={'square'}  size={64} /></Col>
                <Col><Avatar shape={'square'}  size={64} /></Col>
                <Col><Avatar shape={'square'}  size={64} /></Col>
                <Col><Avatar shape={'square'}  size={64} /></Col>
                <Col><Avatar shape={'square'}  size={64} /></Col>
            </>
        }
        else {
            var letterList = rowWord.split("")
            columns = letterList.map(letter =>
                <Col>
                    <Avatar shape={'square'}  size={64}>{letter}</Avatar>
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