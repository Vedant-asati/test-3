import React from 'react'
import './index.scss'
// class that we want to apply to our chars
// array of the chars
// index starting point
const AnimatedLetters = ({letterClass, stringArray, idx}) => {
  return (
    <span>
        {
            stringArray.map((char,i)=>(// its like 5 plus the starting index
                <span key={char+i} className={`${letterClass} _${i+idx}`}>
                    {char}
                </span>
            ))
        }
    </span>
  )
}

export default AnimatedLetters