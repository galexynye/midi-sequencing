import React from 'react'
import styled from 'styled-components'
import { msTheme } from '../../styles/Theme'

// Change this to a class component that renders children?

export const ArticleContainer = styled.article`
    /*TODO: Change to variable */
    position: relative;
    max-width: ${msTheme.widths.article};
    margin-top: 30px;
    margin-right: auto;
    margin-left: auto;       
`



// export default ArticleContainer