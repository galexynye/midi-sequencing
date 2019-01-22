import styled from 'styled-components'

export const WidthWrapper = styled.div`
    width: ${props => props.width || "100%"};
    max-width: 100%;
    /* & > * {
        margin: "10px"
    } */
`