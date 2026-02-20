<script module>
    export {ContentCard};
</script>

{#snippet ContentCard(images, text)}
    <div class="mb-10">
        <div class="flex flex-row">
            <div class="flex flex-col items-center min-w-xs justify-center">
                {#each images as image}
                    <a target="_blank" href={image.href} title={image.title} class={images.length === 1 ? "max-w-1/3 min-w-1/3" : "max-w-1/4 min-w-1/4 pt-7"}>
                        <img src={image.src} alt={image.alt}/>
                    </a>
                {/each}
            </div>
            <div class="flex flex-col max-w-xl">
                <h3 class="text-md font-bold">
                    {text.heading}
                </h3>
                {#if text.body}
                    <p class="text-sm mt-3">
                        {text.body}
                    </p>
                {/if}
                {#if text.tags}
                    <p class="text-xs mt-3">
                        Tech & Tags: {text.tags.reduce((prev, curr)=>prev ? `${prev}, ${curr}` : curr, '')}
                    </p>
                {/if}
            </div>
        </div>
    </div>
{/snippet}
