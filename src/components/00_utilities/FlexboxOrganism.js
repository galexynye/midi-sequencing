import styled from 'styled-components'
import { msTheme } from '../../styles/Theme'

export const FlexboxOrganism = styled.div`
    display: flex;
    flex-flow: ${props => props.flexFlow || 'row wrap'};
    justify-content: ${props => props.justifyContent || 'center'};
    align-items: ${props => props.alignItems || 'center'};
    padding: ${props => props.padding || '0px'};
    margin: ${props => props.margin || '0px'};
    height: ${props => props.height || '100%'};
    ${msTheme.mediaquery().medium}{
        height: ${props => props.heightSmall || '100%'}
    }
    
`