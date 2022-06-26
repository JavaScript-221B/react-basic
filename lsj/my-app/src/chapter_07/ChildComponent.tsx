import React from 'react'

type Props = {
  handleClick: (event: any) => void;
}

function ChildComponent({ handleClick }: Props) {
  console.log('자식 렌더링됐따아~')
  return (
    <div
      onClick={handleClick}
    >ChildComponent</div>
  )
}

export default ChildComponent