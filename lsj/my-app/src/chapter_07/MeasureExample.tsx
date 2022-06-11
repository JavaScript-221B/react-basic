import React, { useState, useCallback, useRef, useEffect } from 'react'

type Props = {}

const MeasureExample = (props: Props) => {
  const [height, setHeight] = useState<number>(0);

  const measuredRef = useCallback(
    (node) => {
      if (node !== null) {
        setHeight(node.getBoundingClientRect().height);
      }
    },
    [],
  )
  // const h1El = useRef(null);

  // useEffect(() => {
  //   console.log('effect!')
  //   if (h1El.current) {
  //     setHeight(h1El.current.getBoundingClientRect().height)
  //   }
  // }, [h1El])


  return (
    <>
      <div>MeasureExample</div>
      <h1 ref={measuredRef}>Hello, World!</h1>
      <h2>The above header is {Math.round(height)}px tall</h2>
    </>
  )
}

export default MeasureExample