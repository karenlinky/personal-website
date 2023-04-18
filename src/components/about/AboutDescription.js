import React from 'react';
import DescriptionLine from './DescriptionLine';
import './about.css';

const AboutDescription = () => {
    const descriptionStart = <>
        <span className={'descriptionPurple'}>{'const '}</span> 
        <span className={'descriptionBlue'}>{'me '}</span> 
        <span className={'descriptionRed'}>{'='}</ span>
    </>
  
    const descriptionTag = <>
        <span className={'descriptionGrey'}>{'<'}</span> 
        <span className={'descriptionYellow'}>{'FullStackEngineer'}</span> 
    </>
  
    const descriptionSchool = <>
        <span className={'descriptionPurple'}>{'school'}</span>
        <span className={'descriptionGrey'}>{'='}</span>
        <span className={'descriptionGreen'}>{'\'University of Waterloo\''}</span> 
    </>
  
    const descriptionMajor = <>
        <span className={'descriptionPurple'}>{'major'}</span>
        <span className={'descriptionGrey'}>{'='}</span>
        <span className={'descriptionGreen'}>{'\'Computer Science\''}</span> 
    </>
  
    const descriptionGradDate = <>
        <span className={'descriptionPurple'}>{'gradDate'}</span>
        <span className={'descriptionGrey'}>{'='}</span>
        <span className={'descriptionGreen'}>{'\'2023 Apr\''}</span>
        <span className={'descriptionGrey'}>{' />'}</span> 
    </>
  
    const descriptionClosingBracket = <>
        <span className={'descriptionGrey'}>{');'}</span> 
    </>

    return (
        <div className={'descriptionContainer'}>
            <span className={'descriptionScrollableContainer'}>
            <div className={'description'}>
                <DescriptionLine lineNumber={'1'} content={descriptionStart} />
                <div className={'descriptionIndented'}>
                <DescriptionLine lineNumber={'2'} content={descriptionTag} />
                <div className={'descriptionIndented'}>
                    <DescriptionLine lineNumber={'3'} content={descriptionSchool} />
                    <DescriptionLine lineNumber={'4'} content={descriptionMajor} />
                    <DescriptionLine lineNumber={'5'} content={descriptionGradDate}/>
                </div>
                </div>
                <DescriptionLine lineNumber={'6'} content={descriptionClosingBracket} />
            </div>
            </span>
        </div>
    )
}

export default AboutDescription