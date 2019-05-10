import lDT from './librarydatatypes'

const topics = {
    basic: "Basic Theory"
}


export const musicTheory = {
    subject: "Music Theory",
    id: "musictheory",
    links: [
        {
            topic: topics.basic,
            type: lDT.article,
            link: "https://www.reddit.com/r/edmproduction/comments/717you/a_comprehensive_guide_to_basic_music_theory_for/",
            title: "A comprehensive guide to basic music theory for EDM producers",
            description: "A very helpful guide written on Reddit to the basics of music theory. (u/ShitBirdMusic)"
        },
        {
            topic: topics.basic,
            type: lDT.video,
            link: "https://www.youtube.com/watch?v=d1aJ6HixSe0",
            title: "The Circle of Fifths - How to Actually Use It",
            description: "A helpful description of the circle of fifths (Michael New)"
        },

    ]
}