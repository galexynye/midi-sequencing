import lDT from './librarydatatypes'

const topics = {
    multiple: "Multiple",
    compression: "Compression",
    automation: "Automation",
    eq: "EQ",
    reverb: "Reverb",
    vocals: "Mixing Vocals",

}

export const mixing = {
    subject: "Mixing",
    id: "mixing",
    links: [

        {
            topic: topics.eq,
            type: lDT.interactive,
            link: "http://www.independentrecording.net/irn/resources/freqchart/main_display.htm",
            title: "Interactive Frequency Chart",
            description: "A useful reference chart of where many instruments fall on the frequency spectrum. (Independent Recording) "
        },
        {
            topic: topics.compression,
            type: lDT.article,
            link: "https://www.attackmagazine.com/features/columns/gregory-scott-demolishing-the-myths-of-compression/",
            title: "Gregory Scott: Demolishing the Myths of Compressions",
            description: "Fantastic article clarifying some common misconceptions about comression. (Attack Magazine)"
        },
        {
            topic: topics.compression,
            type: lDT.article,
            link: "https://www.izotope.com/en/blog/mixing/4-types-of-analog-compression-and-why-they-matter-in-a-digital-world.html",
            title: "4 Types of Analog Compression—and Why They Matter in a Digital World",
            description: "Essential knowledge for anyone using emulations of classic compressors. (iZotope)"
        },

        // {
        //     topic: topics.multiple,
        //     type: lDT.article,
        //     link: "http://bamaudioschool.com/",
        //     title: "BAM Audio School",
        //     description: "A vast collection of articles on audio, mixing, and music from a seasoned professional for those who want to dive deep. (BAM Audio)"
        // },
        {
            topic: topics.multiple,
            internal: true,
            type: lDT.videoAndArticle,
            link: "/tags/mixing",
            title: "Mixing by Music Sequencing",
            description: "Originals on mixing explaining mixing techniques, how to use different effects and more. (Music Sequencing)"
        },
    ]
}


    // {
    //         topic: topics.compression,
    //         internal: true,
    //         type: lDT.videoAndArticle,
    //         link: "/article/hear-compression",
    //         title: "How to Hear Compression",
    //         description: "As easy as compression can make sounds better, it can make sounds worse. This article/video demostrates what to you should listen for when adding compression. (Music Sequencing Original)"
    //     },
    //     {
    //         topic: topics.vocals,
    //         type: lDT.article,
    //         link: "https://www.soundonsound.com/techniques/techniques-vocal-de-essing",
    //         title: "Techniques For Vocal De-essing",
    //         description: "A great article about cutting out nasty sibilance you can get when recording vocals. (Sound On Sound)"
    //     },
    //     {
    //         topic: topics.compression,
    //         internal: true,
    //         type: lDT.videoAndArticle,
    //         link: "/article/mix-drums-like-phil-collins/",
    //         title: "Gated Reverb: Mixing Drums to Sound Like Phil Collins",
    //         description: "A classic mixing technique to make huge sounding drum hits. (Music Sequencing Original)"
    //     },