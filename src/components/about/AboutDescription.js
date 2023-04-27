import React, { useState } from 'react';
import DescriptionLine from './DescriptionLine';
import { FaReact, FaPython } from "react-icons/fa";
import DescriptionLanguageButton from './DescriptionLanguageButton';
import './about.css';

const AboutDescription = () => {

    const [hovering, setHovering] = useState(false);
  
    const descriptionTag = <>
        <span className={'descriptionPurple'}>{'const '}</span> 
        <span className={'descriptionBlue'}>{'me '}</span> 
        <span className={'descriptionRed'}>{'= '}</ span>
        <span className={'descriptionGrey'}>{'<'}</span> 
        <span className={'descriptionYellow'}>{'FullStackEngineer'}</span> 
    </>
  
    const descriptionSchool = <>
        <span className={'descriptionPurple'}>{'school'}</span>
        <span className={'descriptionGrey'}>{'='}</span>
        <span className={'descriptionGreen'}>{'\'University of Waterloo\''}</span> 
    </>

    const descriptionDegree = <>
        <span className={'descriptionPurple'}>{'degree'}</span>
        <span className={'descriptionGrey'}>{'='}</span>
        <span className={'descriptionGreen'}>{'\'Bachelor\''}</span> 
    </>
  
    const descriptionMajor = <>
        <span className={'descriptionPurple'}>{'major'}</span>
        <span className={'descriptionGrey'}>{'='}</span>
        <span className={'descriptionGreen'}>{'\'Computer Science\''}</span> 
    </>
  
    const descriptionPeriod = <>
        <span className={'descriptionPurple'}>{'period'}</span>
        <span className={'descriptionGrey'}>{'='}</span>
        <span className={'descriptionGreen'}>{'\'2018 Sept - 2023 Apr\''}</span>
    </>
  
    const descriptionSkillsCommon = <>
    <span className={'descriptionPurple'}>{'skills'}</span>
    <span className={'descriptionGrey'}>{'=['}</span>
    <span className={'descriptionGreen'}>{'\'ReactJS\''}</span>
    <span className={'descriptionGrey'}>{', '}</span>
    <span className={'descriptionGreen'}>{'\'CSS\''}</span>
    <span className={'descriptionGrey'}>{', '}</span>
    <span className={'descriptionGreen'}>{'\'Python\''}</span>
    <span className={'descriptionGrey'}>{', '}</span>
    <span className={'descriptionGreen'}>{'\'Git\''}</span>
    <span className={'descriptionGrey'}>{', '}</span>
    <span className={'descriptionGreen'}>{'\'PHP\''}</span>
    <span className={'descriptionGrey'}>{', '}</span>
    <span className={'descriptionGreen'}>{'\'Kotlin\''}</span>
    <span className={'descriptionGrey'}>{', '}</span>
    <span className={'descriptionGreen'}>{'\'Sql\''}</span>
    <span className={'descriptionGrey'}>{', '}</span>
    <span className={'descriptionGreen'}>{'\'Bash\''}</span>
    <span className={'descriptionGrey'}>{', '}</span>
    <span className={'descriptionGreen'}>{'\'JavaScript\''}</span>
    <span className={'descriptionGrey'}>{', '}</span>
    <span className={'descriptionGreen'}>{'\'C++\''}</span>
    <span className={'descriptionGrey'}>{', '}</span>
    <span className={'descriptionGreen'}>{'\'C#\''}</span>
    <span className={'descriptionGrey'}>{', '}</span>
    <span className={'descriptionGreen'}>{'\'C\''}</span>
    </>
    
    const descriptionSkills = <>
    {descriptionSkillsCommon}
    <span className={'descriptionGrey'}>{'] />;'}</span> 
    </>
    
    const ReactCode = <>
    <DescriptionLine hovering={hovering} lineNumber={'1'} content={descriptionTag} />
    <div className={'descriptionIndented'}>
        <DescriptionLine hovering={hovering} lineNumber={'2'} content={descriptionSchool} />
        <DescriptionLine hovering={hovering} lineNumber={'3'} content={descriptionDegree} />
        <DescriptionLine hovering={hovering} lineNumber={'4'} content={descriptionMajor} />
        <DescriptionLine hovering={hovering} lineNumber={'5'} content={descriptionPeriod}/>
        <DescriptionLine hovering={hovering} lineNumber={'6'} content={descriptionSkills}/>
    </div>
    </>;


    const pythonTag =  <>
        <span className={'descriptionBlue'}>{'me '}</span> 
        <span className={'descriptionRed'}>{'= '}</ span>
        <span className={'descriptionYellow'}>{'FullStackEngineer'}</span> 
        <span className={'descriptionGrey'}>{'('}</span>
    </>

    const pythonSchool = <>
        <span className={'descriptionPurple'}>{'school'}</span>
        <span className={'descriptionGrey'}>{'='}</span>
        <span className={'descriptionGreen'}>{'\'University of Waterloo\''}</span>
        <span className={'descriptionGrey'}>{','}</span>
    </>

    const pythonDegree = <>
        <span className={'descriptionPurple'}>{'degree'}</span>
        <span className={'descriptionGrey'}>{'='}</span>
        <span className={'descriptionGreen'}>{'\'Bachelor\''}</span>
        <span className={'descriptionGrey'}>{','}</span>
    </>

    const pythonMajor = <>
        <span className={'descriptionPurple'}>{'major'}</span>
        <span className={'descriptionGrey'}>{'='}</span>
        <span className={'descriptionGreen'}>{'\'Computer Science\''}</span>
        <span className={'descriptionGrey'}>{','}</span>
    </>

    const pythonPeriod = <>
        <span className={'descriptionPurple'}>{'period'}</span>
        <span className={'descriptionGrey'}>{'='}</span>
        <span className={'descriptionGreen'}>{'\'2018 Sept - 2023 Apr\''}</span>
        <span className={'descriptionGrey'}>{','}</span>
    </>
    
    const pythonDescriptionSkills = <>
    {descriptionSkillsCommon}
    <span className={'descriptionGrey'}>{']);'}</span> 
    </>

    const PythonCode = <>
    <DescriptionLine hovering={hovering} lineNumber={'1'} content={pythonTag} />
    <div className={'descriptionIndented'}>
        <DescriptionLine hovering={hovering} lineNumber={'2'} content={pythonSchool} />
        <DescriptionLine hovering={hovering} lineNumber={'3'} content={pythonDegree} />
        <DescriptionLine hovering={hovering} lineNumber={'4'} content={pythonMajor} />
        <DescriptionLine hovering={hovering} lineNumber={'5'} content={pythonPeriod}/>
        <DescriptionLine hovering={hovering} lineNumber={'6'} content={pythonDescriptionSkills}/>
    </div>
    </>;

    const [openCode, setOpenCode] = useState(0);

    const openReact = () => {
        setOpenCode(0);
    }

    const openPython = () => {
        setOpenCode(1);
    }


    return (
        <div className={'descriptionContainer'} onMouseEnter={() => {setHovering(true)}} onMouseLeave={() => {setHovering(false)}}>
            <span className={'descriptionScrollableContainer'}>
            <DescriptionLanguageButton selected={openCode === 0} onClick={openReact}><FaReact /></DescriptionLanguageButton>
            <DescriptionLanguageButton selected={openCode === 1} onClick={openPython}><FaPython /></DescriptionLanguageButton>
            <div className={'languageSeparator'} />
            <div className={'codeContainer'}>
                <div className={'description'}>
                    {openCode === 0 ? ReactCode : null}
                    {openCode === 1 ? PythonCode : null}
                </div>
            </div>
            </span>
        </div>
    )
}

export default AboutDescription