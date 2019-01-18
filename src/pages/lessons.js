import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Menu from '../components/MainNavigation/Menu'
import BGVideo from '../assets/MidiSequencing Title_1_Sound.mp4'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'
import LessonsPosterOrange from '../assets/Lessons/LessonsPosterOrange.jpg'
import ResponsiveIframe from '../styles/oldCrap/ResponsiveIframe'
import Checkout from '../components/Purchase/Checkout'
import DeskPic from '../assets/Lessons/DeskPhoto.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSoundcloud,
  faImdb,
} from '@fortawesome/free-brands-svg-icons'

// Lesson Prices
const oneHourLesson = 5500
const fourHourLesson = 19500
const twelveHourLesson = 44500

// Header Video Wrapper
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

// Lesson Page Header
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
  max-width: 900px;
  margin: auto;
  padding: 0px 15px;
  p {
    max-width: 900px;
  }
`


const LessonInfoSubject = styled.div`
   margin: ${props => props.margin || '40px 0px 0px 0px'};
`

const LessonsBio = styled.div`
  display: flex;
  /* flex-flow: column; */
  /* align-items: center; */
  /* justify-content: center; */
  div{
    
  }
  img{
    /* max-height: 700px; */
    max-width: 400px;
    padding-left: 20px;
    align-self: center
    /* border-radius: 50%; */

  }
  @media (max-width: 700px){
    flex-flow: wrap;
    justify-content: center;
    text-align: center;
  img{
    padding: 20px 0px;
    max-height: 300px;
  }
}
`

const LessonCards = styled.div`
margin: 0px 0px 20px 0px; 
display: flex; 
flex-flow: wrap; 
justify-content: center;
@media (max-width: 900px){
  justify-content: center;
}
`

const SocialWrapper = styled.div`
  margin: ${props => props.margin || '0px'};
  max-height: 20px;
  @media (max-width: 900px) {
    display: ${props => props.displayMobile || 'default'};
  }
`

const SocialLink = styled.a`
  margin-right: 25px;
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
        >

        </Helmet>
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
          <h1>Learn Music and Production</h1>
          <h2>1-on-1 Lessons Online</h2>
        </LessonsHeader>
        <LessonContentContainer>
          <LessonInfoWrapper>
            <LessonInfoSubject margin="10px 0px 0px 0px">
              <h2>About Lessons</h2>
              {/* <p>
                The world of Music Production is both vast and complicated.
                There are human factors such as capturing great perfomances,
                technical tools to learn like compressors, EQs and reverbs (and
                what the good ones are) and of course, there is music theory.
              </p> 
              {/* <p>Learn how to take your musical ideas and turn them into professional quality tracks. */}

              {/* </p> */}
              <p>Get a custom curriculum tailored to what you want to learn. Beginner to advanced techniques of recording, mixing, mastering, music theory and sound design.</p>
              {/* <p>Learning music productions, you will benefit so much more from direct feedback on your original music than wandering from tutorial to tutorial, trying to figure out if the techniques will work for your music. Learn what YOU are doing right and how to get better.</p> */}
              {/* <p>Speed track your development and reach your full musical potential.</p> */}
              {/* <p>
                Music Production lessons aim to help students discover their
                true potential as music makers. 1-on-1 lessons give the
                advantage of direct feedback on a student's work and methods for
                improvement in an abstract artform.
              </p> */}
            </LessonInfoSubject>

            {/* <LessonInfoSubject>
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
            </LessonInfoSubject> */}

            <LessonInfoSubject>
              <h2>What You Can Learn</h2>
              <p>Logic Pro X, Pro Tools or Ableton Live.</p>
              <p>Mixing and Mastering</p>
              <p>Music Theory: Chords, Scales, Melody and Voice Movement</p>
              {/* <p>Sound Design and Synthesis</p> */}
              <p>Working with Samples, Synthesizers and Creating Your Own Sounds</p>
              <p>Song and Lyrics Writing</p>
              <p>Recording Yourself and Multitrack Recording</p>
              <p>Vocal Production</p>
              <p>Arranging, Song Structure and Lyric Writing</p>
              {/* <p>Music Business - Publishing, Promotion and Getting Music Online</p> */}
              {/* <p>Playing Piano or Drum Pads as a Producer</p> */}
              <p>+ Custom Topics Specific For You</p>
              {/* <p>Template Design, Sample Organization and Other Workflow Enhancements</p> */}
            </LessonInfoSubject>


            <LessonInfoSubject>
              <h2>How Lessons Work</h2>
              <p>
                Lessons are done online using <a href="https://zoom.us/" target="blank">Zoom.us</a> and are available worldwide :)
              </p>
              <p>
                <b>
                  {' '}
                  To ensure a great learning experience there is a FREE first lesson offered for a limited time only. Fill out the form below to book yours today!
                </b>
              </p>
              <h3>Got Questions?</h3>
              <p>Email <a href="mailto:lessons@musicsequencing.com">lessons@musicsequencing.com</a> and we'll get back to you ASAP.</p>
            </LessonInfoSubject>



            <LessonInfoSubject>
              <h2>Sign Up for a FREE First Lesson</h2>
              {/* <p>Get started by filling out the form below or emailing <a href="mailto:lessons@musicsequencing.com">lessons@musicsequencing.com</a></p> */}
              <ContactForm
                margin="0px 0px 0px 0px"
                textAlign="center"
                lesson={true}
                submit="Book a Free Lesson!"
              />
            </LessonInfoSubject>



            <LessonInfoSubject>
              <h2>Purchase Lessons</h2>
              <p>We recommend to email <a href="mailto:lessons@musicsequencing.com">lessons@musicsequencing.com</a>
                to schedule lessons before purchase. Lessons can be purchased with PayPal
                or with a card using the purchase buttons below.
                Payment via PayPal can be made after emailing to schedule lessons.
              Secure handling of card payments is encrypted by <a href="https://stripe.com/" target="blank">Stripe</a>. Music Sequencing does not collect, retain or ever see your card information.
              </p>
              <p>Email <a href="mailto:lessons@musicsequencing.com">lessons@musicsequencing.com</a> with any questions.
              </p>


            </LessonInfoSubject>
            <LessonCards>
              <Checkout amount={oneHourLesson} title="1hr of Lessons" price={`$${oneHourLesson / 100}`} description="Book as needed. Perfect for filling in knowledge gaps and creating a development plan." />
              <Checkout amount={fourHourLesson} title="4 hrs of Lessons" price={`$${fourHourLesson / 100}`} description="Accelerate your development with multiple lessons and direct feedback on your progress." />
              <Checkout amount={twelveHourLesson} title="12 hrs of Lessons" price={`$${twelveHourLesson / 100}`} description="A highly personalized curriculum of excercises and project evaluations to get you to the next level." />
            </LessonCards>
            <LessonInfoSubject>
              <p></p>
            </LessonInfoSubject>

            <LessonInfoSubject>
              <h2>Satisfaction</h2>
              <p>Any students not satisfied with the quality of their lessons are entitled to a full refund.</p>
            </LessonInfoSubject>
            <LessonInfoSubject>
              <h2 style={{ marginTop: '25px' }}>About the Instructor</h2>

              <LessonsBio>
                {/* <div> */}

                {/* </div> */}
                <div style={{ display: "flex", flexFlow: "column", maxWidth: "100%", padding: "0px, 20px, 20px, 0px" }}>
                  <h3>Alex Nye </h3>
                  <p >After graduating from <a href="https://www.berklee.edu/" target="blank">
                    {' '}
                    Berklee College of Music
                </a>{' '} in 2011, Alex moved to Los Angeles to work in music. {' '} As a producer for{' '}
                    <a href="https://output.com/" target="blank">
                      Output
                </a>,
                Alex helped develop {' '}
                    <a
                      href="https://output.com/products/rev?gclid=EAIaIQobChMI4KvQ5KHg3gIVVYjVCh3q_Qu3EAAYASAAEgJZn_D_BwE"
                      target="blank"
                    >
                      Rev
                </a>{' '}
                    and works with Output contributing kits to {' '}
                    <a href="https://output.com/arcade" target="blank">
                      Arcade
                </a>.
                                                                                                                                                                                                                                                                                                                                                                                                                      He has composed and engineered extensively for films and shows
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
                      Poltergeist.</a>
                  </p>
                  <p>A multi-genre composer, producer and songwriter, Alex is the founder of Music Sequencing.com</p>
                  {/* <p>"I love that in today's world anybody with a computer can start making music. My goal in music education is to help students break through their barriers so they are actually able to create the music they imagine." - Alex</p> */}
                  {/* <p>"My goal in music education is to help students
                    break through their barriers and enable them
                    to create the music they always imagined making." - Alex</p> */}
                  <SocialWrapper margin="0px, 0px, 40px, 0px">
                    <SocialLink href="https://soundcloud.com/alex_nye_alex_nye" target="blank">
                      <FontAwesomeIcon
                        icon={faSoundcloud}
                      />
                    </SocialLink>
                    <SocialLink href="https://www.imdb.com/name/nm5637976/" target="blank">
                      <FontAwesomeIcon
                        icon={faImdb}

                      />
                    </SocialLink>
                  </SocialWrapper>

                </div>
                <img src={DeskPic} />
              </LessonsBio>

            </LessonInfoSubject>
            {/* End of Lesson Content */}
          </LessonInfoWrapper>

          <Footer />
        </LessonContentContainer>
      </div >
    )
  }
}

export default Lessons
