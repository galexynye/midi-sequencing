import React from 'react'
import styled from 'styled-components'
import { library } from '../../sitedata/library/librarydata'
import { msTheme } from '../../styles/Theme';

const LibraryLink = styled.div`
    a {
        font-size: 20px;
        font-family: ${msTheme.font.headerFont}
    }
`

export const LibraryIndexLinks = library.map(x => <LibraryLink key={x.id}><a href={`#${x.id}`}>{x.subject}</a></LibraryLink>)


// export const LibraryIndexLibraryTop = () => {
//     return (

//     )
// }


