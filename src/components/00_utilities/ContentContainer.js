import React, { Component } from 'react'
import { PaddingWrapper } from "./PaddingWrapper";
import { WidthWrapper } from "./WidthWrapper";


// Combination of PaddingWrapper and Width Wrapper to add padding to a container.

export class ContentContainer extends Component {
    render() {
        const { children, width, widthSmall, outerMargin, margin, marginSmall, padding, paddingSmall } = this.props
        return (
            <PaddingWrapper margin={outerMargin} marginSmall={marginSmall} padding={padding} paddingSmall={paddingSmall} >
                <WidthWrapper width={width} widthSmall={widthSmall} margin={margin}>
                    {children}
                </WidthWrapper>
            </PaddingWrapper>
        )
    }
}
