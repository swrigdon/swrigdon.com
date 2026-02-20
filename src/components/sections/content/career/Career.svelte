<script>
    import DEEPT from "./industry/DEEPT.svelte";
    import Amazon from "./industry/Amazon.svelte";
    import Nocap from "./industry/Nocap.svelte";
    import DX from "./industry/DX.svelte";
    import DX2 from "./internship/DX2.svelte";
    import DX1 from "./internship/DX1.svelte";
    import OC from "./internship/OC.svelte";
</script>

<div class="max-w-4xl mb-10" id="career">
    <h2 class="text-3xl">My Career</h2>
    <br/>
    <h3 class="text-xl mb-3 ml-15">Industry</h3>
    <hr class="mb-10" />
    <DEEPT/>
    <Amazon/>
    <Nocap/>
    <DX/>
    <h3 class="text-xl mt-10 mb-3 ml-15">Internships</h3>
    <hr class="mb-10" />
    <DX2/>
    <DX1/>
    <OC/>
</div>
