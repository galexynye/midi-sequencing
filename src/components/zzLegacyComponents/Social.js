import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

import {
  faFacebook,
  faYoutube,
  faTwitter,
  faReddit,
} from '@fortawesome/free-brands-svg-icons'

const SocialLink = styled.a`
  margin-right: 25px;
`

const SocialWrapper = styled.div`
  margin: ${props => props.margin || '0px'};
  max-height: 20px;
  @media (max-width: 900px) {
    display: ${props => props.displayMobile || 'default'};
  }
`

const Social = props => {
  return (
    <SocialWrapper margin={props.margin} displayMobile={props.displayMobile}>
      <SocialLink
        href="https://www.youtube.com/channel/UCRh5xwjVbFb0PI9JKOeZAIg"
        target="blank"
      >
        <FontAwesomeIcon
          icon={faYoutube}
          size={props.size}
        // style={{ maxHeight: '20px' }}
        />
        {/* <FontAwesomeIcon icon={faYoutube} size="1x" /> */}
      </SocialLink>
      <SocialLink
        href="https://www.reddit.com/user/midisequencing"
        target="blank"
      >
        <FontAwesomeIcon
          icon={faReddit}
          size={props.size}
        // style={{ maxHeight: '20px' }}
        />
      </SocialLink>
      <SocialLink
        href="https://www.facebook.com/musicsequencing/"
        target="blank"
      >
        <FontAwesomeIcon
          icon={faFacebook}
          size={props.size}
        // style={{ maxHeight: '20px' }}
        />
      </SocialLink>
      {/* <SocialLink href="https://twitter.com/midisequencing" target="blank">
        <FontAwesomeIcon
          icon={faTwitter}
          size={props.size}
          style={{ maxHeight: '20px' }}
        />
      </SocialLink> */}
    </SocialWrapper>
  )
}

export default Social
