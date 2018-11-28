import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Menu from '../components/Menu/Menu'
import BGVideo from '../assets/MidiSequencing Title_1_Sound.mp4'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'
import LessonsPosterOrange from '../assets/Lessons/LessonsPosterOrange.jpg'
import ResponsiveIframe from '../styled/ResponsiveIframe'
import Checkout from '../components/Purchase/Checkout'
// import Alex from '../assets/AlexPics/singingcut.jpg'
import DeskPic from '../assets/Lessons/DeskPhoto.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSoundcloud,
  faImdb,
} from '@fortawesome/free-brands-svg-icons'

// Lesson Prices
const oneHourLesson = 4000
const fourHourLesson = 15000
const twelveHourLesson = 40000

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
  max-width: 900px;
  margin: auto;
  padding: 0px 15px;
  p {
    max-width: 900px;
  }
`

const LessonInfoSubject = styled.div`
   margin: ${props => props.margin || '40px 0px 0px 0px'};
   /* margin-top: 40px; */
`

const LessonsBio = styled.div`
  display: flex;
  justify-content: center;
  img{
    max-height: 400px;
    max-width: 400px;

  }
  @media (max-width: 700px){
  flex-flow: wrap;
  img{
    /* max-height: 200px; */
    display: block;
    max-height: 300px;
    max-width: 300px;
    /* max-width: 100%; */
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
          <h1>Learn Music Production</h1>
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
              <p>Template Design, Sample Organization and Other Workflow Enhancements</p>
              <p>Mixing and Mastering</p>
              <p>Music Theory: Chords, Scales, Melody and Voice Movement</p>
              <p>Sound Design and Synthesis</p>
              <p>Arranging, Song Structure and Lyric Writing</p>
              <p>Playing Piano or Drum Pads as a Producer</p>
              <p>+ Custom Topics Specific For You</p>
            </LessonInfoSubject>


            <LessonInfoSubject>
              <h2>How Lessons Work</h2>
              <p>
                Lessons are done online and are available worldwide :)
              </p>
              <p>
                <b>
                  {' '}
                  To ensure a great learning experience there is a free meet and greet
                  offered for first time students to talk about your goals, musical
                  influences and answer any additional questions. Fill out the form below to book yours today!
                </b>
              </p>
              <h3>Got Questions?</h3>
              <p>Email <a href="mailto:lessons@musicsequencing.com">lessons@musicsequencing.com</a> and we'll get back to you ASAP.</p>
            </LessonInfoSubject>



            <LessonInfoSubject>
              <h2>Sign Up for a Free Meet and Greet</h2>
              {/* <p>Get started by filling out the form below or emailing <a href="mailto:lessons@musicsequencing.com">lessons@musicsequencing.com</a></p> */}
              <ContactForm
                margin="0px 0px 0px 0px"
                textAlign="center"
                lesson={true}
              />
            </LessonInfoSubject>



            <LessonInfoSubject>
              <h2>Purchase Lessons</h2>
              <p>We recommend to email <a href="mailto:lessons@musicsequencing.com">lessons@musicsequencing.com</a> to schedule lessons before purchase. Lessons can be purchased via credit card or PayPal. Payment via PayPal can only be made after scheduling lessons. Secure handling of card payments is encrypted by <a href="https://stripe.com/" target="blank">Stripe</a>. Music Sequencing does not collect, retain or ever see your card information.
                If you have not yet scheduled your lessons, follow the instructions after purchase. Email <a href="mailto:lessons@musicsequencing.com">lessons@musicsequencing.com</a> with any questions.
              </p>


            </LessonInfoSubject>
            <LessonCards>
              <Checkout amount={oneHourLesson} title="1hr of Lessons" price="$40" description="Book as needed. Perfect for filling in knowledge gaps and creating a development plan." />
              <Checkout amount={fourHourLesson} title="4 hrs of Lessons" price="$150" description="Accelerate your development with multiple lessons and direct feedback on your progress." />
              <Checkout amount={twelveHourLesson} title="12 hrs of Lessons" price="$400" description="A highly personalized curriculum of excercises and project evaluations to get you to the next level." />
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

              <ResponsiveIframe>
                <iframe
                  // src="https://www.youtube-nocookie.com/embed/X1S9RqgFHy0?start=34"  //Phil Collins
                  // src="https://www.youtube-nocookie.com/embed/LgTSsboXe1I"  //Midi Controller
                  // src="https://www.youtube-nocookie.com/embed/EErrKkgy8Ck"  //Reverb
                  // src="https://www.youtube-nocookie.com/embed/gN_om4q67V8" // Giant Trailer Drums
                  src="https://www.youtube-nocookie.com/embed/H0Wj1DL-lyg" // 

                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />{' '}
              </ResponsiveIframe>

              {/* <p>
              // Los ageless
                <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/436034745&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
              </p> */}

              <h3>Alex Nye </h3>
              <LessonsBio>
                <img src={DeskPic} />
                <div style={{ boxSizing: "border-box", display: "flex", flexFlow: "column", justifyContent: "center", textAlign: "center", maxWidth: "100%", padding: "10px" }}>
                  <h4>Bio</h4>
                  <p >After graduating from <a href="https://www.berklee.edu/" target="blank">
                    {' '}
                    Berklee College of Music
                </a>{' '} in 2011, Alex moved to Los Angeles. {' '} Working as a producer for{' '}
                    <a href="https://output.com/" target="blank">
                      Output
                </a>,
                Alex helped in the development of{' '}
                    <a
                      href="https://output.com/products/rev?gclid=EAIaIQobChMI4KvQ5KHg3gIVVYjVCh3q_Qu3EAAYASAAEgJZn_D_BwE"
                      target="blank"
                    >
                      Rev
                </a>{' '}
                    and is contributing kits to Output's{' '}
                    <a href="https://output.com/arcade" target="blank">
                      Arcade
                </a>{' '}
                    plugin.
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
                  <SocialWrapper>
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
