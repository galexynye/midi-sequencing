export const msTheme = {
    colors: {
        text: '#24292e', // '#373737'
        textlight: '#6d6d6d',
        primary: '#700bea', // Purple
        primayhighlighter: '#C6A6F2',
        primarylightest: '#AF7AF0',
        primarylight: '#9753E9',
        primarylighter: '#8027EA',
        primarydarker: '#5704BA',
        primarydark: '#42048C',
        secondary: '#FF5600', // Orange
        secondarylighter: '#FF6618',
        secondarydark: '#CF4600',
        green: '#00E99D',
        greenlight: '#45E8B3',
        greendark: '#008A5D',
        yellow: '#FFEB00',
        yellowlight: '#FFF14C',
        yellowlightest: '#FFF47A',
        greylight: '#CFCFCF'
    },
    breakPoints: { // Numbers in Pixels
        tiny: 400,
        small: 575,
        medium: 768,
        large: 991,
        xl: 1199
    },
    mediaquery: function () {
        return {
            small: `@media screen and (max-width: ${this.breakPoints.small + 'px'})`,
            medium: `@media screen and (max-width: ${this.breakPoints.medium + 'px'})`,
            mediumMin: `@media screen and (min-width: ${this.breakPoints.medium + 'px'})`,
            large: `@media screen and (max-width: ${this.breakPoints.large + 'px'})`,
            xl: `@media screen and (max-width: ${this.breakPoints.xl + 'px'})`,
            smallHeight: `@media screen and (max-height: ${this.breakPoints.tiny + 'px'})`,
        }

    },
    font: {
        bodyFont: 'Crimson Text',
        headerFont: 'Open Sans'
    },
    widths: {
        article: '650px',
        sidebarMobileMenu: '200px',
        wide: '1200px',
        ultraWide: '1500px'
    },
    heights: {
        header: '40px'
    },
    padding: {
        globalSide: '15px',
        globalVertical: '15px',
        globalSideSmall: '10px',
        globalVerticalSmall: '5px',
    },
    margin: {
        globalMarginTop: '20px' // Global Spacer
    },
    utilities: function () {
        return {
            hideSmall: `@media screen and (max-width: ${this.breakPoints.small + 'px'}) {display: none;}`,
            hideMedium: `@media screen and (max-width: ${this.breakPoints.medium + 'px'}) {display: none;}`,
            inputAndButtonShare: {
                padding: `10px 25px;`, // NOTE - the InputString.js component padding is NOT controlled by the padding here as of now, because the text input has it's own padding adn to be the same size it needs to be customized after changine the padding here.
                paddingSmall: `10px 20px;`,
                border: `none;`,
                borderRadius: `0px;`
            }
        }
    }



}

