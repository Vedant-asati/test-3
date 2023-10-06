import React, { useEffect, useState } from 'react'
import AnimatedLettters from '../AnimatedLetters'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faLinkedin,
    faGithub,
    faYoutube,
    faSkype,
    faTwitter,faReact,faBitcoin,faEthereum,faHtml5,faCss3,faJs,faGit,faNodeJs,faNode, faJsSquare
  } from '@fortawesome/free-brands-svg-icons'
  import {
    faHome,
    faUser,
    faEnvelope,
    faSuitcase,
    faBars,
    faClose,
  } from '@fortawesome/free-solid-svg-icons'
import './index.scss'

const About = () => {
    const [letterClass,setLetterClass]=useState('text-animate')
    useEffect(() => {
        const timeoutId = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 2000);
      
        return () => clearTimeout(timeoutId); // Cleanup the timeout on unmount
      }, []);

    return (
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                <AnimatedLettters letterClass={letterClass} stringArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']} idx={10} />
                </h1>
                <p>Hey there! this is Vedant, an aspiring entrepreneur, Blockchain developer and DeFi enthusiast. I love to solve real life problems that are most basic to the people and are the most rooted...</p>
                <p>I work with ReactJS, HTML, CSS, NodeJS. C++ is my hobby. I am exploring the domain of Blockchain with revolutionary ideas of Bitcoin & Ethereum. The way they can create secure cryptographic trust and decentralization and how they can be utilised to make peoples' lives better.</p>
                <p>
                    Lets Code WEB3! for a better cause...
                </p>
                
            </div>

            <div className="stage-cube-container">
                <div className="cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faHtml5} color='#F06529' />
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faBitcoin} color='#F7931A' />
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faEthereum} color='rgb(37, 68, 154)' />
                    </div>
                    {/* <div className="face7">
                        <FontAwesomeIcon icon={faGithub} color='rgb(37, 68, 154)' />
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default About