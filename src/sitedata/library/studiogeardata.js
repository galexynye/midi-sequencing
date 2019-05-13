import lDT from './librarydatatypes'

const topics = {
    midi: "Midi",
    multiple: "Multiple",
    gearReview: "Gear Review"
}

export const studioGear = {
    subject: "Studio / Gear",
    id: "studiogear",
    links: [
        {
            topic: topics.multiple,
            internal: true,
            type: lDT.videoAndArticle,
            link: "/tags/studio/",
            title: "The Studio by Music Sequencing",
            description: "Originals explaining how to build a studio, various studio gear, and custom implementation of music tech.(Music Sequencing)"
        },
        {
            topic: topics.gearReview,
            internal: true,
            type: lDT.videoAndArticle,
            link: "/tags/gear",
            title: "Gear Reviews from Music Sequencing",
            description: "A collection of the gear reviews done by Music Sequencing. (Music Sequencing)"
        },

    ]
}


        // {
        //     topic: topics.midi,
        //     internal: true,
        //     type: lDT.videoAndArticle,
        //     link: "/article/how-to-build-a-studio/",
        //     title: "How to Build A Home Studio From Nothing to Everything",
        //     description: "A complete guide to how studio can evolve from a couple hundred dollars to a million dollars.(Music Sequencing Original)"
        // },
        // {
        //     topic: topics.midi,
        //     internal: true,
        //     type: lDT.videoAndArticle,
        //     link: "/article/controlling-logic-with-a-midi-controller",
        //     title: "Controlling Logic with a Midi Controller",
        //     description: "How I setup my midi controller to control Logic Pro X. Pushing play, creating tracks, zooming, scrubing, sends and more.(Music Sequencing Original)"
        // },