import styled from 'styled-components'
import { msTheme } from '../../styles/Theme'

/*
Used to add padding usually side padding in conjunction with the WidthWrapper.
Outer wrapper in the CONTENT CONTAINER
*/

export const PaddingWrapper = styled.div`
    padding: ${props => props.padding || `${msTheme.padding.globalVertical} ${msTheme.padding.globalSide}`};
    margin: ${props => props.margin || '0px'};
    ${msTheme.mediaquery().medium}{
        padding: ${props => props.paddingSmall || `${msTheme.padding.globalVerticalSmall} ${msTheme.padding.globalSideSmall}`};
        margin: ${props => props.marginSmall || '0px'};
    }
`