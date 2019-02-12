import { msTheme } from "../styles/Theme";

export const learnCategoryCardsData = [
    {
        title: 'Mentorship',
        description: "The most effective way to get better at music. Tap here or scroll down to read more.",
        link: '/learn#mentorship',
        color: msTheme.colors.primary
    },
    {
        title: 'Basics',
        description: "Essential knowledge for beginners giving a bird's eye view of music production.",
        link: '/basics',
        color: msTheme.colors.red
    },
    {
        title: 'Music Tech',
        description: "Want to know the cheapest way to build a studio? Music Tech is all about the tools we used to make music.",
        link: '/learn/music-tech',
        color: msTheme.colors.secondary
    },
    {
        title: 'Mixing',
        description: "Learn to think in terms of sonic fidelity, the tools and techniques to achieve professional quality mixes.",
        link: '/learn/mixing',
        color: msTheme.colors.yellowdark
    },
    {
        title: 'Producing',
        description: "Recording, sampling, sound design, and whatever else it takes to go from inspiration to music.",
        link: '/learn/producing',
        color: msTheme.colors.greendark
    },
    {
        title: 'Coming Soon...',
        description: "Articles on mastering, music theory, and lyric writing.",
        link: '/learn',
        hideButton: true,
        color: msTheme.colors.violet
    },
    // {
    //     title: 'Music & Lyrics',
    //     description: "Rhythms, rhymes, chord changes, melody and music theory",
    //     link: '/learn/music-and-lyrics' // These need to go to page that says, sorry doesn't exist
    // },
    // {
    //     title: 'Mastering',
    //     description: "The cherry on top of the music cake. Often called a \"Black Art\" by those in the dark.",
    //     link: '/learn/mastering' // These need to go to a page that says sorry, doesn't exist 
    // },
]