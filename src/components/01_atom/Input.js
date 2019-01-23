import styled from 'styled-components'
import { msTheme } from '../../styles/Theme'

export const Input = styled.div`
  margin: 5px 0px;
  border: ${props => props.border || `1px solid ${msTheme.colors.greylight} `};
  border-radius: 15px;
  padding: 10px 25px;
  font-family: ${msTheme.font.headerFont};
  font-size: 17px;
  width: ${props => props.width || ''};
  max-width: 100%;
  color: ${props => props.color || msTheme.colors.text};
  background-color: ${props => props.bgColor || 'white'};
  ${msTheme.mediaquery().small}{
    padding: 10px 20px;
  }
input{
        width: 100%;
        color: ${props => props.color || msTheme.colors.text};
        border: none;
        font-size: 19px;
        background-color: ${props => props.bgColor || 'white'};
    }
`