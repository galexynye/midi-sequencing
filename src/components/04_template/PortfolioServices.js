import React, { Component } from 'react'
import styled from 'styled-components'
import { findDOMNode } from 'react-dom'
import ReactPlayer from 'react-player'
import { ResponsiveIframe, WidthWrapper, GridContainer, FlexboxOrganism, ResponsivePhoto } from '../00_utilities/Utilities';
import { servicesPortfolio } from "../../sitedata/musicData";
import { ArticleContainer } from '../05_page/ArticleContainer';
import { ButtonCTA } from '../01_atom/ButtonCTA';
import { ButtonNoStyle } from '../01_atom/BottonNoStyle';
import { msTheme } from '../../styles/Theme';
import { PortfolioCard } from '../02_molecule/PortfolioCard';



/*
This renders the Portfolio Section and has the playback state and player methods.

Player Dependency
react player https://cookpete.com/react-player/
 https://github.com/CookPete/react-player/blob/master/src/demo/App.js
 https://github.com/CookPete/react-player/tree/master/src/demo

*/



// Fixes the audio / video playback to bottom of screen except on mobile
const Fixer = styled.div`
    position: fixed ; 
    bottom: 0;
    right: 0;
    width: ${props => props.width || '99vw'};
    z-index: 100000;
    ${msTheme.mediaquery().medium}{
        position: static;
        width: 100%;
    }
`

export class PortfolioServices extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showReactPlayer: false,
            url: null,
            pip: false,
            playing: false,
            controls: true,
            light: false,
            volume: 0.8,
            muted: false,
            played: 0,
            loaded: 0,
            duration: 0,
            playbackRate: 1.0,
            loop: false
        }
    }
    // Pass this to Load a work
    load = (url, iframe) => {
        this.setState({
            showReactPlayer: true,
            iframe, // hide my Custom Controls if iframe, 
            controls: true,
            url,
            playing: true,
            played: 0,
            loaded: 0,
            pip: false
        })
    }
    playPause = () => {
        this.setState({ playing: !this.state.playing })
    }
    stop = () => {
        this.setState({ url: null, playing: false, showReactPlayer: false })
    }
    setVolume = e => {
        this.setState({ volume: parseFloat(e.target.value) })
    }
    onPlay = () => {
        // console.log('onPlay')
        this.setState({ playing: true })
    }
    onPause = () => {
        // console.log('onPause')
        this.setState({ playing: false })
    }
    onSeekMouseDown = e => {
        // e.preventDefault()
        this.setState({ seeking: true })
    }
    onSeekChange = e => {
        // console.log(e.target.value)
        this.setState({ played: parseFloat(e.target.value) })
    }

    onSeekMouseUp = e => {
        // e.preventDefault()
        this.setState({ seeking: false })
        this.player.seekTo(parseFloat(e.target.value))
    }
    onProgress = state => {
        // console.log('onProgress', state)
        // We only want to update time slider if we are not currently seeking
        if (!this.state.seeking) {
            this.setState(state)
        }
    }
    onEnded = () => {
        console.log('onEnded')
        this.setState({ playing: this.state.loop })
    }
    onDuration = (duration) => {
        // console.log('onDuration', duration)
        this.setState({ duration })
    }
    onClickFullscreen = () => {
        screenfull.request(findDOMNode(this.player))
    }

    ref = player => {
        this.player = player
    }

    render() {
        const { url, playing, controls, light, volume, muted, loop, played, loaded, duration, playbackRate, pip, iframe } = this.state

        // Portfolio cards
        const portfolio = servicesPortfolio.map(x =>
            <PortfolioCard>
                <FlexboxOrganism justifyContent="space-between" alignItems="flex-start" height="100%" >
                    <ButtonNoStyle onClick={() => this.load(x.src, x.iframe)}>
                        <ResponsivePhoto src={x.img} />
                    </ButtonNoStyle>
                    <WidthWrapper margin="0px">
                        <h3 className="mT20 altHeader">{x.title}</h3>
                    </WidthWrapper>
                    <p className="altP">{x.credits}</p>
                    {/* Different buttons depending on whether the work is playing state */}
                    {(url != x.src) && <ButtonCTA
                        text={x.watchOrListen}
                        key={x.src}
                        bgColor={msTheme.colors.primary}
                        color="white"
                        _handleClick={() => this.load(x.src, x.iframe)}
                    />}
                    {(url == x.src && playing) && <ButtonCTA
                        text={loaded ? 'Pause' : 'Loading...'}
                        key={x.src}
                        bgColor={msTheme.colors.primarylight}
                        color="white"
                        _handleClick={this.playPause}
                    />}
                    {(url == x.src && !playing) && <ButtonCTA
                        text='Play'
                        key={x.src}
                        bgColor={msTheme.colors.primarylight}
                        color="white"
                        _handleClick={this.playPause}
                    />}
                </FlexboxOrganism>
            </PortfolioCard>)

        return (
            <div className="mB40">
                <WidthWrapper width="100%">
                    <GridContainer>
                        <h2 className="mB40 colorPrimary">Music</h2>
                    </GridContainer>
                </WidthWrapper>

                <GridContainer gTC="1fr 1fr 1fr 1fr" gTCS="1fr 1fr" gTCM="1fr 1fr " gTCL="1fr 1fr 1fr 1fr" gridGap="40px 30px" gridGapL="10px 20px">
                    {portfolio}
                </GridContainer>

                {this.state.showReactPlayer &&
                    // Article Container restricts the width on mobile playback
                    <ArticleContainer margin="0px auto" padding="0px">
                        <Fixer width={iframe ? '50vw' : '99.5vw'}>
                            <WidthWrapper width="50px" margin="0px 0px 0px auto" className="hideMedium">
                                {/* Closes out the player, not shown on mobile */}
                                <ButtonCTA
                                    displayM='none'
                                    _handleClick={this.stop}
                                    bgColor={msTheme.colors.primary}
                                    text="x"
                                    color="white"
                                    margin=" 0px"
                                    borderRadius="50%"
                                />
                            </WidthWrapper>

                            <ResponsiveIframe paddingTop={!iframe ? '0px' : false} >
                                <ReactPlayer
                                    ref={this.ref}
                                    url={url}
                                    width='100%'
                                    height={iframe ? '100%' : '42px'}
                                    playing={playing}
                                    controls={controls}
                                    light={light}
                                    loop={loop}
                                    playbackRate={playbackRate}
                                    volume={volume}
                                    muted={muted}
                                    // onReady={() => console.log('onReady')}
                                    // onStart={() => console.log('onStart')}
                                    onPlay={this.onPlay}
                                    onPause={this.onPause}
                                    // onBuffer={() => console.log('onBuffer')}
                                    // onSeek={e => console.log('onSeek', e)}
                                    onEnded={this.onEnded}
                                    // onError={e => console.log('onError', e)}
                                    onProgress={this.onProgress}
                                    onDuration={this.onDuration}
                                />
                            </ResponsiveIframe>
                        </Fixer>
                    </ArticleContainer>
                }

            </div >
        )
    }
}


/*
Input Range sliders that work well on desktop ( not mobile )

     <InputRangeSlider
        value={volume}
        min={0}
        max={1}
        _handleChange={this.setVolume}
    />

     <InputRangeSlider
        value={played}
        min={0} max={1}
        _handleChange={this.onSeekChange}
        _handleMouseDown={this.onSeekMouseDown}
        _handleMouseUp={this.onSeekMouseUp}
        step="any"
    />


*/