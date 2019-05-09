import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { msTheme } from '../../styles/Theme';

const ProjectLinkStyle = styled.div`
a{
    
    color: ${msTheme.colors.primary};
    font-size: 27px;
    font-family: ${msTheme.font.headerFont};
}
`

export const ProjectLink = ({ to, project, num, description }) => {
    return (
        <ProjectLinkStyle>
            <h3 className="headerFont mB20">Project {num}</h3>
            <Link to={to}>{project}</Link>
            <p className="headerFont pT20 mB20">{description}</p>
        </ProjectLinkStyle>
    )
}

