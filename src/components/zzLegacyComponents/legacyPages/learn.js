
// import React from 'react'
// // import styled from 'styled-components'
// import axios from 'axios'
// import { Helmet } from 'react-helmet'
// import { Link, graphql } from 'gatsby'
// import SiteContainer from '../components/05_page/Layout/SiteContainer'
// import Recaptcha from 'react-recaptcha'
// import { msTheme } from '../styles/Theme'
// import { PageTitle } from '../components/01_atom/PageTitle';
// import { GridContainer, WidthWrapper, GridItem } from '../components/00_utilities/Utilities';
// import { InputString } from "../components/01_atom/InputString";
// import { InputSubmit } from '../components/01_atom/InputSubmit';
// import { Loading } from '../components/01_atom/Loading'
// import { Message } from '../components/01_atom/Message'
// import { ButtonCTA } from '../components/01_atom/ButtonCTA'
// import { LearnCards } from '../components/03_organism/LearnCards';

// const recaptchaKey = process.env.RECAPTCHA_KEY
// const contactApi = process.env.MS_API_CONTACT


// class Learn extends React.Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             email: '',
//             name: '',
//             message: '',
//             recaptcha: false,
//             recaptchaLoaded: false,
//             form: true,
//             loading: false,
//             error: false,
//             success: false,
//         }
//     }

//     _handleInputChange = (event) => {
//         const target = event.target;
//         const value = target.type === 'checkbox' ? target.checked : target.value;
//         const name = target.name;
//         this.setState({
//             [name]: value
//         });
//     }

//     _handleSubmit = (event) => {
//         event.preventDefault();
//         if (!this.state.recaptcha) {
//             alert("Please confirm you're not a robot.")
//         } else {
//             this.setState({
//                 form: false,
//                 loading: true
//             })
//             axios.post(contactApi, {
//                 email: this.state.email,
//                 name: this.state.name,
//                 subject: this.state.subject,
//                 message: this.state.message,
//                 origin: 'lessonForm' // Very important that this matches the Backend API emails object
//             }).then((response) => {
//                 this.setState({
//                     success: true,
//                     loading: false
//                 })
//                 // console.log(response);
//             })
//                 .catch((error) => {
//                     this.setState({
//                         error: true,
//                         loading: false
//                     })
//                     // console.log(error);
//                 });
//         }
//     }

//     _recaptchaLoaded = () => {
//         this.setState({
//             recaptchaLoaded: true
//         })
//     }

//     _verifyHuman = () => {
//         this.setState({
//             recaptcha: true
//         })
//     }

//     _resetState = () => {
//         this.setState({
//             email: '',
//             name: '',
//             subject: 'General Questions',
//             message: '',
//             recaptcha: false,
//             recaptchaLoaded: false,
//             form: true,
//             loading: false,
//             error: false,
//             success: false,
//         })
//     }

//     render() {
//         const { data } = this.props
//         const siteTitle = data.site.siteMetadata.title

//         const Oops = <WidthWrapper width="350px">
//             <Message title="Oops..." message="Something went wrong." />
//             <ButtonCTA _handleClick={this._resetState} text="Click to reload the lessons form" bgColor={msTheme.colors.secondarylighter} />
//         </WidthWrapper>


//         const ContactForm = <div>
//             <form onSubmit={this._handleSubmit}>
//                 <InputString _handleChange={this._handleInputChange} value={this.state.name} type="text" label="name" labelText="Name*" required={true}></InputString>
//                 <InputString _handleChange={this._handleInputChange} value={this.state.email} type="email" label="email" labelText="Email*" required={true}></InputString>
//                 {/* <InputTextarea _handleChange={this._handleInputChange} value={this.state.message} label="message" labelText="Message*" required={true} /> */}
//                 <InputSubmit onSubmit={this._handleSubmit} value="Try a Free Lesson" bgColor={msTheme.colors.primary} color="white" />
//             </form>
//             {/* <p className="headerFont">Please verify you are not a robot before contacting.</p> */}
//             <Recaptcha
//                 sitekey={recaptchaKey}
//                 render="explicit"
//                 onloadCallback={this._recaptchaLoaded}
//                 verifyCallback={this._verifyHuman}
//             />
//         </div>


//         return (
//             <SiteContainer>
//                 <Helmet
//                     meta={[{ name: 'description', content: 'Learn music production with free tutorials and articles. Get lessons online to learn from a professional producer.' }]}
//                     title={`Learn Music Production - Tutorials, Articles and Lessons Online`}
//                 >
//                     <script src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit" async defer></script>
//                 </Helmet>

//                 <PageTitle title="Learn Music" description="Tutorials, Articles, & Lessons"></PageTitle>


//                 <LearnCards />


//                 <GridContainer gTC="1fr" gTCL="1fr" gTCM="1fr" className="headerFont" id="lessons">
//                     <div>
//                         <h2 className="colorPrimary">Music & Producing Lessons Online</h2>
//                         <p className="headerFont">Is something not quite right with your music but you can’t tell what it is? </p>
//                         <p className="headerFont">Are you starting ideas but getting lost trying to finish them up to the same quality as other artists?</p>
//                         <p className="headerFont">As helpful as internet tutorials can be, they can’t give you feedback on your music. The internet doesn’t know what your specific problems are or how to fix them. I do… well I don’t yet … but given the opportunity, I can diagnose issues in your music and give you specific advice, quality learning resources, and a path for improvement. </p>
//                         {/* Picture of me */}
//                         <h3>Why I started teaching</h3>
//                         <p className="headerFont">I started playing music almost 25 years ago. I’ve played in rock bands, funk bands, orchestras and eventually wound up studying at Berklee College of Music, where I fell in love with music production.</p>
//                         <p className="headerFont">After Berklee I moved to Los Angeles and started working for film composer, Marc Streitenfeld. During my time there, doing everything imaginable in a recording studio and in film music, I kept saying to myself, “They didn’t teach me this at Berklee.” As the years went on, interns and employees came and went and I started to realize how much I loved answering their questions; explaining how a Pro Tools HD rig is set up, how to sequence realistically, the business aspects of music, the good, the bad and the ugly. It slowly dawned on me…maybe I like teaching?</p>
//                         <p className="headerFont">Then one day, I quit that job. For love. Seriously. When I was at Berklee I spent one semester abroad in Freiburg, Germany and met someone. Despite the distance, I mean reallllllly long distance, literally an ocean between us, we never broke up. After years of this, it was time to make a leap. </p>
//                         <p className="headerFont">I got to Germany and asked myself, "what should I do now?" After some music projects my heart wasn’t into to as well as learning to code (something I'd been wanting to do a long time), I finally realized, “I can teach online”. Now I have an opportunity to tell people all the stuff “they didn’t teach me a Berklee” that I’ve always wanted to share.</p>
//                         <p className="headerFont">Here I am. Building up this website, offering 1-on-1 lessons in music, producing, and mixing online. After years away, I’ve finally returned to my main passion in music, releasing my own songs. I just change my artist name to Saywell. In addition to online teaching I have a studio in Germany where I produce, mix and master other independent artists.</p>
//                         <h3>How Lessons Work</h3>
//                         <p className="headerFont">If you’re interested, here’s how lessons work. It’s like Skype except we can stream quality audio direct from our computers, share screens and remotely share our computers.  I’m able to show you how something works directly on your projects as if I was in the room. This tech doesn’t cost anything but it takes a minute to set up. This is one of the reasons I offer the first lesson for free. </p>
//                         <p className="headerFont">Try before you buy. In the first free lesson, we’ll set up the software, talk about your goals, influences and experience with music. After that, we’ll dive into designing your personal curriculum. </p>
//                         <h3>The Price</h3>
//                         <p className="headerFont">Right now I’m offering lessons for $40 a lesson. If you haven’t looked around yet, that’s low. Really low. People far less qualified charge far more. My price is low because 1. I’m offering lessons directly and don’t have to split it with some school and 2. It won’t last. This is an introductory price. This is a fair warning because eventually I know I’ll have to raise the rate. There’s only so many hours in the day and it’s not about money as much as the fact that I want to teach serious students. If you start now and show you are committed to learning, I will lock you into a rate of $40 a lesson as long as you want to study with me.</p>
//                         <h3>Getting Started</h3>
//                         <p className="headerFont">To get started, send me your name and email below (it goes straight to me and is always kept private), you'll get an auto response shortly after and I’ll get back to you about scheduling a first free lesson.</p>





//                         {/* <p className="headerFont">Having trouble getting your music to sound as good as your favorite artists?</p>                        
//                         <p className="headerFont"> It’s difficult to know what you are doing right or wrong in isolation.</p>
//                         <p className="headerFont"> The times I’ve learned the most were</p>                        
//                         <p className="headerFont"> <span className="bold">1. Working professionally</span></p>
//                         <p className="headerFont"> <span className="bold">2. Under the guidance of an experienced professional</span></p>
//                         <p className="headerFont mB40">If you want to get your music to the next level, I'm happy to help with 1-on-1 lessons and project reviews over the internet.</p>
//                         <h3 className="mB20 colorPrimary">How it Works</h3>                        
//                         <p className="headerFont"><span className="bold">Step 1</span> - Fill out the form below with your name and email.</p >
//                         <p className="headerFont"><span className="bold">Step 2</span> - I'll get back to you with some possible times for a trial lesson.</p >
//                         <p className="headerFont"><span className="bold">Step 3</span> - The first trial lesson is free. We'll talk about your goals, influences and setup the remote tech.</p >
//                         <p className="headerFont mB40"><span className="bold">Step 4</span> - If we continue with more lessons, I'll develop a custom lesson plan for you, and we'll start scheduling. </p > */}

//                     </div>
//                 </GridContainer>
//                 <GridContainer gTC="1fr 1fr" gTCM="1fr" className="mB40 headerFont">
//                     {/* <GridItem gCS="1" gCE="4" gCSL="1" gCEL="4"><h3 className="colorPrimary">Get Started</h3></GridItem> */}
//                     {this.state.loading && <Loading text="Sending..." />}
//                     {this.state.success && <Message title="Success!" colorHeader={msTheme.colors.primary} message="Thanks for reaching out, a confirmation email should arrive shortly!" />}
//                     {this.state.error && Oops}
//                     {this.state.form && ContactForm}
//                 </GridContainer>
//                 <GridContainer gTC="1fr" gTCL="1fr" gTCM="1fr" className="headerFont mB40" >
//                     <div>
//                         <h3 className="mB20 colorPrimary">FAQs</h3>
//                         <p className="headerFont"><span className="bold">How long is a lesson?</span> - Lessons are an hour long. In-between lessons you can shoot me questions that pop up or ask for thoughts on what you're working on. Consider posting on the <a href="https://forum.musicsequencing.com/">forums</a> if you think others could benefit from your question.</p>
//                         <p className="headerFont"><span className="bold">How often are lessons?</span> - It depends on the student and their goals, it can range from once a week to once a month.</p>
//                         <p className="headerFont"><span className="bold">What do I need for lessons?</span> - A computer with a solid internet connection and a microphone. Your computer's built in mic is fine if it has one.</p>
//                         <p className="headerFont"><span className="bold">What topics can you cover?</span> - There's nothing off limits. We can talk about mixing, producing, songwriting, vocal production, lyrics, music business, studio gear, film scoring or whatever else will help you get better at making music.</p>
//                         <p className="headerFont"><span className="bold">Does my DAW or software matter?</span> - In short no. The concepts of music production are universal. I have used 7 DAWs over the years. Some by choice, others not (Berklee!). These days I use Logic Pro X, Ableton and Pro Tools and can probably answer most questions about those DAWs that pop up.</p>
//                         <p className="headerFont"><span className="bold">What do lessons cost?</span> - Currently lessons are priced at $40 a lesson. It won't last though, see above.</p>
//                         <p className="headerFont"><span className="bold">Any guarantees?</span> - Yes. If you are not happy with the lessons I'll give you all your money back, no questions asked.</p>
//                         <p className="headerFont"><span className="bold">What if I have to cancel a scheduled lesson?</span> - Let me know as far in advance as possible and we'll reschedule. So far people have been respectful with this policy.</p>
//                         <p className="headerFont"><span className="bold">More questions?</span> - Ask me on the <Link to="/contact">contact page</Link>.</p>
//                     </div>
//                 </GridContainer>

//             </SiteContainer>
//         )
//     }
// }

// export default Learn

// export const pageQuery = graphql`
//   query {
//    site {
//     siteMetadata {
//       title    
//     }
//   }


// }
// `