import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import "../../index.css"
import VLogo from '../../assets/images/V_LOGO_4.png'
import { useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
// 
const Home = () => {
  const [letterClass,setLetterClass]=useState('text-animate')
  const nameArray=['e','d','a','n','t']
  const jobArray=[' ','a',' ','B','l','o','c','k','c','h','a','i','n',' ','D','e','v','e','l','o','p','e','r']

  // useEffect(()=>{
  //   return setTimeout(() => {
  //     setLetterClass('text-animate-hover');
  //   }, 4000)
  // },[])
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 5000);
  
    return () => clearTimeout(timeoutId); // Cleanup the timeout on unmount
  }, []);
  

  return (
    <div className="container home-page">
        <div className="text-content">
            <h1>
              <span className={letterClass}>J</span>
              <span className={`${letterClass} _11`}>S</span>
              <span className={`${letterClass} _12`}>R,</span>
              <br/>
              <span className={`${letterClass} _13`}>I</span>
              <span className={`${letterClass} _14`}>'m</span>
            {/* ///////x////////////////////////////////// */}
            <img src={VLogo} alt="VLogo" />
            {/* edant... Aspiring Blockchain Developer... */}
            <AnimatedLetters letterClass={letterClass} stringArray={nameArray}
            idx={15}/>
            <AnimatedLetters letterClass={letterClass} stringArray={jobArray}
            idx={20}/>
            </h1>
            <h2>FrontEnd •BackEnd •Bitcoin •Ethereum •Research • Entrepreneurship...</h2>
            <Link to='/contact' className='flat-button'>SAY Hi...</Link>
        </div>
    </div>
  )
}

export default Home