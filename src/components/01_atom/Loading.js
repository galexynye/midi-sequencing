import React from 'react'
import ReactLoading from 'react-loading'
import styled from 'styled-components'
import { msTheme } from '../../styles/Theme'


export const LoadingStyle = styled.div`
    background-color: 'white';
    padding: 20px;
    display: flex;
    flex-flow: column;
    align-items: center;
    p{
        font-family: ${msTheme.font.headerFont};
        margin: 0px 0px 10px 0px;
    }
`

export class Loading extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    render() {
        const { text, type, color } = this.props
        return (
            <LoadingStyle>

                <ReactLoading type={type ? type : "bars"} color={color ? color : msTheme.colors.primary} height={50} width={50} />
                {/* <ReactLoading type="bars" color="blue" height={75} width={75} /> */}
                <p>{text}</p>
            </LoadingStyle>
        )
    }
}


