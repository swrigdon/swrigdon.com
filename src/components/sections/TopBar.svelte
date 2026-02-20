<script>
    import Fa from 'svelte-fa';
    import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
    import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
</script>

<div class="
    w-full 
    bg-linear-to-r
    from-spurple-100
    to-spurple-500
    fixed 
    top-0 
    overflow-hidden 
    z-1000 
    min-h-1/20
    rounded-sm"
>
    <nav class="w-full flex">
        <div class="flex flex-row w-full text-center justify-start items-center">
            <a href="#top" class="max-w-1/25 min-w-1/25 ml-7">
                <img src='https://cloud.swrigdon.com/s/WBZKTByPtkj9wPG/preview' alt='Stephen Rigdon Logo'/>
            </a>
            <a href="#career" class="ml-7 hover:underline" >
                Career
            </a>
            <a href="#education" class="ml-5 hover:underline">
                Education
            </a>
            <a href="#projects" class="ml-5 hover:underline">
                Projects
            </a>
            <a href="https://dropbox.com/scl/fi/z6w6jc4uwgochcf2bvymn/Stephen_Rigdon_Resume.pdf?rlkey=9u6h5r1efybntoz2qvr4039m4&st=os3wk9p0&dl=0" target="_blank" class="ml-5 hover:underline">
                My Resume
            </a>
        </div>
        <div class="flex flex-row-reverse w-fit justify-end items-center position-relative right-0">
            <a href="https://github.com/swrigdon" target="_blank" aria-label="Find me on GitHub!" class="mr-7 hover:text-spurple-100">
                <Fa icon={faGithubSquare} size="lg"/>
            </a>
            <a href="https://linkedin.com/in/swrigdon" target="_blank" aria-label="Find me on LinkedIn!" class="mr-5 hover:text-spurple-100">
                <Fa icon={faLinkedin} size="lg"/>
            </a>
            <a href="mailto:me@swrigdon.com" target="_blank" aria-label="Email Me!" class="mr-5 hover:text-spurple-100">
                <Fa icon={faEnvelope} size="lg"/>
            </a>
        </div>
    </nav>
</div>
