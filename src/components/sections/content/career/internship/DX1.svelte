<script>
    import {ContentCard} from "../../ContentSnippet.svelte";
</script>

{@render ContentCard(
    [{
        href: "https://www.waltdisneyworld.com",
        title: "Walt Disney World Website",
        src: "https://cloud.swrigdon.com/s/a3NdcgoCa8o77Y5/preview",
        alt: "Disney Logo"
    }],
    {
        heading: "System Integration Intern - Disney Experiences (DX) [Jun 2017 - Jun 2018]",
        body: `While an intern the first time at Disney, I worked for the Systems Integration team at the
                Disney Reservation Center. My task was to develop and application to automate and enhance
                the (very manual) process of onboarding and offboarding phone agents.`,
        tags: ['JavaScript', 'Nintex Workflows', 'SharePoint 2013']
    }
)}
