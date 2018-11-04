import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee, faAddressCard } from '@fortawesome/free-solid-svg-icons'
import {
  faFacebook,
  faYoutube,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'

class Social extends React.Component {
  render() {
    return (
      <div>
        <a
          href="https://www.youtube.com/channel/UCRh5xwjVbFb0PI9JKOeZAIg"
          target="blank"
          className="marRMedium"
        >
          {/* <FontAwesomeIcon icon={faYoutube} size={this.props.size} /> */}
          <FontAwesomeIcon icon={faYoutube} size="1x" />
        </a>
        <a
          href="https://www.facebook.com/musicsequencing/"
          target="blank"
          className="marRMedium"
        >
          <FontAwesomeIcon icon={faFacebook} size="1x" />
        </a>
        <a
          href="https://twitter.com/midisequencing"
          target="blank"
          className="marRMedium"
        >
          <FontAwesomeIcon icon={faTwitter} size="1x" />
        </a>
      </div>
    )
  }
}

export default Social
