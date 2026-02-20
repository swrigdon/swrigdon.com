<script>
    import {ContentCard} from "../../ContentSnippet.svelte";
</script>

{@render ContentCard(
    [{
        href: "https://www.nocapshows.com",
        title: "NoCap Shows Website",
        src: "https://cloud.swrigdon.com/s/fwDLbMDbWwfPtin/preview",
        alt: "NoCap Logo"
    }],
    {
        heading: "Software Engineer - NoCap, LLC [Aug 2021 - Sep 2022]",
        body: `NoCap was a Series A startup that focused on partnering with artists to livestream shows and create
                virtual concerts born out of the pandemic. As a software engineer there, I spent much of my time developing
                new APIs and refactoring and adding features to the main website.`,
        tags: ['JavaScript', 'TypeScript', 'Python', 'ExpressJS', 'Flask', 'MuxJS', 'BitMovin Player', 'React', 'GCP', 'Firestore']
    }
)}
