// WAS ADDED to 00_Utility folder
import styled from 'styled-components'


const ResponsiveIframe = styled.div`
  position: relative;
  overflow: hidden;
  padding-top: 56.25%;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }
`

export default ResponsiveIframe
