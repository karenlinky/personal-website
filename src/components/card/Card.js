import React, {useCallback/*, useState*/} from 'react';
import CardContent from './CardContent';
import CardDivider from './CardDivider'
import { FaCaretLeft, FaCaretDown } from 'react-icons/fa';

import './card.css';

const Card = ({ children, className, expandableContent, cardContentClassName, openNum, experienceNum, onCardClick }) => {

  var additionalClassName = "";
  if (expandableContent !== null) {
    additionalClassName = " expandable"
  }

//   const [showExpandableContent, setShowExpandableContent] = useState(false);
  const onClick = useCallback(
    () => {
        if (expandableContent === null) {
            return;
        }

        onCardClick(experienceNum);
    }
    , [expandableContent, onCardClick, experienceNum])

  return (
    <div
    className={'card' + additionalClassName + (className ? ' ' + className : '')}
    onClick={onClick}>
      <CardContent className={cardContentClassName ? cardContentClassName : ''}>
        <div className={'baseContentContainer'}>
          <div className={'baseContent'}>
            {children}
          </div>
          {expandableContent !== null ?
          <div className={'expandableArrowContainer'}>
            <div className={'expandableArrow'}>
              {openNum === experienceNum ?
              <FaCaretDown className={"expandableArrowButton"}/> :
              <FaCaretLeft className={"expandableArrowButton"}/>}
            </div>
          </div>:
          null}
        </div>   
        {expandableContent !== null ?
          <div className={'expandableContent' + (openNum === experienceNum ? ' showExpandableContent' : '')}>
            <CardDivider />
            <div className={'scrollableExpandableContent'}>{expandableContent}</div>
          </div> :
          null
        }
      </CardContent>
    </div>
  )
}

export default Card