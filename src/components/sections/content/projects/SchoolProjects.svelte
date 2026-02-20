<script>
    import {ContentCard} from "../ContentSnippet.svelte";
</script>

{@render ContentCard(
    [{
        href: "https://github.com/lucidbard/realityflow_2",
        title: "RealityFlow GitHub Repo",
        src: "https://cloud.swrigdon.com/s/ecNmsMbAbZmBdEM/preview",
        alt: "RealityFlow Screenshot"
    }],
    {
        heading: "RealityFlow",
        body: `RealityFlow was a senior project in college that I developed under Dr. John Murray alongside a team of
                four other developers. The goal was to bring collaboration to the VR space. By the time the project
                was finished, we had successfully written a cloud server and database that could communicate between
                a web client, a Unity instance via a plugin, and a HoloLens headset client. This work was continued on by Dr. Murray.
                Unfortunately the GitHub repo is currently private.`,
        tags: null
    }
)}

{@render ContentCard(
    [{
        href: "https://github.com/swrigdon/Brawliseum",
        title: "Brawliseum GitHub Repo",
        src: "https://cloud.swrigdon.com/s/rmiLQYEnyYiTB4o/preview",
        alt: "Brawliseum Screenshot"
    }],
    {
        heading: "Brawliseum",
        body: `Brawliseum was a game I developed in college alongside four other students. It is a pseudo-random dungeon crawler
                written in Java with the libGDX library and uses the A* algorithm to carve out the maze paths for each level.`,
        tags: null
    }
)}
