<script>
    import {ContentCard} from "../ContentSnippet.svelte";
</script>

{@render ContentCard(
    [],
    {
        heading: "This Website",
        body: `This website (and it's predecessor at a no-longer used domain) has been live for over a decade,
                and has since gone through 5 major iterations up to this point.
                This latest iteration that you're currently viewing was first written in early 2026, and is written
                using a mix of Svelte and Tailwind for styling. Previous iterations were built upon either React, or
                just plain HTML with CSS.`,
        tags: null
    }
)}

{@render ContentCard(
    [{
        href: "https://github.com/swrigdon/Rendy",
        title: "Rendy GitHub Repo",
        src: "https://cloud.swrigdon.com/s/7m9FZoz4KZRyfHP/preview",
        alt: "Rendy Screenshot"
    }],
    {
        heading: "Rendy",
        body: `Rendy is a software ray tracer written entirely in C++ by myself as a learning exercise.
                Rendy is still in active development and its progress can be tracked over on GitHub.
                The intention is to develop it over time into a feature-complete ray tracer utilizing DirectX 12.`,
        tags: null
    }
)}
