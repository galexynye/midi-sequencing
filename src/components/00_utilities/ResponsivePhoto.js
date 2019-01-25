import React, { Component } from 'react'
import { WidthWrapper } from "./WidthWrapper";
import { FlexboxOrganism } from "./FlexboxOrganism";
import styled from 'styled-components'

export class ResponsivePhoto extends Component {
    render() {
        const { width, widthSmall, margin, img } = this.props
        return (
            <WidthWrapper width={width} widthSmall={widthSmall} margin={margin}>
                <FlexboxOrganism>
                    <img src={img} />
                </FlexboxOrganism>
            </WidthWrapper>
        )
    }
}
