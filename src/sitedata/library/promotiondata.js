import lDT from './librarydatatypes'

const topics = {
    spotify: "Spotify"
}

export const promotion = {
    subject: "Promotion",
    id: "promotion",
    links: [
        {
            topic: topics.spotify,
            type: lDT.website,
            link: "https://artists.spotify.com/",
            title: "Spotify for Artists",
            description: "The Official Spotify for Artists Site. (Spotify)"
        },
        {
            topic: topics.spotify,
            type: lDT.article,
            link: "https://promo.ly/spotify-for-artists-playlists/",
            title: "Spotify playlists: your secret guide to getting featured",
            description: "Article detailing strategy to get on playlists. (promoly)"
        },
    ]
}