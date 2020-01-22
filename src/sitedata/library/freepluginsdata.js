import lDT from './librarydatatypes'

const topics = {
    multiple: "Variety of Free Stuff",
    distortion: "Distortion",
    meter: "Meter",
    stereo: "Stereo Imager",
    creative: "Creative",
    delay: "Delay",
    compressor: "Compressor",
    daw: "DAW",
    samples: "Samples",
    presets: "Presets"

}

const style = {
    picWidth: "450px"
}


export const freePlugins = {
    subject: "Free Downloads",
    id: "free",
    links: [
        {
            topic: topics.samples,
            type: topics.samples,
            html: `<a target="_blank" href="https://www.spitfireaudio.com/labs/"><img src="https://d1t3zg51rvnesz.cloudfront.net/p/images/cms2/901/lab120_portrait_portrait_labs_lg.jpg" alt="Spitfire Moon Guitar" style="width:100%; max-width:300px;" class="mB20"></a>`,
            // https://www.native-instruments.com/typo3temp/pics/img-ce-komplete-start-overview-01-intro_06-90db047b7ea7f274ae3750f44214a92d-d.jpg
            link: "https://www.spitfireaudio.com/labs/",
            title: "Spitfire Labs",
            description: "Orchestral stuff, synthesizers, and just weird awesome instruments by the legendary company, Spitfire. Get them all. (Spitfire)",
            // description is inserted into a <p> tag as html and may contain <a> tags
        },
        {
            topic: topics.multiple,
            type: topics.multiple,
            // html: `<a target="_blank" href="https://www.native-instruments.com/en/products/komplete/bundles/komplete-start/included-products/"><img src="https://www.native-instruments.com/typo3temp/pics/img-ce-komplete-start-overview-01-intro_06-90db047b7ea7f274ae3750f44214a92d-d.jpg" alt="Komplete Start" style="width:100%; max-width:300px;" class="mB20"></a>`,
            // https://www.native-instruments.com/typo3temp/pics/img-ce-komplete-start-overview-01-intro_06-90db047b7ea7f274ae3750f44214a92d-d.jpg
            link: "https://www.native-instruments.com/en/products/komplete/bundles/komplete-start/included-products/",
            title: "Komplete Start",
            description: "7 Synthesizers, samples, and more all for free. Incredible. (Native Instruments)",
            // description is inserted into a <p> tag as html and may contain <a> tags
        },

        {
            topic: topics.multiple,
            type: topics.multiple,
            html: `<a target="_blank" href="https://www.tokyodawn.net/tokyo-dawn-labs/"><img src="https://www.tokyodawn.net/wp-content/uploads/2018/11/Seite-1-Kopie-6.png" alt="Tokyo Dawn Labs Nova" style="width:100%; max-width:300px;" class="mB20"></a>`,
            link: "https://www.tokyodawn.net/tokyo-dawn-labs/",
            title: "Tokyo Dawn Labs",
            description: "Maybe the highest quality mixing plugins you can get for free. Nova EQ, SlickEQ and the Kotelnikov Compressor. All worth the download. (Tokyo Dawn Labs)"
        },
        {
            topic: topics.multiple,
            type: topics.multiple,
            link: "https://xferrecords.com/freeware",
            title: "OTT and More",
            description: "From the creator of Serum, the OTT is a multiband compresor used widely by electronic producers. Get it and others. (Xfer Records)"
        },
        {
            topic: topics.multiple,
            type: topics.multiple,

            html: `<a target="_blank" href="https://u-he.com/products/"><img src="https://u-he.com/products/zebralette/assets/images/uhe-zebralette-screenshot-fullui-1150x619.jpg" alt="Zebralette by U-he" style="width:100%; max-width:300px;" class="mB20"></a>`,
            link: "https://u-he.com/products/",
            title: "U-He FREE SYNTHS",
            description: "Scroll down to the bottom of their products page for a list of amazing free synths and other goodies. (U-he)"
        },
        {
            topic: topics.presets,
            type: topics.presets,
            html: `<a target="_blank" href="https://drive.google.com/file/d/1vjViZUypz6_FBcc-G-KD_V4wE-Ddn18H/view?usp=sharing"><img src="https://res.cloudinary.com/ganpub/image/upload/v1579688068/music-sequencing/pictures/SOUND7_presets_Freehouse_Vol1.jpg" alt="Free House" style="width:100%; max-width:300px; display: block;" class="mB20 mR20"></a> 
                   <a target="_blank" href="https://www.sound7.co.uk/"> <img src="https://res.cloudinary.com/ganpub/image/upload/v1579688851/music-sequencing/pictures/SOUND7_Emailsig.jpg" class="mB20"> </a>`,
            link: "https://drive.google.com/file/d/1vjViZUypz6_FBcc-G-KD_V4wE-Ddn18H/view?usp=sharing",
            title: "Diva Presets",
            description: `30 House Presets created by Sound7. I particularly dig the Chord based presets. This is a direct download link provided for Music Sequencing. Check out their website, <a href="https://www.sound7.co.uk/" target="_blank">Sound7</a>, for templates, samples and more presets. (Sound7)`
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
            html: `<a target="_blank" href="https://www.softube.com/saturationknob#/"><img src="https://cdn.softube.com/storage/C9914C112B23156545CF21A2402B6DCEE62B7F0FC8E862F6FB81FDE0DE88E7B7/908e26cb653b4cf59f9cbd7cab48be35/650-488-0-jpg.Jpeg/media/34d8bb794e004f94b71fbec520a3252d/saturation-knob-cb.jpeg" alt="Saturation Knob by Softube" style="width:100%; max-width:300px;" class="mB20"></a>`,
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
            // https://youlean.co/wp-content/uploads/2019/08/Youlean-Lodness-Meter-2-V2.3.0.png
            html: `<a target="_blank" href="https://youlean.co/youlean-loudness-meter/"><img src="https://youlean.co/wp-content/uploads/2019/08/Youlean-Lodness-Meter-2-V2.3.0.png" alt="Youlean Loudness Meter" style="width:100%; max-width:300px;" class="mB20"></a>`,
            link: "https://youlean.co/youlean-loudness-meter/",
            title: "Youlean Loudness Meter",
            description: "Checking the perceived loudness of your music is an important step in today's world of streaming. (Youlean)"
        },
        {
            topic: topics.meter,
            type: topics.meter,
            // https://www.voxengo.com/cdn/img/2/2ffgkzkv-1.jpg
            html: `<a target="_blank" href="https://www.voxengo.com/product/span/"><img src="https://www.voxengo.com/cdn/img/2/2ffgkzkv-1.jpg" alt="Span Plugin" style="width:100%; max-width:300px;" class="mB20"></a>`,
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
            topic: topics.delay,
            type: topics.delay,
            html: `<a target="_blank" href="https://valhalladsp.com/shop/delay/valhalla-freq-echo/"><img src="https://valhalladsp.com/wp-content/uploads/2016/06/valhalla-gui_0007_FreqEcho-525x329.png" alt="Valhalla Freq Echo" style="width:100%; max-width:300px;" class="mB20"></a>`,
            // https://valhalladsp.com/wp-content/uploads/2016/06/valhalla-gui_0007_FreqEcho-525x329.png
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