export const msTheme = {
    colors: {
        text: '#272a2e', // '#373737' #2e343a
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
        yellowdark: '#7A7006',
        yellowlight: '#FFF14C',
        yellowlightest: '#FFF47A',
        greylight: '#CFCFCF',
        red: '#F8004B',
        reddarker: '#E80046',
        reddarkest: '#B90038',
        redlight: `F84A7F`,
        blue: '#079EE7',
        bluedarker: '#0277B0',
        bluedarkest: '#025983',
        bluelightest: '#4CB4E6',
        bluelighter: '20A6E7',
        violet: '#A006E9',
        violetdarker: '#7D02B7',
        violetdarketst: '#5E028A',
        violetlight: '#B64DE8'

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
    fontSize: {
        h2: "34px"
    },
    widths: {
        article: '600px',
        sidebarMobileMenu: '200px',
        wide: '1100px',
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
                padding: `10px 10px;`,
                paddingSmall: `10px 20px;`,
                // border: `1px solid ${this.colors.text}`,
                border: `none`,
                borderRadius: `4px;`,
                paddingInput: "10px 10px"
            }
        }
    }



}

