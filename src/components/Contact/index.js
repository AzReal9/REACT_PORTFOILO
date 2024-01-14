import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useRef, useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import emailjs from '@emailjs/browser';


const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
        .sendForm(
            'service_qtkj7pk',
            'template_x45e4mo',
            refForm.current,
            'Sr7JfU1DF6Q0davh-'
        )
        .then(
            () => {
                alert('Message successfully sent!')
                window.location.reload(false)
            },
            () => {
                alert('Failed to send, please try again')
            }
        )
    }

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                            letterClass={letterClass} 
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                 
                    <p></p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                  <input type="text" name="name" placeholder="Name" required />
                                </li>
                                <li className='half'>
                                  <input type="email"
                                   name="email"
                                   placeholder="Email"
                                   required 
                                   />
                                </li>
                                <li>
                                    <input 
                                    placeholder="Subject" 
                                    type="text" 
                                    name="subject"
                                    required
                                     />
                                </li>
                                <li>
                                <textarea
                                placeholder='Message'
                                name="message"
                                required
                                ></textarea>
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='info-map'>
                    Austin Silaghi,
                    <br />
                    Oakland, 48363
                    <br />
                    Michigan <br />
                    United States<br />
                    <span>austinsilaghi@outlook.com</span>
                </div>
                <div className='map-wrap'>
                <MapContainer center={[42.76717, -83.20467]} zoom={13}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                     <Marker position={[42.76717, -83.20467]}>
                        <Popup>Austin lives here, come over for a cup of coffee</Popup>
                     </Marker>
                </MapContainer>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}


export default Contact