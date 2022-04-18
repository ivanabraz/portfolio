import React, {Fragment} from 'react';
import ResumeItem from '../components/Resume/ResumeItem/ResumeItem';
import SkillsItem from '../components/Resume/SkillsItem/SkillsItem';

// CV data
import { workExperience, education, languages, skills, courses, upTo } from '../data/cv-data';

const CurriculumVitae = () => {
    return (
        <Fragment>
            <div className="p-8 sm:p-6 lg:p-10 mt-20 font-light text-zinc-400
            grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                <div className="">
                    <p className='leading-normal xs:leading-normal md:leading-normal lg:leading-normal 
                    text-3xl xs:text-2xl sm:text-2xl mad:text-3xl lg:text-3xl'>
                        I'm <span className='text-white'>Ivana Braz</span> a multidisciplinary designer with a passion for crafting experiences through a wide scope of disciplines. 
                        From <span className='font-italic text-white'>graphic design, motion graphics, 3D modeling</span> and <span className='font-italic text-white'>photo retouching</span> to <span className='font-italic text-white'>UX/UI</span> and <span className='font-italic text-white'>web development</span>. Aiming to add everlasting value and to challenge boundaries.
                    </p>
                    <p className='leading-normal xs:leading-normal md:leading-normal lg:leading-normal 
                    text-3xl xs:text-2xl sm:text-2xl mad:text-3xl lg:text-3xl'>
                        With special interest in culture, art and museology, design and programming.
                    </p>
                </div>
                <div className="">
                </div>
            </div>

            <div className="p-8 sm:p-6 lg:p-10 font-light text-zinc-400 
            grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-3 gap-4">
                <div className="">
                    {/* Work experience */}
                    <p className='text-zinc-400 leading-normal xs:leading-normal md:leading-normal lg:leading-normal 
                    text-3xl xs:text-2xl sm:text-2xl mad:text-3xl lg:text-3xl mt-20'>
                        Work experience
                    </p>
                    {workExperience.map((resumeItem) => (
                        <ResumeItem key={resumeItem.id} resumeItem={resumeItem}/>
                    ))}

                    {/* Education */}
                    <p className='text-zinc-400 leading-normal xs:leading-normal md:leading-normal lg:leading-normal 
                    text-3xl xs:text-2xl sm:text-2xl mad:text-3xl lg:text-3xl mt-20'>
                        Education
                    </p>
                    {education.map((resumeItem) => (
                        <ResumeItem key={resumeItem.id} resumeItem={resumeItem}/>
                    ))}

                    {/* Languages */}
                    <p className='text-zinc-400 leading-normal xs:leading-normal md:leading-normal lg:leading-normal 
                    text-3xl xs:text-2xl sm:text-2xl mad:text-3xl lg:text-3xl mt-20'>
                        Languages
                    </p>
                    {languages.map((resumeItem) => (
                        <ResumeItem key={resumeItem.id} resumeItem={resumeItem}/>
                    ))}

                    {/* Skills */}
                    <p className='text-zinc-400 leading-normal xs:leading-normal md:leading-normal lg:leading-normal 
                    text-3xl xs:text-2xl sm:text-2xl mad:text-3xl lg:text-3xl mt-20'>
                        Skills
                    </p>
                    <div className="grid grid-cols-5 gap-2">
                        {skills.map((skillsItem) => (
                            <SkillsItem key={skillsItem.id} skillsItem={skillsItem}/>
                        ))}
                    </div>
                </div>

                <div className="">
                    {/* Courses */}
                    <p className='text-zinc-400 leading-normal xs:leading-normal md:leading-normal lg:leading-normal 
                    text-3xl xs:text-2xl sm:text-2xl mad:text-3xl lg:text-3xl mt-20'>
                        Courses
                    </p>
                    {courses.map((resumeItem) => (
                        <ResumeItem key={resumeItem.id} resumeItem={resumeItem}/>
                    ))}
                </div>

                <div className="">
                    {/* What I'm up tp */}
                    <p className='text-zinc-400 leading-normal xs:leading-normal md:leading-normal lg:leading-normal 
                    text-3xl xs:text-2xl sm:text-2xl mad:text-3xl lg:text-3xl mt-20'>
                        What I'm up to
                    </p>
                    {upTo.map((resumeItem) => (
                            <ResumeItem key={resumeItem.id} resumeItem={resumeItem}/>
                        ))}
                </div>
            </div>
        </Fragment>
    );
}

export default CurriculumVitae;