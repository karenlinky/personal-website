import React, { useState } from 'react';
import DescriptionLine from './DescriptionLine';
import { FaReact, FaPython } from "react-icons/fa";
import DescriptionLanguageButton from './DescriptionLanguageButton';
import './about.css';

const AboutDescription = () => {
  
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
        <span className={'descriptionGrey'}>{' />;'}</span> 
    </>

    const ReactCode = <>
    <DescriptionLine lineNumber={'1'} content={descriptionTag} />
    <div className={'descriptionIndented'}>
        <DescriptionLine lineNumber={'2'} content={descriptionSchool} />
        <DescriptionLine lineNumber={'3'} content={descriptionDegree} />
        <DescriptionLine lineNumber={'4'} content={descriptionMajor} />
        <DescriptionLine lineNumber={'5'} content={descriptionPeriod}/>
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
        <span className={'descriptionGrey'}>{');'}</span>
    </>

    const PythonCode = <>
    <DescriptionLine lineNumber={'1'} content={pythonTag} />
    <div className={'descriptionIndented'}>
        <DescriptionLine lineNumber={'2'} content={pythonSchool} />
        <DescriptionLine lineNumber={'3'} content={pythonDegree} />
        <DescriptionLine lineNumber={'4'} content={pythonMajor} />
        <DescriptionLine lineNumber={'5'} content={pythonPeriod}/>
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
        <div className={'descriptionContainer'}>
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