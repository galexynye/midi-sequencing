import React from 'react'
import styled from 'styled-components'
import { msTheme } from '../../styles/Theme'
import {
    FacebookShareButton,
    // GooglePlusShareButton,
    // LinkedinShareButton,
    TwitterShareButton,
    // TelegramShareButton,
    // WhatsappShareButton,
    // PinterestShareButton,
    // VKShareButton,
    // OKShareButton,
    RedditShareButton,
    // TumblrShareButton,
    // LivejournalShareButton,
    // MailruShareButton,
    // ViberShareButton,
    // WorkplaceShareButton,
    // LineShareButton,
    EmailShareButton,

    FacebookIcon,
    TwitterIcon,
    // TelegramIcon,
    // WhatsappIcon,
    // GooglePlusIcon,
    // LinkedinIcon,
    // PinterestIcon,
    // VKIcon,
    // OKIcon,
    RedditIcon,
    // TumblrIcon,
    // LivejournalIcon,
    // MailruIcon,
    // ViberIcon,
    // WorkplaceIcon,
    // LineIcon,
    EmailIcon,
} from 'react-share';


const ShareButtonsContainer = styled.div`
    display: ${props => props.displayLarge || 'block'};
    position: ${props => props.position || 'fixed'};
    top:calc(20%);
    left: calc( (100% - ${msTheme.widths.article}) / 2 / 2);
    z-index: 1000000;
    h2{
        /* color: ${msTheme.colors.gray} */
        color: gray;
        margin-bottom: 0px;
        font-size: 20px;
    }
    margin-bottom: 40px;
    ${msTheme.mediaquery().large}{
        left: 10px;
    }
    ${msTheme.mediaquery().medium}{
        display: ${props => props.displaySmall || 'none'};
        position: static;
        top: 0;
        left: 0;
    }
`

const ShareButtonsStyle = styled.div`
    display: flex;
    flex-flow: ${props => props.flexFlow || 'column'};
    justify-content: center;
    * {
        margin-right: 5px;
        margin-bottom: 5px;
        &:hover{
            cursor: pointer;
        }
    }
`

export function ShareButtons({ url, position, displayLarge, displaySmall, flexFlow }) {
    return (
        <ShareButtonsContainer position={position} displayLarge={displayLarge} displaySmall={displaySmall}>
            {/* <h2>Share</h2> */}
            <ShareButtonsStyle flexFlow={flexFlow}>
                <FacebookShareButton className="animated fadeIn" url={url}><FacebookIcon size={32} round={true} /></FacebookShareButton>
                <TwitterShareButton className="animated fadeIn" url={url}><TwitterIcon size={32} round={true} /></TwitterShareButton>
                <RedditShareButton className="animated fadeIn" url={url}> <RedditIcon size={32} round={true} /></RedditShareButton>
                <EmailShareButton className="animated fadeIn" url={url}> <EmailIcon size={32} round={true} /></EmailShareButton>
            </ShareButtonsStyle>
        </ShareButtonsContainer>
    )
}
