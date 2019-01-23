import styled from 'styled-components'

export const WidthWrapper = styled.div`
    width: ${props => props.width || "100%"};
    max-width: 100%;
    margin: ${props => props.margin || 'auto'};
    /* & > * {
        margin: "10px"
    } */
`