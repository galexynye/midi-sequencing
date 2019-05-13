import lDT from './librarydatatypes'

const topics = {
    digitalaudio: "Digital Audio"
}

export const audio = {
    subject: "Audio",
    id: "audio",
    links: [
        {
            topic: topics.digitalaudio,
            type: lDT.article,
            link: "https://www.presonus.com/learn/technical-articles/sample-rate-and-bit-depth",
            title: "Digital Audio Basics: Sample Rate and Bit Depth",
            description: "A great explanation of Sample Rates and Bit Depth. Basic information anyone working in digital audio should be know. (Presonus)"
        },
    ]
}