import React from 'react';

const SkillsItem = ({skillsItem}) =>{
    return (
        <div className='mt-10'>
            { skillsItem.skillIcon === true
                ?   <img src={skillsItem.skillIconLink} alt={skillsItem.id} className="w-auto h-10"/>
                :   <></>
            }
        </div>


    )
}

export default SkillsItem;