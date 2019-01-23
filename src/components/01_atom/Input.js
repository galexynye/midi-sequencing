import styled from 'styled-components'
import { msTheme } from '../../styles/Theme'

export const Input = styled.div`
  margin: 0px 0px 15px 0px;
 
  /* For Consistency padding is Shared between inputs and Buttons. To Change padding for all inputs and buttons, change on the msTheme object. Otherwise create a new inherited class. via styled components */
  /* ${msTheme.utilities().inputAndButtonShare.padding} */
  padding: ${props => props.padding || msTheme.utilities().inputAndButtonShare.padding};
  border: ${props => props.border || msTheme.utilities().inputAndButtonShare.border};
  border-radius: ${props => props.border || msTheme.utilities().inputAndButtonShare.borderRadius};
  font-family: ${msTheme.font.headerFont};
  font-size: 17px;
  width: ${props => props.width || ''};
  max-width: 100%;
  color: ${props => props.color || msTheme.colors.text};
  background-color: ${props => props.bgColor || 'white'};
  ${msTheme.mediaquery().medium}{
    padding: ${props => props.paddingSmall || msTheme.utilities().inputAndButtonShare.paddingSmall}
  }
input{
        width: 100%;
        color: ${props => props.color || msTheme.colors.text};
        border: none;
        font-size: 19px;
        background-color: ${props => props.bgColor || 'white'};
    }
`