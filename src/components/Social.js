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
  margin-bottom: 20px;
`

class Social extends React.Component {
  render() {
    return (
      <SocialWrapper>
        <a
          href="https://www.youtube.com/channel/UCRh5xwjVbFb0PI9JKOeZAIg"
          target="blank"
          className="marRMedium"
        >
          <FontAwesomeIcon icon={faYoutube} size={this.props.size} />
          {/* <FontAwesomeIcon icon={faYoutube} size="1x" /> */}
        </a>
        <a
          href="https://www.reddit.com/user/midisequencing"
          target="blank"
          className="marRMedium"
        >
          <FontAwesomeIcon icon={faReddit} size={this.props.size} />
        </a>
        <a
          href="https://www.facebook.com/musicsequencing/"
          target="blank"
          className="marRMedium"
        >
          <FontAwesomeIcon icon={faFacebook} size={this.props.size} />
        </a>
        <a
          href="https://twitter.com/midisequencing"
          target="blank"
          className="marRMedium"
        >
          <FontAwesomeIcon icon={faTwitter} size={this.props.size} />
        </a>
      </SocialWrapper>
    )
  }
}

export default Social
