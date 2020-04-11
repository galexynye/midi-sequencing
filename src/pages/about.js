import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import SiteContainer from '../components/05_page/Layout/SiteContainer'
import { ArticleContainer } from "../components/05_page/ArticleContainer";
import { PageTitle } from '../components/01_atom/PageTitle'


class About extends React.Component {
    render() {
        const { data } = this.props
        const siteTitle = data.site.siteMetadata.title
        return (
            <SiteContainer>
                <Helmet
                    meta={[{ name: 'description', content: 'About the Music Sequencing.' }]}
                    title={`About | Music Sequencing`}
                />
                <PageTitle text="About Music Sequencing" description="A Producer's Life Examined" ></PageTitle>
                <ArticleContainer margin="0px auto">
                    {/* <h1 className="colorPrimary h1Big">About</h1> */}
                    {/* <div className="mB60">
                        <h2>Do 👊</h2>
                        <p className="headerFont mB40">Rather than focusing only on information about making music, the focus of Music Sequencing is getting you to make more music. </p>
                        <h3 className="headerFont">Avoid Information Overload ☠️</h3>
                        <p className="headerFont mB40">If you wanted to be a better basketball player you could read books on basketball, watch videos or listen to lectures on the theories of shooting. At the end of the day, the only way you’ll get better is by getting on the court and actually playing. It’s the same with music. </p>
                        <h3 className="headerFont">The 10 Project Challenge 🎹</h3>
                        <p className="headerFont mB40">“Make more music” is great advice, but a bit vague. <Link to="/projects">These 10 projects</Link> will help strengthen specific skills needed by any producer. They’ll focus your efforts and challenge you to think differently. When you finish, there is a <a href="https://forum.musicsequencing.com/c/project-feedback/the-10" target="_blank">forum thread</a> at the bottom of each project where you can give feedback to a community member and then post your own music requesting feedback (you can be anonymous if you want).</p>
                    </div> */}
                    {/* <div className="mB60">
                        <h2>Do You Really Want to Improve 🧘‍♂️</h2>
                        <p className="headerFont mB40">You can tell when a basketball shot is improving; the ball goes in the basket more. How can you tell if your music is improving?</p>
                        <h3 className="headerFont">Get other ears on your music 👂</h3>
                        <p className="headerFont mB40">A different perspective can shine a light on a blind spot, giving a better overall picture of where your music sounds great and where it can improve.</p>
                    </div> */}
                    {/* <div className="mB60">
                        <h2>Repeat 💿</h2>
                        <p className="headerFont mB40"><strong>Failure</strong> is NOT creating something that everyone dislikes. Failure is creating nothing at all. </p>
                        <p className="headerFont mB40"><strong>Success </strong> isn’t creating something everyone loves. Success is getting up the day after you’ve creating something everyone loves and creating again. </p>
                        <p className="headerFont mB40">True improvement comes when you keep creating. Here’s one of my favorite passages on the subject.</p>
                        <div class="quote">
                            <p className="headerFont mB40">"The ceramics teacher announced on opening day that he was dividing the class into two groups. All those on the left side of the studio, he said, would be graded solely on the quantity of work they produced, all those on the right solely on its quality. His procedure was simple: on the final day of class he would bring in his bathroom scales and weigh the work of the “quantity” group: fifty pound of pots rated an “A”, forty pounds a “B”, and so on. Those being graded on “quality”, however, needed to produce only one pot - albeit a perfect one - to get an “A”.</p>
                            <p className="headerFont mB40">Well, came grading time and a curious fact emerged: the works of highest quality were all produced by the group being graded for quantity. It seems that while the “quantity” group was busily churning out piles of work - and learning from their mistakes - the “quality” group had sat theorizing about perfection, and in the end had little more to show for their efforts than grandiose theories and a pile of dead clay."</p>

                            <p className="headerFont mB40">- Art and Fear</p>
                        </div>
                    </div>  */}
                    <div className="mB60">
                        <h2>Resource Library 🎼</h2>
                        {/* <p className="headerFont mB40">There’s a lot that goes into making music. I do think tutorials and articles can help you improve.  The key to internalizing the information is to use it yourself.</p> */}
                        {/* <p className="headerFont mB40">Always have a project you’re working on and look for info that will make your project better. Applying the info you get from a tutorial or article will cement it in.</p> */}
                        <p className="headerFont mB40">To help out music makers I’m putting out <Link to="/blog">new tutorials</Link> when I can and have created a <Link to="/library">library of helpful resources</Link> .</p>
                    </div>

                    {/* <div className="mB60">
                        <h2>Just Talking 🙂</h2>
                        <p className="headerFont mB40">It’s good to talk to other producers. My hope is the <a href="https://forum.musicsequencing.com" target="_blank">community on the forums</a> will enable opportunities for collaboration and friendship along with meaningful feedback and encouragement.</p>
                    </div> */}
                    <div className="mB60">
                        <h2 id="me">About Me</h2>
                        <p className="headerFont mB40">My name is Alex Nye. I’m an independent artist, producer, songwriter, engineer, and music teacher with a <a href="https://www.grimmforestmusic.com" target="_blank">studio in Freiburg, Germany.</a> </p>
                        <p className="headerFont mB40">I grew up in Hudson, Ohio, Graduated from Berklee College of Music,  worked doing tv and film music in Los Angeles before relocating to Germany. </p>
                        <p className="headerFont mB40">I started Music Sequencing in 2017 as a blog about music production.</p>
                    </div>


                    <h2>Need to Know something else?</h2>
                    <p className="headerFont">Let me know, <Link to='/contact'>contact me here.</Link></p>
                </ArticleContainer>
            </SiteContainer>
        )
    }
}

export default About

export const pageQuery = graphql`
  query {
                    site {
                siteMetadata {
                    title
                }
                }
                
              
              }
`