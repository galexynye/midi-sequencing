import React from 'react';
import { Link } from 'gatsby'
import MidiSequencing from '../assets/MusicSequencingWordsLogo.png'

const HomeLink = () => {
    return (
        <div>
            <Link to="/"><img src={MidiSequencing} alt="" /></Link>
        </div>
    )
}

export default HomeLink