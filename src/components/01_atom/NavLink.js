import React from 'react'
import { Link } from 'gatsby'

// props are link and external or internal

export default class NavLink extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { to, name, external } = this.props
        if (external) {
            return (
                <a href={to}>{name}</a>
            )
        } else {
            return (
                <Link to={to}>{name}</Link>
            )
        }
    }
}