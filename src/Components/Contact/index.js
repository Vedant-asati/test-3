import React, { useEffect, useRef, useState } from 'react'
import AnimatedLettters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faLinkedin,
    faGithub,
    faYoutube,
    faSkype,
    faTwitter, faReact, faBitcoin, faEthereum, faHtml5, faCss3, faJs, faGit, faNodeJs, faNode, faJsSquare
} from '@fortawesome/free-brands-svg-icons'
import {
    faHome,
    faUser,
    faEnvelope,
    faSuitcase,
    faBars,
    faClose,
} from '@fortawesome/free-solid-svg-icons'
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './index.scss'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef()

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => clearTimeout(timeoutId); // Cleanup the timeout on unmount
    }, []);

    const sendEmail = (e) => {
        e.preventDefault()
        // const templateParams = {
        //     name: 'James',
        //     notes: 'Check this out!'
        // };
        emailjs.sendForm('service_f1z2p7v', 'contact_form', form.current, 'EZE3bY5gUNaRLHdx2').then(() => {
            alert('Message sent!')
            window.location.reload(false)

        },
            () => {
                alert('Failed to send... Retry!')
            })
    }


    return (
        <div className="container contact-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLettters letterClass={letterClass} stringArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']} idx={15} />
                </h1>
                <p>Hey! If you find me interesting you can message me. I'll be happy to listen to ideas, projects, dev opportunities & more...
                    <br/>Don't Spam... It works :)
                </p>
                <div className="contact-form">
                    <form ref={form} onSubmit={sendEmail}>
                            {/* <span className='nospam'>Dont spam !!! It works!</span> */}
                        <ul>
                            <li className='half'><input type="text" name="name" placeholder='Name' required /></li>
                            <li className='half'><input type="email" name="email" placeholder='Email' required /></li>
                            <li ><input type="text" name="subject" placeholder='Subject' required /></li>
                            <li ><textarea name="message" placeholder='Message' required /></li>
                            <li><input type="submit" className='flat-button' value="SEND..." /></li>
                        </ul>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Contact