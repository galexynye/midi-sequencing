import lDT from './librarydatatypes'

const topics = {
    drums: "Drums",
    sound: "Sound",
    midi: "midi",
    recording: "Recording",
    synthesis: "Synthesis"
}


export const producing = {
    subject: "Producing",
    id: "producing",
    links: [
        {
            topic: topics.synthesis,
            type: lDT.video,
            link: "https://www.youtube.com/watch?v=atvtBE6t48M",
            title: "Intro to Synthesis",
            description: "Old video but great info introducing the basics of synthesis, i.e. making sounds with synthesizers. (New York School of Synthesis)"
        },
        {
            topic: topics.synthesis,
            type: lDT.video,
            link: "https://www.youtube.com/playlist?list=PLcJeAPW0R_1fbHOAlugIWU-08KBNGErQM",
            title: "Sound Design Playlist",
            description: "A collection of videos from around youtube about sound design. (Various)"
        },
        {
            topic: topics.sound,
            internal: true,
            type: lDT.videoAndArticle,
            link: "/article/10-tips-for-pro-sound/",
            title: "10 Factors for Achieving Great Sound",
            description: "The biggest steps in the chain for acheiving great sound. (Music Sequencing Original)"
        },
        {
            topic: topics.midi,
            internal: true,
            type: lDT.videoAndArticle,
            link: "/article/humanize-midi/",
            title: "How to Automatically Humanize Midi",
            description: "Most DAWs are equipt with algorithms to add imperfections to midi that will make it feel more human. This is a demonstration in Logic Pro X. (Music Sequencing Original)"
        },
        {
            topic: topics.midi,
            internal: true,
            type: lDT.videoAndArticle,
            link: "/article/how-to-edit-midi-sustain-pedal/",
            title: "How to Edit Midi Sustain Pedal",
            description: "Editing midi piano can be a pain without knowing how to do this. (Music Sequencing Original)"
        },
        {
            topic: topics.drums,
            internal: true,
            type: lDT.videoAndArticle,
            link: "/article/program-realistic-drum-parts",
            title: "How to Program Realistic Drum Parts",
            description: "Program drums that sound like they were played by someone. (Music Sequencing Original)"
        },
    ]
}
