import React, { useContext } from 'react'
import Keyboard from './Keyboard'
import { Space } from 'antd'
import { WordContext } from './WordContext'
import WordGrid from './WordGrid'

const Page = () => {
  const currentWord = useContext(WordContext)
  return (
    <>
      <Space size={50} direction={'vertical'}>
        <div>{currentWord.word}</div>
        <WordGrid/>
        <Keyboard />
      </Space>
    </>

  )
}

export default Page