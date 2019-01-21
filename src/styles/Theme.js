const msTheme = {
    colors: {
        text: '#24292e', // '#373737'
        purple: '#700bea',
        purpledark: '#42048C',
        orange: '#FF5600',
        orangedark: '#CF4600',
        green: '#00E99D',
        yellow: '#FFEB00',
    },
    breakpoints: {
        small: '575px',
        medium: '768px',
        large: '991px',
        xl: '1199px'
    },
    mediaquery: function () {
        return {
            small: `@media screen and (max-width: ${this.breakpoints.small})`,
            medium: `@media screen and (max-width: ${this.breakpoints.medium})`,
            large: `@media screen and (max-width: ${this.breakpoints.large})`,
            xl: `@media screen and (max-width: ${this.breakpoints.xl})`,
        }

    },
    font: {
        bodyFont: 'Crimson Text',
        headerFont: 'Open Sans'
    },
    widths: {
        article: '650px'
    },
    utilities: function () {
        return {
            hideSmall: `@media screen and (max-width: ${this.breakpoints.small}) {display: none;}`,
            hideMedium: `@media screen and (max-width: ${this.breakpoints.medium}) {display: none;}`,

        }
    }



}

export default msTheme