import React from 'react'
import styled from 'styled-components'
import { ResponsivePhoto, WidthWrapper, FlexboxOrganism } from '../00_utilities/Utilities';
import { ButtonCTA } from '../01_atom/ButtonCTA';
import { msTheme } from '../../styles/Theme';

const StoreItemLink = styled.a`
    font-family: ${msTheme.font.headerFont};
    font-size: 27px;
    margin-bottom: 18px;
`

export const StoreItem = ({ item }) => {
    return (
        <React.Fragment>
            <FlexboxOrganism justifyContent="flex-start">
                <a href={item.link} target="_blank">
                    <ResponsivePhoto src={item.image}></ResponsivePhoto>
                </a>
            </FlexboxOrganism>
            <FlexboxOrganism justifyContent="flex-start" >
                <StoreItemLink href={item.link} target="_blank">{item.item}</StoreItemLink>
                <p className="headerFont mB20">{item.description}</p>
                <WidthWrapper width="250px" widthSmall="250px" margin="0px">
                    <ButtonCTA margin="0px" text={item.buttonText} href={item.link} color="white" bgColor={msTheme.colors.primary} target="_blank" />
                </WidthWrapper>
            </FlexboxOrganism>

        </React.Fragment>
    )
}


