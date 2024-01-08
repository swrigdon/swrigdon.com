import { useState, useLayoutEffect } from "react"
import AboutMe from '../web/aboutme.jsx';
import MobileAboutMe from '../mobile/aboutme.jsx';
import Education from '../web/education.jsx';
import MobileEducation from '../mobile/education.jsx';
import Career from '../web/career.jsx';
import MobileCareer from '../mobile/career.jsx';
import Projects from '../web/projects.jsx';
import MobileProjects from '../mobile/projects.jsx';

export const useWindowSize = () => {
    const [windowSize, setwindowSize] = useState({width: 0, height: 0});
    const updatewindowSize = () => {
        setwindowSize({width: window.innerWidth, height: window.innerHeight});
    };
    useLayoutEffect(() => {
        window.addEventListener('resize', updatewindowSize);
        updatewindowSize();
        return () => window.removeEventListener('resize', updatewindowSize);
    },[])
    return {
        height: windowSize.height,
        width: windowSize.width,
        aboutMeComponent: windowSize.width > 810 ? <AboutMe/> : <MobileAboutMe/>,
        educationComponent: windowSize.width > 810 ? <Education/> : <MobileEducation/>,
        careerComponent: windowSize.width > 810 ? <Career/> : <MobileCareer/>,
        projectsComponent: windowSize.width > 810 ? <Projects/> : <MobileProjects/>
    };
};
