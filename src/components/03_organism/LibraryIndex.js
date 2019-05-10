import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { library } from '../../sitedata/library/librarydata'
import { GridContainer } from '../00_utilities/Utilities';
import { msTheme } from '../../styles/Theme';

const LibraryLink = styled.div`
    a {
        font-size: 20px;
        font-family: ${msTheme.font.headerFont}
    }
`

export const LibraryIndexLinks = library.map(x => <LibraryLink><a href={`#${x.id}`}>{x.subject}</a></LibraryLink>)


// export const LibraryIndexLibraryTop = () => {
//     return (

//     )
// }


