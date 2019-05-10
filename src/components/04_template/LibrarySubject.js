import React, { PureComponent } from 'react'
import { LibraryLink } from '../02_molecule/LibraryLink'

export class LibrarySubject extends PureComponent {
    render() {
        const { subject } = this.props
        const Links = subject.links.map(x => <LibraryLink link={x} />)
        return (
            <React.Fragment>
                <h2 id={subject.id}>{subject.subject}</h2>
                {Links}
            </React.Fragment>
        )
    }
}
