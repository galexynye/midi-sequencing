import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { ButtonCTA } from '../01_atom/ButtonCTA'
import { servicesPortfolio } from '../../sitedata/musicData'
import { InputRange } from '../01_atom/InputRange'

const AudioPlayerStyle = styled.div`
background-color: blue;
`

export class AudioPlayer extends PureComponent {
    constructor(props) {
        super(props)
        this.audioRef = React.createRef();
        this.state = {
            playing: false,
            paused: false,
            stopped: true,
            volume: .3,
        }
    }
    componentDidMount() {
        this.audioRef.current.volume = this.state.volume
    }

    _handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
        // console.log(this.state)
    }

    _volumeChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
        this.audioRef.current.volume = event.target.value
    }

    _play = () => {
        this.setState({
            playing: true,
            paused: false
        })
        this.audioRef.current.play()
    }

    _pause = () => {
        this.setState({
            playing: false,
            paused: true
        })
        this.audioRef.current.pause()
    }


    render() {
        const { children, src } = this.props
        return (
            <div>
                {/* render the portfolio (simple cards that reference and play / change source) with forward REFS */}
                {children}
                <AudioPlayerStyle>
                    <audio ref={this.audioRef} preload="metadata">
                        <source src={servicesPortfolio[0].src} type="audio/mpeg"></source>
                    </audio>
                    <InputRange _handleChange={this._volumeChange} value={this.state.volume} label="volume" />
                    <ButtonCTA text="Play" bgColor="purple" _handleClick={this._play} />
                    <ButtonCTA text="Pause" bgColor="red" _handleClick={this._pause} />
                </AudioPlayerStyle>
            </div>

        )
    }
}
