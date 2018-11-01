// import React from 'react'
import styled from 'styled-components'
import { rhythm, scale } from '../utils/typography'

const Wrapper = styled.div`
        margin-left: auto;
        margin-right: auto;
        max-width: ${rhythm(27)};
        padding: ${ rhythm(1.5)} ${rhythm(3 / 4)};
        position: relative;
        /* *{
            font-family: 'Roboto'
        } */

        /* h1, h2, h3, h4, h5 {
            font-family: 'Julius Sans One'
        } */

        h1 {
            color: #700bea;
            margin-bottom: 40px;
        }

        ol {
            li {
                text-align: center;
            }
            
        }

        img {
            margin-bottom: 20px;
        }

        #noUnderLine{
            text-decoration: none;
        }

        .hoverPointer:hover{
            cursor: pointer;
        
        }

        a {
            box-shadow: none;
            color: #700bea;
        }

        .marRSmall{
            margin-right: 10px;
        }

        .marTSmall {
            margin-top: 10px;
        }

        .marRMedium{
            margin-right: 25px;
        }
`

export default Wrapper