import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

export const LibraryLink = ({ link }) => {
    if (link.internal) {
        return (
            // <div>
            //     <div dangerouslySetInnerHTML={{ __html: link.html }} />
            //     <p class="headerFont mB20"><Link to={link.link}>{link.title}</Link> - <strong>{link.type}</strong> - {link.description} </p>

            // </div>
            <div>
                <div class="headerFont">
                    <Link to={link.link}>
                        <h4 class="mT0 mB10">{link.title}</h4>
                    </Link>
                    <p class="mB0"> <strong>{link.type}</strong></p>
                    <p class="mB10" dangerouslySetInnerHTML={{ __html: link.description }} ></p>
                </div>
                <div dangerouslySetInnerHTML={{ __html: link.html }} />
            </div>

        )
    }
    return (
        <div>
            <div class="headerFont">
                <a href={link.link} target="_blank" class="mB0">
                    <h4 class="mT0 mB10">{link.title}</h4>
                </a>
                <p class="mB0"> <strong>{link.type}</strong></p>
                <p class="mB10" dangerouslySetInnerHTML={{ __html: link.description }} ></p>
            </div>
            <div dangerouslySetInnerHTML={{ __html: link.html }} />
        </div>
    )

}


