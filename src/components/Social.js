import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

import {
  faFacebook,
  faYoutube,
  faTwitter,
  faReddit,
} from '@fortawesome/free-brands-svg-icons'

const SocialWrapper = styled.div`
  margin: ${props => props.margin || '0px'};
  @media (max-width: 900px) {
    display: ${props => props.displayMobile || 'default'};
  }
`

const Social = props => {
  return (
    <SocialWrapper margin={props.margin} displayMobile={props.displayMobile}>
      <a
        href="https://www.youtube.com/channel/UCRh5xwjVbFb0PI9JKOeZAIg"
        target="blank"
        className="marRMedium"
      >
        <FontAwesomeIcon icon={faYoutube} size={props.size} />
        {/* <FontAwesomeIcon icon={faYoutube} size="1x" /> */}
      </a>
      <a
        href="https://www.reddit.com/user/midisequencing"
        target="blank"
        className="marRMedium"
      >
        <FontAwesomeIcon icon={faReddit} size={props.size} />
      </a>
      <a
        href="https://www.facebook.com/musicsequencing/"
        target="blank"
        className="marRMedium"
      >
        <FontAwesomeIcon icon={faFacebook} size={props.size} />
      </a>
      <a
        href="https://twitter.com/midisequencing"
        target="blank"
        className="marRMedium"
      >
        <FontAwesomeIcon icon={faTwitter} size={props.size} />
      </a>
    </SocialWrapper>
  )
}

export default Social
