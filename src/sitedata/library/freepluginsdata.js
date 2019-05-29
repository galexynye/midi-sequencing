import lDT from './librarydatatypes'

const topics = {
    multiple: "Multiple",
    distortion: "Distortion",
    meter: "Meter",
    stereo: "Stereo",
    creative: "Creative",
    delay: "Delay",
    compressor: "Compressor",
    daw: "DAW",
    samples: "Samples"

}


export const freePlugins = {
    subject: "Free Plugins +",
    id: "free",
    links: [
        {
            topic: topics.multiple,
            type: topics.multiple,
            link: "https://www.native-instruments.com/en/products/komplete/bundles/komplete-start/included-products/ ",
            title: "Komplete Start",
            description: "7 Synthesizers, samples, and more all for free. Incredible. (Native Instruments)"
        },
        {
            topic: topics.multiple,
            type: topics.multiple,
            link: "https://www.tokyodawn.net/tokyo-dawn-labs/",
            title: "Tokyo Dawn Labs",
            description: "Maybe the highest quality mixing plugins you can get for free. Nova EQ, SlickEQ and the Kotelnikov Compressor. All worth the download. (Tokyo Dawn Labs)"
        },
        {
            topic: topics.multiple,
            type: topics.multiple,
            link: "https://xferrecords.com/freeware",
            title: "OTT and More",
            description: "The OTT is a multiband compresor used widely by electronic producers. Get it and others. (Xfer Records)"
        },
        {
            topic: topics.multiple,
            type: topics.multiple,
            link: "https://u-he.com/products/",
            title: "Zebralette and More",
            description: "Scroll down to the bottom of their products page for a list of amazing free synths. (U-he)"
        },
        {
            topic: topics.multiple,
            type: topics.multiple,
            link: "http://boscomac.free.fr/?p=rack",
            title: "Boscomac",
            description: "The most incredible donationware synths and effects. Warning: You need the full version of Reaktor 5 or 6 (which is you have to buy) to use. (Boscomac)"
        },
        {
            topic: topics.daw,
            type: topics.daw,
            link: "https://www.ableton.com/en/products/live-lite/",
            title: "Ableton Live Lite",
            description: "Free limited version of Ableton Live. A DAW popular in electronic music and for live performances. (Ableton)"
        },
        {
            topic: topics.daw,
            type: topics.daw,
            link: "https://www.avid.com/pro-tools-first",
            title: "Pro Tools First",
            description: "Free limited version of Pro Tools, great for testing out how you might like it. (Avid)"
        },
        {
            topic: topics.daw,
            type: topics.daw,
            link: "https://lmms.io/",
            title: "LMMS",
            description: "A Free, open-source DAW. (LMMS)"
        },
        {
            topic: topics.samples,
            type: topics.samples,
            link: "http://99sounds.org/",
            title: "99 Sounds",
            description: 'They promise "free sound effects and sample libraries of commercial quality, at no charge" and they deliver. (99Sounds.org)'
        },
        {
            topic: topics.samples,
            type: topics.samples,
            link: "http://samplefino.com/free-drum-samples/",
            title: "Samplefino",
            description: 'Free Drum Samples with Email (Samplefino)'
        },
        {
            topic: topics.samples,
            type: topics.samples,
            link: "https://freesound.org/browse/",
            title: "Free Sound",
            description: 'A ton of free sounds of various quality and license requirements. Still worth knowing about. (FreeSound.org)'
        },
        {
            topic: topics.stereo,
            type: topics.stereo,
            link: "https://www.izotope.com/en/products/master-and-deliver/ozone/ozone-imager.html",
            title: "Ozone Imager",
            description: "Great free plugin for spreading sounds across the stereo spectrum. (iZotope)"
        },
        {
            topic: topics.distortion,
            type: topics.distortion,
            link: "https://www.softube.com/saturationknob#/",
            title: "Softube Saturation Knob",
            description: "Softube is a highly reputable company with highly skilled engineers, this is an amazing free saturation plugin. (Softube)"
        },
        {
            topic: topics.distortion,
            type: topics.distortion,
            link: "https://creativeintent.co/products/temper",
            title: "Temper",
            description: "A very interesting distortion plugin. (Creative Intent)"
        },
        {
            topic: topics.meter,
            type: topics.meter,
            link: "https://youlean.co/youlean-loudness-meter/",
            title: "Youlean Loudness Meter",
            description: "Checking the perceived loudness of your music is an important step in today's world of streaming. (Youlean)"
        },
        {
            topic: topics.meter,
            type: topics.meter,
            link: "https://www.voxengo.com/product/span/",
            title: "Span",
            description: "A great spectrum analyzer. Alway mix with your ears, this plugin is still great for checking your work. (Voxengo)"
        },
        {
            topic: topics.compressor,
            type: topics.compressor,
            link: "https://www.acustica-audio.com/store/products/tan-free",
            title: "Tan",
            description: "A free VCA-style compressor. (Acustica)"
        },
        {
            topic: topics.creative,
            type: topics.creative,
            link: "https://www.izotope.com/en/products/create-and-design/vinyl.html",
            title: "Vinyl",
            description: "A lo-fi effect that can add mechanical noise, dust, scratches and create the sound of a record stopping. (iZotope)"
        },
        {
            topic: topics.creative,
            type: topics.creative,
            link: "http://www.danielrothmann.com/#downloads",
            title: "Roth-AIR",
            description: "A saturation / eq / multiband compressor that boosts high frequency content in a pleasing way. (Daniel Rothmann)"
        },
        {
            topic: topics.creative,
            type: topics.creative,
            link: "https://valhalladsp.com/shop/delay/valhalla-freq-echo/",
            title: "Valhalla Freq Echo",
            description: "A quirky echo effect by the legends at Valhalla. (Valhalla)"
        },
        {
            topic: topics.creative,
            type: topics.creative,
            link: "http://www.cableguys.com/pancake.html",
            title: "PanCake2",
            description: "A customizable stereo panner. (Cable Guys)"
        },
        {
            topic: topics.creative,
            type: topics.creative,
            link: "https://aegeanmusic.com/pitchproof-Specs",
            title: "PitchProof",
            description: "A Harmonizer and pitch shifter. (Aegean Music)"
        },
        {
            topic: topics.creative,
            type: topics.creative,
            link: "https://www.plugin-alliance.com/en/products/bx_subfilter.html",
            title: "Brainworx bx_subfilter",
            description: "Neat little filter for processing low frequencies. (Brainworx)"
        },
    ]
}