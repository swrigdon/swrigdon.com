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
        heading: "Web Development Intern - Disney Experiences (DX) [May 2019 - Feb 2020]",
        body: `While an intern the second time at Disney, I worked for the Systems Integration team at
                the Disney Reservation Center. My primary focus was on shoring up my team's
                operation processes. This included incorporating legacy products into version control via
                GitLab, and creating templates and processes for full CI/CD for all new applications via
                GitLab Runners and Jenkins. During this internship I also wrote the Reservation Center's first
                React applications, and created robust custom application templates to give my team's developers a codebase
                to start upon.`,
        tags: null
    }
)}
