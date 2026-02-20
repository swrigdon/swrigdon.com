<script>
    const calulateAge = () =>{
        const now = new Date();
        const birthDate = new Date(1996, 7, 17);
        let age = new Date().getFullYear() - birthDate.getFullYear();

        if (now.getMonth() <= birthDate.getMonth() && now.getDay() < birthDate.getDay()) {
            age -= 1;
        }

        return age;
    };

    const calculateYOE = () => {
        const currentJobStartDate = new Date(2024, 7, 12);
        const now = new Date()
        // Convoluted calculation for current job tenure.
        // Start by calculating number of years, then remove months for starting year not in the job,
        // then remove months of current year that have not happened yet.
        let currentJobExperience = now.getFullYear() - currentJobStartDate.getFullYear() + 1;
        currentJobExperience *= 12;
        currentJobExperience -= (currentJobStartDate.getMonth() + 1);
        currentJobExperience -= (11 - now.getMonth());

        const experienceInMonths = {
            orangeCounty: 7,
            disney1: 12,
            disney2: 9,
            disney3: 18,
            nocap: 12,
            amazon: 19,
            disney4: currentJobExperience
        };

        return Math.floor(Object.values(experienceInMonths).reduce((prev, curr)=>prev+curr, 0) / 12);
    };
</script>


<div class="
    max-w-full
    flex 
    flex-col
    items-center 
    justify-center
    leading-1.1
    min-h-screen 
    text-center"
>
    <div class="max-w-xl">
        <h1 class="text-4xl font-mono font-light">Howdy! I'm Stephen.</h1>
        <br/>
        <p class="text-md font-light text-left font-mono">
            Welcome to my personal website! I am a {calulateAge()} year old software engineer with over {calculateYOE()} years of
            experience working for companies ranging from local governments and seed-round startups to Fortune 50 entertainment giants and FAANG companies. 
            Feel free to take a look around to learn more about me, or feel free to reach out to me via 
            <a href="https://linkedin.com/in/swrigdon" target="_blank" class="hover:underline">LinkedIn</a>, <a href="https://github.com/swrigdon" target="_blank" class="hover:underline">GitHub</a>, or <a href="mailto:me@swrigdon.com" target="_blank" class="hover:underline">Email</a>. 
        </p>
        <br/>
        <p class="text-md font-light text-left font-mono">Thanks for dropping by!</p>
    </div>
</div>
