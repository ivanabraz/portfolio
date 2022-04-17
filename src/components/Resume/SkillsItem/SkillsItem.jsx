import React from 'react';

//IMAGES
import ArrowToggle from '../../../images/arrows/arrow-toggle.svg';

const ResumeItem = ({resumeItem}) =>{
    return (
        <div className='flex mt-5'>
            <div className="w-1/6">
                { resumeItem.icon === true
                    ?   <img src={resumeItem.icons} alt={resumeItem.title} className="w-auto h-10 object-cover"/>
                    :   <></>
                }
            </div>
            <div className="w-5/6">
                {resumeItem.title !== 'undefined'
                    ?   <p className='text-white leading-normal text-1xl'>{resumeItem.title} 
                            {resumeItem.type !== 'undefined'
                                ? <span className='text-zinc-400'>{resumeItem.type}</span>
                                : <></>
                            } 
                        </p>
                    :   <></> 
                }
                {resumeItem.entity !== 'undefined'
                    ?   <p className='text-zinc-400 leading-normal text-1xl'>{resumeItem.entity}</p>
                    :   <></>
                }
                {resumeItem.years !== 'undefined'
                    ?   <p className='text-zinc-400 leading-normal text-1xl'>{resumeItem.years}</p>
                    :   <></>
                }
                {resumeItem.credentialTitle !== 'undefined'
                    ?   <p className='text-zinc-400 leading-normal text-1xl'>{resumeItem.credentialTitle}</p>
                    :   <></>
                }
                {resumeItem.credential === true
                    ?   <a className="flex" href={resumeItem.credentialUrl} target="_blank" rel="noopener noreferrer">
                            <p>Credential  </p><img src={ArrowToggle} alt={resumeItem.title} className="w-auto h-3"/>
                        </a>
                    :   <></>
                }
            </div>
        </div>
    )
}

export default ResumeItem;