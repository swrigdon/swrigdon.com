<script>
    import {ContentCard} from "../../ContentSnippet.svelte";
</script>

{@render ContentCard(
    [   
        {
            href: "https://disneyplus.com",
            title: "Disney Plus Website",
            src: "https://cloud.swrigdon.com/s/a3NdcgoCa8o77Y5/preview",
            alt: "Disney Plus Logo"
        },
        {
            href: "https://espn.com",
            title: "ESPN Website",
            src: "https://cloud.swrigdon.com/s/a3NdcgoCa8o77Y5/preview",
            alt: "ESPN Logo"
        }
    ],
    {
        heading: "Software Engineer II - Disney Entertainment & ESPN Product & Technology (DEEPT) [Aug 2024 - Present]",
        body: `I currently work on the DMPJS (formerly HiVE) team for Disney Entertainment & ESPN Product & Technology (DEEPT), 
                working on the proprietary HTML5/HLS Video Player supporting billions of streams on web browsers, Chromecast devices, 
                and all browser-based living room devices such as numerous smart TV and set-top box brands across numerous 
                Disney-owned platforms such as Disney+, ESPN, and ABC.`,
        tags: ['TypeScript', 'JavaScript', 'HLS', 'MSE', 'EME', 'GitHub Actions', 'S3']
    }
)}
