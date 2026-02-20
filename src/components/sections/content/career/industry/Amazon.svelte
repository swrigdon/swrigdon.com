<script>
    import {ContentCard} from "../../ContentSnippet.svelte";
</script>

{@render ContentCard(
    [{
        href: "https://flex.amazon.com/",
        title: "Amazon Flex Website",
        src: "https://cloud.swrigdon.com/s/YMKGT6eiG9A25c5/preview",
        alt: "Amazon Logo"
    }],
    {
        heading: "Software Development Engineer II - Amazon Flex [Sep 2022 - Apr 2024]",
        body: `At Amazon, I was an SDE II (L5) on the Flex Altitude Compliance team. The goal of the team was
                legal compliance regarding Amazon Flex gig-work drivers in whatever geographic areas they
                operated in. We achieved this with a number of proprietary solutions built on top of distributed, serverless
                systems hosted in AWS.`,
        tags: null
    }
)}
