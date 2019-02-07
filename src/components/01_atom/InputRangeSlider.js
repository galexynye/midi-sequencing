import React from 'react'
import styled from 'styled-components'
import { msTheme } from '../../styles/Theme'
// https://codepen.io/thebabydino/pen/goYYrN - source ... convert this to styled component

let trackw = "100%";
let trackh = "5px";
let thumbd = "15px";
let trackc = "#ccc";
let filllc = msTheme.colors.primary;
let max = `` // this comes as a prop set by the state
let min = `` // this comes in as a prop set by the state
let val = `` // this comes in as a prop set by the state
let range = `` // comes in as a prop
let ratio = `` // as prop
let sx = `` // with prop info 
let boxSizing = 'border-box';
let border = 'none'
let width = `${trackw}`
let height = `${trackh}`
let background = `${trackc}`

// In our case mixin in is a function that returns a string
const track = ($fill = 0) => {

    let jsBackground = ''
    if ($fill == 1) {
        // .js is a class....refactor this to be a prop
        // Refactor sx variable
        jsBackground = `.js & { 
                 background: linear - gradient(${filllc}, ${filllc})
				0/ var(--sx) 100% no-repeat ${trackc}
        }`
    }
    return `
        	box-sizing: ${boxSizing};
	        border: ${border};
            width: ${width};
            height: ${height};
            background: ${background};
            ${jsBackground};
            
            
    `
}

const fill = () => {
    return `
        height: ${trackh};
        background: ${filllc};
    `
}

const thumb = () => {
    return `
        box-sizing: border-box;
        border-radius: 50%;
	    border: none;
        width: calc(${thumbd} ) ; 
        height: ${thumbd};
	    
        
        background: ${msTheme.colors.primary};   
        
    `
}



// check sx var is compiling correctly 

const InputRangeStyle = styled.input`
cursor: pointer;

  
    &, &::-webkit-slider-thumb {
		-webkit-appearance: none;
	}
    --min: ${props => props.min || 0};
    --max: ${props => props.max || 1};
    --val: ${props => props.value || 0} ;
    --range: calc(var(--max) - var(--min));
	--ratio: calc((var(--val) - var(--min))/var(--range));
	--sx: calc((.5* ${thumbd}) + var(--ratio)*(100% - ${thumbd}));
	margin: 0;
	padding: 0;
	width: ${trackw}; height: ${thumbd};
	background: transparent;
	font: 1em/1 arial, sans-serif;
    
    &::-webkit-slider-runnable-track {
			box-sizing: 'border-box';
	        border: ${border};
            width: ${width};
            height: ${height};
            background: linear-gradient(${filllc}, ${filllc}) 0/ var(--sx) 100% no-repeat ${trackc};
            
	}
	&::-moz-range-track { 
        ${track()} 
    }  
	&::-ms-track { 
        ${track()} 
    }
	
	&::-moz-range-progress { 
        ${fill()} 
    }

	&::-ms-fill-lower { 
        ${fill()}  
    }
	
	&::-webkit-slider-thumb {
		/* margin-top: .5*(${trackh} - ${thumbd}); */
		margin-top: -8px;
		${thumb()}
	}
	&::-moz-range-thumb { 
       ${thumb()}
    }
	&::-ms-thumb {
		margin-top: 0;
		${thumb()}
	}
	
	&::-ms-tooltip { 
        display: none 
        }
    &::-moz-focus-outer {
    border: 0;
    }
`


export class InputRangeSlider extends React.PureComponent {
    render() {
        const {
            _handleChange,
            _handleMouseDown,
            _handleMouseUp,
            _handleTouchStart,
            _handleTouchEnd,
            _handleTouchMove,
            _handleTouchMoveCapture,
            _handleClick,
            value,
            label,
            labelText,
            min,
            max,
            step
        } = this.props

        return (

            <div>
                <label htmlFor={label ? label : ''}>{labelText ? labelText : ''}</label>
                <InputRangeStyle
                    onChange={_handleChange}
                    onMouseDown={_handleMouseDown}
                    onMouseUp={_handleMouseUp}
                    onTouchStart={_handleTouchStart}
                    onTouchEnd={_handleTouchEnd}
                    onTouchMove={_handleTouchMove}
                    onTouchMoveCapture={_handleTouchMoveCapture}
                    onClick={_handleClick}
                    value={value}
                    name={label}
                    type="range"
                    min={min}
                    max={max}
                    step={step ? step : '.02'}
                >
                </InputRangeStyle>
                {/* <p></p> */}
            </div >
        )
    }
}



