import lDT from './librarydatatypes'

const topics = {
    loudness: "Loudness",
    dither: "Dither",
    overview: "Overview",
    masterclass: "Masterclass"
}

export const mastering = {
    subject: "Mastering",
    id: "mastering",
    links: [
        {
            topic: topics.overview,
            type: lDT.pdf,
            link: "https://www.izotope.com/en/support/support-resources/guides/mastering-with-ozone.html",
            title: "Free Guide: Mastering with Ozone",
            description: "Great guide for mastering whether you have Ozone or not. (iZotope)"
        },
        {
            topic: topics.masterclass,
            type: lDT.masterclass,
            link: "https://www.youtube.com/watch?v=eQF8ORNJYbk",
            title: "Music Mastering Masterclass with Joe Lambert",
            description: "A great masterclass from a professional mastering engineer. (SonicScoop)"
        },
        {
            topic: topics.overview,
            type: lDT.video,
            link: "https://www.youtube.com/watch?v=h-QCQiOkufc",
            title: "How to Master Your Music in 5 Simple Steps",
            description: "A good, clear teacher, who will give you the skinny on mastering your own music without baloney. (Into the Mix)"
        },
        {
            topic: topics.loudness,
            type: lDT.videoAndArticle,
            link: "http://productionadvice.co.uk/loudness-penalty-faq/",
            title: "Is Your Track Loud Enough / Loudness Penalty Plugin",
            description: "Loudness explained well. Meauring your track and getting it to the right loudness for streaming. (White Sea Studio / Ian Shepard)"
        },
        {
            topic: topics.loudness,
            type: lDT.article,
            link: "http://productionadvice.co.uk/when-in-doubt-dither/",
            title: "When In Doubt, Dither",
            description: "What dither is and why you should do it. (Ian Shepard)"
        },
    ]
}