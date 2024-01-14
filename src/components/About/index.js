import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        
        const timeoutId = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 3000);
    
        
        return () => {
          clearTimeout(timeoutId);
        };
      }, []);

    return (
        <>
        <div className='container about-page'>
          <div className='text-zone'>
            <h1>
                <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                    idx={15}
                />
            </h1>
            <p>As a highly skilled JavaScript software engineer, I bring a wealth of expertise and knowledge to the world of web development. 
            With a strong foundation in JavaScript, I am proficient in crafting efficient and robust solutions for a variety of projects.
             My extensive experience enables me to navigate the complexities of front-end and back-end development with ease, ensuring seamless integration and functionality.</p>
          </div>

          <div className='stage-cube-cont'>
            <div className='cubespinner'>
                <div className='face1'>
                    <FontAwesomeIcon size="5x" icon={faAngular} color="#DD0031" />
                </div>
                <div className='face2'>
                    <FontAwesomeIcon size="5x" icon={faHtml5} color="#F06529" />
                </div>
                <div className='face3'>
                    <FontAwesomeIcon size="5x" icon={faCss3} color="#28A4D9" />
                </div>
                <div className='face4'>
                    <FontAwesomeIcon size="5x" icon={faReact} color="#5ED4F4" />
                </div>
                <div className='face5'>
                    <FontAwesomeIcon size="5x" icon={faJsSquare} color="#EFD81D" />
                </div>
                <div className='face6'>
                    <FontAwesomeIcon size="5x" icon={faGitAlt} color="#EC4D28" />
                </div>
            </div>
          </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default About