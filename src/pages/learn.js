
import React from 'react'
// import styled from 'styled-components'
import axios from 'axios'
import { Helmet } from 'react-helmet'
import { Link, graphql } from 'gatsby'
import SiteContainer from '../components/05_page/Layout/SiteContainer'
import Recaptcha from 'react-recaptcha'
import { msTheme } from '../styles/Theme'
import { PageTitle } from '../components/01_atom/PageTitle';
import { GridContainer, WidthWrapper, GridItem } from '../components/00_utilities/Utilities';
import { CategoryCard } from '../components/02_molecule/CategoryCard';
import { learnCategoryCardsData } from '../sitedata/learndata'
import { InputString } from "../components/01_atom/InputString";
import { InputSubmit } from '../components/01_atom/InputSubmit';
import { InputTextarea } from '../components/01_atom/InputTextarea';
import { InputSelect } from '../components/01_atom/InputSelect';
import { Loading } from '../components/01_atom/Loading'
import { Message } from '../components/01_atom/Message'
import { ButtonCTA } from '../components/01_atom/ButtonCTA'

const recaptchaKey = process.env.RECAPTCHA_KEY
const contactApi = process.env.MS_API_CONTACT


class Learn extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            name: '',
            message: '',
            recaptcha: false,
            recaptchaLoaded: false,
            form: true,
            loading: false,
            error: false,
            success: false,
        }
    }

    _handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    _handleSubmit = (event) => {
        event.preventDefault();
        if (!this.state.recaptcha) {
            alert("Please confirm you're not a robot.")
        } else {
            this.setState({
                form: false,
                loading: true
            })
            axios.post(contactApi, {
                email: this.state.email,
                name: this.state.name,
                subject: this.state.subject,
                message: this.state.message,
                origin: 'lessonForm' // Very important that this matches the Backend API emails object
            }).then((response) => {
                this.setState({
                    success: true,
                    loading: false
                })
                // console.log(response);
            })
                .catch((error) => {
                    this.setState({
                        error: true,
                        loading: false
                    })
                    // console.log(error);
                });
        }
    }

    _recaptchaLoaded = () => {
        this.setState({
            recaptchaLoaded: true
        })
    }

    _verifyHuman = () => {
        this.setState({
            recaptcha: true
        })
    }

    _resetState = () => {
        this.setState({
            email: '',
            name: '',
            subject: 'General Questions',
            message: '',
            recaptcha: false,
            recaptchaLoaded: false,
            form: true,
            loading: false,
            error: false,
            success: false,
        })
    }

    render() {
        const { data } = this.props
        const siteTitle = data.site.siteMetadata.title

        const learnCategoryCards = learnCategoryCardsData.map(x => {
            return (
                <CategoryCard
                    title={x.title}
                    description={x.description}
                    to={x.link}
                    hideButton={x.hideButton}
                    color={x.color}
                />
            )
        })

        const Oops = <WidthWrapper width="350px">
            <Message title="Oops..." message="Something went wrong." />
            <ButtonCTA _handleClick={this._resetState} text="Click to reload the lessons form" bgColor={msTheme.colors.secondarylighter} />
        </WidthWrapper>


        const ContactForm = <div>
            <form onSubmit={this._handleSubmit}>
                <InputString _handleChange={this._handleInputChange} value={this.state.name} type="text" label="name" labelText="Name*" required={true}></InputString>
                <InputString _handleChange={this._handleInputChange} value={this.state.email} type="email" label="email" labelText="Email*" required={true}></InputString>
                {/* <InputTextarea _handleChange={this._handleInputChange} value={this.state.message} label="message" labelText="Message*" required={true} /> */}
                <InputSubmit onSubmit={this._handleSubmit} value="Try a Free Lesson" bgColor={msTheme.colors.primary} color="white" />
            </form>
            {/* <p className="headerFont">Please verify you are not a robot before contacting.</p> */}
            <Recaptcha
                sitekey={recaptchaKey}
                render="explicit"
                onloadCallback={this._recaptchaLoaded}
                verifyCallback={this._verifyHuman}
            />
        </div>


        return (
            <SiteContainer>
                <Helmet
                    meta={[{ name: 'description', content: 'Learn music production with free tutorials and articles or hire me as a mentor to help you get your music to the next level.' }]}
                    title={`Learn Music Production - Tutorials, Articls and Mentorship from ${siteTitle}`}
                >
                    <script src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit" async defer></script>
                </Helmet>
                <PageTitle title="Learn Music" description="Tutorials, Articles, & Mentorship"></PageTitle>
                <GridContainer gTC="repeat(3, 1fr)" className="mB60 mT40">
                    {learnCategoryCards}
                </GridContainer>
                {/* <GridContainer id="mentoring">


                </GridContainer> */}
                <GridContainer gTC="1fr" gTCL="1fr" gTCM="1fr" className="headerFont" id="mentorship">
                    <div>
                        <h2 className="colorPrimary">Mentorship</h2>
                        <p className="headerFont">Having trouble getting your music to sound as good as your favorite artists?</p>
                        <p className="headerFont"> It’s difficult to know what you are doing right or wrong in isolation.</p>
                        <p className="headerFont"> The times I’ve learned the most were</p>
                        {/* <p className="headerFont"> 1. Working Professionally<br /> 2. Under the guidance of an experienced professional</p> */}
                        <p className="headerFont"> <span className="bold">1. Working professionally</span></p>
                        <p className="headerFont"> <span className="bold">2. Under the guidance of an experienced professional</span></p>
                        <p className="headerFont mB40">If you want to get your music to the next level, I'm happy to help with 1-on-1 lessons and project reviews over the internet.</p>
                        <h3 className="mB20 colorPrimary">How it Works</h3>
                        {/* <ul className="lSTN"> */}
                        <p className="headerFont"><span className="bold">Step 1</span> - Fill out the form below with your name and email.</p >
                        <p className="headerFont"><span className="bold">Step 2</span> - I'll get back to you with some possible times for a trial lesson.</p >
                        <p className="headerFont"><span className="bold">Step 3</span> - The first trial lesson is free. We'll talk about your goals, influences and setup the remote tech.</p >
                        <p className="headerFont mB40"><span className="bold">Step 4</span> - If we continue with more lessons, I'll develop a custom lesson plan for you, and we'll start scheduling. </p >

                    </div>
                </GridContainer>
                <GridContainer gTC="1fr 1fr" gTCM="1fr" className="mB40 headerFont">
                    <GridItem gCS="1" gCE="4" gCSL="1" gCEL="4"><h3 className="colorPrimary">Get Started - No commitment</h3></GridItem>
                    {this.state.loading && <Loading text="Sending..." />}
                    {this.state.success && <Message title="Success!" colorHeader={msTheme.colors.primary} message="Thanks for reaching out, a confirmation email should arrive shortly!" />}
                    {this.state.error && Oops}
                    {this.state.form && ContactForm}
                </GridContainer>
                <GridContainer gTC="1fr" gTCL="1fr" gTCM="1fr" className="headerFont mB40" >
                    <div>
                        <h3 className="mB20 colorPrimary">FAQs</h3>
                        <p className="headerFont"><span className="bold">How long is a lesson?</span> - Lessons are an hour long. In-between lessons you can shoot me questions that pop up or ask for thoughts on what you're working on.</p>
                        <p className="headerFont"><span className="bold">How often are lessons?</span> - It depends on the student and their goals, it can range from once a week to once a month.</p>
                        <p className="headerFont"><span className="bold">What do lessons cost?</span> - Some producers charge hundreds of dollars a lesson or thousands of dollars for "premium courses", mine are $60 a lesson + mentoring in-between.</p>
                        <p className="headerFont"><span className="bold">Any guarantees?</span> - Yes. If you are not happy with the lessons you can get a full refund.</p>
                        <p className="headerFont"><span className="bold">What if I have to cancel a scheduled lesson?</span> - Let me know as far in advance as possible and we'll reschedule. So far people have been respectful with this policy.</p>
                        <p className="headerFont"><span className="bold">More questions?</span> - Ask me on the <Link to="/contact">contact page</Link>.</p>

                    </div>
                </GridContainer>

            </SiteContainer>
        )
    }
}

export default Learn

export const pageQuery = graphql`
  query {
   site {
    siteMetadata {
      title    
    }
  }
  

}
`