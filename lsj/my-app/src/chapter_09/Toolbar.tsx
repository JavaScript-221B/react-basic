import React from 'react'
import './Toolbar.css';

type Props = {
  isLoggedIn: boolean;
  onClickLogin: () => void;
  onClickLogout: () => void;
}

function Toolbar({ isLoggedIn, onClickLogin, onClickLogout }: Props) {
  return (
    <div className='wrapper'>
      {isLoggedIn && <span className='greeting'>환영!</span>}

      {isLoggedIn ? (
        <button onClick={onClickLogout}>로그아웃</button>
      ) : (
        <button onClick={onClickLogin}>로그인</button>
      )}

    </div>
  )
}

export default Toolbar