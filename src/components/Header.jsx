import React from 'react'


const Header = ({ text, bgColor, textColor }) => {

  const style = {
    backgroundColor: bgColor,
    color: textColor
  }
  
  return (
    <header style={style} >
      <div className='container'>
        <h1>{text}</h1>
      </div>
    </header>
  )
}

Header.defaultProps = {
  text: 'Feedback UI',
  bgColor: 'rgba(0, 0, 0, 0.4)',
  textColor: '#ff6a95'
}

export default Header