import React from 'react'
import Social from './Social'
import {Link} from 'gatsby'
import HomeLink from './HomeLinkLogo'

class Footer extends React.Component {
    render(){
        return(
        <div 
            style={{
                // width: '600px',
                marginTop: '50px',
                display:'flex',
                flexFlow: 'column',
                alignItems: 'center'
                
            }}
        >
            <div
                style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between'
                }}
            >
                <Social size="1x" />
                <a href="mailto:midisequencingdotcom@gmail.com">Contact</a>
                <Link to="/privacy-policy"> Privacy Policy </Link>
            </div>
            <div
                style={{
                    marginTop:"40px",
                    maxWidth: "200px"
                }}
            >
                {/* <Link to="/"><img src={MidiSequencing} alt="" /></Link> */}
                <HomeLink />
            </div>
        </div>
        )
    }
}

export default Footer