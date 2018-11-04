import React from 'react'
import { Link } from 'gatsby'
import MidiSequencing from '../assets/MusicSequencingWordsLogo.png'

const HomeLink = () => {
  return (
    <Link to="/">
      <img src={MidiSequencing} alt="Home Link" />
    </Link>
  )
}

export default HomeLink
