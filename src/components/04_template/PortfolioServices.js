import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import ReactPlayer from 'react-player'
import { ResponsiveIframe, WidthWrapper } from '../00_utilities/Utilities';
import { servicesPortfolio } from "../../sitedata/musicData";
import { ArticleContainer } from '../05_page/ArticleContainer';
import { ButtonCTA } from '../01_atom/ButtonCTA';

// TODO: Range SLIDERS MOBILE FRIENDLY - google mobile friendly range slider


export class PortfolioServices extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showReactPlayer: false,
            url: null,
            pip: false,
            playing: false,
            controls: false,
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
            controls: iframe, // shows iFrame controls if iframe, hides the normal audio controls if audio element
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
        this.setState({ url: null, playing: false })
    }
    setVolume = e => {
        this.setState({ volume: parseFloat(e.target.value) })
    }
    onPlay = () => {
        // console.log('onPlay')
        this.setState({ playing: true })
    }
    onPause = () => {
        console.log('onPause')
        this.setState({ playing: false })
    }
    onSeekMouseDown = e => {
        this.setState({ seeking: true })
    }
    onSeekChange = e => {
        this.setState({ played: parseFloat(e.target.value) })
    }
    onSeekMouseUp = e => {
        this.setState({ seeking: false })
        this.player.seekTo(parseFloat(e.target.value))
    }
    onProgress = state => {
        console.log('onProgress', state)
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
        console.log('onDuration', duration)
        this.setState({ duration })
    }
    onClickFullscreen = () => {
        screenfull.request(findDOMNode(this.player))
    }
    // PASS A L
    renderLoadButton = (url, iframe, label) => {
        return (
            <ButtonCTA _handleClick={() => this.load(url, iframe)} text={label} bgColor="red" />
            // <button onClick={() => this.load(url)}>
            //     {label}
            // </button>
        )
    }

    ref = player => {
        this.player = player
    }

    render() {
        const { url, playing, controls, light, volume, muted, loop, played, loaded, duration, playbackRate, pip, iframe } = this.state
        return (
            <div>
                <ArticleContainer>

                    {this.state.showReactPlayer && <ResponsiveIframe paddingTop={!iframe ? '0px' : false}>
                        <ReactPlayer
                            ref={this.ref}
                            url={url}
                            width='100%'
                            height='100%'
                            url={url}
                            playing={playing}
                            controls={controls}
                            light={light}
                            loop={loop}
                            playbackRate={playbackRate}
                            volume={volume}
                            muted={muted}
                            onReady={() => console.log('onReady')}
                            onStart={() => console.log('onStart')}
                            onPlay={this.onPlay}
                            onPause={this.onPause}
                            onBuffer={() => console.log('onBuffer')}
                            onSeek={e => console.log('onSeek', e)}
                            onEnded={this.onEnded}
                            onError={e => console.log('onError', e)}
                            onProgress={this.onProgress}
                            onDuration={this.onDuration}
                        />
                    </ResponsiveIframe>}

                    {!iframe && playing && <div>
                        <input
                            type='range' min={0} max={1} step='any'
                            value={played}
                            onMouseDown={this.onSeekMouseDown}
                            onChange={this.onSeekChange}
                            onMouseUp={this.onSeekMouseUp}
                        />
                        <input type='range' min={0} max={1} step='any' value={volume} onChange={this.setVolume} />
                        <progress max={1} value={played} />
                        <progress max={1} value={loaded} />
                    </div>}
                    {this.renderLoadButton(servicesPortfolio[0].src, false, 'Test A')}
                    {this.renderLoadButton("https://www.youtube.com/watch?v=GMG_RGsysT4", true, 'Test B')}
                    {this.renderLoadButton("https://www.youtube.com/watch?v=mVTmxC_pVqg", true, 'Test C')}
                </ArticleContainer>
            </div>
        )
    }
}
