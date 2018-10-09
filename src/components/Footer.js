import React from 'react'
import Social from './Social'
import {Link} from 'gatsby'
import MidiSequencing from '../assets/WordsLogoTransparent.png'

class Footer extends React.Component {
    render(){
        return(
        <div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}
            >
                <Social size="1x" />
                {/* Contact */}
                {/* Privacy Policy */}
                <Link to="/privacy-policy"> Privacy Policy </Link>
                <a href="mailto:midisequencingdotcom@gmail.com">Contact</a>
            </div>
            <div
                style={{
                    marginTop:"20px",
                    maxWidth: "200px"
                }}
            >
                <Link to="/"><img src={MidiSequencing} alt="" /></Link>
            </div>
        </div>
        )
    }
}

export default Footer