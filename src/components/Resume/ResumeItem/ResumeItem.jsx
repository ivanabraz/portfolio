import React from 'react';

//IMAGES
import ArrowToggle from '../../../images/arrows/arrow-toggle.svg';

import './ResumeItem.css';

const ResumeItem = ({resumeItem}) =>{
    return (
        <div className='mt-10 grid grid-cols-12 gap-2'>
            <div className="col-span-2">
                { resumeItem.icon === true
                    ?   <img src={resumeItem.icons} alt={resumeItem.title} className="w-auto h-12"/>
                    :   <></>
                }
            </div>
            <div className="col-span-10">
                {resumeItem.title !== 'undefined'
                    ?   <p className='text-white text-xl'>{resumeItem.title}</p>
                    :   <></> 
                }
                {resumeItem.type !== 'undefined'
                    ? <p className='text-zinc-400 text-xl font-italic font-thin'>{resumeItem.type}</p>
                    : <></>
                } 
                {resumeItem.entity !== 'undefined'
                    ?   <p className='text-zinc-400 text-xl'>{resumeItem.entity}</p>
                    :   <></>
                }
                {resumeItem.years !== 'undefined'
                    ?   <p className='text-zinc-400 text-xl'>{resumeItem.years}</p>
                    :   <></>
                }
                {resumeItem.credentialTitle !== 'undefined'
                    ?   <p className='text-zinc-400 text-xl'>{resumeItem.credentialTitle}</p>
                    :   <></>
                }
                {resumeItem.credential === true
                    ?   <a className="text-sm flex border-b border-zinc-400 max-w-fit" href={resumeItem.credentialUrl} target="_blank" rel="noopener noreferrer">
                            <img src={ArrowToggle} alt={resumeItem.title} className="w-auto h-3 self-center"/><p>  Credential</p>
                        </a>
                    :   <></>
                }
                {resumeItem.description !== 'undefined'
                    ?   <p className='text-zinc-400 text-xl'>
                            {resumeItem.description}
                        </p>
                    :   <></>
                }
            </div>
        </div>
    )
}

export default ResumeItem;