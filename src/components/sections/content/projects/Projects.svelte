<script>
    import PersonalProjects from "./PersonalProjects.svelte";
    import SchoolProjects from "./SchoolProjects.svelte";
</script>

<div class="max-w-4xl mb-10" id="projects">
    <h2 class="text-3xl">My Projects</h2>
    <br/>
    <h3 class="text-xl mb-3 ml-15">Personal Projects</h3>
    <hr class="mb-10" />
    <PersonalProjects/>
    <h3 class="text-xl mt-10 mb-3 ml-15">School Projects</h3>
    <hr class="mb-10" />
    <SchoolProjects/>
</div>
