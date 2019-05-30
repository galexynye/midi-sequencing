import lDT from './librarydatatypes'

const topics = {
    levels: "Input",
    multiple: "Multiple"
}

export const recording = {
    subject: "Recording",
    id: "recording",
    links: [
        {
            topic: topics.multiple,
            internal: true,
            type: lDT.videoAndArticle,
            link: "/tags/recording",
            title: "Recording Videos and Articles by Music Sequencing",
            description: 'Originals from Music Sequencing that will expand your recording knowledge. (Music Sequencing)'
        },
        {
            topic: topics.recording,
            type: lDT.videoAndArticle,
            link: "https://www.prosoundweb.com/channels/recording/the-truth-about-record-levels/",
            title: "The Truth About Recording Levels",
            description: "Sets the record straight on recording levels in digital audio. (Pro Sound Web)"
        },
    ]
}