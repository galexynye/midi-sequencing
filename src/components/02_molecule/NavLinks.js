import React from 'react'
import styled from 'styled-components'
import NavLink from '../01_atom/NavLink'


export default class NavLinks extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const navList = this.props.links.map(link => <li key={link.name}><NavLink to={link.to} name={link.name} external={link.external} /></li>)
        return (
            <ul>
                {navList}
            </ul>
        )
    }
}

/*
Component Notes

-Recieves an array of Links as props - returns a list of NavLink components
-Props REQUIRED as Input is an array of Nav Links as "links"
-Props REQUIRED to PASS into NavLink component are "to", "name", "external". (or check link data in the Organism used in)
-Styles for different types of NavLinks (when necessary)

*/