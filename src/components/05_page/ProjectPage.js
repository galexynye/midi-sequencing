import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import { PageTitle } from '../01_atom/PageTitle'
import { the10 } from '../../sitedata/projectsdata'
import { ArticleContainer } from './ArticleContainer';




export class ProjectPage extends React.Component {
    render() {
        const { projectName, children } = this.props
        const filtered10 = the10.filter(p => p.name == projectName)
        const project = filtered10[0]
        const theRules = project.theRules.map((x, i) => <p key={i} className="mB20 headerFont">{x}</p>)
        const theProject = project.theProject.map((x, i) => <p key={i} className="mB20 headerFont">{x}</p>)
        const theGoal = project.theGoal.map((x, i) => <p key={i} className="mB20 headerFont">{x}</p>)
        return (
            <React.Fragment>
                <Helmet
                    meta={[{ name: 'description', content: `${project.metaDescription}` }]}
                    title={`${project.name} | Project`}
                >
                    <script type="text/javascript">{`
              DiscourseEmbed = {discourseUrl: 'https://forum.musicsequencing.com/',
                                 discourseEmbedUrl: 'https://www.musicsequencing.com${project.link}' };
            
              (function() {
                var d = document.createElement('script'); d.type = 'text/javascript'; d.async = true;
                          d.src = DiscourseEmbed.discourseUrl + 'javascripts/embed.js';
                          (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(d);
                        })();`
                    }
                    </script>
                </Helmet>
                <PageTitle title={`${project.name}`} description={project.description} />
                <ArticleContainer margin="0px auto 20px auto">
                    <h2>The Goal 🥅</h2>
                    {theGoal}
                    <h2>The Project {project.icon}</h2>
                    {theProject}
                    <h2>The Rules 🚧</h2>
                    {theRules}
                    <h2>The Other Projects 🎹</h2>
                    <p className="headerFont"><Link to="/projects#theprojects">Click here</Link> to check out the other projects.</p>

                    {children}

                    <h2>Helpful Links 🔗</h2>
                    <p className="headerFont"><Link to="/library" target="_blank">Resource Library</Link> - Check it out. More links coming.</p>

                    <h2>Give and Get Feedback Here</h2>
                    <div id='discourse-comments'></div>
                </ArticleContainer>
            </React.Fragment>
        )
    }
}

