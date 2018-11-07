import React from 'react'
import styled from 'styled-components'
import Menu from '../components/Menu/Menu'
import BGVideo from '../assets/MidiSequencing Title_1_Sound.mp4'
import Footer from '../components/Footer'
// import Alex from '../assets/AlexPics/singingcut.jpg'

const VideoWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -100;
  transform: translate(-50%, -50%);
  @media (max-width: 900) {
    video {
      display: none;
    }
  }
`

const LessonsHeader = styled.header`
  margin-top: 150px;
  margin-bottom: 150px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  h1 {
    font-size: 5.5rem;
    font-weight: 999;
    color: white;

    padding: 25px;
    /* -webkit-text-stroke: 2px white; */
  }
  h2 {
    color: white;
    font-size: 2rem;
    margin-top: -40px;
  }
  @media (max-width: 900px) {
    margin-top: 45px;
    margin-bottom: 45px;
    h1 {
      font-size: 3rem;
    }
  }
`

const LessonContentContainer = styled.div`
  min-height: 100vh;
  padding-top: 20px;
  background-color: white;
  h2 {
    font-size: 2rem;
  }
  ul {
    /* list-style-position: inside; */
    margin-left: 16px;
    li {
      padding-bottom: 5px;
    }
  }
`
const LessonInfoWrapper = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 0px 15px;
  p {
    max-width: 800px;
  }
`

const LessonInfoSubject = styled.div`
  /* padding-bottom: 10px; */
`

const Lessons = () => {
  return (
    <div>
      <Menu />
      <VideoWrapper>
        <video autoPlay muted loop>
          <source src={BGVideo} type="video/mp4" />
        </video>
      </VideoWrapper>
      <LessonsHeader>
        <h1>Learn Music Production and Theory</h1>
        <h2>1-on-1 Lessons Online</h2>
      </LessonsHeader>
      <LessonContentContainer>
        <LessonInfoWrapper>
          <LessonInfoSubject>
            <h2>Music Production Lessons</h2>
            <p>
              The world of Music Production is both vast and complicated. There
              are human factors such as capturing great perfomances, technical
              tools to learn like compressors, EQs and reverbs (and what the
              good ones are) and of course, there is music theory.
            </p>
            <p>
              Music Production lessons aim to help students discover their true
              potential as music makers. 1-on-1 lessons give the advantage of
              honest feedback and methods for improvement in an abstract
              artform.
            </p>
          </LessonInfoSubject>

          <LessonInfoSubject>
            <h2>Are lessons right for you?</h2>
            <p>
              Whether you are completely new to Music Production or want to take
              your abilities to the next level the guidance of an experienceced
              teacher is invaluable.
            </p>

            <p>
              Anyone passionate about Music Production who feels they can
              benefit from knowledgable direction is a great canidate for
              lessons.
            </p>
          </LessonInfoSubject>

          <LessonInfoSubject>
            <h2>Example Subjects</h2>
            <ul>
              <li>1-on-1 Analysis of Your Tracks and Mixes</li>
              <li>Music Theory: Notes, Intervals, Scales and Chords</li>

              <li>Sound Design and Synthesis</li>
              <li>
                Producing Vocals: Getting Great Perfomances and Recording Them
                Properly
              </li>
              <li>Advice On Building Your Studio</li>
              <li>Songwriting and Lyrics: How to Create the World of a Song</li>
              <li>
                Advanced Midi Sequencing: Creating Humanistic and Unbelievably
                Realistic Parts
              </li>
              <li>Film Scoring Techniques</li>
              <li>
                Fundamentals of Production: What the Tools Are and How To Use
                Them
              </li>
              <li>Creating Templates and Finding Your Workflow</li>
              <li>Whatever you are interested in!</li>
            </ul>
          </LessonInfoSubject>
          <LessonInfoSubject>
            <h2>How Lessons Work</h2>
            <p>
              Lessons are conducted online over a Skype or Google Hangout call.
              We can discuss other options of communication as well.
            </p>
            <p>
              Music Production concepts are universal, however, some specifics,
              like your Digital Audio Workstation (or DAW) of choice, play a
              part in the production process. DAW specific instructions and
              lessons can be given on Abelton Live, Pro Tools and Logic X.
            </p>
          </LessonInfoSubject>
          <LessonInfoSubject>
            <h2>About the Instructor</h2>
            <p>
              Alex Nye works as a music producer and
              <a href="https://www.imdb.com/name/nm5637976/"> film composer</a>.
              In 2011, Alex graduated from
              <a href="https://www.berklee.edu/">
                {' '}
                Berklee College of Music
              </a>{' '}
              Majoring in Contemporary Writing and Production. He has composed
              extensively for films and shows such as Amazon's Hand of God and
              20th Century Fox's Poltergeist.
              {/* Before Berklee,
              he studied classical bass with Scott Haigh of the Cleveland
              Orchestra. */}
            </p>
          </LessonInfoSubject>
        </LessonInfoWrapper>
        <Footer />
      </LessonContentContainer>
    </div>
  )
}

export default Lessons
