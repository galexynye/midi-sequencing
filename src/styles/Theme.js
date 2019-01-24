export const msTheme = {
    colors: {
        text: '#24292e', // '#373737'
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
    breakpoints: { // Numbers in Pixels
        tiny: 400,
        small: 575,
        medium: 768,
        large: 991,
        xl: 1199
    },
    mediaquery: function () {
        return {
            small: `@media screen and (max-width: ${this.breakpoints.small + 'px'})`,
            medium: `@media screen and (max-width: ${this.breakpoints.medium + 'px'})`,
            mediumMin: `@media screen and (min-width: ${this.breakpoints.medium + 'px'})`,
            large: `@media screen and (max-width: ${this.breakpoints.large + 'px'})`,
            xl: `@media screen and (max-width: ${this.breakpoints.xl + 'px'})`,
            smallHeight: `@media screen and (max-height: ${this.breakpoints.tiny + 'px'})`,
        }

    },
    font: {
        bodyFont: 'Crimson Text',
        headerFont: 'Open Sans'
    },
    widths: {
        article: '650px',
        sidebarMobileMenu: '200px'
    },
    heights: {
        header: '40px'
    },
    utilities: function () {
        return {
            hideSmall: `@media screen and (max-width: ${this.breakpoints.small + 'px'}) {display: none;}`,
            hideMedium: `@media screen and (max-width: ${this.breakpoints.medium + 'px'}) {display: none;}`,
            inputAndButtonShare: {
                padding: `10px 25px;`,
                paddingSmall: `10px 20px;`,
                // border: `1px solid #CFCFCF;`,
                border: `none;`,
                borderRadius: `15px;`
            }
        }
    }



}

