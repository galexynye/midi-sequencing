import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Menu from '../components/Menu/Menu'
import BGVideo from '../assets/MidiSequencing Title_1_Sound.mp4'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'
import LessonsPosterOrange from '../assets/Lessons/LessonsPosterOrange.jpg'
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
      source {
        display: none;
      }
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

class Lessons extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isBig: false,
    }
    this.handleWindowSizeChange = this.handleWindowSizeChange.bind(this)
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleWindowSizeChange)
    this.setState({
      isBig: window.innerWidth > 700,
    })
  }

  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange)
  }

  handleWindowSizeChange() {
    this.setState({ isBig: window.innerWidth > 700 })
  }

  render() {
    return (
      <div>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          title={
            `Lessons | Music Sequencing` // meta={[{ name: 'description', content: siteDescription }]}
          }
        />
        <Menu />
        <VideoWrapper>
          {this.state.isBig && (
            <video poster={LessonsPosterOrange} autoPlay muted loop>
              <source src={BGVideo} type="video/mp4" />
            </video>
          )}
          {!this.state.isBig && <img src={LessonsPosterOrange} />}
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
                The world of Music Production is both vast and complicated.
                There are human factors such as capturing great perfomances,
                technical tools to learn like compressors, EQs and reverbs (and
                what the good ones are) and of course, there is music theory.
              </p>
              <p>
                Music Production lessons aim to help students discover their
                true potential as music makers. 1-on-1 lessons give the
                advantage of direct feedback on a student's work and methods for
                improvement in an abstract artform.
              </p>
            </LessonInfoSubject>

            <LessonInfoSubject>
              <h2>Are lessons right for you?</h2>
              <p>
                Whether you are completely new to Music Production or want to
                take your abilities to the next level, the guidance of an
                experienceced teacher is invaluable.
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

                <li>
                  Fundamentals of Production: What the Tools Are and How To Use
                  Them
                </li>
                <li>Taking an idea to a fully produced track</li>
                <li>Sound Design and Synthesis</li>
                <li>
                  Producing Vocals: Getting Great Perfomances and Recording Them
                  Properly
                </li>
                <li>
                  Advice On Building Your Studio: What tools should you get and
                  what's a waste of money
                </li>
                <li>
                  Songwriting and Lyrics: How to Create the World of a Song
                </li>
                <li>Music Theory: Notes, Intervals, Scales and Chords</li>
                <li>Micing and Recording Techniques</li>
                <li>
                  Multitrack Recording: How to run a recording session with
                  multiple players
                </li>

                <li>
                  Advanced Midi Sequencing: Creating Humanistic and Unbelievably
                  Realistic Parts and Mockups
                </li>
                <li>Film Scoring Techniques</li>

                <li>Creating Templates and Finding Your Workflow</li>
                <li>Whatever you are interested in!</li>
              </ul>
            </LessonInfoSubject>
            <LessonInfoSubject>
              <h2>How Lessons Work</h2>
              <p>
                Lessons are conducted online and require internet speeds capable
                of audio and video streaming.
              </p>
              <p>
                <b>
                  {' '}
                  To ensure a great experience there is a free meet and greet
                  offered for first time students to discuss goals, musical
                  influences and to ensure online lessons work for you.
                </b>
              </p>
              <p>
                Note: Music Production concepts are universal, however, some
                specifics, like your Digital Audio Workstation (or DAW) of
                choice, play a part in the production process. DAW specific
                instructions and lessons can be given on Abelton Live, Pro Tools
                and Logic X.
              </p>
            </LessonInfoSubject>
            <LessonInfoSubject>
              <h2>Pricing</h2>
              <p>
                Free - .5hr Meet & Greet / Lesson Setup (Purchase not required)
              </p>
              <p>$60 - 1hr Lesson</p>
              <p>$100 - 2hr Lesson</p>
            </LessonInfoSubject>

            <LessonInfoSubject>
              <h2>Contact for Lessons</h2>
              <p>
                Booking lessons can be done by emailing{' '}
                <a href="mailto:lessons@musicsequencing.com">
                  lessons@musicsequencing.com
                </a>{' '}
                or by filling out the contact form below. In your message please
                indicate if you have any preferences for dates or times. You
                will be contacted shortly.
              </p>
              <ContactForm
                margin="0px 0px 0px 0px"
                textAlign="left"
                lesson={true}
              />
            </LessonInfoSubject>
            <LessonInfoSubject>
              <h2 style={{ marginTop: '25px' }}>About the Instructor</h2>
              <p>
                Alex Nye works as an independent music producer and
                <a href="https://www.imdb.com/name/nm5637976/" target="blank">
                  {' '}
                  film composer
                </a>
                . He has composed and engineered extensively for films and shows
                such as Amazon's
                <a href="https://www.imdb.com/title/tt3973768/" target="blank">
                  {' '}
                  Hand of God
                </a>{' '}
                and 20th Century Fox's{' '}
                <a
                  href="https://www.imdb.com/title/tt1029360/?ref_=nv_sr_2"
                  target="blank"
                >
                  {' '}
                  Poltergeist
                </a>
                . In 2011, he graduated from
                <a href="https://www.berklee.edu/" target="blank">
                  {' '}
                  Berklee College of Music
                </a>{' '}
                Majoring in Contemporary Writing and Production. Alex is a
                multi-instrumentalist, singer/songwriter and classically trained
                double bassist.
                {/* You can watch
                one of his music videos{' '}
                <a
                  href="https://www.youtube.com/watch?v=H0Wj1DL-lyg"
                  target="blank"
                >
                  here
                </a>{' '}
                or listen to his cover of St. Vincent's 'Los Ageless' below.
                <div style={{ marginTop: '20px' }}>
                  <iframe
                    width="100%"
                    height="300"
                    scrolling="no"
                    frameborder="no"
                    allow="autoplay"
                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/436034745&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                  />
                </div> */}
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
}

export default Lessons
