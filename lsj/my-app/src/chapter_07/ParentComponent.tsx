import React, { useState, useCallback } from 'react'
import ChildComponent from './ChildComponent'

type Props = {}

function ParentComponent({ }: Props) {
  console.log('부모 렌더링!!!')

  const [count, setCount] = useState<number>(0);

  // const handleClick = useCallback((event) => {
  //   console.log(event)
  // }, [])
  const handleClick = (event) => {
    console.log(event)
  }

  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {count}
      </button>
      <ChildComponent handleClick={handleClick} />

    </div>

  )
}

export default ParentComponent