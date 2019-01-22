export const msTheme = {
    colors: {
        text: '#24292e', // '#373737'
        primary: '#700bea', // Purple
        primarylightest: '#AF7AF0',
        primarylight: '#9753E9',
        primarylighter: '#8027EA',
        primarydarker: '#5704BA',
        primarydark: '#42048C',
        secondary: '#FF5600', // Orange
        secondarydark: '#CF4600',
        green: '#00E99D',
        greenlight: '#45E8B3',
        greendark: '#008A5D',
        yellow: '#FFEB00',
        yellowlight: '#FFF14C',
    },
    breakpoints: { // Numbers in Pixels
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
    utilities: function () {
        return {
            hideSmall: `@media screen and (max-width: ${this.breakpoints.small + 'px'}) {display: none;}`,
            hideMedium: `@media screen and (max-width: ${this.breakpoints.medium + 'px'}) {display: none;}`,

        }
    }



}

