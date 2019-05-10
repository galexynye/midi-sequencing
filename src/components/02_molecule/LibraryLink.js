import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

export const LibraryLink = ({ link }) => {
    if (link.internal) {
        return (
            <div>
                <p class="headerFont mB20"><Link to={link.link}>{link.title}</Link> - <strong>{link.type}</strong> - {link.description} </p>
            </div>
        )
    }
    return (
        <div>
            <p class="headerFont"><a href={link.link} target="_blank">{link.title}</a> - <strong>{link.type}</strong> - {link.description}</p>
        </div>
    )

}


