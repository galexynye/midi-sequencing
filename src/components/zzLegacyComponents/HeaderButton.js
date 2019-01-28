import styled from 'styled-components'

// An Actual Useful Component potentially 

const H2Button = styled.button`
  margin: 5px 0px;
  padding: 0px;
  color: ${props => props.inputColor || '#2c3e50'};
  font-size: 25px;
  font-weight: 800;
  text-align: left;
`

export default H2Button
