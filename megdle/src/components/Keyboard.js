import React from 'react'
import { Row, Col, Space } from 'antd'
import LetterKey from './LetterKey'
import ActionKey from './ActionKey'


const Keyboard = () => {
  const alphabet = {
    1: ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    2: ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    3: ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
  }

  const rowGenerator = (row) => {
    return (alphabet[row].map(letter =>
      <>
        <Col>
          <LetterKey letter={letter} />
        </Col>
      </>

    )
    )
  }

  return (
    <>
      <Space direction='vertical'>
        <Row justify={'center'}>
          <Space direction={'horizontal'} size={3}>
            {rowGenerator(1)}
          </Space>
        </Row >
        <Row justify={'center'}>
          <Space direction={'horizontal'} size={3}>
            {rowGenerator(2)}
          </Space>
        </Row>
        <Row justify={'center'}>
          <Space direction={'horizontal'} size={3}>
            <Col>
              <ActionKey type='enter' />
            </Col>
            {rowGenerator(3)}
            <Col>
              <ActionKey type='delete' />
            </Col>
          </Space>
        </Row>
      </Space>
    </>
  )
}

export default Keyboard