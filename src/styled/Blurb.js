import styled from 'styled-components'

const Blurb = styled.div`
  text-align: ${props => props.HAlign || 'center'};
  p {
    text-align: ${props => props.PAlign || 'left'};
  }
`

export default Blurb
