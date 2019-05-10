import lDT from './librarydatatypes'

const topics = {
    midi: "Midi"
}

export const studioGear = {
    subject: "Studio / Gear",
    id: "studiogear",
    links: [
        {
            topic: topics.midi,
            internal: true,
            type: lDT.videoAndArticle,
            link: "/article/how-to-build-a-studio/",
            title: "How to Build A Home Studio From Nothing to Everything",
            description: "A complete guide to how studio can evolve from a couple hundred dollars to a million dollars.(Music Sequencing Original)"
        },
        {
            topic: topics.midi,
            internal: true,
            type: lDT.videoAndArticle,
            link: "/article/controlling-logic-with-a-midi-controller",
            title: "Controlling Logic with a Midi Controller",
            description: "How I setup my midi controller to control Logic Pro X. Pushing play, creating tracks, zooming, scrubing, sends and more.(Music Sequencing Original)"
        },
    ]
}

