import lDT from './librarydatatypes'

const topics = {
    eq: "EQ",
    automation: "Automation",
    reverb: "Reverb",
    compressio: "Compression"
}

export const basics = {
    subject: "Basics",
    id: "basics",
    description: "Introductory topics for those new to music production.",
    links: [
        {
            topic: "Getting Started",
            internal: true,
            type: lDT.videoAndArticle,
            link: "/article/audio-effects-explained-for-beginners",
            title: "Audio Effects Explained for Beginners",
            description: "A short video and article giving a birds eye view of the most commonly used effects in music production. (Music Sequencing Original)"
        },
        {
            topic: "Getting Started",
            internal: true,
            type: lDT.videoAndArticle,
            link: "/article/which-daw-should-you-use",
            title: "Which DAW Should You Use?",
            description: "Details some of the advantages and disadvantages of different DAWs. (Music Sequencing Original)"
        },
        {
            topic: "Music vs Sound",
            internal: true,
            type: lDT.videoAndArticle,
            link: "/article/music-vs-sound/",
            title: "Music vs Sound",
            description: "When it comes to music production, thinking in terms of sound can be just as important as thinking in terms of music. (Music Sequencing Original)"
        },
        {
            topic: "What is Midi",
            internal: true,
            type: lDT.videoAndArticle,
            link: "/article/what-is-midi",
            title: "What is Midi?",
            description: "From controlling stage lights to your soft-synth, this article is a comprehensive explanations of what midi is. (Music Sequencing Original)"
        },
        {
            topic: topics.eq,
            internal: true,
            type: lDT.videoAndArticle,
            link: "/article/eq-essential-techniques/",
            title: "EQ Essential Techniques",
            description: "EQ: One of the most import tools in audio production. (Music Sequencing Original)"
        },
        {
            topic: topics.eq,
            internal: true,
            type: lDT.videoAndArticle,
            link: "/article/reverb-essentials/",
            title: "Getting Started with Reverb",
            description: "The audio effect that gives space and dimension to sound explained. (Music Sequencing Original)"
        },

        {
            topic: topics.automation,
            internal: true,
            type: lDT.videoAndArticle,
            link: "/article/automation",
            title: "Automation: Everything You Need to Know",
            description: "Automation is crucial: changing sounds over time in mixing and producing. (Music Sequencing Original)"
        },
        {
            topic: topics.compression,
            internal: true,
            type: lDT.videoAndArticle,
            link: "/article/compression-explained-and-demystified/",
            title: "Compression Explained and Demystified",
            description: "A clear and simple explanation of compression and it's parameters explained both through audio and visual. (Music Sequencing Original)"
        },

    ]
}