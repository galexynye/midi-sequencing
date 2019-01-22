import styled from 'styled-components'
import { msTheme } from '../../styles/Theme'

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-image: linear-gradient(to right,${msTheme.colors.primary}, #6f0bea28, #6f0bea00 );
    z-index: 10000000;
    /* background-color: #ffffffa1;  */
    ${msTheme.mediaquery().mediumMin}{
        display: ${props => props.minOnly ? 'none' : 'block'};
    }
`

// export default Overlay