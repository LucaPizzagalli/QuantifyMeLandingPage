import React from "react"
import LoginButton from "./LoginButton"
import TryButton from "./TryButton"

function Header() {
  return (
    <>
      <header
        style={{
          display: 'flex',
          backgroundColor: '#ff5555',
        }}
      >
        <h1
          style={{
            flexGrow: 1,
            margin: '2rem',
            color: 'white',
          }}
        >
          QM
      </h1>
        <TryButton />
        <LoginButton />
      </header >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: '#ff5555',
        }}
      >
        <h1>Learn Yourself</h1>
        <p>Get more control over your life.</p>
        <p>Record your days, find correlation, fight procrastination.</p>
      </div>
      <div style={{
        backgroundRepeat: 'no-repeat',
        backgroundImage: 'url(/curve1.svg)',
        width: '100%',
        height: '8rem',
        backgroundSize: '100% 8rem',
      }}></div>
    </>
  )
}

export default Header
