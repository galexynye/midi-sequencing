import React from 'react'
// import styled from 'styled-components'
import { Link } from 'gatsby'
// import Img from 'gatsby-image'
import SiteContainer from '../components/05_page/Layout/SiteContainer'
import { ArticleContainer } from "../components/05_page/ArticleContainer";
import RiftRain from '../assets/AlexPics/RiftRain.png'
import { ResponsivePhoto } from '../components/00_utilities/Utilities'

class About extends React.Component {
    render() {
        return (
            <SiteContainer>
                <ArticleContainer>
                    <h1>About</h1>

                    <h2>What is Music Sequencing?</h2>
                    <p>This is really two questions.</p>
                    <ol>
                        <li>What is the site?</li>
                        <li>What do the words mean?</li>
                    </ol>

                    <h3>The Site</h3>
                    <p>Music Sequencing is a site teaching music production and a blog.
                        My goal is to create a fully comprehensive place where music makers can get quality information,
                        have discussions and ultimately get better. </p>

                    <h3>The Term ‘Music Sequencing'</h3>
                    <p> A lot of producers might think of drum sequencing or midi sequencing
                        when they hear the name. On this site, Music Sequencing is about a
                        philosophy on music creation; a sequence of actions you
                         take from writing, producing, mixing, mastering and beyond.
                         My free ebook goes into more detail...<Link to="/ultimate-producers-workflow">get it here.</Link></p>



                    <h2>How to Use this Site</h2>
                    <p>Under <Link to="/learn">Learn</Link> in the top menu you’ll find articles from beginning to advanced topics on making music. If there is anything missing or confusing, let me know! Under each article is a forum discussion where you can ask questions or make suggestions, I’ll listen, and the quality will improve.</p>
                    <p>In the <Link to="/latest">Blog</Link> I offer my opinions and perspective on mostly music stuff.
                    I’ve been doing this a long time but don’t claim to be a single source of truth on anything. If you agree or disagree that’s great, everyone can benefit from an open dialogue, I can’t see from every angle and love having my perspective altered. </p>



                    <h2>Who are you?</h2>
                    {/* <Img fluid={RiftRain} /> */}

                    <ul>
                        <li>Name is Alex Nye </li>
                        <li>Artistically known as Radera </li>
                        <li>From Cleveland, Ohio</li>
                        <li>Went to Berklee College of Music</li>
                        <li>Did movie/tv music in Los Angeles</li>
                        <li>Went independent as a producer, mixing and mastering engineer</li>
                        <li>Married a German lady, moved my studio to Germany</li>
                        <li>Started MusicSequencing.com </li>
                        <li>Had a kid </li>
                        <li>Releasing a new original production at the start of every month in 2019; a playlist called “Spacetime Rio"</li>
                    </ul>
                    {/* <ResponsivePhoto src={RiftRain} /> */}

                    <h2>Can I hire you?</h2>
                    <p>Yes, fill out the form on my <Link to="/services">Services</Link> page and I’ll get back to you. </p>

                    <h2>Song of the Month</h2>
                    <h3>January - Imagine (cover)</h3>
                    <iframe className="mB40" width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/552767244&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>

                </ArticleContainer>
            </SiteContainer>
        )
    }
}

export default About
