<script>
    import {ContentCard} from "../../ContentSnippet.svelte";
</script>

{@render ContentCard(
    [{
        href: "https://www.ocfl.net/",
        title: "Orange County Government Website",
        src: "https://cloud.swrigdon.com/s/ZBN9KAEsFaYa4tS/preview",
        alt: "Orange County Government Logo"
    }],
    {
        heading: "Student Intern - Orange County, FL Information Systems and Services (ISS) [Sep 2015 - Apr 2016]",
        body: `While an intern for Orange County, I was primarily responsible for maintaining the county's
                website and intranet portal. This was done primarily via HTML and CSS in the context of a
                DNN CMS. I also tested and contributed to the new replacement intranet portal, which was
                created in SharePoint 2013.`,
        tags: ['DotNetNuke', 'SharePoint 2013']
    }
)}
